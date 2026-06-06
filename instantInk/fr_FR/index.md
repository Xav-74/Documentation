---
layout: default
title: Plugin HP instantInk - Documentation
lang: fr_FR
pluginId: instantInk
---

# Présentation

Ce plugin vous permet de récupérer les informations de votre abonnement instantInk et de vos imprimantes HP.

> **Tip**
>
> La **version minimale de Jeedom** nécessaire au bon fonctionnement du plugin est la **version 4.4**
> Le plugin est compatible avec les **versions Debian 11 & 12**


# Installation

Le plugin s'installe comme n'importe quel autre plugin sur Jeedom, via le Market.


# Configuration

1. Une fois installé et activé, sur la page de configuration, vous devez saisir un token **sessionId**
2. Ouvrez [portal.hpsmart.com](https://portal.hpsmart.com) dans votre navigateur et connectez-vous
3. Appuyez sur **F12** pour ouvrir les DevTools 
4. Allez dans l'onglet **Application** (Chrome) ou **Stockage** (Firefox)
5. Dans le panneau latéral : **Cookies → https://portal.hpsmart.com**
6. Trouvez le cookie **shell-session-id** et copiez sa valeur complète
7. Collez-la dans le champ correspondant et cliquez sur **Connexion**
   <br/>Ce token est valable 90 jours. Jeedom vous avertira quand il faudra le renouveler manuellement
8. En cas de souci de connexion, vous avez la possibilité de supprimer les tokens préalablement récupérés via le bouton **Suppression tokens**
9. Renseignez les paramètres optionnels du plugin :
 - Cron personnalisé (valeur conseillée : 1h minimum)
10. Sauvegardez

<br/>![Config instantInk](../images/config_instantInk.png)<br/>

> **Tip**
>
> Pour faciliter une demande d'aide à distance, il est conseillé de régler les logs en **mode debug**. 


# Utilisation
1. Lancez le plugin qui se trouve dans la catégorie **Objets connectés** du menu **Plugins**
2. Cliquez sur le bouton **Synchroniser**
3. Votre imprimante apparait dans la liste
4. Cliquez sur l'icône de votre imprimante et saisissez son adresse IP dans le champ prévu à cet effet 
5. Sauvegardez

<br/>![Equipement instantInk](../images/eqt_instantInk.png)<br/>


# Commandes

Il existe actuellement plusieurs commandes qui sont décrites ci-dessous.

## Info

- **Nombre pages plan** : le nombre de pages prévues dans votre forfait
- **Nombre pages max report plan** : le nombre de pages maximum reportées d'une période à l'autre
- **Prix plan** : le prix mensuel de votre forfait
- **Nombre pages additionnelles max plan** : le nombre de pages maximum autorisées en mode hors forfait
- **Période** : la période en cours du forfait
- **Nombre pages imprimées période** : le nombre de pages imprimées sur la période
- **Nombre pages imprimées report période** : le nombre de pages reportées imprimées sur la période
- **Nombre pages report max période** : le nombre de pages reportées sur la période
- **Nombre pages additionnelles imprimées période** : le nombre de pages hors forfait imprimées sur la période
- **Prix période** : le prix actuel de la période
- **Statut cartouche noire** : le niveau d'encre actuel de la cartouche noire (%)
- **Statut cartouche cyan** : le niveau d'encre actuel de la cartouche cyan (%)
- **Statut cartouche magenta** : le niveau d'encre actuel de la cartouche magenta (%)
- **Statut cartouche jaune** : le niveau d'encre actuel de la cartouche jaune (%)
- **Dernière mise à jour** : la date et l'heure de la dernière mise à jour des informations
- **Historique** : l'ensemble des informations du forfait (pages imprimées et prix) sur les 12 derniers mois

> **Tip**
>
>Si vous ne souhaitez pas afficher l'historique sur le widget, il suffit de décocher la case **Afficher** de cette commande.

## Action

- **Rafraichir** : met à jour l'ensemble des informations de l'imprimante et du forfait
- **Obtenir historique** : permet de récupérer l'historique du forfait sur les 12 derniers mois


# Dashboard

Le plugin inclut un widget personnalisé qui permet d'afficher l'ensemble des informations du forfait et de l'imprimante.

![widget](../images/widget_instantInk.png)

Vous avez la possibilité de rafraichir les informations (icône <i class="fas fa-sync" style="width:15px; height:15px"></i>) ou l'historique (icône <i class="far fa-chart-bar" style="width:15px; height:15px"></i>) depuis le widget directement.


# Rafraichissement

## Automatique

Comme indiqué dans la page de configuration du plugin :
- un **CRON quotidien** est automatiquement créé sur une base quotidienne (à 00h00) pour la mise à jour de l'historique du forfait
- un **CRON personnalisé** est automatiquement créé pour la récupération des informations du forfait et de l'imprimante (minimum 1h conseillé)

## Manuel

Vous pouvez à tout moment utiliser la commande **Rafraichir** ou la commande **Obtenir historique** afin d'actualiser les informations du forfait et de l'imprimante.


# Roadmap & support

Ce plugin évoluera au fil du temps en fonction de vos demandes et des possibilités des API instantInk.

Les prochaines versions verront arriver les features suivantes :
- ...

> **Tip**
>
>Vous pouvez faire votre demande d'amélioration en créant une issue "enhancement" sur [GitHub](https://github.com/Xav-74/instantInk/issues/new).
>N'hésitez pas non plus à venir échanger sur ce plugin sur le Community Jeedom !

En cas de dysfonctionnement, vous pouvez créer directement un sujet sur le Community depuis la page principale du plugin. Les informations utiles de Jeedom et du plugin sont automatiquement ajoutées. N'hésitez pas également à copier les logs instantInk (mode debug) pour une résolution plus rapide !

![Community](../images/community.png)