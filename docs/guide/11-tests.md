# 11. Les tests en langage métier

::: info En une phrase
Un test, c'est une vérification automatique qui dit « ça marche » ou « ça ne marche pas ». Tu les décris en français, Claude les code, et ils deviennent ta garantie de qualité.
:::

## Pourquoi c'est vital quand on ne lit pas le code

Tu ne peux pas vérifier le code toi-même. Tu ne peux pas non plus tout retester à la main à chaque modification. Les tests le font pour toi, en quelques secondes, à chaque fois.

Ils servent à trois choses :

1. **Prouver** que ce que Claude a construit fait ce que tu as demandé.
2. **Détecter immédiatement** quand une modification casse quelque chose qui marchait. C'est ce qu'on appelle une *régression*.
3. **Donner à Claude un moyen de se vérifier lui-même.** Sans test, Claude s'arrête quand le code « a l'air fini ». Avec des tests, il corrige jusqu'à ce qu'ils passent.

## Écrire des scénarios d'acceptation

Tu n'écris pas les tests en code. Tu écris des **scénarios** en français, sous une forme simple : **Étant donné… Quand… Alors…**

```text
Scénario : remise en pourcentage sur un devis
  Étant donné un devis avec 3 articles à 100 € HT
  Quand j'applique une remise de 10 % sur le total
  Alors le total HT est de 270 €

Scénario : une remise ne peut pas rendre le total négatif
  Étant donné un devis de 50 € HT
  Quand j'applique une remise de 80 €
  Alors un message m'indique que la remise dépasse le total
  Et le devis n'est pas modifié

Scénario : un devis accepté ne peut plus être modifié
  Étant donné un devis au statut « accepté »
  Quand j'essaie de modifier une ligne
  Alors la modification est refusée
```

C'est toi l'expert de ces règles. C'est donc toi qui écris (ou valides) ces scénarios.

::: tip N'oublie pas les cas qui fâchent
Les scénarios « normaux » sont faciles. Les plus utiles sont les cas limites : champ vide, valeur à zéro, valeur négative, doublon, date passée, utilisateur sans droits, deux personnes qui modifient la même chose… C'est là que les bugs se cachent.
:::

## Faire coder les tests par Claude

```text
Voici les scénarios pour [fonctionnalité] : [scénarios].
Transforme chaque scénario en test automatique, en gardant le nom
du scénario en français pour que je puisse lire le résultat.
Lance les tests et montre-moi le résultat.
```

Mieux encore : fais écrire les tests **avant** le code. Les tests échouent d'abord (normal, rien n'est construit), puis Claude code jusqu'à ce qu'ils passent. C'est la façon la plus sûre d'obtenir exactement ce que tu as demandé.

## Recréer une application à partir d'un prototype

Si tu reconstruis une application existante, les tests sont ton **juge de paix** :

1. extrais les règles du prototype dans le cahier des charges ([chapitre 4](/guide/04-cahier-des-charges)) ;
2. transforme-les en scénarios ;
3. si possible, vérifie ces scénarios sur le prototype : ils décrivent alors le comportement actuel, validé ;
4. la nouvelle version doit passer **tous** ces scénarios avant d'être considérée comme terminée.

Ainsi, tu sais objectivement que la nouvelle version fait au moins aussi bien que l'ancienne.

## Les différents types de tests (pour ta culture)

- **Tests unitaires** : vérifient une petite règle isolée (un calcul de TVA). Rapides, nombreux.
- **Tests d'intégration** : vérifient que plusieurs morceaux marchent ensemble (le devis s'enregistre bien en base).
- **Tests de bout en bout** : simulent un vrai utilisateur qui clique dans l'application. Plus lents, mais les plus proches de la réalité.

Tu n'as pas à choisir : demande à Claude le bon mélange. Mais exige au minimum des tests sur **toutes les règles de calcul et de gestion**, et des tests de bout en bout sur les **parcours principaux**.

## Surveille les tests eux-mêmes

Claude est parfois tenté de « faire passer » un test en le trichant : en modifiant le test plutôt que le code, ou en le désactivant. Ajoute dans ton CLAUDE.md :

```text
- Ne modifie jamais un test existant pour le faire passer sans me
  demander mon accord et m'expliquer pourquoi.
- Ne désactive ou ne supprime jamais un test sans mon accord.
```

Et de temps en temps, demande à un second Claude de vérifier la qualité des tests ([chapitre 12](/guide/12-relecture)).
