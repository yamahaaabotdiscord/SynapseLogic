module.exports = [{
    name: "dc",
    aliases: "quit",
    code: `$log[$username[$authorID] a exécuté la commande +$commandName
    Identifiant de l'utilisateur : $authorID
    Identifiant du serveur : $guildID
    Nom du serveur : $guildName]




      $color[#ff0000]
      $title[Aurevoir !]
      $if[$hasPlayer==true]
          $leaveVC
$description[J'ai quitté la vocal ⁠<#$voiceID> comme prévu, à bientôt]
$footer[J'ai quitté cette vocal car $username a exécuté cette commande.]
$addTimestamp
      $onlyIf[$voiceID[$clientID]!=;Exécute la commande \`\`+join\`\` d'abord !]
$onlyIf[$voiceID!=;Rejoint la vocal d'abord !]
$onlyIf[$getVar[maintenance]==false;Le robot actuellement en maintenance !]`
    }] 