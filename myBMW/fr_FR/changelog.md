---
layout: default
title: Plugin myBMW - Changelog
lang: fr_FR
pluginId: myBMW
---

# Important à lire !

**Vous trouverez ci-dessous les notes, les ajouts et les correctifs de chaque version du plugin**

**Remarque** : en cas de mise à jour non listée ici, c'est que celle-ci ne comporte que des changements mineurs du type documentation ou corrections de bugs mineurs.


# 2022-09-02

Ajout des fonctions suivantes :
 - Ajout des nouvelles commandes infos « Toutes les portes » et « Toutes les fenêtres »
 - Nouveau widget « Flat Design » : vous pouvez sélectionner le widget souhaité sur la page de l’équipement (compatible thème dark / light). Ce widget est personnalisable (voir la doc).

Corrections suivantes :
 - Modification du timeout sur le refresh du token pour éviter les erreurs de connexion


# 2022-08-01

Ajout des fonctions suivantes :
 - Ajout d'icônes pour la gestion des messages de contrôle du véhicule (huile, freins, pression des pneus, contrôle général du véhicule)

Corrections suivantes :
 - Bugfix synchronisation si équipement non sauvegardé (save automatique dorénavant)


# 2022-07-25

Ajout des fonctions suivantes :
 - Prise en charge des nouvelles API BMW et Mini v2
 - Ajout des tooltips sur le widget pour connaître l'état des portes / fenêtres

Corrections suivantes :
 - Bugfix refresh token


# 2022-06-12

Ajout des fonctions suivantes :
 - Prise en charge des nouvelles API Mini
 - Fusion des API BMW et Mini et optimisation du code
 - Prise en charge de la langue française au niveau des informations retournées (unités et messages du véhicule)
 - Passage des logs de « debug » à « error » si la requête n’aboutit pas
 - Utilisation du logicalID des équipements en prévision de futurs développements

Corrections suivantes :
 - Bugfix de la fonction CreateCmd
 - Correction des kms restants des moteurs combustion (soustraction des kms restants des moteurs électriques)
 - Affichage de la dernière connexion à « inconnue » si la valeur retourne 01/01/1970
 - Correction du problème d’affichage des messages si ceux-ci contiennent un « ’ »


# 2022-05-28

Corrections suivantes :
 - Modification des API BMW Connected Drive (x-user-agent)
 - Bugfix url image du véhicule si jeedom n'est pas installé à la racine
 - Conversion miles -> kms pour la distance totale


# 2022-04-24

Ajout des fonctions suivantes :
 - Prise en charge du mode "Secured" au niveau du widget (verrouillage)
 - Ajout de la possibilité d'historiser les commandes dans l'onglet Equipement\Commandes
 - Prise en charge de l'affichage d’une info historisée en fond de tuile (core v4.2)
 

# 2022-04-11

Ajout des fonctions suivantes :
 - Ventilation : ajout des modes start / stop
 - Recherche véhicule : localisation du véhicule en temps réel
 - Fonction envoi d'un POI dans les messages de la voiture
 - Test du statut de chaque action pendant 2 minutes ("PENDING" -> "EXECUTED" ou "ERROR") 
 - Ajout des commandes "Status" pour chaque commande action (pour suivi via scénario)
 - Changement des icones actions
 
Corrections suivantes :
 - Bugfix affichage prise déconnectée si valeur false au lieu de 0 sur véhicule électrique
 - optimisation du code


# 2022-03-28

Première version du plugin myBMW
 - Connexion au cloud BMW Connected Drive
 - Récupération des informations du véhicule : état du verrouillage, état des portes & fenêtres, kilométrage total, % de charge et kilomètres restants pour les moteurs électriques, volume de carburant et kilomètres restants pour les moteurs thermiques, localisation du véhicule, messages d'alertes
 - Fonctions disponibles : verrouillage / déverrouillage du véhicule, lancement de la ventilation, appel de phares, klaxon
  