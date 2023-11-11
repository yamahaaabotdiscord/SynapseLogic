const { LoadCommands } = require("aoi.js");
const { Loader } = require("aoi.loader");
const { Panel } = require("@akarui/aoi.panel");
const {
  AoiVoice,
  PlayerEvents,
  PluginName,
  Cacher,
  Filter,
} = require("@akarui/aoi.music");


const { AoiClient, Util } = require("aoi.js");
const aoicanvas = require("aoi.canvas");
const client = new AoiClient({
  token: "",
  prefix: "+",
  intents: ["MessageContent", "Guilds", "GuildMessages", "GuildVoiceStates"],
  events: ["onMessage", "onInteractionCreate"],
  database: {
    type: "aoi.db",
    db: require("@akarui/aoi.db"),
    tables: ["main"],
    path: "./database/",
    extraOptions: {
      dbType: "KeyValue",
    },
  },
});



const voice = new AoiVoice(client, {
  searchOptions: {
    soundcloudClientId: "trnMhwTI91yGR73E30PpagpyUvVBs52q", 
    youtubegl: "US",
  },
  requestOptions: {
    offsetTimeout: 0,
    soundcloudLikeTrackLimit: 200,
  },
});


const loader = new LoadCommands(client);
loader.load(client.cmd, "./commandes/");
loader.load(client.cmd, "./commandes/moderation");
loader.load(client.cmd, "./commandes/fun");
loader.load(client.cmd, "./commandes/utility");
loader.load(client.cmd, "./commandes/developer");
loader.load(client.cmd, "./commandes/security");
require('./variables/variables.js')(client, () => {
  console.log("Les variables ont été chargées !");
});



// Command Example (ping)
client.command({
  name: "ping",
  code: `Pong! $pingms`,
});

// optional (cacher / filter)
voice.addPlugin(PluginName.Cacher, new Cacher("memory" /* or "disk" */));
voice.addPlugin(
  PluginName.Filter,
  new Filter({
    filterFromStart: false,
  }),
);





client.status({
  name: "👋 J'ai actuellement $guildCount serveurs !",
  type: "PLAYING",
  status: "online",
  time: 12,
});

client.status({
  name: "🤔 Perdu(e) ? Exécute la commande +help !",
  type: "PLAYING",
  status: "online",
  time: 12,
});

client.status({
  name: "Ma version est : 0.1.6",
  type: "PLAYING",
  status: "online",
  time: 12,
});

client.timeoutCommand({
  name: "timeoutCommand",
  code: `$title[oui],
`
});


aoicanvas.load({
  bot: client, 
  Util: Util, 
  DownloadFolder: "./aoicanvas/", 
  ErrorsType: "console" 
});


const panel = new Panel({
  port: 5012,
  client: client,
});


panel.loadAPI({
  auth: "Authentication key here (random string)", // no spaces, keep it only alphanumeric...
});

panel.loadGUI({
  username: ["yamahaaa1", "username 2"],
  password: ["XkxIwuWYEkle", "Password 2"],
});

const app = panel.app;
app.get("/index.js", (req, res) => {
  var check = panel.isLoggedIn(req, res);
  if (a == true) {
    res.send("Logged in");
  } else {
    res.send("Not logged in");
  }
});

client.functionManager.createFunction({
  name: "$passwordEnc",
  type: "djs",
  code: async (d) => {
    const data = d.util.aoiFunc(d);
    let [password] = data.inside.splits;
    const crypto = require('crypto');
    salt = "@ho3mi"

    function encPassword(pass, salt) {
      const hash = crypto.createHmac('sha256', salt);
      hash.update(pass);
      const hashedPass = hash.digest('hex');
      return hashedPass;
    }

    password? null : functionError(d, 'Password is needed to encrypt.')
      
    data.result = encPassword(password, salt)

    return {
        code: d.util.setCode(data),
    };
  },
})


client.functionManager.createFunction({
  name: "$passwordVerify",
  type: "djs",
  code: async (d) => {
    const data = d.util.aoiFunc(d);
    let [password,hash] = data.inside.splits;
    const crypto = require('crypto');
    salt = "@ho3mi"

    function verify(pass, salt) {
      const hashed = crypto.createHmac('sha256', salt);
      hashed.update(pass);
      const hashedPass = hashed.digest('hex');
      return hashedPass == hash ? true : false;
    }

    if (!password || !hash) functionError(d, !password ? '"Password" parameter was not provided.' : !hash ? '"Hash" parameter is not provided.' : null)
      
    data.result = verify(password, salt)

    return {
        code: d.util.setCode(data),
    };
  },
})



  
  
  

