# 12. Faire relire par un second Claude

::: info En une phrase
Celui qui a construit n'est pas le mieux placé pour juger. Un Claude « neuf », qui n'a pas vu le raisonnement du premier, repère ce qui a été oublié ou mal fait.
:::

## Pourquoi ça marche

Le Claude qui vient de coder une fonctionnalité est convaincu d'avoir bien fait : il a toute son histoire en tête, ses raisonnements, ses choix. Il a du mal à voir ce qui cloche.

Un second Claude, qui démarre avec une conversation vierge et ne voit **que le résultat**, juge sur pièces. C'est le même principe que la relecture par un collègue.

Tu ne peux pas relire le code, mais tu peux organiser cette relecture.

## Trois façons de faire

### 1. La relecture intégrée

Claude Code propose une commande de relecture : `/code-review`. Elle fait examiner les changements en cours par un Claude séparé, qui cherche les bugs et renvoie ses remarques.

### 2. Le relecteur sur mesure

Tu demandes à Claude d'utiliser un « sous-agent » (un Claude auxiliaire, avec sa propre conversation) pour vérifier le travail par rapport à **tes** critères :

```text
Utilise un sous-agent pour relire les changements de cette étape par
rapport à docs/SPEC.md (section [X]). Vérifie que :
- chaque règle de la spec est bien implémentée
- chaque cas particulier a un test
- rien d'autre n'a été modifié en dehors du sujet
- le code respecte docs/ARCHITECTURE.md
Ne signale que les vrais problèmes, pas les préférences de style.
```

### 3. La relecture dans une autre conversation

Ouvre une **nouvelle** fenêtre Claude (ou fais `/clear`), et demande une relecture du dernier travail. Puis rapporte les remarques dans la conversation de travail : « Voici les remarques du relecteur : […]. Corrige ce qui est justifié. »

## Relire aussi les tests

Les tests sont ta garantie, donc ils méritent aussi un contrôle :

```text
Utilise un sous-agent pour relire les tests de [fonctionnalité].
Vérifie que :
- chaque scénario de docs/SPEC.md a son test
- les tests vérifient vraiment le résultat (et pas juste que « ça ne plante pas »)
- les cas limites sont couverts
- aucun test n'a été affaibli ou désactivé
Liste ce qui manque.
```

## Ne pas tout prendre au pied de la lettre

Un relecteur à qui on demande de trouver des problèmes **en trouvera toujours**, même quand le travail est bon. Si tu corriges absolument tout, l'application devient compliquée pour rien.

- Demande-lui de distinguer les **vrais problèmes** (un bug, une règle oubliée, une faille) des **suggestions**.
- Corrige les vrais problèmes.
- Pour les suggestions, demande au premier Claude son avis : « Le relecteur suggère X. Est-ce justifié, ou est-ce de la complication inutile ? »

## Quand faire relire

Pas besoin pour chaque petite retouche. En revanche, systématiquement :

- après une fonctionnalité importante ;
- après une modification des règles de calcul ou de gestion ;
- avant toute mise en ligne ;
- sur tout ce qui touche à la sécurité ([chapitre 13](/guide/13-securite)).
