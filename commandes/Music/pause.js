module.exports = {
    name: "stop",
    aliases: ["pause","stopmusic","pausemusic","pm"],
    code: `$log[$username[$authorID] a exécuté la commande +$commandName
    Identifiant de l'utilisateur : $authorID
    Identifiant du serveur : $guildID
    Nom du serveur : $guildName]


    $title[La musique a été temporairement mis en pause ✅]
    $color[#f0db09]
    $pauseTrack
    $onlyIf[$voiceID[$clientID]!=;Exécute la commande \`\`+join\`\` d'abord !]
$onlyIf[$voiceID!=;Rejoint la vocal d'abord !]
$onlyIf[$getVar[maintenance]==false;Le robot actuellement en maintenance !]`
}