# 5. Choisir les fondations techniques {#chapitre-05}

::: info En une phrase
Le choix des technologies et de l'organisation du code se fait une fois, au début. Il décide si l'application pourra grandir sereinement ou finira en plat de spaghettis.
:::

## Deux mots de vocabulaire

- **La stack** (la « pile technique »), ce sont les technologies utilisées : le langage, les outils pour faire l'interface, la base de données, l'hébergement. Comme le choix entre une maison en bois, en brique ou en béton.
- **L'architecture**, c'est la façon d'organiser le code : comment l'application est découpée en morceaux, et comment ces morceaux communiquent. Comme le plan des pièces et des murs porteurs.

## Pourquoi le prototype s'est retrouvé coincé

Un petit outil qui grossit au fil des besoins finit presque toujours de la même façon : chaque nouvelle fonctionnalité est **ajoutée là où c'était le plus simple sur le moment**, sans plan d'ensemble. Au bout d'un moment :

- tout dépend de tout, et toucher un endroit en casse un autre ;
- Claude doit lire énormément de code pour comprendre la moindre chose, donc il se perd ;
- les mêmes règles sont codées à plusieurs endroits, de façon légèrement différente.

Ce n'est pas un problème de compétence, c'est un problème de **plan**. Une bonne architecture, c'est ce qui permet à Claude (et à un futur développeur) de travailler sur un morceau sans avoir à comprendre tout le reste.

## Les critères qui comptent pour toi

Tu n'as pas à connaître les technologies. Tu dois en revanche savoir ce qui compte **pour ton projet**, et demander à Claude de choisir selon ces critères :

- **Populaire et stable.** Claude est bien meilleur sur les technologies très utilisées : il en a vu des millions d'exemples. Et tu trouveras plus facilement un développeur pour t'aider.
- **Simple.** La solution la plus simple qui répond au besoin. Pas d'usine à gaz « au cas où ».
- **Adaptée à l'usage.** Combien d'utilisateurs ? Sur ordinateur, téléphone, les deux ? Hors connexion ?
- **Hébergement facile.** Où et comment l'application sera mise en ligne, pour quel coût ([chapitre 15](/guide/15-mise-en-ligne)).
- **Testable.** Les outils de test doivent être simples à mettre en place ([chapitre 11](/guide/11-tests)).

## Le faire choisir par Claude, correctement

```text
Lis le cahier des charges (docs/spec/, en commençant par index.md).
Je dois choisir la stack technique et l'architecture de cette application. Je ne suis pas développeur.
Contraintes : [nombre d'utilisateurs, ordinateur/mobile, budget
d'hébergement, données sensibles ou non…]
Propose-moi 2 ou 3 options, avec pour chacune :
- en quoi elle consiste, en termes simples
- avantages et inconvénients pour MON projet
- coût d'hébergement approximatif
- facilité à trouver un développeur pour m'aider
Puis dis-moi laquelle tu recommandes et pourquoi.
Privilégie la simplicité et les technologies très répandues.
```

Utilise Opus avec un effort `high` ou `xhigh` : c'est une décision qui engage tout le projet.

::: warning Demande un deuxième avis
C'est **la** décision pour laquelle un avis humain vaut le plus. Montre la recommandation de Claude à un développeur que tu connais. Une heure de discussion peut t'éviter de tout refaire dans six mois.
:::

## Écrire les décisions

Une fois le choix fait, demande à Claude de le **consigner** :

```text
Rédige docs/ARCHITECTURE.md : la stack choisie, l'organisation du code
(quels dossiers, quel rôle pour chacun), et les principales règles à
respecter pour que le code reste rangé. Organise le code par domaine,
avec les mêmes domaines que docs/spec/. Garde-le court et clair.
Puis ajoute dans CLAUDE.md un lien vers ce fichier.
```

Ce document évite que Claude réinvente l'organisation à chaque conversation. C'est aussi la première chose que lira un développeur qui reprend le projet.

## Les grands principes d'une application qui vieillit bien

Tu n'as pas à les appliquer toi-même, mais tu peux les exiger de Claude :

- **Un domaine du cahier des charges, un morceau du code.** Les clients, les devis, la facturation… chacun a son coin dans le code, avec le même nom que dans `docs/spec/`. Quand tu parles des devis, Claude sait exactement où regarder.
- **Chaque chose à sa place.** L'affichage, les règles métier et le stockage des données sont séparés. On peut changer l'apparence d'un écran sans risquer de casser un calcul.
- **Une règle, un seul endroit.** Le calcul de la TVA existe une fois, pas dans chaque écran.
- **Des petits morceaux.** Des fichiers courts, chacun avec un rôle clair. Si un fichier fait des milliers de lignes, c'est un signal d'alarme.
- **Des noms clairs**, qui reprennent les mots de ton métier (« devis », « facture »), pas des noms vagues.
- **Des tests sur les règles métier**, pour pouvoir modifier sans crainte.

Tu peux régulièrement demander : « Est-ce que le code respecte toujours docs/ARCHITECTURE.md ? Liste les écarts. »
