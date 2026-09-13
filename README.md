# ALODO MPME — Prototype de Diagnostic de Maturité

> **Challenge de Sélection ALODO TECH — Profil Développeur**  
> Prototype fonctionnel d'évaluation de la structuration des Micro, Petites et Moyennes Entreprises (MPME) au Bénin et en Afrique de l'Ouest.

---

## 1. Présentation du Projet
Ce projet est un prototype web fonctionnel développé pour l'exercice de sélection **ALODO TECH**. Il simule le parcours de diagnostic initial du programme **ALODO MPME**, conçu pour mesurer la maturité réelle d'une entreprise et identifier ses freins de structuration avant tout accompagnement ou accès aux services financiers.

Le prototype s'articule autour d'un parcours fluide en **3 écrans principaux** :
1. **Écran d'Introduction** : Présentation du cadre d'évaluation, durée et garantie de confidentialité.
2. **Questionnaire Pas-à-Pas (12 questions)** : Formulaire dynamique couvrant 3 dimensions prioritaires avec indicateur de progression en temps réel.
3. **Rapport de Diagnostic Instantané** : Score global ALODO (/100), scores par dimension, détection des **Règles d'Or (Lignes rouges de structuration)**, points forts et axes d'amélioration.

---

## 2. Choix Produit & Ancrage Terrain (Bénin / UEMOA)

### Pourquoi ces 3 Dimensions ?
- **Formalisation & Conformité** : Le statut légal (RCCM via l'APIEX, IFU) et la séparation des comptes pro/perso sont les prérequis juridiques indispensables à toute relation bancaire au Bénin.
- **Comptabilité & Gestion Financière** : La transition du "cahier de caisse" manuscrit vers des états financiers normés (SYSCOHADA) conditionne l'évaluation des marges et la prévision de trésorerie.
- **Digitalisation & Canaux Commerciaux** : L'utilisation de WhatsApp Business (catalogues, statuts), l'outillage mobile et l'adoption du **Mobile Money Marchand** (FedaPay, KKiaPay, MoMo Marchand) créent un historique financier certifiable.

### Matrice du Moteur de Scoring Hybride en 3 Couches :
1. **Échelle de Maturité (0 / 1 / 2)** :
   - `0` = Néant / Informel (ex: Suivi de caisse "de tête", Cash uniquement).
   - `1` = Intermédiaire / Artisanal (ex: Cahier de caisse physique, MoMo sur numéro perso).
   - `2` = Structuré / Certifié (ex: Logiciel comptable/expert, MoMo Marchand / Compte pro).
2. **Pondération par Poids Métier** :
   - Questions *Vitales* (3 pts max) : Facteurs bloquants pour le financement (Compte pro, Registre de caisse, WhatsApp Business).
   - Questions *Importantes* (2 pts max) : Indicateurs de gestion régulière (TPS/impôts, états financiers, outillage).
   - Questions *Secondaires* (1 pt max) : Signaux de maturité avancée (IFU rattaché, archivage numérisé, régularité des publications).
3. **Règles d'Or (Alertes Prioritaires)** :
   - Détection d'anomalies critiques indépendantes du score global (ex: *Société immatriculée au RCCM mais sans aucun suivi comptable*, *Confusion totale des patrimoines personnel et professionnel*).

---

## 3. Justification des Questions pour l'Entretien

| # | Question & Contexte Béninois | Justification Métier pour ALODO TECH |
|---|---|---|
| **F1** | Statut juridique (APIEX / RCCM) | Au Bénin, 80%+ des MPME démarrent informellement. L'immatriculation au RCCM est la 1ère marche de la structuration. |
| **F2** | Séparation des comptes pro/perso | L'erreur #1 des dirigeants est de confondre la poche familiale et la caisse du commerce. Sans séparation, une banque rejette d'office. |
| **F3** | Identifiant Fiscal Unique (IFU) | L'IFU est exigé au Bénin pour ouvrir un compte pro et facturer formellement. |
| **F4** | Régularité fiscale (TPS) | La Taxe Professionnelle Synthétique (TPS) est l'impôt de référence des MPME. Être à jour garantit l'attestation de régularité fiscale. |
| **C1** | Outil de suivi des caisses | Le "cahier de caisse" est l'outil #1 du terrain. Le diagnostic mesure la transition vers des registres ou logiciels écrits. |
| **C2** | États financiers (SYSCOHADA) | Les banques exigent un compte de résultat/bilan certifié pour accorder un crédit. |
| **C3** | Archivage des justificatifs | L'absence d'archivage fragilise la preuve du chiffre d'affaires en cas d'audit. |
| **C4** | Anticipation de trésorerie (BFR) | La cessation de paiement par manque de liquidité est la cause #1 de faillite des petites entreprises. |
| **D1** | Canaux clients (WhatsApp Business) | En Afrique de l'Ouest, WhatsApp Business est le véritable "site web" et catalogue des MPME. |
| **D2** | Outillage numérique des opérations | Mesure la numérisation des tâches quotidiennes (caisse POS mobile vs registre papier). |
| **D3** | Paiements (MoMo Marchand / FedaPay) | MoMo perso ne crée pas d'historique bancaire certifiable. Seul le MoMo Marchand/TPE crée une preuve de flux pour les prêteurs. |
| **D4** | Animation régulière des canaux | Mesure la capacité de l'entreprise à maintenir un flux de ventes prévisible. |

---

## 4. Choix Techniques
- **Environnement** : Node.js (v18+)
- **Framework Web** : Express.js (Architecture légère, robuste et maintenable)
- **Moteur de Rendu** : EJS (Server-Side Rendering propre et modulaire)
- **Gestion d'État** : `express-session` (Conservation des réponses en session sans complexité de base de données externe)
- **Design System** : CSS3 Vanilla (Interface B2B SaaS Institutionnelle, inspirée de Stripe, FedaPay & Notion, icons SVG vectorielles, 100% Mobile First)

---

## 5. Installation et Lancement Local

```bash
# 1. Cloner le dépôt
git clone https://github.com/[VOTRE-COMPTE]/ALODO-MPME-CHALLENGE-Mohamed-ALASSANE.git

# 2. Accéder au dossier
cd ALODO-MPME-CHALLENGE-Mohamed-ALASSANE

# 3. Installer les dépendances
npm install

# 4. Démarrer le serveur
node server.js
```

L'application s'exécute sur **`http://localhost:3000`**.

---

## 6. Limites Volontaires du Scope
Conformément aux consignes d'ALODO TECH (prototype ciblé sous 3 jours) :
- Pas de base de données lourde (PostgreSQL/Prisma) : gestion en mémoire/session HTTP.
- Pas de système d'authentification utilisateur ni d'ERP/CRM complet.
- Périmètre restreint aux 3 dimensions d'entrée du diagnostic.

---

## 7. Réflexion Produit (Bonus pour la Soutenance)
1. **Diagnostic Adaptatif (Dynamic Branching)** : Adapter les questions selon le secteur (Commerce de détail $\rightarrow$ gestion des stocks ; Prestation de service $\rightarrow$ gestion des temps/devis ; Artisanat $\rightarrow$ coûts de production).
2. **Attestation & Indexation ALODO** : Délivrer un badge de maturité certifié ALODO MPME intégrable sur WhatsApp Business ou les factures des entreprises lauréates.
3. **Connecteurs API Financial Ledger** : Permettre l'import automatique des historiques MTN MoMo Marchand / FedaPay pour certifier le Chiffre d'Affaires sans saisie manuelle.

---
**Développé par Mohamed ALASSANE**  
Candidat Développeur — ALODO TECH 2026
