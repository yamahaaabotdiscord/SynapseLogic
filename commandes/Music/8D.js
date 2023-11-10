module.exports = [{
    name: "8d",
    aliases: ["8D","d8"],
    code: `$log[$username[$authorID] a exécuté la commande +$commandName
    Identifiant de l'utilisateur : $authorID
    Identifiant du serveur : $guildID
    Nom du serveur : $guildName]
$onlyIf[$voiceID[$clientID]!=;Exécute la commande \`\`+join\`\` d'abord !]
$onlyIf[$voiceID!=;Rejoint un vocal d'abord !]


$title[Modification effectuée]
$description[J'ai mis l'intensité de l'effet 8D à **0.3** comme prévu !]
$footer[J'ai mis l'effet 8D à l'intensité 0.3 car $username a exécuté cette commande.]
$addTimestamp
$let[a;$addFilter[{"8D": "0.3"}]]
$color[$random[0;999999]]

$onlyIf[$getVar[maintenance]==false;Le robot actuellement en maintenance !]`
}]