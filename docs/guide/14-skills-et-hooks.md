# 14. Automatiser : skills et hooks

::: info En une phrase
Les skills sont des « fiches méthode » que Claude consulte quand il en a besoin. Les hooks sont des automatismes qui se déclenchent à coup sûr, sans dépendre de la bonne volonté de Claude.
:::

Ce chapitre vient tard, et c'est volontaire : ces outils sont utiles une fois que tu as pris le rythme de la [boucle de travail](/guide/08-boucle-de-travail). Avant, ils ajoutent de la complexité sans bénéfice.

## Les skills : des fiches méthode

### Le principe

Tu te surprends à expliquer à Claude **la même façon de faire** d'une conversation à l'autre ? C'est le signe qu'il faut en faire une **skill**.

Une skill, c'est un petit document qui décrit une méthode ou des connaissances précises. Claude la lit **seulement quand c'est utile**, contrairement au CLAUDE.md qu'il lit toujours. Tu peux aussi l'appeler directement en tapant `/` suivi de son nom.

### Exemples utiles pour toi

| Skill | Ce qu'elle fait |
| --- | --- |
| `/nouvelle-fonctionnalite` | Déroule toute la boucle : lire la spec, poser les questions, planifier, coder avec les tests, faire relire, mettre à jour l'avancement |
| `/bug` | Reproduire le bug par un test, chercher la cause, corriger, prouver |
| `/scenarios` | Transformer une règle métier en scénarios Étant donné / Quand / Alors, y compris les cas limites |
| `/point-du-jour` | Résumer ce qui a été fait, ce qui reste, et les risques |
| `regles-metier` | Le vocabulaire et les règles de ton métier, que Claude consulte quand il en a besoin |

### En créer une

Pas besoin de savoir comment c'est fait. Demande :

```text
Je fais souvent [telle tâche] de cette façon : [étapes].
Crée une skill pour ce projet qui fait ça, que je pourrai lancer avec
/[nom]. Montre-la-moi avant de l'enregistrer.
```

Les skills du projet sont rangées dans le dossier `.claude/skills/`. Elles font partie du projet et sont sauvegardées avec Git.

Voir un exemple complet dans les [modèles à copier](/annexes/modeles#skill-nouvelle-fonctionnalite).

## Les hooks : des automatismes garantis

### Le principe

Une règle dans le CLAUDE.md est un **conseil** : Claude la suit la plupart du temps, mais pas toujours. Un **hook** est un **automatisme** : une action qui se déclenche systématiquement à un moment précis (après chaque modification de fichier, quand Claude pense avoir fini, etc.).

Règle simple : **si une règle doit s'appliquer à chaque fois, sans exception, c'est un hook.**

### Les hooks utiles pour toi

Tu n'as pas à les écrire : demande à Claude, ou à un développeur, de les installer. Voici ceux qui valent le coup pour un non-développeur :

| Hook | Ce qu'il fait | Pourquoi c'est utile |
| --- | --- | --- |
| **Notification** | Te prévient (son, notification) quand Claude attend ta réponse | Tu peux faire autre chose pendant qu'il travaille |
| **Tests obligatoires à la fin** | Quand Claude veut dire « j'ai fini », les tests sont lancés automatiquement ; s'ils échouent, il doit continuer | Claude ne peut plus dire « c'est fait » avec des tests cassés |
| **Mise en forme automatique** | Après chaque modification, le code est remis en forme selon les règles du projet | Le code reste propre et homogène, sans y penser |
| **Fichiers protégés** | Interdit à Claude de modifier certains fichiers (`.env`, configuration de production…) | Protège tes secrets et ta production contre une fausse manœuvre |

### Les installer : la demande à copier {#demande-hooks}

Copie cette demande telle quelle dans Claude, depuis le dossier de ton projet. Les deux premiers hooks sont les plus importants ; les deux suivants sont facultatifs, supprime-les si tu n'en veux pas.

```text
Je veux que tu installes des hooks Claude Code pour ce projet, dans
.claude/settings.json (pour qu'ils soient sauvegardés avec le projet).

1. Mise en forme automatique : après chaque création ou modification
   de fichier, le fichier est remis en forme avec Prettier (ou l'outil
   de mise en forme le plus adapté à notre stack). Installe et configure
   l'outil s'il n'est pas déjà dans le projet.

2. Tests obligatoires : quand tu considères ta tâche terminée, toute la
   suite de tests est lancée automatiquement. Si un test échoue, tu ne
   peux pas t'arrêter : tu dois corriger jusqu'à ce que tout passe.

3. (Facultatif) Notification : préviens-moi quand tu attends ma réponse
   ou ma validation.

4. (Facultatif) Protection : interdiction de lire ou modifier le
   fichier .env et les fichiers de configuration de production.

Ensuite :
- vérifie que chaque hook fonctionne réellement (déclenche-les
  une fois et montre-moi le résultat) ;
- explique-moi en quelques phrases simples ce que fait chacun ;
- dis-moi comment en désactiver un temporairement si besoin ;
- ajoute une ligne dans CLAUDE.md qui mentionne ces hooks ;
- fais un commit.
```

::: tip Si les tests sont longs
Si la suite de tests prend plusieurs minutes, les lancer à chaque fin de tâche peut ralentir le travail. Dans ce cas, demande à Claude de ne lancer que les tests rapides automatiquement, et les tests complets avant chaque commit.
:::
