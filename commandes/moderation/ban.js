module.exports = [{
    name: "ban",
    code: `$log[$username[$authorID] a banni l'utilisateur $username[$mentioned[1]]
    Identifiant de l'utilisateur qui a banni l'utilisateur : $authorID
    Identifiant de l'utilisateur banni : $mentioned[1]
    Identifiant du serveur : $guildID
    Nom du serveur : $guildName
    Raison : $noMentionMessage]

$ban[$guildID;$mentioned[1];0;$noMentionMessage]
    $title[Utilisateur banni]
    $description[L'utilisateur a bien été banni <@$mentioned[1]>]
    $color[#f5a29c]
$onlyPerms[banmembers;Ah... Mince alors.. on se demande pourquoi tu ne peux pas.]
    $argsCheck[>1;Mince.. Cé bah l'eau ! Tu as dû oublier la raison ou de mentionner l'utilisateur..]
    $onlyIf[$getVar[maintenance]==false;Le robot actuellement en maintenance !]`
}];