# 13. Sécurité et données

::: info En une phrase
Ton application manipule probablement des données de clients. Une fuite, une perte ou un accès non autorisé peut coûter bien plus cher que toute l'application. Ce chapitre est court, mais il n'est pas optionnel.
:::

## Pourquoi c'est le risque le plus sous-estimé

Une application faite avec Claude peut **fonctionner parfaitement** tout en étant **dangereusement ouverte**. Rien ne se voit à l'écran : la faille n'apparaît que le jour où quelqu'un l'exploite. Et Claude ne pense pas toujours à la sécurité si on ne le lui demande pas.

## Les secrets

Un **secret**, c'est un mot de passe ou une clé d'accès : le mot de passe de la base de données, la clé d'un service de paiement ou d'envoi d'e-mails…

Les règles :

- **Un secret n'est jamais écrit dans le code.** Il est rangé dans un fichier à part (souvent nommé `.env`) qui **n'est jamais envoyé sur GitHub**.
- **Un secret n'est jamais collé dans une conversation** si tu peux l'éviter.
- Si un secret a fuité (envoyé sur GitHub par erreur, par exemple), **on le change immédiatement**. Le supprimer du code ne suffit pas : il reste dans l'historique.

```text
Vérifie qu'aucun mot de passe, clé ou secret n'est écrit dans le code
ou dans l'historique Git. Vérifie que le fichier .env est bien exclu de Git.
```

## Qui a le droit de faire quoi

- **Authentification** : comment l'application sait **qui** est connecté. Ne laisse jamais Claude « inventer » un système de connexion maison : demande-lui d'utiliser une solution reconnue.
- **Autorisations** : ce que chaque personne a le **droit** de faire. Un employé peut-il voir les factures de tous les clients ? Un client peut-il voir celles des autres ?

Écris ces règles dans le cahier des charges, et fais-en des **scénarios de test** ([chapitre 11](/guide/11-tests)) :

```text
Scénario : un client ne voit pas les factures des autres clients
  Étant donné deux clients, Alice et Bruno, chacun avec une facture
  Quand Alice est connectée et essaie d'ouvrir la facture de Bruno
  Alors l'accès est refusé
```

## Les données personnelles (RGPD)

Si ton application contient des noms, e-mails, adresses, téléphones de personnes, tu es soumis au **RGPD**. Les questions à te poser (et à poser à Claude) :

- Quelles données personnelles je stocke, et en ai-je vraiment besoin ?
- Où sont-elles hébergées ? (En Europe, de préférence.)
- Qui peut y accéder ?
- Puis-je supprimer les données d'une personne si elle le demande ?
- Combien de temps je les garde ?

Claude peut t'aider à faire le point, mais pour un usage professionnel, un avis spécialisé est recommandé.

## Les sauvegardes

Une application sans sauvegarde, c'est une application qui perdra un jour ses données. Vérifie :

- que la base de données est **sauvegardée automatiquement**, chaque jour ;
- que tu sais **restaurer** une sauvegarde. Une sauvegarde jamais testée n'est pas une sauvegarde.

## La revue de sécurité

Avant toute mise en ligne, et ensuite régulièrement :

```text
Utilise un sous-agent pour faire une revue de sécurité de l'application.
Cherche notamment : secrets dans le code, failles d'accès (un utilisateur
qui peut voir ou modifier les données d'un autre), données saisies non
vérifiées, dépendances avec des failles connues.
Classe les problèmes par gravité et explique-les simplement.
```

Utilise un modèle puissant avec un effort élevé pour cette tâche.

::: danger Le minimum non négociable
Pas de secret dans le code. Des règles d'accès testées. Des sauvegardes vérifiées. Et pour une application avec de vrais clients, **un regard humain compétent** sur la sécurité avant la mise en ligne.
:::
