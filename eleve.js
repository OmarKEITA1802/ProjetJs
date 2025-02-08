// Classe Eleve
class Eleve {
    constructor(nom, prenom, courriel) {
        this.numero = Math.floor(Math.random() * 9000) + 1000;  // Numéro unique
        this.nom = nom;
        this.prenom = prenom;
        this.ddn = new Date();  // Date de naissance actuelle pour simplification
        this.courriel = courriel;
        this.notes = [];
    }

    // Méthode pour calculer l'âge
    age() {
        const today = new Date();
        const age = today.getFullYear() - this.ddn.getFullYear();
        return age;
    }

    // Méthode pour afficher les informations de l'élève
    affiche() {
        console.log(Nom: ${this.nom.toUpperCase()});
        console.log(Prénom: ${this.prenom});
        console.log(Date de naissance: ${this.ddn.toLocaleDateString('fr-FR')});
    }

    // Ajouter une note
    ajoutNote(matiere, note) {
        this.notes.push({ matiere, note });
    }

    // Calculer la moyenne des notes
    moyenne() {
        const total = this.notes.reduce((sum, note) => sum + note.note, 0);
        return this.notes.length > 0 ? total / this.notes.length : 0;
    }
}

// Gestion des élèves
class GestionEleves {
    constructor() {
        this.eleves = [];
    }

    // Ajouter un élève à la liste
    ajouterEleve(nom, prenom, courriel) {
        const eleve = new Eleve(nom, prenom, courriel);
        this.eleves.push(eleve);
        return eleve;
    }

    // Afficher la liste des élèves
    afficherListe() {
        const eleveList = document.getElementById("eleveList");
        eleveList.innerHTML = "";  // Réinitialiser la liste
        this.eleves.forEach(eleve => {
            const li = document.createElement("li");
            li.innerHTML = ${eleve.nom.toUpperCase()} ${eleve.prenom};
            eleveList.appendChild(li);
        });
    }

    // Rechercher un élève par nom ou prénom
    rechercherEleve(texte) {
        return this.eleves.filter(eleve => 
            eleve.nom.toLowerCase().includes(texte.toLowerCase()) || 
            eleve.prenom.toLowerCase().includes(texte.toLowerCase())
        );
    }
}

// Initialiser la gestion des élèves
const gestion = new GestionEleves();

// Ajouter un élève via le formulaire
document.getElementById('formEleve').addEventListener('submit', function(e) {
    e.preventDefault();

    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const courriel = document.getElementById('courriel').value;

    const eleve = gestion.ajouterEleve(nom, prenom, courriel);

    // Afficher l'élève ajouté
    gestion.afficherListe();

    // Réinitialiser le formulaire
    document.getElementById('formEleve').reset();
});