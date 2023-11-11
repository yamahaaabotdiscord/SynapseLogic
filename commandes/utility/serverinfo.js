module.exports = [{
    name: "serverinfo",
    code: `$log[$username[$authorID] a exécuté la commande +$commandName
    Identifiant de l'utilisateur : $authorID
    Identifiant du serveur : $guildID
    Nom du serveur : $guildName]
    $author[$guildName[$guildID]]
    $thumbnail[$guildIcon[$guildID]]
    $title[Informations du serveur **$guildName[$guildID]**]
	$addField[🎭 Nombre de rôles;**$roleCount[$guildID]**;true]
    $addField[🛋 Nombre de salons;**$channelCount[$guildID]**;true]
    $addField[😌 Nombre d'émojis;**$emojiCount[$guildID]**;true]
    $addField[🌎 Nombre de membres;**$membersCount[$guildID]**;true]
    $addField[📆 Date de création;**<t:$truncate[$divide[$creationDate[$guildID;ms];1000]]:R>**;true]
    $addField[📶 Niveau de vérification;**$guildVerificationLevel[$guildID]**;true]
    $addField[🔢 Nombre de boosts;**$guildBoostCount[$guildID]**;true]
    $addField[⏫ Niveau de boost;**$guildBoostLevel[$guildID]**;true]
	$addField[🏷 Nom du serveur;**$guildName[$guildID]**;true]
    $addField[⚙ Identifiant du serveur;**$guildID**;true]
    $addField[👑 Propriétaire du serveur;$userDisplayName[$guildOwnerID] ( $username[$guildOwnerID] );true]
    
    $color[#ff0000]
    $onlyIf[$getVar[maintenance]==false;Le robot actuellement en maintenance !]`
}]
