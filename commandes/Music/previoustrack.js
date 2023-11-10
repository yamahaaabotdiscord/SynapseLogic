module.exports = [{
    name: "prevtrack",
    aliases: ["previoustrack","trackprevious"],
    code: `$log[$username[$authorID] a exécuté la commande +$commandName
    Identifiant de l'utilisateur : $authorID
    Identifiant du serveur : $guildID
    Nom du serveur : $guildName]
$onlyIf[$voiceID[$clientID]!=;Exécute la commande \`\`+join\`\` d'abord !]
$onlyIf[$voiceID!=;Rejoint un vocal d'abord !]

$playPreviousTrack
$author[$songInfo[artist]]
$title[Précédente musique mis par $username[$authorID]]
$description[Je joue la musique $songInfo[title;$playPreviousTrack]]
$thumbnail[$songInfo[thumbnail;$playPreviousTrack]]
$color[#ffc3c3]
$onlyIf[$queueLength>1;Il n'y avait pas de musique jouée avant la musique actuellement.]
$onlyIf[$getVar[maintenance]==false;Le robot actuellement en maintenance !]`
}]