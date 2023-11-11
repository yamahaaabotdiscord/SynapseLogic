module.exports = [{
name: "nuke",
description: "KAA BOOM",
code: `$log[$username[$authorID] a exécuté la commande +$commandName
    Identifiant de l'utilisateur : $authorID
    Identifiant du serveur : $guildID
    Nom du serveur : $guildName]

$title[1;Tu es sûr de vouloir faire ça ?]
$description[1;:warning: Cette action est irréversible ?]
$color[1;Red]
$addButton[1;Non;danger;nukeno;false]
$addButton[1;Oui;success;nukeyes;false]
$onlyClientPerms[managechannels;J'ai besoin de la permission \`MANAGE_CHANNELS\`]
$onlyPerms[managechannels;J'ai besoin de la permission \`MANAGE_CHANNELS\`]
$onlyIf[$getVar[maintenance]==false;Le robot actuellement en maintenance !]`
},{
    name: "nukeyes",
    type: "interaction",
    prototype: "button",
    code: `$deleteMessage[$get[msgid];$get[id]]
$wait[5s]
$let[msgid;$channelSendMessage[$get[id];{newEmbed: {title:Réinitialisation}{description:Le salon a été réinitialisé. <#$get[id]>}{color:Blue}};true]]
$deleteChannel[$channelID]
$let[id;$cloneChannel[$channelID;$channelName[$channelID];true]]
$wait[2s]
$sendMessage[$interactionUpdate[;{newEmbed: {title:Réinitialisation du salon...}{description:Réinitialisation du salon <#$channelID>, veuillez patienter.}{color:Green}};{actionRow: {button:Oui:success:nukeyes:true}{button:Non:danger:nukeno:true}};;everyone;false]]`
},{
    name: "nukeno",
    type: "interaction",
    prototype: "button",
    code: `$interactionUpdate[;{newEmbed: {title:Annulation de l'action}{description:L'action a été annulée.}{color:Red}};{actionRow: {button:Oui:success:nukeyes:true}{button:Non:danger:nukeno:true}};;everyone;false]`
}]