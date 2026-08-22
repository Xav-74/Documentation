# Documentation des plugins Jeedom — Xav-74

Site Jekyll publié sur GitHub Pages : https://xav-74.github.io/Documentation/

## Organisation

```
_config.yml            configuration du site, liens Jeedom, liste des langues
_data/plugins.yml      liste des plugins (accueil, navigation, recherche)
_data/widgets.yml      liste des widgets (même format)
_data/i18n.yml         toutes les chaînes de l'interface, par langue
_layouts/              default (page de doc), home (accueil), redirect
_includes/             head, topbar, lang-menu, footer
assets/css/theme.css   thème sombre
assets/js/doc.js       sommaire, recherche, menu mobile, zoom images
index.html             accueil français
<langue>/index.html    accueil traduit (en_US, de_DE, es_ES, it_IT, pt_PT)
<plugin>/<langue>/     index.md (documentation) + changelog.md
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

L'accueil, la navigation latérale et la recherche se mettent à jour tout seuls.

## Traduire la documentation d'un plugin

1. Créer `monPlugin/en_US/index.md` et `changelog.md` (même en-tête, `lang: en_US`).
2. Ajouter `en_US` dans la liste `langs:` de ce plugin, dans `_data/plugins.yml`.

Tant qu'une langue n'y figure pas, les cartes et le sélecteur de langue renvoient
vers la version française : aucun lien mort.

## Modifier les textes de l'interface

Tout est dans `_data/i18n.yml`, une section par langue. Ajouter une langue :
recopier un bloc, le traduire, ajouter son code dans `langs:` du `_config.yml`
et créer `<code>/index.html` sur le modèle de `en_US/index.html`.

## Aperçu local

```bash
bundle install
bundle exec jekyll serve
```
