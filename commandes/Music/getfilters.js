module.exports = {
    name: "getfilter",
    aliases: "gf",
    code: `$log[$username[$authorID] a exécuté la commande +$commandName
    Identifiant de l'utilisateur : $authorID
    Identifiant du serveur : $guildID
    Nom du serveur : $guildName]


   $title[Les filtres appliqués actuellement]  
   $description[Voici les filtres actuels :
$replaceText[$checkCondition[$getFilters!=];false;Pas de filtres.;1]]
   
    $thumbnail[$userAvatar[$authorID]] 
    $onlyIf[$voiceID[$clientID]!=;Exécute la commande \`\`+join\`\` d'abord !]
$onlyIf[$voiceID!=;Rejoint la vocal d'abord !]
$onlyIf[$getVar[maintenance]==false;Le robot actuellement en maintenance !]`
  }