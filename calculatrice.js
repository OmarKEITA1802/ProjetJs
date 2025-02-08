document.getElementById('mon-bouton').addEventListener('click', function() {
    const nombre1 = parseFloat(document.getElementById('premier-nombre').value);
    const nombre2 = parseFloat(document.getElementById('deuxieme-nombre').value);
    const operation = document.getElementById('operation').value;
    let resultat;

    switch (operation) {
        case '+':
            resultat = nombre1 + nombre2;
            break;
        case '-':
            resultat = nombre1 - nombre2;
            break;
        case '*':
            resultat = nombre1 * nombre2;
            break;
        case '/':
            resultat = nombre1 / nombre2;
            break;
        default:
            resultat = 'Opération invalide';
    }

    document.getElementById('resultat').value = resultat;
});