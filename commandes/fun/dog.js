module.exports = [{
    name: "dog",
    aliases: ["doggy","chien","puppy"],
    code: `$log[$username[$authorID] a exécuté la commande $commandName
    Identifiant de l'utilisateur : $authorID
    Identifiant du serveur : $guildID
    Nom du serveur : $guildName]


 $title[Un chien apparaît !]
$color[#904000]
$image[$httpRequest[https://dog.ceo/api/breeds/image/random;GET;;message;Erreur]]
$footer[Un chien - Demandé par $username[$authorID]]
$onlyIf[$getVar[maintenance]==false;Le robot actuellement en maintenance !]`
       
}]
