---
layout: default
title: Plugin Mammotion - Documentation
lang: fr_FR
pluginId: mammotion
---

# Présentation

Ce plugin permet de piloter vos robots tondeuses (Luba, Yuka) et robots piscine (Spino) de la marque **Mammotion** depuis Jeedom, au même titre que l'application officielle.

La remontée des données est **automatique et en temps réel** : le démon du plugin maintient une connexion permanente au cloud Mammotion (MQTT) et pousse chaque changement d'état vers Jeedom.

> **Avertissement**
>
>Ce plugin s'appuie sur la librairie non officielle [PyMammotion](https://github.com/mikey0000/PyMammotion). Les conditions d'utilisation de Mammotion interdisent l'accès non officiel à leur API : utilisez ce plugin à vos risques et périls (risque théorique de bannissement du compte).

<!-- -->

> **Tip**
>
> La **version minimale de Jeedom** nécessaire au bon fonctionnement du plugin est la **version 4.4**
> Le plugin est d'ores et déjà compatible avec la **version 4.6** de Jeedom ainsi que les **versions Debian 12**

# Configuration du plugin

Après téléchargement du plugin :

- Activez le plugin
- Lancez l'installation des dépendances (⚠ la première installation peut être longue : compilation de Python 3.13 via pyenv)
- Renseignez l'**email** et le **mot de passe** de votre compte Mammotion
- Démarrez le démon

> **Tip**
>
>Le cloud Mammotion n'autorise qu'une seule session par compte. Créez un **compte secondaire** dédié à Jeedom et partagez-lui vos robots depuis l'application officielle, sinon l'application mobile sera déconnectée à chaque démarrage du démon (et inversement).

## Paramètres

| Paramètre | Description |
| --------- | ----------- |
| Email | Email du compte Mammotion |
| Mot de passe | Mot de passe du compte Mammotion |
| Port socket interne | Port de communication Jeedom → démon (défaut : 44090) |
| Cron personnalisé | Fréquence de rafraîchissement forcé (défaut : toutes les 15 min) |

# Création des équipements

Les équipements sont créés **automatiquement** :

- Au démarrage du démon, la liste des robots du compte est remontée et les équipements manquants sont créés
- Le bouton **Synchroniser** de la page du plugin force une nouvelle découverte, met à jour les états et récupère la **liste des zones** de tonte et la liste des **activités**.

# Commandes

## Commandes info (tondeuse)

| Commande | Description |
| -------- | ----------- |
| En ligne | Robot connecté au cloud |
| Batterie | Niveau de batterie (%) |
| En charge | Charge en cours |
| Statut | Mode de fonctionnement (MODE_WORKING, MODE_CHARGING, ...) |
| Progression | Progression de la tâche en cours (%) |
| Surface tondue | Surface tondue sur la session (m²) |
| Temps restant / écoulé | Estimation en minutes de la tâche en cours |
| Hauteur de lame | Hauteur de coupe courante (mm) |
| Lames actives | Rotation des lames |
| Détection de pluie | Capteur de pluie actif |
| Coordonnées GPS | Position `latitude,longitude` (vide tant que le robot n'a pas transmis sa référence GNSS, voir FAQ) |
| Orientation | Cap du robot (°) |
| Signal Wifi | RSSI Wifi (dBm) |
| Usure des lames | Temps d'utilisation des lames (h) |
| Distance totale | Distance parcourue depuis la mise en service (km) |
| Temps de travail total | Temps de travail cumulé (h) |
| Cycles batterie | Nombre de cycles de la batterie |
| Firmware | Version du firmware |
| Erreurs | Codes d'erreur actifs |
| Connexion | Type de connexion du robot (WIFI, 3G/4G, BLE) |
| Dernier événement | Journal des événements (tonte démarrée, retour station, charge, mise à jour...). Historisé : consultez l'historique de la commande pour le journal complet |
| Dernière mise à jour | Horodatage de la dernière donnée reçue |

## Commandes action (tondeuse)

| Commande | Description |
| -------- | ----------- |
| Rafraichir | Force une remontée d'état |
| Démarrer | Démarre / reprend la tâche planifiée |
| Pause | Met la tâche en pause |
| Reprendre | Reprend la tâche en pause |
| Annuler la tâche | Annule la tâche en cours |
| Retour station | Renvoie le robot à sa station |
| Quitter la station | Fait sortir le robot de sa station |
| Régler hauteur de lame | Slider 25 → 70 mm (non créée sur la gamme Yuka, comme dans Home Assistant) |
| Régler vitesse | Slider 20 → 60 cm/s (non créée sur la gamme Yuka) |
| Tondre une zone | Lance la tonte de la zone sélectionnée (liste alimentée par la synchronisation) |

## Robot piscine (Spino)

Le support des robots piscine est plus limité en v1 : remontée d'état (en ligne, batterie, statut, vitesse) et commandes de base (démarrer / pause / annuler / retour).

# FAQ

**Le démon ne démarre pas** : vérifiez l'email / mot de passe, puis consultez le log `mammotion_daemon`. En cas d'erreur de dépendances, relancez leur installation. Le démarrage peut prendre 30 à 60 secondes sur Raspberry Pi (chargement de la librairie pymammotion).

**Le modèle / firmware / les zones ne remontent pas** : le robot doit être joignable (le plugin l'interroge et le réveille si besoin lors de la synchronisation). Cliquez sur *Synchroniser* : les zones arrivent quelques secondes après, une fois la carte réellement reçue du robot.

**La commande Coordonnées GPS est vide** : c'est normal après un redémarrage du démon. Le robot ne transmet sa référence de géolocalisation (base RTK ou fix GNSS embarqué pour les modèles vision/LiDAR) que dans certains rapports, généralement lorsqu'il est actif. La commande se remplit dès la prochaine activité du robot. Le plugin préfère une valeur vide à des coordonnées dégénérées (proches du point 0,0 du globe).

**Les données ne remontent pas en temps réel** : le robot ne publie que lorsqu'il est actif ou que son état change. Le cron force par ailleurs un rafraîchissement périodique.

# Roadmap & support

Ce plugin évoluera au fil du temps en fonction de vos demandes et des possibilités des API mammotion.

> **Tip**
>
> Vous pouvez faire votre demande d'amélioration en créant une issue "enhancement" sur [GitHub](https://github.com/Xav-74/mammotion/issues/new).
> N'hésitez pas non plus à venir échanger sur ce plugin sur le Community Jeedom !

En cas de dysfonctionnement, vous pouvez créer directement un sujet sur le Community depuis la page principale du plugin. Les informations utiles de Jeedom et du plugin sont automatiquement ajoutées. N'hésitez pas également à copier les logs mammotion (mode debug) pour une résolution plus rapide !