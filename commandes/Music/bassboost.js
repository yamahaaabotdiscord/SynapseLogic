module.exports = [{
    name: "bassboost",
    aliases: ["bass","boostbass"],
    code: `$log[$username[$authorID] a exécuté la commande +$commandName
    Identifiant de l'utilisateur : $authorID
    Identifiant du serveur : $guildID
    Nom du serveur : $guildName]
$onlyIf[$voiceID[$clientID]!=;Exécute la commande \`\`+join\`\` d'abord !]
$onlyIf[$voiceID!=;Rejoint un vocal d'abord !]

$title[Modification effectuée]
$description[J'ai mis l'intensité de l'effet bassBoost à **0.8** comme prévu !]
$footer[J'ai mis l'effet bassBoost à l'intensité 0.8 car $username a exécuté cette commande.]
$addTimestamp
$let[a;$addFilter[{"bassBoost": "0.8"}]]
$color[$random[0;999999]]
$onlyIf[$getVar[maintenance]==false;Le robot actuellement en maintenance !]
$onlyForIDs[34654646;:warning: La commande est en maintenance !]`
}]