---
layout: default
title: Plugin Verisure - Changelog
lang: fr_FR
pluginId: verisure
---

# Important à lire !

**Vous trouverez ci-dessous les notes, les ajouts et les correctifs de chaque version du plugin**

**Remarque** : en cas de mise à jour non listée ici, c'est que celle-ci ne comporte que des changements mineurs du type documentation ou corrections de bugs mineurs.


# 2021-07-07

Ajout des fonctions suivantes :
 - Ajout des commandes infos / actions pour les devices des alarmes type 2 (température, humidité, état/on/off des prises connectées, ouverture/fermeture des capteurs)
 - Affichage d'une erreur dans le centre de notification Jeedom lors de l'activation de l'alarme avec une porte et / ou fenêtre restées ouvertes
 
 Corrections suivantes :
 - Modifications et correctifs des logs


# 2021-01-06

Ajout des fonctions suivantes :
 - Ajout d'une commande info "Qualité du réseau" pour les alarmes type 1. Cet indicateur est basé sur le nombre de requête réussie lors de la connexion au cloud Verisure
 - Ajout de l'affichage sur le dashboard du niveau d'humidité des smartplugs compatibles pour les alarmes type 2

Corrections suivantes :
 - Nouvelle présentation de la liste des objets (conforme au core v4.1)
 - Bug sur la timezone (UTC) du rapport d'activité des alarmes type 2 (basé dorénavant sur la timezone de Jeedom) 
 - Correction des erreurs dans le log hhtp_error lors de l'affichage du rapport d'activité des alarmes type 1


# 2020-11-06

Correctifs suite aux modifications des API Verisure (authentification et paramètres des requêtes)


# 2020-10-13

Ajout des fonctions suivantes :
 - Prise en charge des alarmes Verisure présentes en Belgique et Europe du Nord. La commande "Demande Images" n'est pas encore fonctionnelle pour ce type de matériel
 - Possibilité de masquer certaines commandes sur le widget (Demande images, activation en mode nuit, activation en mode jour, activation en mode extérieur)
 - Mise à jour des icônes du rapport d'activité

Corrections suivantes :
 - Bug d'affichage Homebridge en mode Nuit et mode Jour (Domicile)
 - Bug d'affichage du rapport d'activité lors de l'activation en mode nuit via une télécommande


# 2020-09-04

Externalisation de la documentation du plugin


# 2020-08-22

Corrections suivantes :
 - Passage des logs "Error" en "Warning" pour éviter de surcharger le centre de message Jeedom
 - Modifications et correctifs mineurs 


# 2020-06-30

Ajout des fonctions suivantes :
 - Prise en compte des modes mixtes (Total + Ext, Nuit + Ext, Jour + Ext)


# 2020-06-14

Ajout des fonctions suivantes :
 - Mise en place d'un template pour le dashboard mobile compatible v3 et v4 (Core2019 Light, Dark & Leagcy)
 

# 2020-06-11

Ajout des fonctions et corrections suivantes :
 - Demandes d'images
 - Gestion de l’exception du cron tous les jours à 0h00 pour éviter un refresh pendant la maintenance des serveurs Versiure
 - Mise en place d'un template pour le dashboard compatible v3 et v4 (Core2019 Light, Dark & Leagcy)
 - Optimisation globale du code
 - Refonte des logs du plugin


# 2020-05-04

Ajout des fonctions suivantes :
 - Accès au journal d'activité Verisure
 - Onglet "Notifications Verisure" pour la mise en place des scénarios de notifications Mail et SMS
  

# 2020-04-15

Première version du plugin Verisure
 - Connexion au cloud Verisure
 - Récupération des informations de l'installation
 - Fonctions : activation en mode total, activation en mode nuit, activation en mode jour, activation en mode extérieur, désactivation, récupération du statut de l'alarme (en manuel ou en automatique (toutes les 30 min))
 - Compatibilité Homebridge
 
 **ATTENTION** : dans cette première version, l'évènement lié au déclenchement de l'alarme n'est pas encore pris en compte !
 

