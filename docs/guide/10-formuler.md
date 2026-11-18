# 10. Bien formuler ses demandes {#chapitre-10}

::: info En une phrase
Plus ta demande est précise sur le besoin, moins tu auras de corrections. Décris le résultat attendu, pas la technique.
:::

## Les quatre ingrédients d'une bonne demande

1. **Le but** : ce que l'utilisateur doit pouvoir faire, et pourquoi.
2. **Le contexte** : où ça se situe dans l'application, quels documents lire.
3. **Les cas particuliers** : ce qui peut mal se passer, les exceptions.
4. **Le critère de réussite** : comment on saura que c'est fini et réussi.

## Avant / après

| Demande floue | Demande précise |
| --- | --- |
| « Ajoute les remises » | « Sur un devis, je veux pouvoir appliquer une remise en % ou en euros, sur une ligne ou sur le total. Règles dans docs/spec/devis.md, partie Remises. Une remise ne peut jamais rendre le total négatif. C'est réussi si les scénarios de la section Remises passent tous. » |
| « Le calcul est faux » | « Sur le devis n°12, total attendu 1 200 € HT, affiché 1 080 €. Il semble que la remise soit appliquée deux fois. Écris d'abord un test qui reproduit le problème, puis corrige la cause. » |
| « Rends l'écran plus clair » | « Sur la liste des clients, je veux voir en premier les clients qui ont une facture impayée, avec le montant dû en rouge. » |

## Décris le quoi, pas le comment

Tu connais ton métier, Claude connaît la technique. Chacun son domaine.

- ✅ « Quand un client n'a pas payé depuis 30 jours, je veux qu'il apparaisse dans une liste de relances. »
- ❌ « Ajoute une colonne dans la base et un cron qui tourne la nuit. »

Si tu as une idée de solution, présente-la comme une suggestion, et demande son avis à Claude : « J'imagine qu'on pourrait faire X. Est-ce une bonne idée, ou tu vois mieux ? »

## Laisse Claude te poser des questions

Pour toute demande un peu complexe, ajoute simplement :

```text
Avant de commencer, pose-moi les questions dont tu as besoin.
```

Tu seras surpris du nombre de cas que tu n'avais pas envisagés.

## Montre plutôt que décrire

- **Une capture d'écran** vaut mieux qu'une description. Tu peux la coller directement dans Claude.
- **Un exemple chiffré** vaut mieux qu'une règle abstraite : « Pour 3 articles à 100 € avec 10 % de remise, le total doit être 270 €. »
- **Un fichier** : tape `@` puis le nom du fichier pour que Claude le lise (par exemple `@docs/spec/devis.md`).

## Signaler un bug

Un bon rapport de bug fait gagner un temps énorme. Toujours ces cinq éléments :

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

::: tip Pourquoi « écris d'abord un test »
Ça force Claude à vraiment comprendre le problème avant de le corriger. Et une fois le test écrit, ce bug ne pourra plus revenir sans que tu le saches.
:::

## Demande des explications

Tu as le droit de ne pas comprendre. Quelques phrases utiles :

- « Explique-moi ce que tu viens de faire, sans jargon. »
- « Quelles sont les conséquences de ce choix pour moi ? »
- « Qu'est-ce qui pourrait mal tourner avec cette solution ? »
- « Y a-t-il une option plus simple ? »
- « Es-tu sûr ? Comment l'as-tu vérifié ? »

La dernière est précieuse : elle oblige Claude à montrer ses preuves plutôt qu'à affirmer.
