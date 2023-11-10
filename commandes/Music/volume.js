module.exports = {
    name: "volume",
    aliases: "v",
    code: `$log[$username[$authorID] a exécuté la commande +$commandName
    Identifiant de l'utilisateur : $authorID
    Identifiant du serveur : $guildID
    Nom du serveur : $guildName]


   $title[Son modifiée]  
   $description[
    Volume changé à $message] 
    $thumbnail[$userAvatar[$authorID]] 
    $color[#0e427d]
    $volume[$message]
    $suppressErrors 
    $onlyIf[$voiceID[$clientID]!=;Exécute la commande \`\`+join\`\` d'abord !]
$onlyIf[$voiceID!=;Rejoint la vocal d'abord !]
$onlyIf[$getVar[maintenance]==false;Le robot actuellement en maintenance !]`
  }