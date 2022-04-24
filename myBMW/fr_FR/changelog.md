---
layout: default
title: Plugin myBMW - Changelog
lang: fr_FR
pluginId: myBMW
---

# Important à lire !

**Vous trouverez ci-dessous les notes, les ajouts et les correctifs de chaque version du plugin**

**Remarque** : en cas de mise à jour non listée ici, c'est que celle-ci ne comporte que des changements mineurs du type documentation ou corrections de bugs mineurs.


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
  