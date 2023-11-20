module.exports = [{
    name: "slowedreverb",
    aliases: ["reverbslowed","slowreverb"],
    code: `$log[$username[$authorID] a exécuté la commande +$commandName
    Identifiant de l'utilisateur : $authorID
    Identifiant du serveur : $guildID
    Nom du serveur : $guildName]
$onlyIf[$voiceID[$clientID]!=;Exécute la commande \`\`+join\`\` d'abord !]
$onlyIf[$voiceID!=;Rejoint un vocal d'abord !]


$title[Modification effectuée]
$description[J'ai mis l'intensité du slowed à **0.6** et l'effet reverb **0.5** comme prévu !]
$footer[J'ai mis l'effet slowed à l'intensité 0.6 et l'effet reverb à 0.5 car $username a exécuté cette commande.]
$addTimestamp
$let[a;$addFilter[{"slowed": "0.6", "flanger": "0.5"}]]
$color[$random[0;999999]]


$onlyIf[$getVar[maintenance]==false;Le robot actuellement en maintenance !]`
}]