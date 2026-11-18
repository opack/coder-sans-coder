# 7. Le design de l'interface {#chapitre-07}

::: info En une phrase
On dessine les écrans avant de les coder, et on fixe une fois pour toutes le style visuel, pour que toute l'application soit cohérente.
:::

## Dessiner avant de construire

Modifier une maquette prend quelques secondes. Modifier un écran déjà codé, avec ses données et sa logique, prend beaucoup plus de temps et casse parfois des choses. Donc on **valide le design sur des maquettes** avant de passer au code.

Claude peut produire des maquettes visuelles de tes écrans. Avec les outils de design de Claude, tu obtiens des écrans que tu peux regarder, commenter et faire modifier, sans une ligne de code de ton application.

```text
Lis docs/spec/index.md et docs/spec/[domaine].md. Propose-moi des maquettes pour l'écran
[nom de l'écran]. Utilisateurs : [qui]. Ils l'utilisent pour [quoi],
surtout sur [ordinateur / téléphone].
Propose 2 ou 3 variantes différentes.
```

Ce que tu regardes sur une maquette :

- Est-ce qu'on comprend **tout de suite** à quoi sert l'écran ?
- L'action principale est-elle **évidente** ?
- Les informations importantes sont-elles **visibles sans chercher** ?
- Est-ce que ça marche sur **téléphone**, si c'est utile ?

## Fixer le style une bonne fois

Si chaque écran est dessiné indépendamment, l'application ressemble vite à un patchwork : des boutons différents partout, trois nuances de bleu, des tailles de texte au hasard.

La solution : un **système de design**. C'est un petit catalogue qui fixe :

- les **couleurs** (principale, secondaire, erreur, succès…) ;
- les **polices** et les tailles de texte ;
- les **espacements** ;
- les **composants** réutilisables : boutons, champs de formulaire, tableaux, messages d'alerte.

Une fois ce catalogue fixé, chaque nouvel écran est construit avec ces mêmes briques. L'application reste cohérente, et Claude va plus vite.

```text
À partir des maquettes validées, définis un système de design simple :
couleurs, typographie, espacements et composants de base.
Documente-le dans docs/DESIGN.md, et ajoute dans CLAUDE.md la règle
de toujours utiliser ces composants plutôt que d'en créer de nouveaux.
```

## Du dessin à l'écran codé

Quand tu demandes à Claude de coder un écran, **donne-lui la maquette** (une image ou le lien) et demande-lui de vérifier lui-même son résultat :

```text
Code l'écran [nom] selon la maquette ci-jointe, avec les composants
de docs/DESIGN.md. Une fois fini, fais une capture d'écran du résultat,
compare-la à la maquette, liste les différences et corrige-les.
```

Claude sait ouvrir ton application dans un navigateur et la regarder. C'est beaucoup plus fiable que de lui faire confiance sur parole.

## Retoucher un écran existant

Pour un ajustement visuel, sois **précis** et **montre** :

- fais une capture d'écran et entoure ce qui ne va pas ;
- dis ce que tu veux à la place (« le bouton Valider doit être plus visible que le bouton Annuler ») ;
- pas « rends ça plus joli » : Claude va tout changer, et pas forcément dans le sens que tu veux.
