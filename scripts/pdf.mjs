// Génère le PDF du guide à partir de la page « guide complet » du site construit.
// Prérequis : `npm run build` déjà lancé. Utilise Google Chrome installé sur la machine
// (présent par défaut sur les runners GitHub Actions).
import { spawn } from 'node:child_process'
import { setTimeout as wait } from 'node:timers/promises'
import { chromium } from 'playwright-core'

const base = process.env.BASE || '/coder-sans-coder/'
const port = 4173
const out = 'docs/.vitepress/dist/coder-sans-coder.pdf'
const url = `http://localhost:${port}${base}guide-complet`

// Un ancien serveur encore actif servirait des fichiers périmés : on refuse de continuer.
const alreadyUp = await fetch(url).then(() => true, () => false)
if (alreadyUp) {
  console.error(`Le port ${port} est déjà utilisé : arrête l'ancien serveur de prévisualisation.`)
  process.exit(1)
}

const server = spawn('npx', ['vitepress', 'preview', 'docs', '--port', String(port)], {
  stdio: 'ignore',
  env: process.env,
  detached: true, // groupe de processus à part, pour pouvoir tout arrêter à la fin
})

try {
  for (let i = 0; i < 60; i++) {
    try { if ((await fetch(url)).ok) break } catch {}
    await wait(500)
  }

  const browser = await chromium.launch({
    channel: process.env.CHROME_PATH ? undefined : 'chrome',
    executablePath: process.env.CHROME_PATH,
  })
  const page = await browser.newPage()
  await page.goto(url, { waitUntil: 'networkidle' })
  await page.emulateMedia({ media: 'print', colorScheme: 'light' })
  await page.pdf({
    path: out,
    format: 'A4',
    printBackground: true,
    margin: { top: '18mm', bottom: '18mm', left: '16mm', right: '16mm' },
    displayHeaderFooter: true,
    headerTemplate: '<span></span>',
    footerTemplate:
      '<div style="font-size:8px;width:100%;text-align:center;color:#888">' +
      "Coder sans coder — <span class=\"pageNumber\"></span> / <span class=\"totalPages\"></span></div>",
  })
  await browser.close()
  console.log(`PDF généré : ${out}`)
} finally {
  try { process.kill(-server.pid) } catch {}
}
