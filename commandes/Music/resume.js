module.exports = {
    name: "resume",
    aliases: ["resumemusic","musicresume","rm"],
    code: `$log[$username[$authorID] a exécuté la commande +$commandName
    Identifiant de l'utilisateur : $authorID
    Identifiant du serveur : $guildID
    Nom du serveur : $guildName]


    $title[La musique a été remis ✅]
    $color[#f0db09]
    $resumeTrack
    $onlyIf[$voiceID[$clientID]!=;Exécute la commande \`\`+join\`\` d'abord !]
$onlyIf[$voiceID!=;Rejoint la vocal d'abord !]
$onlyIf[$getVar[maintenance]==false;Le robot actuellement en maintenance !]`
}