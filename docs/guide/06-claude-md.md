# 6. Le CLAUDE.md, règlement du chantier {#chapitre-06}

::: info En une phrase
Le CLAUDE.md est un fichier que Claude relit au début de chaque conversation. C'est là que tu écris les règles qu'il doit toujours respecter sur ton projet.
:::

## Pourquoi c'est important

Claude ne se souvient de rien d'une conversation à l'autre. Sans CLAUDE.md, tu dois lui réexpliquer à chaque fois comment fonctionne le projet, comment lancer les tests, ce que tu attends de lui. Avec un CLAUDE.md, il démarre chaque conversation en connaissant les règles.

C'est un fichier texte nommé `CLAUDE.md`, placé à la racine de ton projet.

## Le créer

Demande simplement à Claude : « Crée le fichier CLAUDE.md de ce projet. » (ou utilise la commande `/init`). Claude analyse ton projet et écrit une première version. Ensuite, tu l'enrichis.

## Ce qu'on y met

- **Le contexte** : ce qu'est l'application, en deux lignes, et un lien vers le cahier des charges.
- **Les commandes** : comment lancer l'application, comment lancer les tests.
- **Les règles du projet** : l'architecture à respecter, la façon de travailler.
- **Les pièges connus** : les erreurs que Claude a déjà faites et qu'il ne doit pas refaire.

Un modèle complet est disponible dans les [modèles à copier](/annexes/modeles#claude-md).

::: tip Et la posture ?
La façon dont Claude doit se comporter avec toi (franchise, questions, preuves) vaut pour tous tes projets : elle se règle plutôt dans les paramètres de l'application ([chapitre 2](/guide/02-installer-et-regler#regler-la-posture-de-claude)). Le CLAUDE.md, lui, contient ce qui est propre à **ce** projet.
:::

## Ce qu'on n'y met pas

- Ce que Claude peut deviner tout seul en lisant le code.
- Les généralités du genre « écris du code propre » : elles ne changent rien.
- Les longues explications. Mets-les dans d'autres documents et fais un lien.
- Les informations qui changent tout le temps.

::: warning Court, sinon inutile
Plus le fichier est long, plus Claude risque d'ignorer une partie des règles. Pour chaque ligne, pose-toi la question : **« Si j'enlève cette ligne, est-ce que Claude fera une erreur ? »** Si la réponse est non, enlève-la.
:::

## Le faire vivre

Le CLAUDE.md s'améliore avec le temps. La règle est simple :

> **Chaque fois que Claude refait la même erreur, ajoute une ligne au CLAUDE.md pour l'éviter.**

Tu peux demander à Claude de le faire : « Tu as encore oublié de lancer les tests. Ajoute une règle dans CLAUDE.md pour que ça n'arrive plus. »

Et de temps en temps, fais le ménage : « Relis CLAUDE.md. Y a-t-il des règles inutiles, redondantes ou contradictoires ? Propose une version plus courte. »

::: tip Si une règle est ignorée malgré tout
Si Claude ignore une règle importante, tu peux l'écrire en majuscules avec « IMPORTANT : ». Mais sur une ou deux règles seulement : si tout est important, plus rien ne l'est. Et si c'est une règle qui doit s'appliquer **à chaque fois sans exception**, un *hook* est plus fiable ([chapitre 14](/guide/14-skills-et-hooks)).
:::

## Les autres documents de référence

Le CLAUDE.md doit rester court, donc il **renvoie** vers d'autres documents que Claude lit quand il en a besoin :

| Fichier | Contenu | Chapitre |
| --- | --- | --- |
| `docs/spec/` | Le cahier des charges : `index.md` + un fichier par domaine | [4](/guide/04-cahier-des-charges) |
| `docs/ARCHITECTURE.md` | Les choix techniques et l'organisation du code | [5](/guide/05-stack-et-architecture) |
| `docs/AVANCEMENT.md` | Ce qui est fait, ce qui reste à faire | [9](/guide/09-conversations) |
| `docs/DECISIONS.md` | Les décisions importantes et leurs raisons | [9](/guide/09-conversations) |

Ensemble, ces fichiers forment la **mémoire durable** du projet. Ce qui n'est écrit nulle part sera oublié à la prochaine conversation.
