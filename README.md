Horloge Numérique & Analogique – Multi-Fuseaux + Carte Mondiale
Description du Projet

Ce projet est une horloge web combinant à la fois un affichage numérique et analogique, mise à jour en temps réel.
Elle permet également d’afficher l’heure de plusieurs grandes villes du monde via une table interactive, ainsi qu'un système de sélection de fuseau horaire et d’offset personnalisé.

L’interface est moderne, responsive et entièrement animée via CSS et JavaScript.

Technologies Utilisées

HTML5 : structure de la page et mise en place des sections

CSS3 : design moderne, animations, horloge analogique animée

JavaScript (ES6) :

manipulation du DOM

gestion du temps en temps réel

animations des aiguilles

gestion des fuseaux horaires (Intl.DateTimeFormat)

GitHub Pages : hébergement de la version finale du projet

Fonctionnalités Principales

Horloge numérique affichant HH:MM:SS en temps réel

Horloge analogique avec animation fluide des aiguilles

Sélection d’un fuseau horaire parmi plusieurs options

Possibilité d’ajouter un offset manuel (+ ou - minutes)

Tableau interactif affichant l’heure de plus de 15 villes mondiales

Mise à jour automatique toutes les secondes

Interface responsive adaptée mobile / tablette / desktop

Design esthétique et animations (pulse, hover, transitions…)

Cliquez sur une ville pour changer automatiquement le fuseau de l’horloge principale

Lien vers GitHub Pages (Rendu Final)
https://azizboukhayatia-creator.github.io/mohamed_aziz_boukhayatia_horloge/

 Nouveautés Explorées / Ce que J’ai Appris

Durant ce projet, j’ai pu découvrir et approfondir :

L’utilisation de Intl.DateTimeFormat pour gérer les fuseaux horaires correctement

Le fonctionnement précis des rotations d'aiguilles (calculs d’angles en degrés)

La synchronisation de plusieurs horloges en temps réel

La création d’une horloge analogique en CSS (positionnement, graduations, centre, ombres…)

Les animations CSS (pulse, hover, transitions)

La manipulation plus poussée du DOM (création de lignes de tableau dynamiques)

La gestion des événements (click, change, keypress)

L'amélioration de l’expérience utilisateur (UX) : transitions, hover, responsive…

Difficultés Rencontrées

Calcul correct des angles des aiguilles (heure/minute/seconde)

Gestion des fuseaux horaires avec Intl.DateTimeFormat → conversion en date réelle exploitée en JS

Résolution du problème d’offset personnalisé en minutes

Optimisation de la mise à jour des villes sans ralentir l’interface

Maintenir un design responsive avec plusieurs éléments complexes (horloge analogique, tableau, contrôles)

Problèmes de duplication ou décalage lors du passage à certains fuseaux exotiques

✅ Solutions Apportées

Utilisation de formatter.formatToParts() pour reconstruire une vraie date exploitée en JS

Mise en place d’un timer optimisé :

setInterval(updateClock, 200) pour fluidité

setInterval(updateCitiesTable, 1000) pour les villes

Ajout d’une logique claire pour distinguer :

fuseau local

fuseau choisi

offset manuel

Test de différents algorithmes jusqu’à obtenir un angle précis :

Seconde : s * 6

Minute : m * 6 + s * 0.1

Heure : (h % 12) * 30 + m * 0.5

Recherche et documentation sur :

gestion des dates en JS

fuseaux horaires

animations CSS avancées

Vérifications répétées + tests sur plusieurs navigateurs et résolutions

Si tu veux, je peux aussi te générer une version Markdown formatée, ou bien intégrer des images / badges GitHub / table des matières.
