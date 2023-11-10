module.exports = [{
name: "play",
aliases: ["playTrack","playMusic","playtrack","playmusic","p"],
code: `$log[$username[$authorID] a exécuté la commande +$commandName
    Identifiant de l'utilisateur : $authorID
    Identifiant du serveur : $guildID
    Nom du serveur : $guildName]
$author[$songInfo[artist;$sub[$queueLength;1]]]
$thumbnail[1;$songInfo[thumbnail;$sub[$queueLength;1]]]
$title[1;Musique ajoutée par $username[$authorID]]
$description[1;Ajout de la musique **$songInfo[title;$sub[$queueLength;1]]** à la file d'attente.]
$color[#52A813]
$playTrack[$message;soundcloud]
$onlyIf[$voiceID[$clientID]!=;Exécute la commande \`\`+join\`\` d'abord !]
$onlyIf[$voiceID!=;Rejoint la vocal d'abord !]
$argsCheck[>0;\`\`+play (titre de la musique)\`\`]
$suppressErrors[Réexécute la commande \`\`+join\`\` encore. Une erreur est survenue.]
$onlyIf[$getVar[maintenance]==false;Le robot actuellement en maintenance !]`
}]