# 16. Quand ça coince {#chapitre-16}

::: info En une phrase
Tout projet finit par bloquer à un moment. Avant de forcer ou de tout jeter, on cherche pourquoi, parce que le remède dépend de la cause.
:::

## Diagnostiquer avant d'agir

| Symptôme | Cause probable | Remède |
| --- | --- | --- |
| Claude oublie des consignes, mélange les sujets | Conversation trop longue | Nouvelle session et une conversation par sujet ([chapitre 9](/guide/09-conversations)) |
| Claude tourne en rond sur un bug | Contexte pollué par les mauvaises pistes | Nouvelle session, puis un rapport de bug précis ([chapitre 10](/guide/10-formuler)) |
| Chaque correction casse autre chose | Pas assez de tests, code trop emmêlé | Des tests sur l'existant d'abord, puis réorganiser ([chapitres 11](/guide/11-tests) et [5](/guide/05-stack-et-architecture)) |
| Claude invente des règles fausses | Règles métier non écrites | Les écrire dans le cahier des charges ([chapitre 4](/guide/04-cahier-des-charges)) |
| Claude refait toujours la même erreur | Règle absente ou noyée dans le CLAUDE.md | Ajouter ou mettre en valeur la règle, voire un hook ([chapitres 6](/guide/06-claude-md) et [14](/guide/14-skills-et-hooks)) |
| Claude dit « c'est fait » mais ça ne marche pas | Pas de vérification exigée | Des tests, et exiger de voir le résultat ([chapitre 11](/guide/11-tests)) |
| La moindre modification prend des heures | Architecture inadaptée à la taille du projet | Réorganiser, ou reconstruire sur de bonnes bases ([chapitre 5](/guide/05-stack-et-architecture)) |

## La règle des deux essais

Si Claude n'a pas réussi après **deux tentatives** sur le même problème :

1. Arrête-le (bouton d'arrêt, ou `Échap`).
2. Si ses tentatives ont abîmé le code, reviens en arrière (`Échap` deux fois ou `/rewind`, ou Git).
3. Ouvre une nouvelle session (ou `/clear`).
4. Repars avec une demande plus précise, qui inclut ce que tu as appris : « J'ai déjà essayé X et Y, ça n'a pas marché parce que… ».
5. Monte le niveau de réflexion à `high` ou passe sur Opus (avec le sélecteur de modèle).

## Faire faire un état des lieux

Quand tu ne sais plus où tu en es :

```text
Fais un état des lieux honnête du projet, sans complaisance :
- ce qui fonctionne bien
- ce qui est fragile ou mal organisé
- ce qui n'est pas testé
- les écarts avec le cahier des charges (docs/spec/) et docs/ARCHITECTURE.md
- les 3 actions prioritaires pour remettre le projet sur de bons rails
Explique simplement, je ne suis pas développeur.
```

## Réparer ou repartir de zéro ?

Repartir de zéro est tentant, mais ce n'est pas toujours la bonne réponse.

**Réparer** quand :

- le problème vient de la **méthode** (conversations trop longues, demandes floues, pas de tests) : changer de méthode suffit ;
- l'application est **globalement bien organisée** et seuls certains morceaux posent problème.

**Repartir de zéro** quand :

- les fondations techniques sont **inadaptées** à ce que l'application est devenue ;
- le code est tellement emmêlé que **chaque modification est une loterie** ;
- et que tu as de quoi faire mieux : un cahier des charges et des scénarios de test tirés de l'ancienne version ([chapitre 4](/guide/04-cahier-des-charges)).

::: warning Ne reconstruis pas avec la même méthode
Une nouvelle application construite comme la première aboutira au même résultat. Ce qui fait la différence, c'est l'ordre des étapes de ce guide : cahier des charges, fondations, CLAUDE.md, petites étapes, tests, relectures.
:::

## Demander de l'aide

Un regard humain expérimenté est particulièrement utile quand :

- tu es bloqué depuis **plusieurs jours** ;
- tu dois choisir entre **réparer et reconstruire** ;
- tu prépares une **mise en ligne** avec de vrais clients ;
- il y a un doute sur la **sécurité**.

Pour que cette aide soit efficace, prépare : l'accès au dépôt GitHub, le cahier des charges, le document d'architecture, et l'état des lieux ci-dessus. Un développeur pourra se faire une idée en une heure au lieu d'une journée. C'est aussi pour ça que ces documents valent la peine d'être tenus à jour.
