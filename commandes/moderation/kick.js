module.exports = [{
 name: "kick",
 code: `$log[$username[$authorID] a exclu l'utilisateur $username[$mentioned[1]]
    Identifiant de l'utilisateur qui a exclu l'utilisateur : $authorID
    Identifiant de l'utilisateur exclu : <@$mentioned[1]
    Identifiant du serveur : $guildID
    Nom du serveur : $guildName
    Raison : $message[2]]


$title[$userDisplayName[$mentioned[1;true]] a été exclu du serveur]
$description[Raison : $message[2]]
  $kick[$guildID;$mentioned[1;true];$message[2]]
$color[#ff0000]
$onlyPerms[kickmembers;Tu peux pas, tu dois avoir la permission \`KICK_MEMBERS\`]
$argsCheck[>1;Tu dois mettre la raison et l'utilisateur]
$suppressErrors[Une erreur est survenue. Code erreur : 0x$randomString[20]]
$onlyIf[$getVar[maintenance]==false;Le robot actuellement en maintenance !]`
}]