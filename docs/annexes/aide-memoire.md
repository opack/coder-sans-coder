# Aide-mémoire

## Commandes et raccourcis

| Commande | Ce qu'elle fait | Quand l'utiliser |
| --- | --- | --- |
| `Shift+Tab` | Change de mode (manuel, auto, **plan**) | Passer en mode plan avant une tâche importante |
| `Échap` | Arrête Claude | Il part dans la mauvaise direction |
| `Échap Échap` ou `/rewind` | Revient à un moment précédent (conversation et/ou fichiers) | Annuler ce qu'il vient de faire |
| `/clear` | Vide la conversation | Changement de sujet, ou après deux échecs |
| `/compact` | Résume la conversation pour libérer de la place | Conversation longue qu'on veut poursuivre |
| `/btw` | Pose une question à part, sans polluer la conversation | Petite question sans rapport |
| `/model` | Change de modèle (Opus, Sonnet, Haiku…) | Selon la difficulté de la tâche |
| `/effort` | Change le niveau de réflexion (`low` → `max`) | Monter pour les sujets délicats |
| `/init` | Crée un premier CLAUDE.md | Au démarrage du projet |
| `/permissions` | Règle ce que Claude peut faire sans demander | Pour réduire les validations répétitives |
| `/hooks` | Montre les automatismes installés | Vérifier ce qui tourne |
| `/code-review` | Fait relire les changements par un Claude séparé | Après une fonctionnalité importante |
| `/rename` | Nomme la conversation | Pour la retrouver plus tard |
| `@fichier` | Fait lire un fichier à Claude | `@docs/SPEC.md` |
| `claude --continue` | Reprend la dernière conversation | Au retour d'une pause |
| `claude --resume` | Choisit une conversation à reprendre | Retrouver une ancienne conversation |

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
- [ ] Commit fait
- [ ] `/clear` avant la suite

## Les signaux d'alerte

- Claude dit « c'est fait » sans montrer de tests → exige les preuves.
- Tu corriges la même chose pour la troisième fois → `/clear` et reformule.
- Claude modifie des choses sans rapport avec ta demande → arrête-le, recadre.
- Claude modifie ou supprime un test pour qu'il passe → refuse, demande pourquoi.
- La conversation dure depuis des heures → termine l'étape, `/clear`.
