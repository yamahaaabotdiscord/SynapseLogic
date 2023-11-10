module.exports = [{
    name: "botinfo",
    aliases: "infobot",
    code: `$log[$username[$authorID] a exécuté la commande +$commandName
    Identifiant de l'utilisateur : $authorID
    Identifiant du serveur : $guildID
    Nom du serveur : $guildName]

$title[Informations du bot]
$description[Dans cette commande, tu retrouveras les différentes informations concernant le bot.]
$addField[Processeur;↳ **Utilisation du processeur** : $cpu[os]%/100%
  	↳ **Processus** : $cpu[process]%/100%
     ↳ **Modèle du CPU** : $djsEval[require ('os').cpus()[0].model;true]
      ↳ **Plateforme du CPU** : $replaceText[$djsEval[require('os').platform();true];linux;Linux]]
$addField[Utilisation de la RAM;$ram MB/$maxRAM MB]
$addField[Versions des dépendances; 
↳ **Version du package** : aoi.js $packageVersion
↳ **Version de Node.js** : $nodeVersion
$addField[Informations globales du bot;  
**Nom**       ➜ $userDisplayName[$clientID]
**ID**        ➜ $clientID
**Développeur** ➜ $userDisplayName[938913707629608981] ( $username[938913707629608981] )
**ID Développeur** ➜ 938913707629608981
**Serveurs**  ➜ $guildCount
**Membres**   ➜ $allMembersCount
**Commandes** ➜ $commandsCount
**Ping**      ➜ $pingms
**En ligne depuis**    ➜ $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$uptime;minutes;minutes];hours;heures];seconds;secondes];week;semaine];day;jour];second;seconde]
**Prefixe**   ➜ +]
$onlyIf[$getVar[maintenance]==false;Le robot actuellement en maintenance !]`
}]