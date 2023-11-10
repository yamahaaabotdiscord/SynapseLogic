module.exports = [{
  name: "mdpgen",
  code: `
    $editIn[10s;Email : $randomString[30]@votredomaine.com 
Mot de passe : $randomString[30;alphanumeric]]
  Vos identifiants sont en cours de génération...
$onlyIf[$getVar[maintenance]==false;Le robot actuellement en maintenance !]`
}]