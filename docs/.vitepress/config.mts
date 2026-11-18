import { defineConfig } from 'vitepress'
import llmstxt from 'vitepress-plugin-llms'

// Sur GitHub Pages, le site est servi sous /<nom-du-depot>/.
// Le workflow de déploiement fournit BASE ; en local on garde la valeur par défaut.
const base = process.env.BASE || '/maitre-ouvrage/'

export const SITE_TITLE = "Maître d'ouvrage"
export const PDF_NAME = 'guide-maitre-ouvrage.pdf'

export default defineConfig({
  lang: 'fr-FR',
  title: SITE_TITLE,
  description:
    "Construire son application avec Claude quand on n'est pas développeur : la méthode, pas à pas.",
  base,
  cleanUrls: true,
  lastUpdated: true,
  srcExclude: ['README.md'],

  head: [['link', { rel: 'icon', href: `${base}favicon.svg` }]],

  vite: {
    plugins: [
      llmstxt({
        // URL absolue du site (fournie par le workflow) pour des liens complets dans llms.txt
        domain: process.env.SITE_URL,
        ignoreFiles: ['guide-complet.md', 'index.md'],
        description:
          "Guide pour une personne non développeuse qui construit une application avec Claude Code.",
      }),
    ],
  },

  themeConfig: {
    logo: '/favicon.svg',
    siteTitle: SITE_TITLE,

    nav: [
      { text: 'Démarrage rapide', link: '/demarrage-rapide' },
      { text: 'Le guide', link: '/guide/01-ton-role' },
      { text: 'Modèles à copier', link: '/annexes/modeles' },
      { text: 'Télécharger', link: '/telecharger' },
    ],

    sidebar: [
      {
        text: 'Commencer',
        items: [
          { text: 'Démarrage rapide', link: '/demarrage-rapide' },
        ],
      },
      {
        text: 'Les fondations',
        items: [
          { text: "1. Ton rôle : maître d'ouvrage", link: '/guide/01-ton-role' },
          { text: '2. Installer et régler Claude', link: '/guide/02-installer-et-regler' },
          { text: '3. Git, ton bouton « annuler »', link: '/guide/03-git' },
        ],
      },
      {
        text: 'Préparer le chantier',
        items: [
          { text: '4. Le cahier des charges', link: '/guide/04-cahier-des-charges' },
          { text: '5. Choisir les fondations techniques', link: '/guide/05-stack-et-architecture' },
          { text: '6. Le CLAUDE.md, règlement du chantier', link: '/guide/06-claude-md' },
          { text: "7. Le design de l'interface", link: '/guide/07-design' },
        ],
      },
      {
        text: 'Construire',
        items: [
          { text: '8. La boucle de travail', link: '/guide/08-boucle-de-travail' },
          { text: '9. Une conversation, un sujet', link: '/guide/09-conversations' },
          { text: '10. Bien formuler ses demandes', link: '/guide/10-formuler' },
        ],
      },
      {
        text: 'Contrôler la qualité',
        items: [
          { text: '11. Les tests en langage métier', link: '/guide/11-tests' },
          { text: '12. Faire relire par un second Claude', link: '/guide/12-relecture' },
          { text: '13. Sécurité et données', link: '/guide/13-securite' },
        ],
      },
      {
        text: 'Aller plus loin',
        items: [
          { text: '14. Automatiser : skills et hooks', link: '/guide/14-skills-et-hooks' },
          { text: '15. Mettre en ligne', link: '/guide/15-mise-en-ligne' },
          { text: '16. Quand ça coince', link: '/guide/16-quand-ca-coince' },
        ],
      },
      {
        text: 'Annexes',
        items: [
          { text: 'Modèles à copier', link: '/annexes/modeles' },
          { text: 'Aide-mémoire', link: '/annexes/aide-memoire' },
          { text: 'Glossaire', link: '/annexes/glossaire' },
          { text: 'Donner ce guide à Claude', link: '/annexes/pour-claude' },
        ],
      },
    ],

    outline: { level: [2, 3], label: 'Sur cette page' },

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: { buttonText: 'Rechercher', buttonAriaLabel: 'Rechercher' },
              modal: {
                noResultsText: 'Aucun résultat pour',
                resetButtonTitle: 'Effacer la recherche',
                displayDetails: 'Afficher les détails',
                footer: {
                  selectText: 'choisir',
                  navigateText: 'naviguer',
                  closeText: 'fermer',
                },
              },
            },
          },
        },
      },
    },

    docFooter: { prev: 'Chapitre précédent', next: 'Chapitre suivant' },
    lastUpdated: { text: 'Mis à jour le' },
    darkModeSwitchLabel: 'Thème',
    sidebarMenuLabel: 'Menu',
    returnToTopLabel: 'Retour en haut',
    langMenuLabel: 'Langue',

    footer: {
      message: 'Un guide pour construire son application avec Claude, sans être développeur.',
    },
  },
})
