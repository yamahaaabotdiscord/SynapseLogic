module.exports = [{
    name: "cat",
    aliases: ["miaou","meow","kitty","chaton","chat"],
    code: `$log[$username[$authorID] a exécuté la commande $commandName
    Identifiant de l'utilisateur : $authorID
    Identifiant du serveur : $guildID
    Nom du serveur : $guildName]


 $title[Un chat apparaît !]
$color[#0000FF]
$image[$randomText[https://media.tenor.com/lOG0hy6GUgEAAAAj/cat.gif;https://media.tenor.com/GOabrbLMl4AAAAAM/plink-cat-plink.gif;https://media.tenor.com/G9qmH_P1nbsAAAAM/angry-angry-cat.gif;https://media.tenor.com/TKq6Fn71XPgAAAAM/seriously-seriously-cat.gif;https://media.tenor.com/KS3jUayIwAkAAAAM/fat-cat-fish-drop.gif;https://media.tenor.com/ZXBks2QSfdgAAAAM/cats-kittens.gif;https://media.tenor.com/vG-RXRa4c84AAAAM/birthday-happybirthday.gif]]
$footer[Un chat - Demandé par $username[$authorID]]
$onlyIf[$getVar[maintenance]==false;Le robot actuellement en maintenance !]`
       
}]