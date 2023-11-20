 module.exports = [{
type: "guildJoin",
code: `$log[
-------------------------------------------------------------------
Logs - J'ai rejoint un serveur - $username[$clientID]
Serveur :  $guildName[$guildID] (\`$guildID\`)
Nombre de serveurs que j'ai : $guildCount
Propriétaire : $username[$guildOwnerID[$guildID]] \`($guildOwnerID[$guildID])\`
Nombre de salons : $channelCount[$guildID]
Membres : $membersCount[$guildID]]
-------------------------------------------------------------------
`
 },{
     type: "guildLeave",
code: `$log[
-------------------------------------------------------------------
Logs - J'ai quitté un serveur - $username[$clientID]
Serveur :  $guildName[$guildID] (\`$guildID\`)
Nombre de serveurs que j'ai : $guildCount
Propriétaire : $username[$guildOwnerID[$guildID]] \`($guildOwnerID[$guildID])\`
Membres : $membersCount[$guildID]]
-------------------------------------------------------------------`
 }]


