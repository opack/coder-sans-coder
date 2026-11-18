<script setup>
import { ref, onMounted } from 'vue'
import { withBase } from 'vitepress'

const full = ref(withBase('/llms-full.txt'))
const index = ref(withBase('/llms.txt'))
onMounted(() => {
  full.value = new URL(withBase('/llms-full.txt'), location.origin).href
  index.value = new URL(withBase('/llms.txt'), location.origin).href
})
</script>

# Donner ce guide à Claude

Ce guide existe aussi dans un format pensé pour les IA : du texte brut, sans mise en page, que Claude lit facilement.

- **Le guide complet en un seul fichier** : <a :href="full">{{ full }}</a>
- **Le sommaire avec un lien par chapitre** : <a :href="index">{{ index }}</a>

Chaque page du site existe aussi en version texte : ajoute `.md` à la fin de son adresse.

## L'utiliser dans ton projet

Ajoute ces lignes dans le CLAUDE.md de ton projet (avec l'adresse ci-dessus) :

```markdown
## Méthode de travail
Je suis la méthode décrite dans ce guide : [adresse du guide complet]
Si tu as un doute sur la façon de travailler avec moi, consulte-le.
Rappelle-moi les bonnes pratiques du guide si je m'en écarte.
```

## Lui faire vérifier ta façon de travailler

Tu peux aussi demander à Claude, de temps en temps :

```text
Lis le guide [adresse du guide complet].
Compare avec la façon dont on travaille sur ce projet (CLAUDE.md,
documents dans docs/, tests, historique Git).
Dis-moi franchement ce que je ne respecte pas, et par quoi commencer
pour m'améliorer.
```

::: tip Garder une copie dans le projet
Si tu préfères que Claude n'ait pas besoin d'Internet, télécharge le fichier du guide complet et place-le dans ton projet, par exemple `docs/guide-methode.md`. Pense à le mettre à jour de temps en temps.
:::
