module.exports = [{
    name: "help",
    code: `$log[$username[$authorID] a exécuté la commande +$commandName
    Identifiant de l'utilisateur : $authorID
    Identifiant du serveur : $guildID
    Nom du serveur : $guildName]

$title[Page d'aide - Découvrez Cybrancee !]
$author[$userDisplayName[$authorID] ( $username[$authorID] )]

$addField[🔐 Sécurité;
\`+idgen\` - Générer des identifiants aléatoires.
\`+encpassword\` - Encrypter un mot de passe.;true]

$addField[🎶 Musique;
\`+play\` - Jouer une musique.
\`+skip\` - Suivante musique.
\`+join\` - Faire rejoindre le bot dans ta vocal.
\`+dc\` - Déconnecter le bot de ta vocal.
\`+np\` - Voir la musique jouée actuellement.
\`+volume\` - Changer le volume de la musique actuelle.
\`+resetfilter\` - Réinitialiser les filtres.
\`+pause\` - Mettre en pause la musique.
\`+resume\` - Rejouer la musique après la pause.
\`+loop\` - Activer la répétition de la musique.
\`+loopoff\` - Désactivere la répétition de la musiquue.
\`+prevtrack\` - Rejouer la précédente musique.
\`+nightcore\` - Mettre en nightcore la musique
\`+slowed\` - Mettre en ralenti la musique
\`+8D\` - Mettre en gauche-droite la musique
\`+bassboost\` - Mettre la basse de la musique plus haut.;true]



$addField[🛠 Modération;
\`+nuke\` - Réinitialiser un salon.
\`+kick\` - Exclu quelqu'un du serveur.
\`+ban\` - Ban quelqu'un du serveur.
\`+timeout\` - Enlève la permission d'accès du serveur à quelqu'un.
\`+untimeout\` - Ré-autorise la permission d'accès du serveur à quelqu'un.;true]

$addField[🧰 Utilité;
\`+serverinfo\` - Obtenir des informations sur le serveurs.
\`+botinfo\` - Obtenir des informations concernant SynapseLogic.
\`+cybrancee\` - Un hébergeur excellent.;true]

$addField[😆 Fun;
\`+coinflip\` - Tirer à pile ou face.
\`+cat\` - Obtenir une photographie d'un chat.
\`+dog\` - Obtenir une photographie d'un chien.;true]



$footer[SynapseLogic - Redéfinissez Votre Expérience Discord !]
$color[9793e0]
$onlyIf[$getVar[maintenance]==false;Le robot actuellement en maintenance !]
$description[Si une commande présente l'icône ⚠️ à côté, cela indique qu'elle est en phase de maintenance.]`
}]
