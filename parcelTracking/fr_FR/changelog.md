---
layout: default
title: Plugin Suivi Colis - Changelog
lang: fr_FR
pluginId: parcelTracking
---

# Important à lire !

**Vous trouverez ci-dessous les notes, les ajouts et les correctifs de chaque version du plugin**

**Remarque** : en cas de mise à jour non listée ici, c'est que celle-ci ne comporte que des changements mineurs du type documentation ou corrections de bugs mineurs.


# 2024-08-23

Ajout des fonctions suivantes :
 - Traduction du plugin (anglais, allemand, espagnol, italien, portugais)

Corrections suivantes :
 - Passage des tags en anglais

> ATTENTION !!!
> Vous devez donc modifier le format de vos messages (notificaitions) et/ou de vos scénarios !


# 2024-08-01

Ajout des fonctions suivantes :
 - Suppression automatique des espaces si présents avant et/ou après le trackingID

Corrections suivantes :
 - Récupération des informations transporteur, origine et destination (différentes clés dans le json suivants les transporteurs)


# 2024-07-27

Ajout des fonctions suivantes :
 - Possibilité d'ajouter ou de supprimer des colis directement depuis les widgets (individuel ou global)
 - Possibilité d'ajouter une clé API secondaire pour le suivi de 10 colis supplémentaires
 - Ajout d'une information dans le centre de message Jeedom lorsque la limite des 10 colis est atteinte (uniquement lors de la synchronisation, et pas lors du refresh)

Corrections suivantes :
 - PHP Warning dans le log http.error lors de l'appel à la fonction buildList()
 - Mise à jour des commandes des équipements lorsque le json "Shipments" est vide


# 2024-07-16

Première version du plugin Suivi Colis (parcelTracking)
 - Connexion au cloud Parcelsapp via API
 - Récupération des informations des colis : satut, transporteur, pays d'origine, pays de destination, étapes de livraison, date de livraison
 - Fonctions disponibles : widget par colis ou global, envoi de notifications via commande et/ou scénario, suppression automatique des colis après une durée définie

  