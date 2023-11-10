module.exports = [{
    name: "join",
    code: 
      `$log[$username[$authorID] a exécuté la commande +$commandName
    Identifiant de l'utilisateur : $authorID
    Identifiant du serveur : $guildID
    Nom du serveur : $guildName]
$onlyIf[$voiceID[$clientID]!=;Exécute la commande \`\`+join\`\` d'abord !]
$onlyIf[$voiceID!=;Rejoint un vocal d'abord !]



      $color[#D49FEB]
      $title[Hop !]
      $joinVC
$if[$hasPlayer==false]
          $joinVC
$description[J'ai rejoint la vocal <#$voiceID> comme prévu, amuse toi bien maintenant !]
$footer[J'ai rejoint cette vocal car $username a exécuté cette commande.]
$addTimestamp
     $onlyIf[$getVar[maintenance]==false;Le robot actuellement en maintenance !] `
    
    
}]