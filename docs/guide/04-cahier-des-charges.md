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

## Un fichier par domaine, dès le départ

Un seul gros document devient vite un fourre-tout, et le découper après coup est pénible. On l'organise donc **dès le début** en un dossier `docs/spec/` :

```text
docs/spec/
├── index.md         la vue d'ensemble : but, utilisateurs, liste des domaines,
│                    vocabulaire du métier, ce qui est hors sujet
├── clients.md       un fichier par domaine de ton métier…
├── devis.md
├── facturation.md
└── …
```

Un **domaine**, c'est un grand pan de ton activité, que tu pourrais confier à une personne différente : la gestion des clients, les devis, la facturation, le planning… Ce n'est pas un écran, ni une fonctionnalité. Pour une application de taille moyenne, on en compte généralement entre 3 et 8.

Chaque fichier de domaine suit le même plan : les objets, les parcours, les règles de gestion, les cas particuliers, les questions encore ouvertes.

Ce découpage a trois avantages :

- **Claude ne lit que ce dont il a besoin.** Pour travailler sur les devis, il lit `index.md` et `devis.md`, pas tout le reste. Sa mémoire reste disponible pour le travail.
- **Tu t'y retrouves.** Une nouvelle règle sur les factures ? Elle va dans `facturation.md`, sans hésiter.
- **Il prépare une application bien rangée.** Les domaines du cahier des charges deviendront naturellement les grands morceaux du code ([chapitre 5](/guide/05-stack-et-architecture)).

::: tip Et quand une règle concerne deux domaines ?
Elle va dans le domaine qui « décide ». Par exemple, « un devis accepté devient une facture » : c'est l'acceptation du devis qui déclenche, donc la règle va dans `devis.md`, et `facturation.md` y fait simplement référence.
:::

## Écrire le cahier des charges avec Claude

Tu n'as pas à l'écrire seul. Le plus efficace : **demande à Claude de t'interviewer**.

```text
Je veux construire [description courte de l'application].
Interviewe-moi en détail, une question à la fois.
Commence par la vue d'ensemble : le but, les utilisateurs, et les grands
domaines de mon activité. Propose-moi un découpage en domaines et
attends que je le valide.
Ensuite, interviewe-moi domaine par domaine : règles de mon métier,
cas particuliers, ce qui est hors sujet. Ne pose pas de questions
techniques : je ne suis pas développeur.
Rédige le cahier des charges dans docs/spec/ : un fichier index.md pour
la vue d'ensemble, puis un fichier par domaine, au fur et à mesure,
en français simple.
```

Utilise Opus pour cette étape : c'est le moment où un modèle qui réfléchit bien vaut le coup. Garde l'effort `medium` pendant l'interview, pour que les questions s'enchaînent sans attente. Monte-le à `high` pour les étapes de synthèse : proposer le découpage en domaines, puis la relecture finale :

```text
Relis tout docs/spec/. Cherche les contradictions entre domaines,
les règles floues, les cas particuliers oubliés et les questions
restées sans réponse. Liste-les, sans rien corriger : je trancherai.
```

::: tip Un domaine, une session
Si l'interview est longue, ne fais pas tout dans la même conversation. Une fois la vue d'ensemble écrite, ouvre une nouvelle session par domaine : « Lis docs/spec/index.md. Interviewe-moi sur le domaine Facturation et rédige docs/spec/facturation.md. » ([chapitre 9](/guide/09-conversations))
:::

## Partir d'un prototype existant

Si tu as déjà une première version de l'application, même imparfaite, c'est une mine d'or : elle contient toutes les règles que tu as découvertes en la construisant. Mais ces règles sont enfouies dans le code. Il faut les **extraire**. On procède en deux temps.

::: tip Où ranger le prototype
La nouvelle application vit dans un **nouveau dossier**, avec son propre Git. Place une copie du prototype dans un sous-dossier `prototype/` de ce nouveau projet, et dis à Claude qu'il sert seulement de référence : il peut le lire, jamais le modifier. Tu pourras supprimer ce sous-dossier une fois la nouvelle version terminée.
:::

D'abord, la vue d'ensemble et le découpage :

```text
Analyse l'application du dossier prototype/ (lecture seule, ne la modifie
pas). Sans rien rédiger de détaillé pour l'instant,
propose-moi :
- une vue d'ensemble : à quoi elle sert, qui l'utilise
- un découpage en domaines métier (3 à 8), avec pour chacun les écrans
  et les objets qu'il couvre
Attends que je valide le découpage, puis écris docs/spec/index.md.
```

Ensuite, un domaine à la fois, chacun dans sa propre session :

```text
Lis docs/spec/index.md. Analyse dans prototype/ (lecture seule) tout ce
qui concerne le domaine [nom] et rédige docs/spec/[nom].md, en français, sans jargon :
- les écrans et ce qu'on peut y faire
- les objets métier et leurs informations
- toutes les règles de gestion et les calculs, avec des exemples chiffrés
- les cas particuliers gérés par le code
- les incohérences ou bizarreries que tu repères (liste-les à part)
Ne décris pas comment c'est codé, seulement ce que ça fait.
```

Après chaque domaine, **relis attentivement**. Corrige ce qui est faux, complète ce qui manque, et tranche sur les bizarreries : est-ce un bug ou une règle voulue ?

::: tip Le prototype comme juge de paix
Une fois le cahier des charges validé, les règles qu'il contient deviennent des **scénarios de test** ([chapitre 11](/guide/11-tests)). Tu peux même vérifier ces scénarios sur l'ancienne application, en les essayant toi-même ou en demandant à Claude de les jouer dessus. Ensuite, la nouvelle version devra les passer elle aussi : c'est la garantie qu'elle fait au moins aussi bien que l'ancienne.
:::

## Un document vivant

Le cahier des charges n'est pas gravé dans le marbre. Quand tu changes d'avis ou que tu découvres une nouvelle règle :

1. tu mets à jour le fichier du domaine concerné **d'abord** ;
2. puis tu demandes à Claude d'adapter l'application.

Dans ce sens-là, jamais l'inverse. Sinon le document et l'application divergent, et le document ne sert plus à rien.

Si un domaine devient trop gros ou qu'un nouveau domaine apparaît, crée un nouveau fichier et mets à jour la liste dans `index.md`.
