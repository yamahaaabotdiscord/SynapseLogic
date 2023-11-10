module.exports = [{
    name: "coinflip",
    code: `$log[$username[$authorID] a exécuté la commande +$commandName
    Identifiant de l'utilisateur : $authorID
    Identifiant du serveur : $guildID
    Nom du serveur : $guildName]
$randomText[Face;Pile]
$onlyIf[$getVar[maintenance]==false;Le robot actuellement en maintenance !]`
}]
