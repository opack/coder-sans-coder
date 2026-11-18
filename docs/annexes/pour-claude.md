# Donner ce guide à Claude

Ce guide existe aussi dans un format pensé pour les IA : du texte brut, sans mise en page, que Claude lit facilement.

- **Le guide complet en un seul fichier** : <%LLMS_FULL_URL%>
- **Le sommaire avec un lien par chapitre** : <%LLMS_URL%>

Chaque page du site existe aussi en version texte : ajoute `.md` à la fin de son adresse.

## L'utiliser dans ton projet

Ajoute ces lignes dans le CLAUDE.md de ton projet :

```markdown
## Méthode de travail
Je suis la méthode décrite dans ce guide : %LLMS_FULL_URL%
Si tu as un doute sur la façon de travailler avec moi, consulte-le.
Rappelle-moi les bonnes pratiques du guide si je m'en écarte.
```

## Lui faire vérifier ta façon de travailler

Tu peux aussi demander à Claude, de temps en temps :

```text
Lis le guide %LLMS_FULL_URL%
Compare avec la façon dont on travaille sur ce projet (CLAUDE.md,
documents dans docs/, tests, historique Git).
Dis-moi franchement ce que je ne respecte pas, et par quoi commencer
pour m'améliorer.
```

::: tip Garder une copie dans le projet
Si tu préfères que Claude n'ait pas besoin d'Internet, télécharge le fichier du guide complet et place-le dans ton projet, par exemple `docs/guide-methode.md`. Pense à le mettre à jour de temps en temps.
:::
