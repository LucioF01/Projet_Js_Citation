// Projet : Générateur de citations aléatoires
// Date : 2023-10-01

// Tableau contenant les citations célèbres
const citations = [
    "On ne se baigne jamais deux fois dans le même fleuve", // Héraclite
    "Je sais que je ne sais rien", // Socrate
    "L'homme est un animal politique", // Aristote
    "La mort n'est rien pour nous", // Épicure
    "Je pense, donc je suis" // René Descartes
];

// Tableau contenant les auteurs correspondants aux citations
const auteurs = [
    "- Héraclite -",
    "- Socrate -",
    "- Aristote -",
    "- Épicure -",
    "- René Descartes -"
];

// Fonction pour afficher une citation aléatoire
function afficherCitationAleatoire() {
    // Génère un index aléatoire basé sur la longueur du tableau des citations
    let index = Math.floor(Math.random() * citations.length);

    // Récupère la citation et l'auteur correspondants
    let citation = citations[index];
    let auteur = auteurs[index];

    // Affiche la citation et l'auteur dans un élément HTML avec l'ID "citation"
    document.getElementById("citation").innerHTML = `"${citation}"<br/><strong>${auteur}</strong>`;

    // Stocke la citation et l'auteur dans le localStorage pour un usage ultérieur
    localStorage.setItem("derniereCitation", citation);
    localStorage.setItem("dernierAuteur", auteur);
}

// Fonction pour copier la dernière citation affichée dans le presse-papier
function copierEtStocker() {
    // Récupère la dernière citation et l'auteur depuis le localStorage
    const citationTexte = localStorage.getItem("derniereCitation") || "";
    const auteurTexte = localStorage.getItem("dernierAuteur") || "";

    // Concatène la citation et l'auteur dans un format lisible
    const texteComplet = `"${citationTexte}" ${auteurTexte}`;

    // Copie le texte complet dans le presse-papier
    navigator.clipboard.writeText(texteComplet).then(() => {
        // Affiche une alerte de succès si la copie réussit
        alert("Citation copiée dans le presse-papier !");
    }).catch(err => {
        // Affiche une alerte d'erreur en cas de problème
        alert("Erreur lors de la copie : " + err);
    });
}

// Toujours générer une nouvelle citation au chargement de la page
afficherCitationAleatoire();
