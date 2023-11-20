module.exports = [{
    name: "stonks",
    code: `$log[$username[$authorID] a exécuté la commande $commandName
    Identifiant de l'utilisateur : $authorID
    Identifiant du serveur : $guildID
    Nom du serveur : $guildName]


$sendCanvas[stonks]
Stonks <@$authorID> !
$drawImage[stonks;stonk;0;0;900;539]
$loadImage[stonks;stonk;url;https://raw.githubusercontent.com/Mr-KayJayDee/discord-image-generation/main/src/assets/stonk.png]
$drawImage[stonks;avatar;70;40;240;240]
$loadImage[stonks;avatar;url;$nonEscape[$userAvatar[$mentioned[1;true]]]
$createCanvas[stonks;900;539]
$onlyIf[$getVar[maintenance]==false;Le robot actuellement en maintenance !]`
       
}]