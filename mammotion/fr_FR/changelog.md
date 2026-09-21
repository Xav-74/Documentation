---
layout: default
title: Plugin Mammotion - Changelog
lang: fr_FR
pluginId: mammotion
---

# Important à lire !

**Vous trouverez ci-dessous les notes, les ajouts et les correctifs de chaque version du plugin**

**Remarque** : en cas de mise à jour non listée ici, c'est que celle-ci ne comporte que des changements mineurs du type documentation ou corrections de bugs mineurs.


# 2026-09-21 [+]

Passage en stable de la version beta 2026-09-19
Première version stable du plugin

Attention : la version minimum nécessaire de Jeedom est la v4.4 et Debian 11 !


# 2026-09-19 [~]

Nouveautés :
- Ajout des commandes "hibernation" et "set_hibernation" pour affichage sur le widget et utilisation dans un scénario

Corrections :
- Amélioration des images des robots 


# 2026-09-17 [~]

Nouveautés :
- Ajout du mode hivernage
- Ajout des historiques depuis les widgets
- Zones et activités triées par ordre alphabétique

Corrections :
- Bugfix : modèle absent pour les Spino
- Bugfix : erreur lors de la synchro pour les Spino (device_limits)


# 2026-09-08 [~]

Nouveautés :
- Refonte de la partie "Spino" avec prise en charge des commandes actions
- Widget dédié pour les robots "Spino"


# 2026-07-10 [~]

Première version du plugin Mammotion (mammotion)
- Support des robots tondeuses Luba / Yuka et robots piscine Spino (état)
- Auto-découverte des équipements
- Remontée temps réel des données via le cloud Mammotion (MQTT)
- Récupération des zones de tonte
- Récupération des activités
- Commandes infos : batterie / charge / statut / vitesse / progression / surface / type de connexion / force du signal ...
- Commandes actions : démarrer / pause / reprendre / annuler / retour et sortie de station / hauteur de lame / vitesse / tonte par zone / tonte par activité