# Niveau 1 – Débutant

## Tâche 1 : Configurer l'environnement de développement

### Objectif

Mettre en place un environnement de développement Full-Stack avec les outils essentiels :

- Node.js
- npm ou Yarn
- VS Code
- Git

### À réaliser

- Installer et configurer Node.js et npm/Yarn.
- Créer un dépôt GitHub.
- Apprendre les commandes Git de base.
- Installer une base de données (MongoDB, MySQL ou PostgreSQL).
- Maîtriser les commandes essentielles du terminal.

---

## 1. Installation de Node.js et npm

Node.js est nécessaire pour exécuter des applications JavaScript côté serveur et gérer les dépendances avec npm.

### Vérification

```bash
node -v
npm -v
```

### Installer Node.js

Télécharger depuis : https://nodejs.org/

Choisir la version LTS recommandée.

---

## 2. Installation de Yarn (optionnel)

Yarn est une alternative à npm.

```bash
npm install -g yarn
```

Vérification :

```bash
yarn -v
```

---

## 3. Installation de VS Code

Télécharger et installer VS Code depuis :
https://code.visualstudio.com/

Extensions utiles :

- ESLint
- Prettier
- GitHub Pull Requests
- Live Server
- MongoDB for VS Code (si nécessaire)

---

## 4. Installation de Git

Git permet de versionner le projet.

### Vérification

```bash
git --version
```

### Configuration initiale

```bash
git config --global user.name "Votre Nom"
git config --global user.email "votre.email@example.com"
```

---

## 5. Créer un dépôt GitHub

1. Se connecter à GitHub.
2. Cliquer sur New repository.
3. Nommer le dépôt : `task1`
4. Choisir Public ou Private.
5. Créer le dépôt.

### Lier un projet local à GitHub

```bash
git init
git add .
git commit -m "Initial project setup"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```

---

## 6. Commandes Git de base

```bash
git status
git add .
git commit -m "Ajout de fonctionnalité"
git push
git pull
git checkout -b ma-branche
git branch
git log
git clone https://github.com/USERNAME/REPO.git
```

### Explication rapide

- `git status` : voir l'état des fichiers
- `git add` : ajouter les fichiers modifiés
- `git commit` : enregistrer les changements
- `git push` : envoyer vers GitHub
- `git pull` : récupérer les modifications du dépôt distant
- `git branch` : lister les branches
- `git checkout -b` : créer et basculer sur une branche
- `git log` : historique des commits

---

## 7. Installer une base de données

### Option 1 : PostgreSQL

#### Installation

- Windows : installer PostgreSQL via https://www.postgresql.org/
- Ubuntu/Debian :

```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
```

#### Vérification

```bash
psql --version
```

### Option 2 : MySQL

```bash
sudo apt update
sudo apt install mysql-server
```

### Option 3 : MongoDB

```bash
sudo apt update
sudo apt install mongodb
```

> MongoDB, MySQL et PostgreSQL sont compatibles avec un environnement Full-Stack. Le choix dépend du projet.

---

## 8. Commandes essentielles du terminal

Voici les commandes les plus utiles pour travailler en développement :

```bash
ls
pwd
cd nom_du_dossier
mkdir nom_dossier
rm -rf nom_dossier
cp fichier1 fichier2
mv ancien nom
clear
```

### Utiles pour Node.js

```bash
npm install
npm install package-name
npm run dev
npm run build
```

### Utiles pour Git

```bash
git status
git add .
git commit -m "message"
git push
git pull
```

---

## 9. Bonnes pratiques

- Toujours travailler dans un dépôt Git.
- Faire des commits réguliers.
- Utiliser des branches pour chaque fonctionnalité.
- Tester les commandes dans le terminal avant de les répéter.
- Garder le projet organisé avec une structure claire.

---

## 10. Résumé

Pour ce niveau, le but est de maîtriser les bases nécessaires à tout projet Full-Stack :

- installer Node.js + npm/Yarn
- utiliser VS Code
- configurer Git
- publier le projet sur GitHub
- préparer la base de données
- utiliser le terminal efficacement

---

## Liens utiles

- Node.js : https://nodejs.org/
- VS Code : https://code.visualstudio.com/
- Git : https://git-scm.com/
- GitHub : https://github.com/
- PostgreSQL : https://www.postgresql.org/
- MySQL : https://www.mysql.com/
- MongoDB : https://www.mongodb.com/
