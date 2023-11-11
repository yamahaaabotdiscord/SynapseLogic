module.exports = [{
  name: "idgen",
  code: `
   
$description[Email : $randomString[30]@votredomaine.com 
Mot de passe : $randomString[30;alphanumeric]]
Voici vos identifiants générés ! ⏬
$color[$random[0;999999]]
$footer[🛑 Les identifiants générés ne sont pas stockés dans la base de données.]
$onlyIf[$getVar[maintenance]==false;Le robot actuellement en maintenance !]
 $globalCooldown[2s;Patience !]`
}]