module.exports = [{
    name: "nightcore",
    aliases: ["fast","nc"],
    code: `$log[$username[$authorID] a exécuté la commande +$commandName
    Identifiant de l'utilisateur : $authorID
    Identifiant du serveur : $guildID
    Nom du serveur : $guildName]
$onlyIf[$voiceID[$clientID]!=;Exécute la commande \`\`+join\`\` d'abord !]
$onlyIf[$voiceID!=;Rejoint un vocal d'abord !]


$title[Modification effectuée]
$description[J'ai mis l'intensité du nightcore à **1.5** comme prévu !]
$footer[J'ai mis l'effet nightcore à l'intensité 1.5 car $username a exécuté cette commande.]
$addTimestamp
$let[a;$addFilter[{"nightCore": "1.5"}]]
$color[$random[0;999999]]


$onlyIf[$getVar[maintenance]==false;Le robot actuellement en maintenance !]`
}]