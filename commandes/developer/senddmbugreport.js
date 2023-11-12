module.exports = [{
 name: "bugreport",
 code: `$log[$username[$authorID] a exécuté la commande +$commandName
    Identifiant de l'utilisateur : $authorID
    Identifiant du serveur : $guildID
    Nom du serveur : $guildName]




$dm[938913707629608981]
       $title[$username[$authorID] ( $authorID )]
       $description[$message]
       $author[$message[1];$userAvatar[$authorID]]
       $sendMessage[:white_check_mark: Le signalement a été envoyé au développeur] 
$argsCheck[>1;Mauvaise formulation : \`+bugreport -titre sans espaces- -description du bug-\`]
$cooldown[10s;Patience, tu as déjà exécuté cette commande dans les précédentes secondes.]`,
}]