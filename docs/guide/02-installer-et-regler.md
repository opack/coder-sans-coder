# 2. Installer et régler Claude {#chapitre-02}

::: info En une phrase
Le bon modèle, le bon niveau de réflexion et des permissions raisonnables : trois réglages qui changent beaucoup la qualité du résultat.
:::

## Où utiliser Claude Code

Claude Code est l'outil de Claude spécialisé dans la construction de logiciels. Il peut lire et modifier les fichiers de ton projet, lancer des commandes, faire tourner les tests.

Le plus simple est de l'utiliser dans l'**application de bureau Claude**, onglet **Code** : tu choisis le dossier de ton projet, et tu écris ta demande comme dans une conversation normale. Il existe aussi dans un **terminal** (la fenêtre texte noire) et dans l'éditeur **VS Code**, mais tu n'en as pas besoin.

Le fonctionnement est le même partout. Ce guide indique à chaque fois le geste dans l'application, et la commande équivalente entre parenthèses : la plupart des commandes qui commencent par `/` se tapent aussi dans la zone de saisie de l'application. Exception : le modèle et l'effort se changent uniquement avec le sélecteur.

::: tip Ouvre toujours Claude dans le dossier de ton projet
Claude travaille sur le dossier que tu as choisi au démarrage de la session. Si tu le lances au mauvais endroit, il ne trouvera pas ton application, ou pire, il ira modifier autre chose.
:::

## Choisir le modèle

Claude existe en plusieurs « tailles ». Les plus gros réfléchissent mieux mais coûtent plus cher et sont plus lents.

| Modèle | Pour quoi faire | Image |
| --- | --- | --- |
| **Opus** | Réfléchir : cahier des charges, architecture, bug difficile, relecture | L'architecte |
| **Sonnet** | Construire au quotidien une fonctionnalité bien décrite | Le chef d'équipe |
| **Haiku** | Petites tâches simples et rapides | L'apprenti |

Pour changer de modèle : utilise le sélecteur de modèle, au bout de la zone de saisie.

::: tip Tu ne veux pas jongler entre les modèles ?
Reste sur **Opus** avec un effort `medium` pour tout : c'est un peu plus cher que Sonnet pour le travail courant, mais c'est le réglage le plus simple et le plus sûr. Tu ne changes de réglage que pour monter l'effort sur les sujets délicats.
:::


## Choisir le niveau d'effort

En plus du modèle, tu choisis **combien Claude réfléchit** avant d'agir. C'est le niveau d'effort : `low`, `medium`, `high`, `xhigh`, `max`.

- `medium` : le réglage par défaut, très bien pour le travail courant.
- `high` : pour un bug tenace, une fonctionnalité délicate, une décision importante.
- `xhigh` ou `max` : pour les problèmes vraiment difficiles. Plus lent, plus cher, et parfois Claude réfléchit trop.
- `low` : pour les questions simples et les petites retouches.

Pour changer : le niveau d'effort se règle dans le même sélecteur que le modèle.

::: warning Plus n'est pas toujours mieux
Mettre `max` partout ne rend pas Claude meilleur : il devient lent, coûteux, et il complique parfois des choses simples. Monte le niveau quand la tâche le mérite, pas par défaut.
:::

## Régler les permissions

Claude te demande l'autorisation avant certaines actions : modifier un fichier, lancer une commande. Tu as plusieurs modes, que tu choisis avec le sélecteur de mode à côté du bouton d'envoi (ou en les faisant défiler avec `Shift+Tab`) :

- **Mode manuel** : Claude demande avant presque tout. Sûr, mais fatigant. Au bout de la dixième validation, on clique sans lire, ce qui revient à ne rien contrôler.
- **Mode auto** : un second modèle surveille les actions de Claude et ne bloque que celles qui semblent risquées. C'est un bon réglage par défaut pour travailler.
- **Mode plan** : Claude lit et réfléchit, mais ne modifie rien. Idéal pour préparer ([chapitre 8](/guide/08-boucle-de-travail)).

La commande `/permissions` te permet d'autoriser une fois pour toutes les actions sans danger (lancer les tests, par exemple) et d'interdire les actions dangereuses.

::: danger Ce qu'on n'autorise jamais en roue libre
Toucher à la **base de données de production** (celle où sont tes vraies données clients), **supprimer** des fichiers en masse, **publier** l'application en ligne. Pour ça, Claude doit te demander, et tu dois lire avant de valider.
:::

## Régler la posture de Claude

Par défaut, Claude est conciliant : il fait ce qu'on lui demande, même quand la demande est discutable. Pour un non-développeur, c'est un piège, parce que tu ne sauras pas qu'il y avait une meilleure option.

Tu peux lui demander une autre attitude, une fois pour toutes. Dans les **paramètres de l'application Claude**, la zone où tu décris tes préférences personnelles (comment Claude doit te répondre) est faite pour ça. Ce que tu y écris s'applique à toutes tes conversations, sans avoir à le répéter.

Copie ce texte, adapte-le, et colle-le dans tes préférences :

```text
Je ne suis pas développeur : explique tes choix simplement, sans jargon.
Si ma demande est floue, pose-moi des questions avant d'agir.
Si ma demande est une mauvaise idée, dis-le franchement et propose mieux.
Ne te contente pas d'obéir.
Ne dis jamais « c'est fait » sans le prouver : montre le résultat des tests.
Quand il y a plusieurs options, présente-les avec leurs avantages et
inconvénients, et dis laquelle tu recommandes.
Si tu n'es pas sûr de quelque chose, dis-le plutôt que d'inventer.
```

C'est probablement le réglage qui a le plus d'impact pour quelqu'un qui ne lit pas le code.

::: tip Vérifie qu'il est pris en compte
Après l'avoir réglé, ouvre une nouvelle conversation dans ton projet et demande : « Quelles consignes as-tu sur la façon de me répondre ? » S'il ne les mentionne pas, ajoute-les dans le CLAUDE.md de ton projet ([chapitre 6](/guide/06-claude-md)) : là, il les lira à coup sûr.
:::
