# ALODO_MPME_CHALLENGE_Mohamed_ALASSANE
# ALODO MPME — Prototype de Diagnostic de Maturité

> **Challenge de Sélection ALODO TECH — Profil Développeur**  
> Prototype fonctionnel d'évaluation de la structuration des Micro, Petites et Moyennes Entreprises (MPME).

---

## 1. Présentation
Ce projet est un prototype web fonctionnel développé dans le cadre du test de sélection **ALODO TECH**. Il simule le parcours de diagnostic initial du programme **ALODO MPME**, conçu pour analyser le niveau de maturité réelle d'une entreprise et identifier ses freins de structuration avant tout accompagnement ou financement.

Le prototype se compose d'un parcours fluide en **3 écrans principaux** :
1. **Écran d'Introduction** : Présentation des objectifs du diagnostic et de la garantie de confidentialité.
2. **Questionnaire Pas-à-Pas (12 questions)** : Parcours interactif couvrant 3 dimensions prioritaires avec indicateur de progression dynamique.
3. **Rapport de Diagnostic Instantané** : Score global ALODO (/100), scores par dimension, détection des **Règles d'Or (Alertes prioritaires)**, points forts et axes d'amélioration.

---

## 2. Choix Produit
Dans le cadre de la contrainte de temps (3 jours), le périmètre a été volontairement focalisé sur **3 dimensions fondamentales** (sur les 8 du programme complet) et **12 questions ciblées** (4 par dimension) :

### Dimensions retenues :
- **Formalisation** (Statut légal, séparation des comptes pro/perso, conformité fiscale) : *C'est le socle juridique indispensable.*
- **Comptabilité & Gestion** (Suivi de caisse, états financiers, prévision de trésorerie) : *C'est le cœur du pilotage financier.*
- **Digitalisation & Commercial** (Canaux d'acquisition, outillage numérique, paiements digitaux) : *C'est le levier de croissance.*

### Moteur de Scoring Hybride en 3 Couches :
1. **Échelle de Maturité (0 / 1 / 2)** : 0 = Informel / Néant, 1 = Intermédiaire / Partiel, 2 = Structuré / Digitalisé.
2. **Pondération par Poids** : Questions *Vitales* (3 pts max), *Importantes* (2 pts max), *Secondaires* (1 pt max).
3. **Règles d'Or (Alertes Prioritaires)** : Détection d'anomalies critiques indépendantes du score global (ex: *Société enregistrée sans comptabilité*, *Confusion des patrimoines*, *Paiements cash uniquement*).

---

## 3. Choix Techniques
- **Environnement** : Node.js (v18+)
- **Framework Web** : Express.js (Simple, rapide, sans surcouche inutile)
- **Moteur de Rendu** : EJS (Server-Side Rendering propre et modulaire)
- **Gestion de Session** : `express-session` (Conservation des réponses pendant la navigation sans base de données lourde)
- **Design System & UI** : CSS3 Vanilla (Thème Fintech minimaliste, inspiré de Stripe & Linear, 100% Responsive Desktop/Mobile)

---

## 4. Installation et Lancement

### Prérequis
- Node.js (v14 ou supérieur)
- Git

### Étapes d'installation
```bash
# 1. Cloner le dépôt
git clone https://github.com/[VOTRE-COMPTE]/ALODO-MPME-CHALLENGE-Mohamed-ALASSANE.git

# 2. Accéder au dossier
cd ALODO-MPME-CHALLENGE-Mohamed-ALASSANE

# 3. Installer les dépendances
npm install

# 4. Lancer le serveur
node server.js

5. Fonctionnalités
 Parcours utilisateur complet en 3 écrans (Intro → Questionnaire→ Rapport).
 Sauvegarde automatique des réponses en session avec boutons Précédent / Suivant.
 Barre de progression dynamique avec indication de la question et de la dimension en cours.
 Calcul automatisé du score global (/100) et des jauges par dimension.
 Déclenchement d'alertes prioritaires ("Lignes Rouges") en cas d'anomalies de gestion critiques.
 Identification automatique des points forts et recommandations ciblées par axe d'amélioration.
 Interface ultra-responsive adaptée aux smartphones.


6. Limites Volontaires
Afin de respecter la contrainte des 3 jours et l'esprit de l'exercice (qualité de réflexion vs usine à gaz) :

 * Pas de base de données persistante (PostgreSQL/MongoDB) : stockage temporaire en session HTTP.
 * Pas de module d'authentification ni d'espace administration MPME.
 * Limité à 3 dimensions sur les 8 du programme ALODO complet.

7. Améliorations & Réflexion Produit (Bonus)
Avec plus de temps et pour faire évoluer le produit ALODO MPME, je proposerais :
