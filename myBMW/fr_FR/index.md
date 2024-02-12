---
layout: default
title: Plugin My BMW - Documentation
lang: fr_FR
pluginId: myBMW
---

# Présentation 

Ce plugin vous permet d'interagir avec votre véhicule **BMW** ou **Mini** équipé des services Connected Drive, au même titre que l’application officielle “My BMW” ou "Mini".


# Principe 

Ce plugin interagit avec les API BMW Connected Drive au travers du cloud, par conséquent **ce plugin nécessite une connexion Internet**.
 
Il faut également détenir un abonnement en cours de validité aux services BMW Connected Drive pour votre véhicule ainsi qu'un compte utilisateur valide pour l'application "My BMW" ou "Mini".


# Configuration du plugin

Après téléchargement du plugin, il vous suffit juste d’activer celui-ci, il n’y a aucune configuration supplémentaire à ce niveau.

> **Tip**
>
> Pour faciliter une demande d'aide à distance, il est conseillé de régler les logs en **mode debug**. 


![Configuration](../images/Config_myBMW.png)


# Ajout d'un véhicule

La configuration des équipements MyBMW est accessible à partir du menu Plugin > Objets connectés.


![Ajout véhicule](../images/Plugin_myBMW.png)


Cliquez sur la commande Ajouter pour créer un nouveau véhicule. Une fois ajouté vous vous retrouvez avec :

-   **Nom de l’équipement** : nom de votre véhicule

-   **Objet parent** : indique l’objet parent auquel appartient l’équipement

-   **Catégorie** : la catégorie de l’équipement

-   **Activer** : permet de rendre votre équipement actif

-   **Visible** : rend votre équipement visible sur le dashboard

-   **Identifiant** : indiquez votre identifiant My BMW que vous utilisez pour vous connecter sur l'application "My BMW" ou "Mini"

-   **Mot de passe** : indiquez votre mot de passe

-   **Marque** : indiquez la marque de votre véhicule (BMW ou Mini)

-   **VIN** : indiquez le numéro VIN ou Vehicle Identification Number (Numéro d’identification du véhicule). Vous pouvez retrouver ce numéro en case E de votre carte grise. Ce numéro est composé de 17 caractères.

-   **Affichage état portes / fenêtres** : vous avez le choix entre 2 options pour l'affichage de l'état des portes et des fenêtres sur le panel : le mode texte ou le mode icône.

-   **Couleur des icônes portes / fenêtres** : si vous avez choisi le mode icône, vous pouvez également décider de la couleur des icônes (vert ou noir & blanc).

-   **Domicile (présence)** : vous disposez de 3 possibilités pour indiquer les coordonnées GPS de votre domicile : soit en utilisant les coordonnées renseignées dans Jeedom, soit en utilisant les coordonnées actuelles du véhicule, soit en renseignant manuellement la latitude et la longitude.

-   **Distance max (en m)** : indiquez la distance maximale en mètre entre votre domicile et le véhicule pour que celui-ci soit considéré comme présent à votre domicile. 


Il vous suffit ensuite de cliquer sur le bouton **Synchroniser** pour récupérer les informations de votre véhicule. Si celles-ci sont disponibles, vous obtiendrez le modèle, l'année, le type de motorisation ainsi qu'une image de votre véhicule.

> **Tip**
>
> N'oubliez pas de **sauvegarder** vos informations !
>
> Lors de la sauvegarde, de nouvelles commandes vont se créer sur l'équipement.


![Equipement](../images/Eqpt_myBMW.png)


# Données brutes

Pour faciliter le debug en cas de problème, vous avez la possibilité de récupérer les données brutes de votre véhicule en cliquant sur le bouton **Données brutes**. Attention, avant de les copier sur le forum par exemple, pensez à masquer les informations sensibles comme le numéro de VIN par exemple !


# Commandes

Il existe actuellement plusieurs commandes qui sont décrites ci-dessous.

> **Tip**
>
>Si la commande renvoie "not available", c'est que l'information correspondante n'est pas présente sur votre véhicule.

## Info

-   **Marque**
-   **Modèle**
-   **Année**
-   **Type** : électrique, thermique ou hybride
-   **Kilométrage** : kilométrage total du véhicule
-   **Verrouillage** : remonte l'état de verrouillage du véhicule
-   **Statut porte conducteur avant**
-   **Statut porte conducteur arrière**
-   **Statut porte passager avant**
-   **Statut porte passager arrière**
-   **Statut toutes les portes**
-   **Statut fenêtre conducteur avant**
-   **Statut fenêtre conducteur arrière**
-   **Statut fenêtre passager avant**
-   **Statut fenêtre passager arrière**
-   **Statut toutes les fenêtres**
-   **Statut coffre**
-   **Statut capot moteur**
-   **Statut toit ouvrant**
-   **Pression pneu avant gauche**
-   **Consigne de gonflage pneu avant gauche**
-   **Pression pneu avant droit**
-   **Consigne de gonflage pneu avant droit**
-   **Pression pneu arrière gauche**
-   **Consigne de gonflage pneu arrière gauche**
-   **Pression pneu arrière droit**
-   **Consigne de gonflage pneu arrière droit**
-   **Etat de la charge** (uniquement sur véhicule électrique ou hybride)
-   **Etat de la prise** (uniquement sur véhicule électrique ou hybride)
-   **Heure de fin de charge** (uniquement sur véhicule électrique ou hybride)
-   **Charge restante** (uniquement sur véhicule électrique ou hybride)
-   **Km restant (électrique)** (moteur électrique et/ou hybride)
-   **Carburant restant** (uniquement sur véhicule thermique ou hybride)
-   **Km restant (thermique)** (moteur thermique)
-   **Messages** : remonte les messages affichés dans le véhicule (contrôle et services)
-   **Sessions de charges** : remonte les statistiques de charges électriques des batteries sur le mois en cours (uniquement sur véhicule électrique ou hybride)
-   **Charge électrique totale** : donne la charge électrique totale utilisée sur le mois en cours (uniquement sur véhicule électrique ou hybride)
-   **Coordonnées GPS** : remonte la position du véhicule sour la forme "latitude,longitude"
-   **Dernière mise à jour** : donne la date et l'heure de la dernière connexion entre la voiture et les serveurs BMW
-   **Statut Déverrouiller** : renvoie le dernier statut recu lors d'une demande de déverrouillage. Si l'action a correctement été effectuée, le statut passe à de "PENDING" à "EXECUTED". Sinon renvoie "ERROR"
-   **Statut Verrouiller**
-   **Statut Charger**
-   **Statut Stop charger**
-   **Statut Ventiler**
-   **Statut Stop Ventiler**
-   **Statut Appel de phares**
-   **Statut Klaxonner**
-   **Statut Rechercher**
-   **Statut Envoi POI**
-   **Présence domicile** : indique si votre véhicule est situé à votre domicile (1 = présent, 0 = absent) en fonction de la distance maximale renseignée
-   **Distance domicile** : indique la distance (en m ou km) entre le véhicule et votre domicile


## Action

-   **Rafraichir** : met à jour l'ensemble des informations du véhicule 

-   **Verrouiller** : permet de verrouiller la voiture à distance

-   **Déverrouiller** : permet de déverrouiller la voiture à distance

-   **Charger** : permet de démarrer la charge du véhicule

-   **Stop charger** : permet de stopper la charge du véhicule

-   **Ventiler (Start)** : permet de démarrer le système de ventilation à la température réglée dans le véhicule

-   **Ventiler (Stop)** : permet de stopper le système de ventilation à la température réglée dans le véhicule

-   **Appel de phares** : déclenche un appel de phare

-   **Klaxonner** : déclenche un avertissement sonore

-   **Rechercher** : localise le véhicule en temps réel et l'affiche sur une carte googlemaps

-   **Envoi POI** : envoi d'un point d'intérêt (POI) dans le centre de messages du véhicule en saisissant le nom, la latitude et la longitude du lieu


# Dashboard

Le plugin inclut un widget personnalisé qui permet d'afficher l'ensemble des informations essentielles du véhicule.

![Widget myBMW](../images/Widget_myBMW.png)


# Panel

Si vous avez coché l'option **Afficher le panneau desktop** dans la page de configuration du plugin, vous pourrez afficher un panel dédié à votre véhicule et regroupant l'ensemble des informations disponibles dans ce plugin. Il est accessible via le menu **Accueil \ My BMW**

![Panel myBMW](../images/Panel_myBMW_1.png)
![Panel myBMW](../images/Panel_myBMW_2.png)

> **Tip**
>
> Pour que les graphiques s'affichent, n'oubliez de cocher l'option **Historiser** des 3 commandes suivantes : Kilométrage, Charge restante et Carburant restant.


# Rafraichissement

## Automatique

Un CRON est automatiquement créé sur base de 30 min comme indiqué dans la configuration du plugin.

**Attention** : cette valeur de 30 min pourra être amenée à évoluer en fonction du retour et des demandes des utilisateurs ainsi que du nombre de requêtes autorisées par BMW sur leurs serveurs !


## Manuel

Vous pouvez à tout moment utiliser la commande **Rafraichir** afin de rafraichir les statuts de véhicule.


# Roadmap & support

Ce plugin évoluera au fil du temps en fonction de vos demandes et des possibilités des API BMW Connected Drive.

Les prochaines versions verront arriver les features suivantes :

-   ...
-   Traduction du plugin en anglais

> **Tip**
>
>Vous pouvez faire votre demande d'amélioration en créant une issue "enhancement" sur [GitHub](https://github.com/Xav-74/myBMW/issues/new).
>
>N'hésitez pas non plus à venir échanger sur ce plugin sur le Community Jeedom !


En cas de dysfonctionnement, vous pouvez créer directement un sujet sur le Community depuis la page principale du plugin. Les informations utiles de Jeedom et du plugin sont automatiquement ajoutées. N'hésitez pas également à copier les logs verisure (mode debug) pour une résolution plus rapide !


![Community](../images/community.png)
