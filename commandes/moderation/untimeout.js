module.exports = [{
 name: "untimeout",
 code: `$stopTimeout[$mentioned[1;true]]
       $title[L'utilisateur a été unmute !]
       $onlyPerms[moderatemembers;Tu ne peux pas !]
       $suppressErrors[L'utilisateur $userDisplayName[$mentioned[1;true]] ($username[$mentioned[1;true]] - <@$mentioned[1;true]>) n'est pas mute.]
    $onlyIf[$getVar[maintenance]==false;Le robot actuellement en maintenance !]`
}]