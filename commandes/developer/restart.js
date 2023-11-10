module.exports = [{
  name: "restart",
  code: `
    $reboot
$setStatus[Redémarrage..;CUSTOM;idle]
$onlyForIDs[938913707629608981;Tu ne peux pas..]
    `,
}]