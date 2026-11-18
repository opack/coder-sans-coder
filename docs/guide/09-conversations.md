# 9. Une conversation, un sujet {#chapitre-09}

::: info En une phrase
Plus une conversation est longue, plus Claude se perd. On travaille donc en conversations courtes, une par sujet, et la mémoire du projet vit dans des fichiers.
:::

## Comment fonctionne la mémoire de Claude

Pendant une conversation, Claude garde en tête **tout** ce qui s'y est passé : tes messages, ses réponses, chaque fichier qu'il a lu, chaque résultat de commande. C'est ce qu'on appelle le **contexte**.

Ce contexte a une taille limitée, et il se remplit vite. Et surtout, **plus il est plein, moins Claude est bon** :

- il oublie des consignes données au début ;
- il mélange des sujets différents ;
- il refait des erreurs déjà corrigées ;
- il perd de vue l'objectif de départ.

C'est probablement la cause numéro un des projets qui « bloquent » au bout de quelques semaines.

## Les règles d'hygiène

### Une conversation par sujet

Une fonctionnalité, un bug, une question : une conversation. Quand c'est terminé, ouvre une nouvelle session (ou tape `/clear`) pour repartir à zéro.

::: warning La conversation fourre-tout
Tu commences sur la facturation, tu poses une question sur le design, tu reviens à la facturation, puis tu corriges un bug sur les clients… Le contexte est rempli d'informations sans rapport, et Claude devient brouillon. C'est le piège le plus courant.
:::

### Repartir à zéro après deux échecs

Si tu as corrigé Claude deux fois sur le même problème et que ça ne marche toujours pas, la conversation est polluée par les mauvaises pistes. **N'insiste pas.** Ouvre une nouvelle session (ou `/clear`) et repars avec une demande mieux formulée, qui intègre ce que tu as appris. Une conversation propre avec une bonne demande bat presque toujours une longue conversation pleine de corrections.

### Les petites questions à part

Pour une question rapide qui n'a rien à voir avec la tâche en cours, utilise `/btw` suivi de ta question. La réponse ne pollue pas la conversation.

### Compacter quand on veut continuer

Si tu es au milieu d'un travail et que la conversation devient longue, `/compact` demande à Claude de résumer la conversation pour libérer de la place, en gardant l'essentiel. Tu peux préciser ce qu'il faut garder : `/compact Garde bien les décisions sur le calcul des remises`.

Claude le fait aussi automatiquement quand le contexte est presque plein. Mais un résumé perd toujours des détails : mieux vaut des conversations courtes qu'une longue conversation compactée trois fois.

## Où vit la mémoire du projet

Si chaque conversation repart de zéro, il faut que **ce qui compte soit écrit quelque part**. Ce sont les documents de référence :

| Fichier | Rôle |
| --- | --- |
| `CLAUDE.md` | Les règles permanentes ([chapitre 6](/guide/06-claude-md)) |
| `docs/SPEC.md` | Ce que l'application doit faire ([chapitre 4](/guide/04-cahier-des-charges)) |
| `docs/ARCHITECTURE.md` | Comment le code est organisé ([chapitre 5](/guide/05-stack-et-architecture)) |
| `docs/AVANCEMENT.md` | Ce qui est fait, ce qui est en cours, ce qui reste |
| `docs/DECISIONS.md` | Les décisions importantes et **pourquoi** on les a prises |

En fin de tâche, prends le réflexe :

```text
Avant qu'on termine : mets à jour docs/AVANCEMENT.md, et si on a pris
une décision importante, ajoute-la dans docs/DECISIONS.md avec sa raison.
```

Et en début de tâche :

```text
Lis docs/AVANCEMENT.md. On attaque l'étape suivante : [laquelle].
```

## Reprendre une conversation

Parfois, tu veux reprendre une conversation interrompue (tu as fermé l'ordinateur au milieu d'une tâche). Retrouve-la dans la liste des sessions de l'application et rouvre-la (en terminal : `claude --continue` pour la dernière, `claude --resume` pour choisir).

Astuce : donne un nom parlant à tes sessions (renomme-les dans la liste, ou avec la commande `/rename`) (par exemple `facturation-avoirs`), pour les retrouver facilement.
