module.exports = [{
    name: "nowplaying",
    aliases: "np",
    code:
    `$log[$username[$authorID] a exécuté la commande +$commandName
    Identifiant de l'utilisateur : $authorID
    Identifiant du serveur : $guildID
    Nom du serveur : $guildName]


$title[Musique actuelle]
$description[
- **Titre** : *$songInfo[title]*

- **Artiste** : $songInfo[artist]

- **Durée** : $digitalFormat[$getCurrentTrackDuration]/$digitalformat[$songInfo[duration]]

- **Volume :** $volume

- **Lien de la musique** : $songInfo[url]

- **Demandé par** : $songInfo[requester]

- **Ping Vocal** : $voicePing[ws] ms

-  **Vues** : $songInfo[views]

-  **Plateforme** : $songInfo[formatedPlatforms]


]
$image[$songInfo[thumbnail]]
$color[#EDDED0]


    $onlyIf[$voiceID[$clientID]!=;Exécute la commande \`\`+join\`\` d'abord !]
$onlyIf[$voiceID!=;Rejoint la vocal d'abord !]
$onlyIf[$getVar[maintenance]==false;Le robot actuellement en maintenance !]`

}]