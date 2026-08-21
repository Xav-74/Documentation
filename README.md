# Documentation des plugins Jeedom — Xav-74

Site Jekyll publié sur GitHub Pages : https://xav-74.github.io/Documentation/

## Organisation

```
_config.yml            configuration du site et liens Jeedom
_data/plugins.yml      liste des plugins (accueil, navigation, recherche)
_data/widgets.yml      liste des widgets (même format)
_layouts/              default (page de doc), home (accueil), redirect
_includes/             head, topbar, footer
assets/css/theme.css   thème sombre
assets/js/doc.js       sommaire, recherche, menu mobile, zoom images
<plugin>/fr_FR/        index.md (documentation) + changelog.md
<plugin>/images/       captures et icône du plugin
```

## Ajouter un plugin

1. Créer `monPlugin/fr_FR/index.md` et `monPlugin/fr_FR/changelog.md` avec l'en-tête :

```yaml
---
layout: default
title: Plugin Mon Plugin - Documentation
lang: fr_FR
pluginId: monPlugin
---
```

2. Déposer l'icône dans `monPlugin/images/`.
3. Ajouter l'entrée correspondante dans `_data/plugins.yml`.

Rien d'autre à faire : l'accueil, la navigation latérale et la recherche se mettent à jour tout seuls.

## Aperçu local

```bash
bundle install
bundle exec jekyll serve
```

## Traductions

`_config.yml` → `langs: [fr_FR]`. Ajouter `en_US` fait apparaître le sélecteur de
langue ; il faut alors créer les dossiers `<plugin>/en_US/`.
