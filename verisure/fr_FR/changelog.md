---
layout: default
title: Plugin Verisure - Changelog
lang: fr_FR
pluginId: verisure
---

# Important à lire !

**Vous trouverez ci-dessous les notes, les ajouts et les correctifs de chaque version du plugin**

**Remarque** : en cas de mise à jour non listée ici, c'est que celle-ci ne comporte que des changements mineurs du type documentation ou corrections de bugs mineurs.


# 2024-12-31

Ajout des fonctions suivantes :
 - Prise en compte des serrures connectées pour les alarmes de dernière génération (type 3)
 - Optimisation du code (création des commandes)


# 2024-12-13

Corrections suivantes :
 - Correction d'un bug sur la requête "getPhotos" pour les alarmes de dernière génération (type 3)


# 2024-12-08

Corrections suivantes :
 - Correction d'une erreur sur la requête "logout" 
 - Optimisation du code pour php 8.0


# 2024-02-09

Ajout des fonctions suivantes :
 - Ajout de l'image de l'alarme dans les vignettes de la page du plugin

Corrections suivantes :
 - Mise à jour du bouton pour la création automatique d'un post sur le Community Jeedom (vCore Jeedom 4.4 mini)
 - Update des screenshots du plugin
 

# 2024-01-17

Corrections suivantes :
 - Alarme type 1 & 3 : Correctif suite aux modifications des API Verisure et l'apparition de l'erreur "Required request header 'x-installationNumber' not present"


# 2024-01-07

Ajout des fonctions suivantes :
 - Compatibilité officielle des alarmes type 3
 - Fin de support pour les versions de Jeedom 3.x. La version minimale du core nécessaire au bon fonctionnement du plugin est la version 4.0


# 2023-11-19

Ajout des fonctions suivantes :
 - Compatibilité Jeedom v4.4 Debian 12 et PHP 8.x
 - Ajout d'un bouton pour la création automatique d'un post sur le Community Jeedom (vCore Jeedom 4.4 mini)


# 2023-09-11

Corrections suivantes :
 - Affichage du widget sur un smartphone / tablette en mode desktop


# 2023-05-29

Ajout des fonctions suivantes :
 - Toggle pour la visibilité des mots de passe

Corrections suivantes :
 - Alarme type 2 : création des commandes infos "Humidité" pour les détecteurs de fumée


# 2023-05-22

Optimisation du code et des logs

Corrections suivantes :
 - Alarme type 1 : Correction d'un bug de la fonction GetPictures suite à la modification des API
 - Alarme type 2 : Bascule automatique sur le serveur secondaire si le primaire est down mais accepte quand même le login


# 2023-04-11

Correctifs suite aux modifications des API Verisure (Authentification MFA et requêtes - Migration REST API vers GraphQL). Attention, il s'agit donc d'une mise à jour **majeure**. Il vous faudra vous authentifier de nouveau pour chaque alarme créée (type 1 & 2).

Ajout des fonctions suivantes :
 - Prise en charge de la nouvelle génération d'alarme (via le type 1 pour le moment) 
 - Refonte des widgets (compatibilité core Jeedom v4.4)


# 2022-10-18

Ajout des fonctions suivantes :
 - Nouvel affichage du tableau des commandes de l'équipement (compatibilité core Jeedom v4.3)
 - Refonte affichage de la page "Equipement"


# 2022-04-24

Ajout des fonctions suivantes :
 - Demandes d'images pour les alarmes type 2
 
Corrections suivantes :
 - Correction de la hauteur automatique du widget si plusieurs alarmes sur le dashboard
 - Correction d'une erreur dans la fonction SetEqLogic()


# 2022-02-02
 
Corrections suivantes :
 - Correction du bug d'affichage du widget type 2 en v4.2 si le user connecté n'est pas admin


# 2022-01-31

Ajout des fonctions suivantes :
 - Test et validation du plugin pour la version 4.2 du core de Jeedom
 - Sécurisation : cryptage du mot de passe des équipements en BDD Jeedom 
 - Ajout d'un tooltip concernant le numéro d'installation sur la page principale d'un équipement
 - Onglet "Notifications Verisure" : ajout du scénario de notifications SMS
 - Modifications mineures de l'interface (intégration du nouveau mode tableau en v4.2)
 
Corrections suivantes :
 - Correction d'erreurs présentes dans le log http.error de Jeedom (si variable SESSIONID vide)


# 2021-07-07

Ajout des fonctions suivantes :
 - Ajout des commandes infos / actions pour les devices des alarmes type 2 (température, humidité, état/on/off des prises connectées, état (ouvert/fermé) des capteurs d'ouverture)
 - Affichage d'une erreur dans le centre de notification Jeedom lors de l'activation de l'alarme avec une porte ou fenêtre restée ouverte
 
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
 

