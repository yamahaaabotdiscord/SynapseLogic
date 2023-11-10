module.exports = [{
    name: "cybrancee",
    aliases: "hosting",
    code: `$log[$username[$authorID] a exécuté la commande +$commandName
    Identifiant de l'utilisateur : $authorID
    Identifiant du serveur : $guildID
    Nom du serveur : $guildName]
    
    $author[🤝 SynapseLogic x Cybrancee]
    $title[Cybrancee - Hébergement web gratuit;https://cybrancee.com/]
    $description[Mettre un avis Cybrancee : [Trustpilot](https://uk.trustpilot.com/review/cybrancee.com)
    Les contacter : [Contacte](https://cybrancee.com/contact.php)
    Voir la politique de confidentialité : [Politique de confidentialité](https://cybrancee.com/privacy-policy.php)
    Voir les conditions de service : [Conditions de service](https://cybrancee.com/terms.php)
    Voir Modern Slavery Statement : [Modern Slavery Statement](https://cybrancee.com/modern-slavery-statement.php)]
    $color[#9401cd]
    $addField[Hébergement Web Premium;Hébergement web idéal pour les petites entreprises et les particuliers en quête de succès. Ils garantissent un temps de disponibilité de 99,99 % et fournissent une assistance de premier ordre.]
    $addField[Hébergement WordPress géré;Commencez à créer le site de vos rêves avec WordPress. Choisissez parmi des milliers de thèmes WordPress uniques et personnalisés.]
    $addField[Hébergement de Bot Discord;Créez votre propre bot discord de manière fiable, sur ses serveurs toujours en ligne, 24 heures sur 24 et 7 jours sur 7. Faites évoluer votre bot sur plusieurs communautés discord.]
    $addField[Hébergement de serveur Minecraft;Lancez votre propre serveur Minecraft et jouez avec vos amis en ligne. Installation instantanée et accès à plus de 10 000 Modpacks.]
    $addField[WordPress prêt à l'emploi;Connectez-vous directement à votre site web WordPress grâce à son outil WP Quick Connect. Mettez à jour et installez des plugins et des thèmes, gérez les sauvegardes et lancez des analyses de sécurité.]
    $addField[Assistance à la clientèle 24 heures sur 24, 7 jours sur 7;Ne vous lassez pas d'attendre l'assistance clientèle. Son équipe d'assistance est disponible 24 heures sur 24, 7 jours sur 7, pour vous aider à chaque fois que vous en avez besoin.]
$addField[Ils sont classés n°1 pour les temps de chargement de WordPress;3.1s]
$onlyIf[$getVar[maintenance]==false;Le robot actuellement en maintenance !]`

}]