# Modèles à copier {#modeles}

Des textes prêts à l'emploi. Copie-les (bouton en haut à droite de chaque bloc), remplace ce qui est entre crochets, colle dans Claude.

## Le CLAUDE.md de départ {#claude-md}

À placer à la racine du projet, puis à adapter. Garde-le court : supprime ce qui ne te sert pas.

```markdown
# [Nom de l'application]

[Deux lignes : ce que fait l'application, pour qui.]

## Documents de référence
- Cahier des charges : docs/spec/ (index.md pour la vue d'ensemble,
  puis un fichier par domaine). La référence pour toute règle métier.
  Ne lis que les domaines utiles à la tâche en cours.
- Architecture : docs/ARCHITECTURE.md (à respecter pour tout nouveau code)
- Design : docs/DESIGN.md (toujours réutiliser ces composants)
- Avancement : docs/AVANCEMENT.md
- Décisions : docs/DECISIONS.md

## Méthode
- Je suis la méthode du guide « Coder sans coder » : %LLMS_FULL_URL%
  Consulte-le en cas de doute, et rappelle-moi ses bonnes pratiques
  si je m'en écarte.

## Façon de travailler
- Si une règle métier manque dans docs/spec/, demande-moi au lieu d'inventer.
- Une petite étape à la fois. Si une demande est trop grosse, propose un découpage.
- Écris les tests en même temps que le code, et lance-les avant de dire que c'est fini.
- Ne dis jamais « c'est fait » sans montrer le résultat des tests.
- Ne modifie, ne désactive, ne supprime jamais un test existant sans mon accord.
- Ne modifie que ce qui concerne la tâche en cours.
- Quand une étape est terminée et que les tests passent, rappelle-moi de lancer /commit.
- En fin de tâche, mets à jour docs/AVANCEMENT.md.

## Commandes
- Lancer l'application : [commande]
- Lancer les tests : [commande]

## Interdits
- Jamais de secret (mot de passe, clé) dans le code. Ils vont dans .env.
- Jamais d'action sur la base de production.

## Pièges connus
- [À compléter au fil des erreurs répétées de Claude]
```

## Faire écrire le cahier des charges

### À partir de rien

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

### À partir d'un prototype : 1. le découpage

```text
Analyse cette application. Sans rien rédiger de détaillé pour l'instant,
propose-moi :
- une vue d'ensemble : à quoi elle sert, qui l'utilise
- un découpage en domaines métier (3 à 8), avec pour chacun les écrans
  et les objets qu'il couvre
Attends que je valide le découpage, puis écris docs/spec/index.md.
```

### À partir d'un prototype : 2. un domaine (une session par domaine)

```text
Lis docs/spec/index.md. Analyse dans l'application tout ce qui concerne
le domaine [nom] et rédige docs/spec/[nom].md, en français, sans jargon :
- les écrans et ce qu'on peut y faire
- les objets métier et leurs informations
- toutes les règles de gestion et les calculs, avec des exemples chiffrés
- les cas particuliers gérés par le code
- les incohérences ou bizarreries que tu repères (liste-les à part)
Ne décris pas comment c'est codé, seulement ce que ça fait.
```

## Choisir la stack

```text
Lis le cahier des charges (docs/spec/, en commençant par index.md). Je dois choisir la stack technique et l'architecture
de cette application. Je ne suis pas développeur.
Contraintes : [nombre d'utilisateurs, ordinateur/mobile, budget
d'hébergement, données sensibles ou non…]
Propose-moi 2 ou 3 options, avec pour chacune :
- en quoi elle consiste, en termes simples
- avantages et inconvénients pour MON projet
- coût d'hébergement approximatif
- facilité à trouver un développeur pour m'aider
Puis dis-moi laquelle tu recommandes et pourquoi.
Privilégie la simplicité et les technologies très répandues.
```

## Démarrer une fonctionnalité

```text
Lis docs/AVANCEMENT.md, docs/spec/index.md et docs/spec/[domaine].md.
On attaque : [fonctionnalité, en une ou deux phrases].
Cas particuliers à gérer : [liste].
C'est réussi quand : [critère, idéalement des scénarios de test].
Pose-moi d'abord tes questions, puis propose un plan.
```

(À lancer en mode plan : sélecteur de mode à côté du bouton d'envoi, ou `Shift+Tab`.)

## Écrire des scénarios de test

```text
Scénario : [nom court]
  Étant donné [la situation de départ]
  Quand [l'action]
  Alors [le résultat attendu]
  Et [autre résultat attendu, si besoin]
```

Et pour les faire compléter :

```text
Voici une règle métier : [règle].
Écris les scénarios Étant donné / Quand / Alors qui la couvrent,
y compris tous les cas limites (valeurs vides, nulles, négatives,
doublons, droits insuffisants…). Je les relirai avant qu'on les code.
```

## Signaler un bug

```text
Bug : [titre court]
Étapes pour le reproduire :
1. …
2. …
Résultat attendu : …
Résultat obtenu : …
[Capture d'écran / message d'erreur copié-collé]

Écris d'abord un test qui reproduit ce bug, puis corrige la cause
(pas seulement le symptôme). Montre-moi que le test passe.
```

## Installer la skill `/commit`

La demande complète est dans le [chapitre 14](/guide/14-skills-et-hooks#skill-commit).

## Installer les automatismes (hooks)

La demande complète, avec la mise en forme automatique et les tests obligatoires, est dans le [chapitre 14](/guide/14-skills-et-hooks#demande-hooks).

## Faire relire

```text
Utilise un sous-agent pour relire les changements de cette étape par
rapport à docs/spec/[domaine].md. Vérifie que :
- chaque règle de la spec est bien implémentée
- chaque cas particulier a un test
- rien d'autre n'a été modifié en dehors du sujet
- le code respecte docs/ARCHITECTURE.md
Ne signale que les vrais problèmes, pas les préférences de style.
```

## Terminer une session

```text
Avant qu'on termine :
- lance tous les tests et montre-moi le résultat
- mets à jour docs/AVANCEMENT.md
- si on a pris une décision importante, ajoute-la dans docs/DECISIONS.md
  avec sa raison
- rappelle-moi de lancer /commit
```

## Faire un état des lieux

```text
Fais un état des lieux honnête du projet, sans complaisance :
- ce qui fonctionne bien
- ce qui est fragile ou mal organisé
- ce qui n'est pas testé
- les écarts avec le cahier des charges (docs/spec/) et docs/ARCHITECTURE.md
- les 3 actions prioritaires pour remettre le projet sur de bons rails
Explique simplement, je ne suis pas développeur.
```

## Une skill « nouvelle fonctionnalité » {#skill-nouvelle-fonctionnalite}

À placer dans `.claude/skills/nouvelle-fonctionnalite/SKILL.md`. Se lance avec `/nouvelle-fonctionnalite` suivi de la description.

```markdown
---
name: nouvelle-fonctionnalite
description: Déroule la boucle complète pour construire une nouvelle fonctionnalité
disable-model-invocation: true
---
Fonctionnalité demandée : $ARGUMENTS

1. Lis docs/AVANCEMENT.md, docs/ARCHITECTURE.md et docs/spec/index.md et les fichiers de domaine concernés.
2. Si une règle métier manque ou est ambiguë, pose-moi tes questions et attends mes réponses.
3. Propose les scénarios de test (Étant donné / Quand / Alors), cas limites compris.
   Attends que je les valide.
4. Propose un plan court : ce que tu vas modifier et dans quel ordre. Attends ma validation.
5. Écris les tests, puis le code, jusqu'à ce que tous les tests passent.
6. Utilise un sous-agent pour relire le travail par rapport à la spec et à l'architecture.
   Corrige les vrais problèmes.
7. Montre-moi le résultat des tests et résume ce qui a été fait, sans jargon.
8. Mets à jour docs/AVANCEMENT.md et rappelle-moi de lancer /commit.
```
