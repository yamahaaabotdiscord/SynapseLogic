module.exports = [{
    name: "badges",
    aliases: "badge",
    code: `$log[$username[$authorID] a exécuté la commande +$commandName
    Identifiant de l'utilisateur : $authorID
    Identifiant du serveur : $guildID
    Nom du serveur : $guildName]
    
  $addField[Total Badges;$replaceText[$replaceText[$checkCondition[$getVar[badges;$mentioned[1]]==None];true;$message[2];1];false;$getVar[badges;$mentioned[1]] $message[2];1]]

`

}]