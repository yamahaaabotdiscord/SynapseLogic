module.exports = client => {
    client.variables({
    
     afk: "false",
    afkmsg: "Aucune raison",
    time: "",
    maintenance: "false",
    badges: "none",
        busy: "",
busyMessage: "",
        botColor: "#ff0000",
        prefix: "+", //Change this to your client prefix
  welcome: true,
  welcometype: "text",
  welcomechannel: "0",
  welcomemsg: "Bienvenue à {guild.name}, **{user.name}**",
  welcomemsgembeds: {"title": "Bienvenue à {guild.name}","description": "Bonjour {user.name} joie de ta place !"}


    });
  }
  
  