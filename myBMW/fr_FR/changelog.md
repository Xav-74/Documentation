---
layout: default
title: Plugin myBMW - Changelog
lang: fr_FR
pluginId: myBMW
---

# Important à lire !

**Vous trouverez ci-dessous les notes, les ajouts et les correctifs de chaque version du plugin**

**Remarque** : en cas de mise à jour non listée ici, c'est que celle-ci ne comporte que des changements mineurs du type documentation ou corrections de bugs mineurs.


# 2024-12-18

Corrections suivantes :
 - Bugfix écrasement de l'historique des trajets si la requête retourne "TripHistoryNotActive" par erreur 


# 2024-12-08

Ajout des fonctions suivantes :
 - Prise en compte du captcha imposé par BMW lors de la première connexion (voir doc !!)
 - Affichage des services disponibles en fonction de l'abonnement sur la page "Equipement"

Corrections suivantes :
 - Affichage de l'heure en complément de la date sur les graphiques


# 2024-10-22

Corrections suivantes :
 - Bugfix commandes du panel (sendPOI & vehicleFinder)


# 2024-09-06

Ajout des fonctions suivantes :
 - Prise en charge des nouvelles API BMW et Mini (App mobile v4.7.2)

Corrections suivantes :
 - Bugfix requête sendPOI (modif API)
 - Bugfix requête vehicleFinder (modif API)
 - Bugfix requête lastTrip (prise en compte de l'info "NoTripsYet")


# 2024-07-07

Ajout des fonctions suivantes :
 - Ajout des sessions de charge pour les voitures électriques avec extender (type ELECTRIC_WITH_RANGE_EXTENDER)

Corrections suivantes :
 - Amélioration de l'affichage des posts vers le community
 - Bugfix affichage des messages de services (modif. API)
 - Bugfix requête chargingStatistics (modif API)
 - Bugfix affichage panel et dashboard pour les véhicules de type "mild_hybrid" (API v2) ou "hybrid" (API v1)


# 2024-04-17

Ajout des fonctions suivantes :
 - Ajout d'un boutton permettant la suppression manuelle du token de l'équipement
 - Ajout de la requète OAuth2 settings
 - Ajout de la fonction unset() pour les requêtes cURL (compatibilité PHP 8.x)

Corrections suivantes :
 - Correction de la synchronisation des véhicules suite à la modification des API (méthode SHA256)
 - Bugfix affichage des tuiles pour les voitures électriques avec extender (type ELECTRIC_WITH_RANGE_EXTENDER)


# 2024-04-16

Ajout des fonctions suivantes :
 - Légère modification du design du widget et du panel
 - Panel : passage de l'affichage des sessions de charge du mode tableau au mode graphique
 - Panel : ajout d'un graphique sur les statistiques de conduite (si disponible)
 - Panel : ajout d'un graphique sur les trajets du mois en cours (si disponible)
 - Retour arrière sur le cron : passage de 1 heure à 30 min (notamment pour la récupération des derniers trajets)

Corrections suivantes :
- Bugfix affichage des sessions de charge pour un véhicule thermique
- Correction de l'URL des sessions de charge suite à la modification des API


# 2024-03-14

Ajout des fonctions suivantes :
 - Prise en charge des nouvelles API BMW et Mini v3.11.0
 - Réduction du nombre d'appels aux serveurs BMW (notamment passage du cron30 au cronHourly (temporairement ou pas))
 - Ajout de la requête API "lastTrips". Un nouveau graphique arrivera plus tard dans le panel

Corrections suivantes :
 - Historisation par défaut des 3 commandes nécessaires aux graph du panel lors de leur création
 - Suppression de la requête "chargingStatistics" qui ne fonctionne plus à date


# 2024-02-09

Ajout des fonctions suivantes :
 - Ajout de l'image du véhicule dans les vignettes de la page du plugin

Corrections suivantes :
 - Mise à jour du bouton pour la création automatique d'un post sur le Community Jeedom (vCore Jeedom 4.4 mini)
 - Update des screenshots du plugin
 

# 2024-01-31

Corrections suivantes :
 - Correction des km restants pour les voitures électriques avec extender (type ELECTRIC_WITH_RANGE_EXTENDER)
 

# 2023-11-30

Corrections suivantes :
 - Gestion de l'erreur "429 - Rate limit is exceeded"
 - Affichage du panel même si l'équipement n'est pas visible 


# 2023-11-19

Ajout des fonctions suivantes :
 - Compatibilité Jeedom v4.4 Debian 12 et PHP 8.x
 - Prise en charge des nouvelles API BMW et Mini v3.9.0
 - Ajout d'un bouton pour la création automatique d'un post sur le Community Jeedom (vCore Jeedom 4.4 mini)


# 2023-10-10

Ajout des fonctions suivantes :
 - Prise en compte du thème Legacy pour l'affichage du widget et du panel (vCore Jeedom < 4.4)

Corrections suivantes :
 - Retour arrière sur le passage du volume de carburant restant de litres à % suite à la modification des API. Les 2 options sont désormais possibles et dépendent du véhicule
 - Correction de la commande « sessions de charge » qui renvoyait un json invalide si le véhicule n’était pas de type électrique ou hybride


# 2023-10-04

Ajout des fonctions suivantes :
 - Prise en charge des nouvelles API BMW et Mini v3.3.1
 - Refonte du widget avec un retour à un design plus traditionnel / conventionnel pour ne pas surcharger inutilement le dashboard, et centré uniquement sur les infos / actions importantes
 - Ajout d’un panel beaucoup plus complet avec notamment des graphs sur le kilométrage, le volume de carburant et la batterie. Pour cela vous devez cocher l’option « panel » dans la configuration du plugin et activer l’historisation des commandes « kilométrage », « carburant » et/ou « batterie ». Le panel est personnalisable depuis la page de configuration de l'équipement (icone / texte état ouverture portes fenêtres, couleurs,…)
 - Ajout de l'historique de charges sur le mois en cours avec la puissance consommée et le coût approximatif si paramétré dans l'app BMW ou Mini
 - Ajout des informations sur la charge dans les données brutes
 - Ajout des boutons start / stop recharge pour les véhicules électriques
 - Possibilité d’afficher le password sur l’équipement
 - Début de compatibilité Jeedom v4.4

Corrections suivantes :
 - Correction de l’affichage du widget sur un smartphone / tablette en mode desktop (enfin sic!)
 - Ajout de logs supplémentaires en cas de debug lors du refresh du token
 - Passage du volume de carburant restant de litres à % suite à la modification des API
 - Optimisation de l'affichage des messages de contrôles ou services (si description vide)
 - Correction de la fonction "VehicleFinder" suite à la modification des API. Utilisation de la dernière position connue du véhicule car il est désormais nécessaire d'envoyer les coordonnées GPS du demandeur de la localisation du véhicule. La position n'est renvoyée qui si le véhicule se situe dans un rayon inférieur à 1.5km


# 2023-01-15

Ajout des fonctions suivantes :
 - Prise en charge des nouvelles API BMW et Mini v2.12
 - Ajout de la pression et de la consigne de gonflage des pneus (Attention, la fonctionnalité dépend des véhicules. Les informations sur le widget ne sont visibles que si disponibles)
 - Ajout de l’icône et prise en compte des messages concernant le liquide lave-glace

Corrections suivantes :
 - Ajustement de la vue véhicule (vue de profil 3/4 pour tous les véhicules - nécessite une nouvelle synchro et un vidage du cache)
 - Modification du message du temps restant pour la recharge des véhicules électriques
 - Mise à jour de la documentation


# 2022-09-25

Ajout des fonctions suivantes :
 - Ajout de la présence du véhicule au domicile
 - Ajout de la distance entre le véhicule et le domicile
 - Prise en compte des messages concernant les plaquettes de freins et l'usure des pneumatiques
 - Suppression des 2 commandes « unité de distance » et « unité de carburant » (non utilisées)
 - Nouvel affichage du tableau des commandes de l'équipement (compatibilité core Jeedom v4.3)
 

Corrections suivantes :
 - Suppression du « ou » dans le titre des messages services si pas de date
 - Correction de la couleur bleue des icones font-awesome du widget flatdesign
 - Correction de l'API pour la récupération des "status event" (suppression du checkauth)
 - Mise à jour de la documentation
 

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
  