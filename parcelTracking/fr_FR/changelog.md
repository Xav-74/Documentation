---
layout: default
title: Plugin Suivi Colis - Changelog
lang: fr_FR
pluginId: parcelTracking
---

# Important à lire !

**Vous trouverez ci-dessous les notes, les ajouts et les correctifs de chaque version du plugin**

**Remarque** : en cas de mise à jour non listée ici, c'est que celle-ci ne comporte que des changements mineurs du type documentation ou corrections de bugs mineurs.


# 2024-10-17

Ajout des fonctions suivantes :
 - Ajout des champs "transporteur" et "paramètre additionnel" dans la modale permettant d'ajouter un colis depuis le widget / dashboard

Corrections suivantes :
 - Les dates et heures sont maintenant affichées dans la timezone configurée dans votre Jeedom (widget unique / widget global)
 - Prise en compte des descriptions traduites par 17Track lorsque vous avez paramétré une langue spécifique
 

# 2024-09-28

Ajout des fonctions suivantes :
 - Implémentation d'un webhook récupèrant en temps réel les informations transmises par 17Track. Le cron Hourly est par conséquence désactivé
 - Ajout d'un bouton permettant l'envoi d'une notification de test sur la page de configuration du plugin

> ATTENTION !!!
> Il est impératif d'aller configurer les paramètres du webhook sur votre dashboard 17Track sans quoi vous ne recevrez plus aucune information sur vos colis !


# 2024-09-07

Ajout des fonctions suivantes :
 - Passage des API parcelsapp à 17Track

> ATTENTION !!!
> Il s'agit d'une modification majeure du plugin. Vous devez donc configurer de nouveau celui-ci (notamment intégrer une clé API 17Track) puis recréer l'ensemble de vos colis. Toute la procédure est détaillée dans la documentation. Le gros avantage de cette nouvelle version est que le nombre de suivi passe à 100 colis par mois (la remise à jour du quota a lieu chaque 1er du mois) !


# 2024-08-22

Ajout des fonctions suivantes :
 - Traduction du plugin (anglais, allemand, espagnol, italien, portugais)

Corrections suivantes :
 - Passage des tags en anglais

> ATTENTION !!!
> Vous devez donc modifier le format de vos messages (notifications) et/ou de vos scénarios !


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

  