module.exports = [{
name: "skip",
code: `$log[$username[$authorID] a exécuté la commande +$commandName
    Identifiant de l'utilisateur : $authorID
    Identifiant du serveur : $guildID
    Nom du serveur : $guildName]


$title[Musique passée par $username[$authorID]]
$author[$songInfo[artist;$sub[$queueLength;1]]]
$description[J'ai passé la musique **$songInfo[title;$sub[$queueLength;2]]** de **$songInfo[artist;$sub[$queueLength;2]]** et désormais je joue **$songInfo[title;$sub[$queueLength;1]]** de **$songInfo[artist;$sub[$queueLength;1]]**]
$thumbnail[$songInfo[thumbnail;$sub[$queueLength;1]]]
    $color[#0B12F2]
    $skipTrack
$onlyIf[$queueLength>1;Il n'y a actuellement aucune musique ajoutée à la file d'attente.]
    $suppressErrors[Réessaye la commande !]

$onlyIf[$voiceID[$clientID]!=;Exécute la commande \`\`+join\`\` d'abord !]
$onlyIf[$voiceID!=;Rejoint la vocal d'abord !]
$onlyIf[$getVar[maintenance]==false;Le robot actuellement en maintenance !]`
}]