module.exports = [{
    name: "loopoff",
    code: 
      `$log[$username[$authorID] a exécuté la commande +$commandName
    Identifiant de l'utilisateur : $authorID
    Identifiant du serveur : $guildID
    Nom du serveur : $guildName]
$onlyIf[$voiceID[$clientID]!=;Exécute la commande \`\`+join\`\` d'abord !]
$onlyIf[$voiceID!=;Rejoint un vocal d'abord !]




      $description[Le mode de répétition de la musique a été désactivé avec succès✅]
    $color[#127123]

      $loopMode[none]
     $onlyIf[$getVar[maintenance]==false;Le robot actuellement en maintenance !] `
    
    
}]