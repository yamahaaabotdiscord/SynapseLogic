module.exports = [{
  name: "timeout",
  code: `
$log[$username[$authorID] a exécuté la commande +$commandName
    Identifiant de l'utilisateur : $authorID
    Identifiant du serveur : $guildID
    Nom du serveur : $guildName
    Raison du mute : $message[3]]
    $timeoutMember[$guildID;$mentioned[1;true];$message[2];;$message[3]]
    $argsCheck[>1;Tu as dû mal formulé le temps du mute ! Ou bien oublié l'utilisateur.. L'erreur a été envoyé au développeur.]
    $title[L'utilisateur $userDisplayName[$mentioned[1;true]] a été réduit au silence pour une durée de $message[2]]
    $color[#c75353]
    $description[Raison : $message[3]]
    $onlyPerms[moderatemembers;Tu ne peux pas !]
$onlyIf[$getVar[maintenance]==false;Le robot actuellement en maintenance !]`,
}]

