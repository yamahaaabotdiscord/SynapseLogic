module.exports = [{
    name: "maintenanceon",
    code: `$log[$username[$authorID] a activé le mode maintenance, toutes les commandes ont étés désactivées.
    Identifiant de l'utilisateur : $authorID
    Identifiant du serveur : $guildID
    Nom du serveur : $guildName]

$setVar[maintenance;true]
Le mode maintenance est activé
$setStatus[Le bot est actuellement en maintenance;CUSTOM;idle]
$onlyForIDs[938913707629608981;Tu es pas développeur]`
},{
name: "maintenanceoff",
code: `
$setVar[maintenance;false]
Le mode maintenance est désactivé
$onlyForIDs[938913707629608981;Tu n'es pas développeur.]
$setStatus[+help;CUSTOM;online]`
}]
