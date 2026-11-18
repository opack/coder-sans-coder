# Maître d'ouvrage

Guide pour construire son application avec Claude quand on n'est pas développeur.
Site statique [VitePress](https://vitepress.dev), déployé sur GitHub Pages, avec export PDF et version texte pour les IA (`llms.txt`, `llms-full.txt`).

## Développer

```bash
npm install
npm run dev        # site en local avec rechargement
npm run build:all  # build + PDF (nécessite Google Chrome, ou CHROME_PATH)
npm run preview    # prévisualiser le build
```

## Structure

- `docs/demarrage-rapide.md` : le guide de démarrage rapide
- `docs/guide/` : les chapitres, numérotés dans l'ordre de lecture
- `docs/annexes/` : modèles, aide-mémoire, glossaire, usage par Claude
- `docs/guide-complet.md` : toutes les pages réunies (sert au PDF). À mettre à jour si on ajoute un chapitre.
- `docs/.vitepress/config.mts` : menu, barre latérale, recherche
- `scripts/pdf.mjs` : génération du PDF

## Déployer

1. Dans GitHub : **Settings → Pages → Source : GitHub Actions**.
2. Pousser sur `main`. Le workflow `.github/workflows/deploy.yml` construit le site, génère le PDF et publie.

Le chemin de base du site est déduit du nom du dépôt (variable `BASE`). En local, il vaut `/maitre-ouvrage/`.
