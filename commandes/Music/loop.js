module.exports ={
  name: "loop",
  code: `$log[$username[$authorID] a exécuté la commande +$commandName
    Identifiant de l'utilisateur : $authorID
    Identifiant du serveur : $guildID
    Nom du serveur : $guildName]

$log[$username[$authorID] a exécuté la commande +$commandName
    Identifiant de l'utilisateur : $authorID
    Identifiant du serveur : $guildID
    Nom du serveur : $guildName]
   $if[$getUserVar[loop]==none]
    $setUserVar[loop;song]
    $loopMode[song]
    $description[Le mode de répétition de la musique a été activé avec succès✅]
    $color[#127127]
  
  $if[$getUserVar[loop]==song]
   $setUserVar[loop;queue]
    $loopMode[queue]
    $description[Le mode de répétition de la file a été activé avec succès✅]
    $color[#127127]
    
  $if[$getUserVar[loop]==queue]
  $setUserVar[loop;none]
    $loopMode[none]
    $description[Le mode de répétition de la file a été désactivé avec succès✅]
    $color[#ff0000]
    
    $onlyIf[$voiceID[$clientID]!=;Exécute la commande \`\`+join\`\` d'abord !]
$onlyIf[$voiceID!=;Rejoint la vocal d'abord !]
$onlyIf[$getVar[maintenance]==false;Le robot actuellement en maintenance !]`
}