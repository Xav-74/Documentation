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
![image](https://github.com/user-attachments/assets/69cb471f-350b-4126-8c2a-9c9529368b4d)
  - Objet parent par défaut ==> Ajout automatique des nouveaux suivis dans un objet de votre système domotique
  - Code postal par défaut ==> Ajout automatique du code postal du destinataire
  - Durée de conservation de l'équipement après livraison (en jours) ==> Suppression automatique de l'équipement X jours après sa livraison

 7. Renseigner les paramètres de notifications si vous souhaitez être informés à chaques changements de statut.
  - Les 2 premières lignes concernent l'envoi des notifications via une commande action
    Vous pouvez utiliser les tags suivants : #nom#, #numColis#, #transporteur#, #statut#, #dernierEtat#, #date#, et #heure#.
  - Les 2 dernières lignes concernent l'envoi des notifications via un scénario
    Vous pouvez utiliser les tags suivants : #nom#, #numColis#, #transporteur#, #statut#, #dernierEtat#, #date#, et #heure#.
    Ils fonctionnent ainsi ; nomdusuivi=#nom# où nomdusuivi est le nom du tag et #nom# la valeur du tag

8. Renseigner les paramètres du widget.
![image](https://github.com/user-attachments/assets/6d2ed179-14e7-470c-8243-cffcd2b68736)
3 choix possibles :
  - Aucun widget
  - Un widget par colis :
![image](https://github.com/user-attachments/assets/ca6b3732-9fc9-44c1-a231-df8c57c7969b)

  - Un widget unique :
![image](https://github.com/user-attachments/assets/6c5a2929-9479-47b5-a4ab-e3ebf3066933)

9. Sauvegarder

## Utilisation
1. Lancer le plugin qui se trouve dans la catégorie Organisation.
2. Ajouter un équipement, comme n'importe quel équipement sous Jeedom.
3. Indiquer le nom de votre colis.
4. Renseigner le numéro du colis, son pays et code postal de destination, sauf si les informations sont déjà pré-remplies.
5. Sauvegarder.
6. Si vous ne voulez pas attendre l'actualisation automatique, vous pouvez la forcer en cliquant sur "Synchronisation". Attention, il n'y aura pas de notification si l'acutalisation est forcée via ce bouton.
