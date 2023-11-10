module.exports = [{
    name: "bassboost",
    aliases: ["bass","boostbass"],
    code: `$log[$username[$authorID] a exécuté la commande +$commandName
    Identifiant de l'utilisateur : $authorID
    Identifiant du serveur : $guildID
    Nom du serveur : $guildName]
$onlyIf[$voiceID[$clientID]!=;Exécute la commande \`\`+join\`\` d'abord !]
$onlyIf[$voiceID!=;Rejoint un vocal d'abord !]

$let[$addFilter[{"nightCore": "5", "bassBoost": "0.3"}]]
$title[J'ai activé le mode bassboost !]
$onlyForIDs[938913707629608981;La commande \`+$commandName\` est actuellement en maintenance ⚠️]`
}]