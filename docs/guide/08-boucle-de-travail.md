# 8. La boucle de travail

::: info En une phrase
Chaque fonctionnalité suit le même cycle : décrire, planifier, construire, vérifier, sauvegarder, repartir. Toujours par petites étapes.
:::

## Le cycle

```text
① Décrire      ce que je veux, en langage métier
② Planifier    mode plan : Claude propose, je valide
③ Construire   Claude code et écrit les tests
④ Vérifier     tests, essai moi-même, relecture
⑤ Sauvegarder  commit Git : « cette version marche »
⑥ Repartir     /clear, et étape suivante
```

## ① Décrire

Tu expliques ce que tu veux, **du point de vue de l'utilisateur**, en t'appuyant sur le cahier des charges. Tu précises les cas particuliers et comment tu sauras que c'est réussi. Voir le [chapitre 10](/guide/10-formuler).

## ② Planifier : le mode plan

Appuie sur `Shift+Tab` jusqu'à voir **plan mode** en bas de l'écran. Dans ce mode, Claude peut lire et réfléchir, mais **il ne modifie rien**.

Demande-lui un plan. Il te répond avec ce qu'il compte faire : quels fichiers, dans quel ordre, quels tests. Ensuite :

- **lis le plan** : tu n'as pas besoin de tout comprendre, mais vérifie qu'il a compris ton besoin ;
- **pose des questions** : « Pourquoi tu modifies l'écran des clients alors que je parle des factures ? » ;
- **corrige** ce qui ne va pas, et fais refaire le plan si besoin ;
- quand c'est bon, **valide** : Claude sort du mode plan et commence à construire.

::: tip Quand sauter le plan
Pour une petite retouche évidente (corriger un texte, changer une couleur), pas besoin de plan. Règle simple : si tu peux décrire le changement en une phrase, demande-le directement.
:::

## ③ Construire

Claude code. Pendant ce temps, jette un œil à ce qu'il fait. S'il part dans une mauvaise direction, appuie sur `Échap` pour l'arrêter, et redirige-le. Mieux vaut corriger tôt que tard.

Exige toujours que **les tests soient écrits en même temps que le code**, et lancés à la fin ([chapitre 11](/guide/11-tests)).

## ④ Vérifier

Trois niveaux de vérification, du plus rapide au plus sûr :

1. **Les tests passent.** Demande à voir le résultat, pas juste « c'est bon ».
2. **Tu essaies toi-même.** Tu ouvres l'application et tu fais le parcours, comme un utilisateur. Essaie aussi de « faire des bêtises » : laisser un champ vide, mettre des lettres dans un prix…
3. **Un second Claude relit** pour les fonctionnalités importantes ([chapitre 12](/guide/12-relecture)).

## ⑤ Sauvegarder

Quand tout est vérifié : « Fais un commit. » ([chapitre 3](/guide/03-git)). Pas avant.

Profites-en pour mettre à jour l'avancement : « Mets à jour docs/AVANCEMENT.md. »

## ⑥ Repartir

`/clear`, et on attaque la fonctionnalité suivante dans une conversation neuve ([chapitre 9](/guide/09-conversations)).

## La taille des étapes

C'est le point le plus important de ce chapitre, et le plus souvent négligé.

| Trop gros | Bonne taille |
| --- | --- |
| « Fais le module facturation » | « Permettre de créer une facture à partir d'un devis accepté » |
| « Refais tout le design » | « Appliquer le nouveau style à l'écran de la liste des clients » |
| « Ajoute la gestion des utilisateurs » | « Permettre à un utilisateur de se connecter avec e-mail et mot de passe » |

Une bonne étape :

- se décrit en **une ou deux phrases** ;
- se termine par quelque chose qu'**on peut essayer** ;
- tient dans **une conversation** sans qu'elle devienne interminable.

Si tu ne sais pas comment découper, demande à Claude : « Découpe cette fonctionnalité en petites étapes, chacune testable séparément. Écris la liste dans docs/AVANCEMENT.md. »
