module.exports = [{
  name: "resetfilter",
  aliases: ["rf","filterreset"],
  code: `$log[$username[$authorID] a exécuté la commande +$commandName
    Identifiant de l'utilisateur : $authorID
    Identifiant du serveur : $guildID
    Nom du serveur : $guildName]



    $resetFilter
    $title[Modification effectuée]
$description[J'ai réinitialisé les filtres comme prévu, à présent, tout est revenu à la normale.]
$footer[J'ai réinitialisé les filtres car $username a exécuté cette commande.]
$addTimestamp
    $color[#32B48D]
$onlyIf[$voiceID[$clientID]!=;Exécute la commande \`\`+join\`\` d'abord !]
$onlyIf[$voiceID!=;Rejoint la vocal d'abord !]
  $onlyIf[$getVar[maintenance]==false;Le robot actuellement en maintenance !]`,
}]