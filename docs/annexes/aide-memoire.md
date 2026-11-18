# Aide-mémoire {#aide-memoire}

## Les gestes essentiels

| Ce que tu veux faire | Dans l'application | Au clavier / en commande | Quand |
| --- | --- | --- | --- |
| Passer en mode plan | Sélecteur de mode, à côté du bouton d'envoi : **Plan** | `Shift+Tab` | Avant une tâche importante |
| Changer de modèle | Sélecteur de modèle, au bout de la zone de saisie | `/model` | Selon la difficulté de la tâche |
| Changer le niveau de réflexion | Dans le sélecteur de modèle | `/effort` | Monter pour les sujets délicats |
| Arrêter Claude | Bouton d'arrêt | `Échap` | Il part dans la mauvaise direction |
| Revenir en arrière | — | `Échap` deux fois, ou `/rewind` | Annuler ce qu'il vient de faire |
| Repartir à zéro | Nouvelle session | `/clear` | Changement de sujet, ou après deux échecs |
| Reprendre une conversation | Liste des sessions | `claude --continue` / `--resume` | Au retour d'une pause |
| Nommer une conversation | Renommer dans la liste des sessions | `/rename` | Pour la retrouver plus tard |
| Faire lire un fichier | Joindre le fichier | `@` suivi du nom, ex. `@docs/spec/devis.md` | Donner le contexte |
| Montrer une image | Coller ou glisser la capture | — | Bug visuel, maquette |

## Commandes utiles en plus

| Commande | Ce qu'elle fait |
| --- | --- |
| `/compact` | Résume la conversation pour libérer de la place |
| `/btw` | Pose une question à part, sans polluer la conversation |
| `/init` | Crée un premier CLAUDE.md (tu peux aussi le demander en français) |
| `/permissions` | Règle ce que Claude peut faire sans demander |
| `/hooks` | Montre les automatismes installés |
| `/code-review` | Fait relire les changements par un Claude séparé |
| `/commit` | Sauvegarde le travail en cours, message en français (skill à installer, [chapitre 14](/guide/14-skills-et-hooks#skill-commit)) |

::: tip Les commandes marchent aussi dans l'application
Toutes les commandes qui commencent par `/` peuvent être tapées directement dans la zone de saisie de l'application.
:::

## Quel modèle, quel effort ?

| Tâche | Modèle | Effort |
| --- | --- | --- |
| Question simple, petite retouche | Sonnet ou Haiku | `low` |
| Fonctionnalité bien décrite | Sonnet (ou `opusplan`) | `medium` |
| Bug tenace, règle métier délicate | Opus | `high` |
| Cahier des charges, architecture, revue de sécurité | Opus | `high` ou `xhigh` |

## La checklist de fin d'étape

- [ ] Les tests passent (et j'ai vu le résultat)
- [ ] J'ai essayé moi-même, y compris les cas bizarres
- [ ] Un second Claude a relu (si l'étape est importante)
- [ ] `docs/AVANCEMENT.md` est à jour
- [ ] `/commit` fait
- [ ] Nouvelle session avant la suite

## Les signaux d'alerte

- Claude dit « c'est fait » sans montrer de tests → exige les preuves.
- Tu corriges la même chose pour la troisième fois → nouvelle session et reformule.
- Claude modifie des choses sans rapport avec ta demande → arrête-le, recadre.
- Claude modifie ou supprime un test pour qu'il passe → refuse, demande pourquoi.
- La conversation dure depuis des heures → termine l'étape, nouvelle session.
