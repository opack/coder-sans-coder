# 4. Le cahier des charges {#chapitre-04}

::: info En une phrase
Avant de construire, on écrit en français ce que l'application doit faire. C'est la mémoire du projet, et c'est la référence pour juger si le résultat est bon.
:::

## Pourquoi c'est l'étape la plus rentable

Sans cahier des charges, Claude **devine**. Il devine les règles de ton métier, les cas particuliers, ce qui est important et ce qui ne l'est pas. Parfois il devine juste. Souvent, il invente quelque chose de plausible mais faux, et tu ne t'en rends compte que bien plus tard.

Le cahier des charges sert à trois choses :

1. **Clarifier ta propre pensée.** En l'écrivant, tu découvriras des questions que tu ne t'étais jamais posées.
2. **Donner une mémoire à Claude.** Chaque nouvelle conversation peut repartir de ce document, au lieu de tout réexpliquer.
3. **Juger le résultat.** Ce qui est construit doit correspondre à ce qui est écrit. Sinon, l'un des deux a tort, et il faut trancher.

## Ce qu'on y met

Pas besoin d'un document de 80 pages. Il faut surtout être **précis sur ton métier**.

- **Le but** : à quoi sert l'application, pour qui, quel problème elle règle.
- **Les utilisateurs** : qui s'en sert (toi, tes employés, tes clients ?), avec quels droits.
- **Les objets de ton métier** : client, devis, facture, rendez-vous, produit… et ce qui les caractérise.
- **Les parcours** : « l'utilisateur crée un devis, l'envoie, le client l'accepte, il devient une facture ».
- **Les règles de gestion** : les calculs, les conditions, les interdits. C'est la partie la plus précieuse.
- **Les cas particuliers** : que se passe-t-il si le client n'a pas d'e-mail ? Si on annule une facture déjà payée ?
- **Ce qui est hors sujet** : ce que l'application ne fera **pas**. C'est aussi important que le reste.

## Écrire le cahier des charges avec Claude

Tu n'as pas à l'écrire seul. Le plus efficace : **demande à Claude de t'interviewer**.

```text
Je veux construire [description courte de l'application].
Interviewe-moi en détail, une question à la fois.
Pose-moi des questions sur les règles de mon métier, les cas particuliers,
les utilisateurs et ce qui est hors sujet. Ne pose pas de questions
techniques : je ne suis pas développeur.
Quand on a tout couvert, rédige le cahier des charges dans docs/SPEC.md,
en français simple.
```

Utilise un modèle qui réfléchit bien pour cette étape (Opus, effort `high`). C'est le moment où ça vaut le coup.

## Partir d'un prototype existant

Si tu as déjà une première version de l'application, même imparfaite, c'est une mine d'or : elle contient toutes les règles que tu as découvertes en la construisant. Mais ces règles sont enfouies dans le code. Il faut les **extraire**.

```text
Analyse cette application et rédige un cahier des charges complet
dans docs/SPEC.md, en français, sans jargon technique :
- la liste des écrans et ce qu'on peut y faire
- les objets métier et leurs informations
- toutes les règles de gestion et les calculs, avec des exemples chiffrés
- les cas particuliers gérés par le code
- les incohérences ou bizarreries que tu repères (liste-les à part)
Ne décris pas comment c'est codé, seulement ce que ça fait.
```

Ensuite, **relis attentivement**. Corrige ce qui est faux, complète ce qui manque, et tranche sur les bizarreries : est-ce un bug ou une règle voulue ?

::: tip Le prototype comme juge de paix
Une fois le cahier des charges validé, les règles qu'il contient deviennent des **scénarios de test** ([chapitre 11](/guide/11-tests)). Tu peux même vérifier ces scénarios sur l'ancienne application. Ensuite, la nouvelle version devra les passer elle aussi : c'est la garantie qu'elle fait au moins aussi bien que l'ancienne.
:::

## Un document vivant

Le cahier des charges n'est pas gravé dans le marbre. Quand tu changes d'avis ou que tu découvres une nouvelle règle :

1. tu mets à jour le cahier des charges **d'abord** ;
2. puis tu demandes à Claude d'adapter l'application.

Dans ce sens-là, jamais l'inverse. Sinon le document et l'application divergent, et le document ne sert plus à rien.

::: tip Découpe si ça grossit
Quand le document devient long, découpe-le : un fichier par grand domaine (`docs/spec/clients.md`, `docs/spec/facturation.md`…). Claude ne lira que ce dont il a besoin.
:::
