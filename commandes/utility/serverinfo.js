module.exports = [{
    name: "serverinfo",
    code: `$log[$username[$authorID] a exécuté la commande +$commandName
    Identifiant de l'utilisateur : $authorID
    Identifiant du serveur : $guildID
    Nom du serveur : $guildName]
    $title[Informations du serveur $guildName[$guildID]]
    $addField[Nom du serveur;$guildName[$guildID]]
    $addField[Identifiant du serveur;$guildID]
    $addField[Propriétaire du serveur;$userDisplayName[$guildOwnerID]]
    $addField[Nombre de membres;$membersCount[$guildID]]
    $addField[Date de création;$creationDate[$guildID;date]]
    $addField[Niveau de vérification;$guildVerificationLevel[$guildID]]
    $addField[Nombre de boosts;$guildBoostCount[$guildID]]
    $addField[Niveau de boost;$guildBoostLevel[$guildID]]
    $addField[Nombre de rôles;$roleCount[$guildID]]
    $addField[Nombre de salons;$channelCount[$guildID]]
    $addField[Nombre d'émojis;$emojiCount[$guildID]]
    $color[#ff0000]
    $onlyIf[$getVar[maintenance]==false;Le robot actuellement en maintenance !]`
}]
