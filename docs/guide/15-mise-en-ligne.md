# 15. Mettre en ligne {#chapitre-15}

::: info En une phrase
L'application que tu testes et celle qu'utilisent tes clients ne doivent pas être la même. On essaie d'abord à côté, puis on publie.
:::

## Le vocabulaire

- **Héberger** : faire tourner l'application sur un serveur accessible par Internet.
- **Déployer** : envoyer une nouvelle version de l'application sur ce serveur.
- **Environnement** : un exemplaire complet de l'application (code + base de données). On en a souvent plusieurs.
- **Production** (ou « prod ») : l'environnement réel, celui de tes clients, avec les vraies données.

## Pourquoi plusieurs environnements

Si tu testes une nouvelle fonctionnalité directement sur l'application de tes clients, la moindre erreur les touche : données abîmées, application en panne, factures fausses.

La solution minimale : **deux environnements**.

| Environnement | Pour qui | Données |
| --- | --- | --- |
| **Développement** (sur ton ordinateur) | Toi et Claude, pour construire et tester | Données de test, inventées |
| **Production** (en ligne) | Tes clients ou tes employés | Les vraies données |

Plus tard, on peut ajouter un environnement intermédiaire (« recette » ou « staging ») : une copie de la production où l'on teste une version avant de la publier. Commence par deux, c'est déjà une énorme protection.

::: danger Règle d'or
**Claude ne travaille jamais directement sur la production.** Il construit et teste en développement. Ce qui passe en production, c'est une version vérifiée, sauvegardée dans Git.
:::

## Des données de test

Pour travailler sereinement en développement, il te faut des données qui ressemblent aux vraies, sans être les vraies :

```text
Crée un jeu de données de test réaliste : une vingtaine de clients
fictifs, des devis et factures dans tous les statuts possibles, y compris
des cas particuliers (client sans e-mail, facture annulée…).
Fais en sorte qu'on puisse le recharger d'une commande.
```

Ne copie pas les données de tes vrais clients sur ton ordinateur ([chapitre 13](/guide/13-securite)).

## Publier une nouvelle version

La checklist, à chaque mise en ligne :

1. ✅ Tous les tests passent.
2. ✅ Tu as essayé toi-même les parcours modifiés.
3. ✅ Un second Claude a relu ([chapitre 12](/guide/12-relecture)).
4. ✅ La version est sauvegardée dans Git et envoyée sur GitHub.
5. ✅ Une sauvegarde récente de la base de production existe.
6. ✅ Tu sais comment **revenir à la version précédente** si ça se passe mal.

Le mieux est d'automatiser la publication, pour qu'elle se fasse toujours de la même façon. Demande à Claude :

```text
Mets en place une publication automatique : quand j'envoie une version
sur GitHub, les tests sont lancés, et s'ils passent,
l'application est mise en ligne. Explique-moi comment revenir à la
version précédente en cas de problème.
```

## Savoir quand ça casse

Une fois en ligne, des erreurs surviendront que tu n'as pas prévues. Pour ne pas les découvrir par un client mécontent, il existe des outils de **suivi d'erreurs** qui t'alertent quand quelque chose plante, avec les détails nécessaires pour corriger. Demande à Claude d'en installer un simple. Les messages d'erreur qu'ils remontent sont exactement ce qu'il faut donner à Claude pour corriger.

::: tip Si c'est trop pour l'instant
L'essentiel tient en trois points : ne pas tester sur la production, avoir des sauvegardes, savoir revenir en arrière. Le reste peut venir progressivement, avec l'aide d'un développeur.
:::
