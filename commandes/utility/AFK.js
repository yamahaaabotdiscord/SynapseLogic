module.exports = [{
name: "afk",
$if: "old",
code: `
$setGlobalUserVar[time;<t:$truncate[$divide[$dateStamp;1000]]:R>]
Tu es désormais AFK. (Message: **$replaceText[$replaceText[$checkCondition[$message==];true;None];false;$message]**)
$setGlobalUserVar[afk;true]
$setGlobalUserVar[afkmsg;$replaceText[$replaceText[$checkCondition[$message==];true;None];false;$message]]

`
},{
    name: "$alwaysExecute",
    $if: "old",
    code: `
    Vous êtes de retour après une période d'inactivité !
    (Afk Time: $getGlobalUserVar[time])
    $reply
    $setGlobalUserVar[afk;false]
    $onlyIf[$getGlobalUserVar[afk]==true;]`
},{
name: "$alwaysExecute",
$if: "old",
code: `
$username[$mentioned[1;false]] est AFK $getGlobalUserVar[time;$mentioned[1]]!
(Message : **$getGlobalUserVar[afkmsg;$mentioned[1;false]]**)
$reply
$onlyIf[$getGlobalUserVar[afk;$mentioned[1;false]]==true;]
$onlyIf[$mentioned[1;false]!=undefined;]`
}]