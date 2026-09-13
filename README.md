# ALODO MPME — Diagnostic de Maturité des Entreprises

Prototype web fonctionnel du système de diagnostic initial du programme **ALODO MPME**, conçu pour évaluer la structuration et la maturité des Micro, Petites et Moyennes Entreprises (MPME) au Bénin et en Afrique de l'Ouest.

---

## 1. Présentation

Ce projet est un prototype d'application web permettant d'évaluer la maturité réelle d'une MPME avant son orientation vers des programmes de structuration ou de financement.

L'application propose un parcours utilisateur fluide structuré en **3 écrans principaux** :
1. **Écran d'Introduction** : Présentation des objectifs de l'évaluation, durée estimée et cadre de confidentialité.
2. **Questionnaire Pas-à-Pas (12 questions)** : Parcours dynamique couvrant 3 dimensions prioritaires avec indicateur de progression en temps réel.
3. **Rapport de Diagnostic Instantané** : Génération automatique du score global ALODO (/100), décomposition par dimension, détection des **Règles d'Or (Lignes rouges de structuration)**, points forts et axes d'amélioration.

---

## 2. Choix produit

### Périmètre des Dimensions Retenues
Afin d'offrir une évaluation pertinente en un temps de parcours réduit, le périmètre s'est focalisé sur **3 dimensions fondamentales** (parmi les 8 du modèle global) :
- **Formalisation & Conformité** : Évalue l'existence juridique (RCCM via l'APIEX, IFU) et la séparation des patrimoines personnel et professionnel, prérequis obligatoires pour toute démarche bancaire.
- **Comptabilité & Gestion Financière** : Évalue la transition du suivi manuscrit (cahier de caisse) vers des registres formalisés et la capacité d'anticipation de la trésorerie.
- **Digitalisation & Canaux Commerciaux** : Évalue l'utilisation des canaux digitaux adaptés au marché local (WhatsApp Business) et l'adoption du **Mobile Money Marchand** (FedaPay, KKiaPay, MoMo Marchand) pour la traçabilité des flux.

### Moteur de Scoring Hybride
La logique de calcul repose sur un système à **3 niveaux** :
1. **Échelle de Maturité (0 / 1 / 2)** :
   - `0` = Informel / Néant (ex: Suivi de caisse de tête, Cash uniquement).
   - `1` = Intermédiaire / Artisanal (ex: Cahier de caisse physique, MoMo personnel).
   - `2` = Structuré / Certifié (ex: Logiciel comptable ou expert, MoMo Marchand / Compte pro).
2. **Pondération par Poids Métier** :
   - *Vitales* (3 pts max) : Éléments bloquants pour le financement (Séparation des comptes, Registre de caisse, WhatsApp Business).
   - *Importantes* (2 pts max) : Indicateurs de gestion régulière (Régularité fiscale TPS, états financiers, outillage).
   - *Secondaires* (1 pt max) : Signaux de maturité avancée (IFU rattaché, archivage numérisé, régularité des publications).
3. **Règles d'Or (Alertes Prioritaires)** :
   - Algorithme de détection d'anomalies critiques indépendant du score global (ex: *Société enregistrée au RCCM mais sans aucun suivi comptable*, *Confusion totale des finances personnelles et professionnelles*).

### Grille de Justification des Questions

| # | Question & Contexte Terrain | Rationale Produit |
|---|---|---|
| **F1** | Statut juridique (APIEX / RCCM) | 80%+ des MPME démarrent informellement. L'immatriculation au RCCM est la 1ère marche de la structuration. |
| **F2** | Séparation des comptes pro/perso | La confusion de la poche familiale et de la caisse du commerce empêche toute analyse de solvabilité bancaire. |
| **F3** | Identifiant Fiscal Unique (IFU) | L'IFU est exigé au Bénin pour l'ouverture de compte pro et la facturation d'entreprise. |
| **F4** | Régularité fiscale (TPS) | La Taxe Professionnelle Synthétique (TPS) est l'impôt de référence des MPME. Être à jour conditionne l'attestation fiscale. |
| **C1** | Outil de suivi des caisses | Le "cahier de caisse" est l'outil #1 du terrain. Le diagnostic mesure la transition vers des registres écrits ou logiciels. |
| **C2** | États financiers (SYSCOHADA) | Les établissements financiers exigent des états financiers normés pour accorder du crédit. |
| **C3** | Archivage des justificatifs | L'absence d'archivage fragilise la preuve du chiffre d'affaires en cas d'audit. |
| **C4** | Anticipation de trésorerie (BFR) | La cessation de paiement par manque de liquidités est la 1ère cause de faillite des petites entreprises. |
| **D1** | Canaux clients (WhatsApp Business) | En Afrique de l'Ouest, WhatsApp Business constitue le véritable catalogue et point de contact digital des MPME. |
| **D2** | Outillage numérique opérationnel | Mesure le niveau de numérisation des tâches quotidiennes (caisse POS mobile vs registre papier). |
| **D3** | Paiements (MoMo Marchand / FedaPay) | Le MoMo personnel ne crée pas d'historique bancaire certifiable. Seul le MoMo Marchand/TPE crée une preuve de flux d'affaires. |
| **D4** | Animation régulière des canaux | Mesure la capacité de la MPME à maintenir un flux d'acquisition et de ventes prévisible. |

---

## 3. Choix techniques

- **Environnement d'Exécution** : Node.js (v18+)
- **Framework Serveur** : Express.js (Architecture légère, robuste et facilement maintenable)
- **Moteur de Rendu** : EJS (Server-Side Rendering propre avec composants partagés)
- **Gestion de Session** : `express-session` (Stockage temporaire de l'état des réponses pendant le parcours sans dépendance de base de données externe)
- **Design System & UI** : CSS3 Vanilla (Interface B2B SaaS institutionnelle inspirée des standards de Stripe et Notion, icônes vectorielles SVG, layout 100% responsive et cartes horizontales repliables par accordéon)

---

## 4. Installation

### Prérequis
- Node.js (v14.0 ou supérieur)
- Git

### Procédure de déploiement local
```bash
# 1. Cloner le dépôt
git clone https://github.com/[ORGANISATION]/ALODO-MPME-CHALLENGE-Mohamed-ALASSANE.git

# 2. Accéder au répertoire du projet
cd ALODO-MPME-CHALLENGE-Mohamed-ALASSANE

# 3. Installer les dépendances
npm install

# 4. Démarrer le serveur
node server.js
```

L'application est immédiatement accessible sur **`http://localhost:3000`**.

---

## 5. Fonctionnalités

- **Parcours utilisateur complet en 3 écrans** (Introduction $\rightarrow$ Questionnaire Pas-à-Pas $\rightarrow$ Rapport de Diagnostic).
- **Gestion d'état en session HTTP** avec persistance des choix et navigation bidirectionnelle (*Précédent / Suivant*).
- **Indicateur de progression dynamique** indiquant la question courante, la dimension concernée et le pourcentage d'avancement.
- **Moteur de calcul automatisé** générant le score global (/100) et la répartition par dimension.
- **Détection des Règles d'Or** isolant automatiquement les risques majeurs de gestion.
- **Formatage d'affichage optimisé** avec grilles horizontales et accordéons repliables (bouton chevron `▼` / `▲`) pour une lecture claire du rapport.
- **Interface responsive** adaptée aux écrans mobiles et de bureau.

---

## 6. Limites

- **Persistance des données** : Stockage temporaire en session mémoire (non conservé en base de données persistante PostgreSQL/MongoDB).
- **Périmètre fonctionnel** : Absence d'espace d'authentification utilisateur et de tableau de bord d'administration multi-entreprises.
- **Couverture du diagnostic** : Restreint à 3 dimensions prioritaires sur les 8 du référentiel complet.

---

## 7. Améliorations

Avec plus de temps de développement, les améliorations suivantes feraient évoluer l'application :

1. **Persistance en base de données** : Intégration de PostgreSQL et d'un ORM (Prisma) pour sauvegarder les diagnostics et suivre l'évolution de la maturité des MPME au fil du temps.
2. **Export du Rapport au format PDF** : Génération automatique d'un document PDF imprimable récapitulant les résultats et recommandations.
3. **Adaptation dynamique du questionnaire** : Ajustement automatique de certaines questions selon le secteur d'activité de l'entreprise (Commerce, Service, Artisanat).
