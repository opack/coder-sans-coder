# 1. Ton rôle : maître d'ouvrage {#chapitre-01}

::: info En une phrase
Claude construit. Toi, tu décides quoi construire, tu expliques ton métier et tu vérifies que le résultat est bon.
:::

## Ce que Claude fait très bien

- **Écrire du code**, vite, dans à peu près n'importe quel langage.
- **Expliquer** : ce que fait un morceau de l'application, pourquoi une erreur apparaît, quelles options existent.
- **Proposer** des solutions techniques, avec leurs avantages et leurs inconvénients.
- **Exécuter des tâches répétitives** sans se lasser : écrire des tests, renommer, réorganiser.
- **T'interviewer** pour t'aider à clarifier ce que tu veux.

## Ce que Claude fait mal (et qu'il faut compenser)

| Faiblesse | Ce que ça donne | Ce que tu fais |
| --- | --- | --- |
| Il ne connaît pas ton métier | Il invente des règles qui ont l'air logiques mais qui sont fausses | Tu écris les règles noir sur blanc ([chapitre 4](/guide/04-cahier-des-charges)) |
| Il veut te faire plaisir | Il dit « c'est fait » ou « c'est corrigé » trop vite | Tu exiges des preuves : des tests qui passent ([chapitre 11](/guide/11-tests)) |
| Sa mémoire est limitée | Dans une longue conversation, il oublie le début | Une conversation par sujet ([chapitre 9](/guide/09-conversations)) |
| Il ne se souvient de rien d'une fois sur l'autre | Il faut tout lui réexpliquer à chaque nouvelle conversation | Le CLAUDE.md et le cahier des charges sont sa mémoire ([chapitre 6](/guide/06-claude-md)) |
| Il ajoute sans ranger | L'application grossit en désordre jusqu'à devenir impossible à faire évoluer | Une architecture décidée au départ, et des relectures ([chapitres 5](/guide/05-stack-et-architecture) et [12](/guide/12-relecture)) |
| Il ne voit pas ce que tu ne lui montres pas | Il corrige un symptôme, pas la cause | Tu donnes le contexte : captures, étapes, résultat attendu ([chapitre 10](/guide/10-formuler)) |

## L'analogie du chantier

Imagine que tu fais construire une maison.

- Tu ne poses pas les briques toi-même, mais tu sais **ce que tu veux** : combien de chambres, où va la cuisine, quel budget.
- Tu fais faire **des plans avant de couler le béton**, parce qu'un mur porteur mal placé ne se déplace pas facilement.
- Tu **visites le chantier** régulièrement et tu vérifies que ce qui est construit correspond aux plans.
- À la fin, tu fais la **réception des travaux** : tu testes chaque robinet, chaque prise, avant de signer.

Avec Claude, c'est pareil. Le cahier des charges, ce sont les plans. L'architecture technique, ce sont les fondations. Les tests, c'est la réception des travaux.

## Ce que tu n'as pas besoin de faire

Tu n'as **pas besoin de lire le code**. Tu n'as pas besoin de comprendre comment il marche ligne par ligne. En revanche, tu dois :

- savoir **ce que l'application doit faire**, dans les moindres détails de ton métier ;
- savoir **demander** à Claude de t'expliquer ce qu'il a fait, en français ;
- savoir **vérifier** que ça marche, avec des tests et en essayant toi-même.

::: tip Le bon réflexe
Quand tu ne comprends pas quelque chose que Claude a fait ou proposé, demande-lui : « Explique-moi ça comme si je n'étais pas développeur, et dis-moi quelles sont les conséquences pour moi. » Il est très bon à cet exercice.
:::

## Savoir quand demander de l'aide humaine

Claude peut beaucoup, mais certaines décisions méritent l'avis d'un développeur expérimenté :

- le **choix des fondations techniques** au démarrage ([chapitre 5](/guide/05-stack-et-architecture)) ;
- tout ce qui touche à la **sécurité** et aux **données de tes clients** ([chapitre 13](/guide/13-securite)) ;
- la **mise en ligne** d'une application utilisée par de vrais clients ([chapitre 15](/guide/15-mise-en-ligne)) ;
- quand tu es **bloqué depuis plusieurs jours** sur le même problème ([chapitre 16](/guide/16-quand-ca-coince)).

Une heure d'avis extérieur au bon moment évite des semaines de travail à refaire.
