# 3. Git, ton bouton « annuler » {#chapitre-03}

::: info En une phrase
Git prend des photos de ton application à chaque étape qui fonctionne, pour pouvoir revenir en arrière quand quelque chose casse.
:::

## Pourquoi c'est indispensable pour toi

Quand tu travailles avec Claude, il modifie souvent plusieurs fichiers d'un coup. Parfois, une modification casse quelque chose qui marchait. Sans Git, tu ne sais plus revenir à l'état d'avant. Avec Git, c'est une seule commande.

Et surtout : **un filet de sécurité te permet d'oser.** Tu peux laisser Claude tenter une idée, sachant que si ça rate, tu reviens en arrière sans rien perdre.

## Les trois notions à comprendre

### Le dépôt (repository)

C'est ton projet, sous surveillance de Git. Git garde l'historique de tous ses changements.

### Le commit : une photo

Un **commit**, c'est une photo de ton application à un instant donné, avec un petit message qui dit ce qui a changé. Par exemple : « Ajout de la création de devis ».

La règle : **un commit à chaque étape qui fonctionne.** Pas quand c'est à moitié fait, pas quand les tests échouent.

### L'historique : l'album photo

C'est la liste de tous les commits. Tu peux revenir à n'importe laquelle de ces photos.

## Tu n'as pas besoin d'apprendre les commandes

Claude connaît Git parfaitement. Tu peux tout lui demander en français :

| Ce que tu veux | Ce que tu dis à Claude |
| --- | --- |
| Sauvegarder | « Fais un commit avec un message clair. » |
| Voir ce qui a changé | « Résume-moi ce qui a changé depuis le dernier commit. » |
| Voir l'historique | « Montre-moi les 10 derniers commits, en français. » |
| Annuler les changements en cours | « Annule tout ce qui a été modifié depuis le dernier commit. » |
| Revenir à une ancienne version | « Reviens à la version d'avant l'ajout de la facturation. » |

::: tip Mets-le dans ton CLAUDE.md
Ajoute une règle du genre : « Propose-moi un commit à chaque fois qu'une étape est terminée et que les tests passent. » Claude y pensera pour toi.
:::

## Encore plus simple : la commande `/commit`

Sauvegarder proprement demande plusieurs vérifications : les tests passent-ils ? Ne sauvegarde-t-on que ce qui concerne l'étape en cours ? Aucun mot de passe ne part-il dans l'historique ? Le message est-il clair ?

Plutôt que de le redemander à chaque fois, tu peux apprendre tout ça à Claude une bonne fois, sous la forme d'une **skill** : une fiche méthode qu'il suit quand tu tapes `/commit`. Elle vérifie tout, écrit le message en français et fait la sauvegarde. Tu n'as plus qu'à taper une commande à la fin de chaque étape.

La demande pour l'installer est prête à copier dans le [chapitre 14](/guide/14-skills-et-hooks#skill-commit). Tu peux l'installer dès le premier jour, même si les skills ne sont expliquées en détail que plus tard.

## Sauvegarder en ligne : GitHub

Git garde l'historique sur ton ordinateur. Si ton ordinateur meurt, tout disparaît. **GitHub** (ou un équivalent) garde une copie en ligne de ton dépôt. C'est aussi ce qui permettra à un développeur de t'aider un jour, ou de reprendre le projet.

Demande à Claude : « Aide-moi à mettre ce projet sur GitHub, en dépôt privé. » Puis, de temps en temps : « Envoie les derniers commits sur GitHub. » (En jargon : faire un *push*.)

## Et le retour en arrière de Claude ?

Claude Code a aussi son propre bouton « annuler » : la touche `Échap` pressée deux fois, ou la commande `/rewind`. Il permet de revenir à un moment précédent de la conversation, et de restaurer les fichiers tels qu'ils étaient à ce moment-là.

C'est pratique pour annuler la dernière action, mais **ça ne remplace pas Git** : ça ne suit pas tout, et ça ne sauvegarde rien en ligne. Utilise les deux :

- `/rewind` pour le « oups » immédiat ;
- Git pour les vraies étapes de ton projet.

## Pour plus tard : les branches {#branches}

::: info Facultatif
Tu peux **complètement ignorer cette partie au début**. Travailler directement sur la version principale, avec un `/commit` à chaque étape qui marche, est déjà une excellente protection. Reviens ici quand Git te sera devenu familier.

Pour que Claude ne crée pas de branche de lui-même, le [modèle de CLAUDE.md](/annexes/modeles#claude-md) contient la règle : « Ne crée jamais de branche Git sans me le proposer et m'expliquer pourquoi. »
:::

Une **branche** est un brouillon parallèle de ton application : tu peux y essayer une idée sans toucher à la version principale (souvent appelée `main`). Si l'essai est réussi, on le fusionne dans la version principale. S'il rate, on jette le brouillon.

```text
main      ●───●───●─────────────●   ← la version qui marche
               \               /
essai           ●───●───●───●      ← le brouillon (fusionné quand c'est bon)
```

C'est utile surtout pour les essais incertains : une grosse réorganisation, une idée dont tu n'es pas sûr. Comme pour le reste, tu le demandes à Claude en français :

| Ce que tu veux | Ce que tu dis à Claude |
| --- | --- |
| Essayer sans risque | « Crée une branche pour essayer cette idée. » |
| Garder l'essai | « L'essai est concluant, fusionne la branche dans la version principale. » |
| Abandonner l'essai | « L'essai n'est pas concluant, reviens sur la version principale et supprime la branche. » |
| Savoir où j'en suis | « Sur quelle branche suis-je, et y a-t-il des essais en cours ? » |
