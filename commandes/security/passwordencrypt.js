module.exports = [{
    name: "encpassword",
    aliases: ["enc","encpw","mdpencrypt","pwenc","passwordencrypt"],
    code: `$log[$username[$authorID] a exécuté la commande +$commandName
    Identifiant de l'utilisateur : $authorID
    Identifiant du serveur : $guildID
    Nom du serveur : $guildName]
  
    $passwordEnc[$message]
$argsCheck[>0;Tu dois mettre le mot de passe.]
$onlyIf[$getVar[maintenance]==false;Le robot actuellement en maintenance !]
    `
}]
