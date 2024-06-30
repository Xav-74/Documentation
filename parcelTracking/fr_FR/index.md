---
layout: default
title: Plugin Suivi Colis - Documentation
lang: fr_FR
pluginId: parcelTracking
---

# Plugin Suivi Colis
Ce plugin vous permet de suivre vos colis en provenance des principaux transporteurs français et internationaux (La Poste, Mondial Relay, Relais Colis, Colis Privé, Aliexpress, Shein, Amazon, eBay, FedEx, UPS, ...) via l'API de [**Parcelsapp**](https://parcelsapp.com/fr).<br/>
Le plan gratuit de Parcelsapp propose le suivi de 10 colis sur 30 jours glissants. Si vous le souhaitez, vous pouvez prendre un plan supérieur.

## Installation
1. Le plugin s'installe comme n'importe quel autre plugin sur Jeedom via le Market.<br/>

## Configuration
1. Une fois installé et activé, sur la page de configuration, vous devez indiquer Clé API Parcelsapp.
2. Se rendre sur le site [https://parcelsapp.com/dashboard/#/login](https://parcelsapp.com/dashboard/#/login).
3. Créer un compte ou se connecter.
4. Se rendre sur son Dashboard et copier la clé.
  ![image](https://github.com/Xav-74/Documentation/assets/34892335/c3dd4383-6808-4c26-a610-7cca095b89a4)
5. Coller la clé dans la configuration du plugin.
6. Renseigner la langue et les paramètres optionnels.
7. Sauvegarder

## Utilisation
1. Lancer le plugin qui se trouve dans la catégorie Organisation.
2. Ajouter un équipement, comme n'importe quel équipement sous Jeedom.
3. Indiquer le nom de votre colis.
4. Renseigner le numéro du colis, son pays et code postal de destination.
5. Sauvegarder.
6. Si vous ne voulez pas attendre l'actualisation automatique, vous pouvez la forcer en cliquant sur "Synchronisation".
