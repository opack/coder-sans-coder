# 3. Git, ton bouton « annuler »

::: info En une phrase
Git prend des photos de ton application à chaque étape qui fonctionne, pour pouvoir revenir en arrière quand quelque chose casse.
:::

## Pourquoi c'est indispensable pour toi

Quand tu travailles avec Claude, il modifie souvent plusieurs fichiers d'un coup. Parfois, une modification casse quelque chose qui marchait. Sans Git, tu ne sais plus revenir à l'état d'avant. Avec Git, c'est une seule commande.

Et surtout : **un filet de sécurité te permet d'oser.** Tu peux laisser Claude tenter une idée, sachant que si ça rate, tu reviens en arrière sans rien perdre.

## Les quatre notions à comprendre

### Le dépôt (repository)

C'est ton projet, sous surveillance de Git. Git garde l'historique de tous ses changements.

### Le commit : une photo

Un **commit**, c'est une photo de ton application à un instant donné, avec un petit message qui dit ce qui a changé. Par exemple : « Ajout de la création de devis ».

La règle : **un commit à chaque étape qui fonctionne.** Pas quand c'est à moitié fait, pas quand les tests échouent.

### L'historique : l'album photo

C'est la liste de tous les commits. Tu peux revenir à n'importe laquelle de ces photos.

### La branche : un brouillon parallèle

Une **branche** est une copie de travail de ton application, sur laquelle tu peux essayer des choses sans toucher à la version principale (souvent appelée `main`). Si l'essai est réussi, on le fusionne dans la version principale. S'il rate, on jette la branche.

```text
main      ●───●───●─────────────●   ← la version qui marche
               \               /
essai           ●───●───●───●      ← le brouillon (fusionné quand c'est bon)
```

## Tu n'as pas besoin d'apprendre les commandes

Claude connaît Git parfaitement. Tu peux tout lui demander en français :

| Ce que tu veux | Ce que tu dis à Claude |
| --- | --- |
| Sauvegarder | « Fais un commit avec un message clair. » |
| Voir ce qui a changé | « Résume-moi ce qui a changé depuis le dernier commit. » |
| Voir l'historique | « Montre-moi les 10 derniers commits, en français. » |
| Annuler les changements en cours | « Annule tout ce qui a été modifié depuis le dernier commit. » |
| Revenir à une ancienne version | « Reviens à la version d'avant l'ajout de la facturation. » |
| Essayer sans risque | « Crée une branche pour essayer cette idée. » |
| Garder l'essai | « L'essai est concluant, fusionne la branche dans main. » |

::: tip Mets-le dans ton CLAUDE.md
Ajoute une règle du genre : « Propose-moi un commit à chaque fois qu'une étape est terminée et que les tests passent. » Claude y pensera pour toi.
:::

## Sauvegarder en ligne : GitHub

Git garde l'historique sur ton ordinateur. Si ton ordinateur meurt, tout disparaît. **GitHub** (ou un équivalent) garde une copie en ligne de ton dépôt. C'est aussi ce qui permettra à un développeur de t'aider un jour, ou de reprendre le projet.

Demande à Claude : « Aide-moi à mettre ce projet sur GitHub, en dépôt privé. » Puis, de temps en temps : « Envoie les derniers commits sur GitHub. » (En jargon : faire un *push*.)

## Et le retour en arrière de Claude ?

Claude Code a aussi son propre bouton « annuler » : `Échap Échap` (ou `/rewind`). Il permet de revenir à un moment précédent de la conversation, et de restaurer les fichiers tels qu'ils étaient à ce moment-là.

C'est pratique pour annuler la dernière action, mais **ça ne remplace pas Git** : ça ne suit pas tout, et ça ne sauvegarde rien en ligne. Utilise les deux :

- `/rewind` pour le « oups » immédiat ;
- Git pour les vraies étapes de ton projet.
