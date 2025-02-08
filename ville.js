document.addEventListener('DOMContentLoaded', function() {
    // Variables des éléments HTML
    const villeInput = document.getElementById('villeInput');
    const ajouterBtn = document.getElementById('ajouterBtn');
    const supprimerBtn = document.getElementById('supprimerBtn');
    const villeList = document.getElementById('villeList');

    // Fonction pour ajouter une ville à la liste
    ajouterBtn.addEventListener('click', function() {
        const ville = villeInput.value.trim();
        if (ville) {
            const li = document.createElement('li');
            li.textContent = ville;

            // Ajout d'un événement de clic pour sélectionner une ville
            li.addEventListener('click', function() {
                li.classList.toggle('selected');
            });

            // Ajout de la ville à la liste
            villeList.appendChild(li);
            villeInput.value = ''; // Réinitialiser la zone de saisie
        }
    });

    // Fonction pour supprimer les villes sélectionnées
    supprimerBtn.addEventListener('click', function() {
        const villesSelectionnees = document.querySelectorAll('.selected');
        villesSelectionnees.forEach(function(ville) {
            ville.remove();
        });
    });
});