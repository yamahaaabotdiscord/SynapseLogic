module.exports = [{
    name: "soutien",
    aliases: "soutenu",
    code: `$log[$username[$authorID] a exécuté la commande +$commandName
    Identifiant de l'utilisateur : $authorID
    Identifiant du serveur : $guildID
    Nom du serveur : $guildName]

$title[Voici les personnes qui soutiennent le bot, en ayant soit payé ou en contribuant au bot gratuitement.]

$description[Abonnement premium :
*Aucun membre abonné*

Ils nous soutiennent :
Cybrancee
The Space]
$color[#ffafc1]
$footer[❤ Merci à vous tous de soutenir le bot !]
`
}]