const express = require('express');
const session = require('express-session');
const path = require('path');
const diagnosticRoutes = require('./src/routes/diagnostic');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour parser les formulaires (POST)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configuration de la session
app.use(session({
  secret: 'alodo-mpme-secret-key-2026',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 24 * 60 * 60 * 1000 }
}));

// Configuration EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Utilisation des routes du diagnostic
app.use('/', diagnosticRoutes);

// Démarrage
app.listen(PORT, () => {
  console.log(`🚀 Serveur ALODO MPME prêt sur http://localhost:${PORT}`);
});
