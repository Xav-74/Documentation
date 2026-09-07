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

La découverte des robots se fait via le bouton **Synchroniser** de la page du plugin. Il interroge le compte Mammotion, crée les équipements manquants, met à jour leur modèle et leur firmware, puis récupère la liste des zones de tonte et la liste des activités.

Lancez-le après le premier démarrage du démon, puis à chaque fois que vous ajoutez un robot à votre compte ou que vous modifiez les paramètres de vos robots, vos zones et/ou activités depuis l'application.

Le type de robot est détecté automatiquement (tondeuse ou piscine) et détermine les commandes créées ainsi que le widget affiché sur le dashboard. Les zones et les activités ne concernent que les tondeuses.

# Commandes — Tondeuse (Luba, Yuka)

## Commandes info

| Commande | Description |
| -------- | ----------- |
| En ligne | Robot connecté au cloud |
| Batterie | Niveau de batterie (%) |
| Statut | Mode de fonctionnement (tonte, charge, retour station, ...) |
| Vitesse | Vitesse de déplacement courante (m/s) |
| En charge | Charge en cours |
| Sur la base | Robot posé sur sa station |
| Progression | Progression de la tâche en cours (%) |
| Surface tondue | Surface tondue sur la session (m²) |
| Zone courante | Nom de la zone en cours de tonte |
| Temps restant / écoulé | Estimation en minutes de la tâche en cours |
| Hauteur de lame | Hauteur de coupe courante (mm) |
| Lames actives | Rotation des lames |
| Détection de pluie | Capteur de pluie actif |
| Coordonnées GPS | Position `latitude,longitude` (vide tant que le robot n'a pas transmis sa référence GNSS, voir FAQ) |
| Orientation | Cap du robot (°) |
| Signal Wifi / Bluetooth / cellulaire | RSSI de chaque lien (dBm) |
| Temps d'utilisation des lames | Usure cumulée des lames (h) |
| Seuil d'usure des lames | Seuil au-delà duquel le remplacement est conseillé (h) |
| Temps restant d'utilisation des lames | Écart entre le seuil et l'usure cumulée (h) |
| Distance totale | Distance parcourue depuis la mise en service (km) |
| Temps de travail total | Temps de travail cumulé (h) |
| Cycles batterie | Nombre de cycles de la batterie |
| Firmware | Version du firmware |
| Erreurs | Codes d'erreur actifs, accompagnés de leur description |
| Connexion | Type de connexion du robot (WIFI, 3G/4G, BLE) |
| Dernier événement | Journal des événements (tonte démarrée, retour station, charge, mise à jour...). Historisé : consultez l'historique de la commande pour le journal complet |
| Consigne hauteur de lame / Consigne vitesse | Dernière valeur réglée via les sliders, réutilisée au lancement d'une tonte |
| Dernière mise à jour | Horodatage de la dernière donnée reçue |

## Commandes action

| Commande | Description |
| -------- | ----------- |
| Rafraichir | Force une remontée d'état |
| Démarrer | Démarre / reprend la tâche planifiée |
| Pause | Met la tâche en pause |
| Reprendre | Reprend la tâche en pause |
| Annuler la tâche | Annule la tâche en cours |
| Retour station | Renvoie le robot à sa station |
| Quitter la station | Fait sortir le robot de sa station |
| Régler hauteur de lame | Slider en mm, par défaut 30 → 70 (non créée sur la gamme Yuka) |
| Régler vitesse | Slider en m/s, par défaut 0.2 → 0.6 (non créée sur la gamme Yuka) |
| Tondre une zone | Lance la tonte de la zone sélectionnée (liste alimentée par la synchronisation) |
| Lancer une activité | Lance une activité programmée dans l'application (liste alimentée par la synchronisation) |

> **Tip**
>
> Les bornes des deux sliders sont ajustées automatiquement d'après les capacités remontées par votre modèle : les valeurs ci-dessus ne sont que les valeurs de repli.

Un widget dédié est fourni pour le robot tondeuse, avec les 7 (Yuka) ou 9 (Luba) boutons de commande et les informations principales.

# Commandes — Robot piscine (Spino)

## Commandes info

| Commande | Description |
| -------- | ----------- |
| En ligne | Robot connecté au cloud |
| Batterie | Niveau de batterie (%) |
| En charge | Charge en cours |
| Statut | État du robot : En veille, Préparation, Attente de mise à l'eau, Nettoyage en cours, Retour à la station, En charge, Départ de la station, Rappel en cours |
| Mode de nettoyage | Mode actif : Complet, Sol, Parois, Eco — ou *Aucun* lorsque le robot ne nettoie pas (voir FAQ) |
| Signal Wifi | RSSI Wifi (dBm) |
| Signal Bluetooth | RSSI Bluetooth (dBm) |
| Wifi connecté | Liaison Wifi établie |
| Firmware | Version du firmware |
| Dernière mise à jour | Horodatage de la dernière donnée reçue |

## Commandes action

| Commande | Description |
| -------- | ----------- |
| Rafraichir | Force une remontée d'état |
| Nettoyage complet | Nettoyage du fond et des parois (mode **ALL** de l'application) |
| Nettoyage du sol | Fond du bassin uniquement (**FLOOR**) |
| Nettoyage des parois | Parois uniquement (**WALL**) |
| Nettoyage éco | Balayage de la surface (**ECO**) |
| Arrêt et retour en charge | Interrompt le nettoyage en cours et renvoie le robot se recharger (bouton *recharge* de l'application) |

> **Tip**
>
> Les 4 modes correspondent exactement aux 4 boutons de l'écran d'accueil de l'application Mammotion. D'autres modes existent dans le protocole (ligne d'eau, personnalisé) mais ne sont pas encore disponibles.

Un widget dédié est fourni pour le robot piscine, avec les 5 boutons de commande et les informations principales.

# FAQ

**Le démon ne démarre pas** : vérifiez l'email / mot de passe, puis consultez le log `mammotion_daemon`. En cas d'erreur de dépendances, relancez leur installation. Le démarrage peut prendre 30 à 60 secondes sur Raspberry Pi (chargement de la librairie pymammotion).

**Le modèle / firmware / les zones ne remontent pas** : le robot doit être joignable (le plugin l'interroge et le réveille si besoin lors de la synchronisation). Cliquez sur *Synchroniser* : les zones arrivent quelques secondes après, une fois la carte réellement reçue du robot.

**La commande Coordonnées GPS est vide** : c'est normal après un redémarrage du démon. Le robot ne transmet sa référence de géolocalisation (base RTK ou fix GNSS embarqué pour les modèles vision/LiDAR) que dans certains rapports, généralement lorsqu'il est actif. La commande se remplit dès la prochaine activité du robot. Le plugin préfère une valeur vide à des coordonnées dégénérées (proches du point 0,0 du globe).

**Les données ne remontent pas en temps réel** : le robot ne publie que lorsqu'il est actif ou que son état change. Le cron force par ailleurs un rafraîchissement périodique.

**Spino : le Mode de nettoyage affiche « Aucun »** : c'est le comportement normal au repos. Un Spino à l'arrêt ne déclare aucun mode actif dans ses messages d'état. Fiez-vous à la commande **Statut** pour savoir si le robot travaille.

**Spino : pourquoi n'y a-t-il pas de bouton Pause ?** : le protocole du robot n'en propose pas. Pour interrompre un cycle, utilisez *Arrêt et retour en charge*.

# Roadmap & support

Ce plugin évoluera au fil du temps en fonction de vos demandes et des possibilités des API mammotion.

> **Tip**
>
> Vous pouvez faire votre demande d'amélioration en créant une issue "enhancement" sur [GitHub](https://github.com/Xav-74/mammotion/issues/new).
> N'hésitez pas non plus à venir échanger sur ce plugin sur le Community Jeedom !

En cas de dysfonctionnement, vous pouvez créer directement un sujet sur le Community depuis la page principale du plugin. Les informations utiles de Jeedom et du plugin sont automatiquement ajoutées. N'hésitez pas également à copier les logs mammotion (mode debug) pour une résolution plus rapide !
