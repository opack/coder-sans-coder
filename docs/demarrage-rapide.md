# Démarrage rapide

Cette page tient en dix minutes de lecture. Elle donne l'essentiel. Chaque point renvoie vers le chapitre qui le détaille, à lire quand tu en as besoin.

## L'idée à retenir

**Claude est un excellent artisan, mais ce n'est pas lui le patron du chantier. C'est toi.**

Claude écrit le code bien plus vite que n'importe qui. Mais il ne connaît pas ton métier, il ne sait pas ce que tu veux vraiment, et il a tendance à dire « c'est fait » même quand ce n'est pas tout à fait vrai. Ton travail, c'est de lui donner un cap clair, de découper le travail et de vérifier le résultat. C'est le rôle du **maître d'ouvrage** dans le bâtiment : celui qui commande et réceptionne les travaux, sans poser lui-même les briques.

→ [Chapitre 1 : Ton rôle](/guide/01-ton-role)

## Les 10 règles d'or

1. **Décris le résultat, pas la technique.** Explique ce que l'utilisateur doit pouvoir faire et pourquoi. Laisse Claude proposer le « comment ». → [Chapitre 10](/guide/10-formuler)

2. **Écris le cahier des charges avant de coder.** Un document qui décrit ton application en français : les écrans, les règles de ton métier, les cas particuliers. Claude peut t'aider à l'écrire en t'interviewant. → [Chapitre 4](/guide/04-cahier-des-charges)

3. **Une conversation = un sujet.** Quand tu passes à autre chose, tu repars d'une conversation vierge (`/clear`). Une conversation qui s'éternise rend Claude confus et oublieux. → [Chapitre 9](/guide/09-conversations)

4. **Fais planifier avant de faire construire.** Pour toute demande un peu grosse, passe en *mode plan* (`Shift+Tab`) : Claude réfléchit et te propose un plan sans rien toucher. Tu valides, puis il construit. → [Chapitre 8](/guide/08-boucle-de-travail)

5. **Avance par petites étapes.** Une fonctionnalité à la fois. Jamais « fais-moi tout le module facturation » d'un coup. → [Chapitre 8](/guide/08-boucle-de-travail)

6. **Sauvegarde chaque étape qui fonctionne avec Git.** C'est ton bouton « annuler » géant. Si Claude casse tout, tu reviens à la dernière version qui marchait. → [Chapitre 3](/guide/03-git)

7. **Exige des preuves, pas des promesses.** Chaque fonctionnalité doit être couverte par des tests que tu as décrits en langage métier. « C'est fait » ne compte pas. « Les 12 tests passent » compte. → [Chapitre 11](/guide/11-tests)

8. **Tiens à jour le CLAUDE.md.** C'est le règlement du chantier, que Claude relit au début de chaque conversation. Court, précis, corrigé à chaque fois que Claude refait la même erreur. → [Chapitre 6](/guide/06-claude-md)

9. **Fais relire par un second Claude.** Celui qui a écrit le code n'est pas le mieux placé pour le juger. Un Claude « neuf » qui relit trouve ce que le premier n'a pas vu. → [Chapitre 12](/guide/12-relecture)

10. **Après deux corrections ratées, repars à zéro.** Si Claude n'y arrive pas après deux tentatives, n'insiste pas : efface la conversation, reformule mieux, recommence. → [Chapitre 16](/guide/16-quand-ca-coince)

## Le cycle de travail, en une image

Chaque fonctionnalité suit le même cycle :

```text
① Décrire      ce que je veux, en langage métier
② Planifier    mode plan : Claude propose, je valide
③ Construire   Claude code et écrit les tests
④ Vérifier     tests, essai moi-même, relecture
⑤ Sauvegarder  commit Git : « cette version marche »
⑥ Repartir     /clear, et étape suivante
```

Si une étape échoue, on ne force pas : on revient en arrière.

## Les réglages de base

| Quoi | Réglage conseillé | Où en savoir plus |
| --- | --- | --- |
| Modèle | Opus pour réfléchir (spec, architecture, bugs difficiles), Sonnet pour le travail courant | [Chapitre 2](/guide/02-installer-et-regler) |
| Effort | `medium` par défaut, `high` pour les sujets délicats | [Chapitre 2](/guide/02-installer-et-regler) |
| Permissions | Laisse Claude travailler, mais pas en roue libre sur ta production | [Chapitre 2](/guide/02-installer-et-regler) |
| CLAUDE.md | Créé dès le premier jour avec `/init`, puis enrichi | [Chapitre 6](/guide/06-claude-md) |

## Les cinq commandes à connaître

| Commande | Ce qu'elle fait |
| --- | --- |
| `Shift+Tab` | Passe en mode plan (Claude réfléchit sans rien modifier) |
| `/clear` | Vide la conversation pour repartir sur un nouveau sujet |
| `Échap` | Arrête Claude immédiatement, s'il part dans la mauvaise direction |
| `Échap Échap` ou `/rewind` | Revient en arrière dans la conversation et/ou dans le code |
| `/model` et `/effort` | Change de modèle et de niveau de réflexion |

→ La liste complète est dans l'[aide-mémoire](/annexes/aide-memoire).

## Si tu refais une application à partir d'un prototype

C'est un excellent point de départ, à condition de procéder dans le bon ordre :

1. Fais **décrire le prototype** par Claude dans un cahier des charges : écrans, règles, cas particuliers. Relis et corrige. → [Chapitre 4](/guide/04-cahier-des-charges)
2. Transforme ces règles en **scénarios de test** en langage métier. Ce sont eux qui garantiront que la nouvelle version fait au moins aussi bien que l'ancienne. → [Chapitre 11](/guide/11-tests)
3. Choisis les **fondations techniques** en connaissance de cause, avec un avis extérieur. → [Chapitre 5](/guide/05-stack-et-architecture)
4. Reconstruis **fonctionnalité par fonctionnalité**, avec la boucle ci-dessus.

::: warning Le piège classique
Refaire l'application avec la même méthode que la première fois. Tu retomberas sur le même mur, juste un peu plus loin. Ce qui change vraiment le résultat, c'est la méthode, plus que le fait de repartir de zéro.
:::
