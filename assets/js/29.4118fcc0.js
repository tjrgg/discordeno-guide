(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{440:function(e,t,a){"use strict";a.r(t);var s=a(31),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"creating-languages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-languages"}},[e._v("#")]),e._v(" Creating Languages!")]),e._v(" "),a("p",[e._v("Woot! You have mastered Discordeno events already. Now it's time to finally make\nour bot multi-lingual. Vàmanos!")]),e._v(" "),a("h2",{attrs:{id:"what-is-a-discordeno-language"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-a-discordeno-language"}},[e._v("#")]),e._v(" What Is A Discordeno Language?")]),e._v(" "),a("p",[e._v("A Discordeno language is a folder that will hold all our responses that the bot\nsends. By having various different language files you can have a multi-lingual\nbot that can be used in different languages.")]),e._v(" "),a("h2",{attrs:{id:"i18next"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#i18next"}},[e._v("#")]),e._v(" i18next")]),e._v(" "),a("p",[e._v("By default, Discordeno comes built with support for i18next (one of if not the\nbest localization libraries). If you want to learn more, go to\n"),a("a",{attrs:{href:"https://www.i18next.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("i18next website"),a("OutboundLink")],1),e._v(". For now, there is probably not\ngoing to be anything you will need to learn there. As most of the functionality\nhas already been created for you right here in Discordeno.")]),e._v(" "),a("h2",{attrs:{id:"default-language"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#default-language"}},[e._v("#")]),e._v(" Default Language")]),e._v(" "),a("p",[e._v("The default language with Discordeno is American English which uses the name\n"),a("code",[e._v("en_US")]),e._v(". So when you open the "),a("code",[e._v("src/languages/")]),e._v(" folder you will find a folder\ncalled "),a("code",[e._v("en_US")]),e._v(". This is where all the strings can be kept for your bot that can\nbe easily translated by other translators.")]),e._v(" "),a("h2",{attrs:{id:"understanding-the-folder-structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#understanding-the-folder-structure"}},[e._v("#")]),e._v(" Understanding The Folder Structure")]),e._v(" "),a("p",[e._v("The first folder inside the languages folder must be a language folder following\nthe name pattern like "),a("code",[e._v("en_US")]),e._v(". So for example, if we wanted to add a Spanish\n(Spain) language to our bot we would create a new folder called "),a("code",[e._v("es_ES")]),e._v(".")]),e._v(" "),a("p",[e._v("You can have as many folder in here as you like. For example I can do something\nlike "),a("code",[e._v("src/languages/en_US/commands/fun/hug.json")]),e._v(". Notice that I have created\ncategories to help keep them categorized and easier to find. You can do it\nhowever you wish to have them. For now, just remember that files must always be\n"),a("code",[e._v(".json")]),e._v(" files in these folders. "),a("strong",[e._v("JSON is required.")])]),e._v(" "),a("h2",{attrs:{id:"adding-hug-strings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-hug-strings"}},[e._v("#")]),e._v(" Adding Hug Strings")]),e._v(" "),a("p",[e._v("Earlier in the guide, we made a hug command. So let's make that commands\ntranslations work properly now.")]),e._v(" "),a("ul",[a("li",[e._v("Create the "),a("code",[e._v("hug.json")]),e._v(" file in the "),a("code",[e._v("src/languages/en_US/commands/fun/")]),e._v(" folder.")])]),e._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"DESCRIPTION"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Hug yourself or another user."')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("Most of the time, you should start with this base. The "),a("code",[e._v("DESCRIPTION")]),e._v(" key, is\nused in the help command and provides the description for the command. When\nsomeone types "),a("code",[e._v("!help hug")]),e._v(" they would see this description you typed.")]),e._v(" "),a("p",[e._v("In our hug command we also had 2 other keys we used. "),a("code",[e._v("SELF")]),e._v(" and "),a("code",[e._v("OTHER")]),e._v(" so let's\nadd those in.")]),e._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"DESCRIPTION"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Hug yourself or another user."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"SELF"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("\"If you had no one to hug you could have hugged me. Years from now, when you're thinking about me, you're gonna say: 'How did I ever get along without that wonderful, constant companion?' *Woof.*\"")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"OTHER"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"{{user}} was hugged by {{mention}}"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("Now the "),a("code",[e._v('"SELF"')]),e._v(" is pretty easy to understand but the "),a("code",[e._v("OTHER")]),e._v(" has some\ninteresting things in it so let's jump into that.")]),e._v(" "),a("h2",{attrs:{id:"translate-function"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#translate-function"}},[e._v("#")]),e._v(" Translate Function")]),e._v(" "),a("p",[e._v("Discordeno provides you a built in function called "),a("code",[e._v("translate")]),e._v(". It takes in 3\ndifferent arguments.")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("guildId")]),e._v(" the id of the server. This is used to determine which language to\nuse.")]),e._v(" "),a("li",[a("code",[e._v("key")]),e._v(" the unique folderpath:KEY string that will determine which string to\ntranslate.")]),e._v(" "),a("li",[a("code",[e._v("options")]),e._v(" the variables that the strings have available to them.")])]),e._v(" "),a("p",[e._v("i18next allows you to pass in variables that you can use when you want in your\nstrings. If you recall from our guide ealier we passed in 2 variables.")]),e._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("translate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n  message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("guildId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[e._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("commands/fun/")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[e._v("${")]),e._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("name"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[e._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[e._v("${")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("type")]),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[e._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[e._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" mention"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("member"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("mention"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" user"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" member"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("mention "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("p",[e._v("Here we can see that we passed in:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("mention")]),e._v(": The user mention who used this command. "),a("code",[e._v("!hug")])]),e._v(" "),a("li",[a("code",[e._v("user")]),e._v(": The user mention of the member who was @ by the command author.\n"),a("code",[e._v("!hug @o'neill")])])]),e._v(" "),a("h2",{attrs:{id:"variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#variables"}},[e._v("#")]),e._v(" Variables")]),e._v(" "),a("div",{pre:!0},[a("p",[e._v("would be used by doing "),a("code",[e._v("{{mention}}")]),e._v(" :::")]),e._v(" "),a("h2",{pre:!0,attrs:{id:"key-rules"}},[a("a",{pre:!0,attrs:{class:"header-anchor",href:"#key-rules"}},[e._v("#")]),e._v(" Key Rules")]),e._v(" "),a("p",[e._v("When you create keys in the files there are a couple rules to follow.")]),e._v(" "),a("ul",[a("li",[e._v("Never use "),a("code",[e._v(":")]),e._v(" in your key name. "),a("strong",[e._v("REQUIRED")])]),e._v(" "),a("li",[e._v("ALWAYS USE UPPERCASE "),a("strong",[e._v("OPTIONAL")])]),e._v(" "),a("li",[e._v("Words are separated by "),a("code",[e._v("_")]),e._v(" "),a("strong",[e._v("OPTIONAL")])])]),e._v(" "),a("p",[e._v("The first one is the only one that is mandatory. The other two are recommended\nfor you.")]),e._v(" "),a("h2",{pre:!0,attrs:{id:"missing-keys"}},[a("a",{pre:!0,attrs:{class:"header-anchor",href:"#missing-keys"}},[e._v("#")]),e._v(" Missing Keys")]),e._v(" "),a("p",[e._v("Every developer forgets stuff sometimes. When you forget to translate a key, it\nwill be marked as a missing key and you would be alerted if you have provided a\nchannelID in the configs file, and it will also be logged in your console.")]),e._v(" "),a("h2",{pre:!0,attrs:{id:"spanish-version"}},[a("a",{pre:!0,attrs:{class:"header-anchor",href:"#spanish-version"}},[e._v("#")]),e._v(" Spanish Version")]),e._v(" "),a("p",[e._v("Let's just create a spanish version of the hug command from above to see an\nexample of different languages.")]),e._v(" "),a("ul",[a("li",[e._v("Create a file called "),a("code",[e._v("hug.json")]),e._v(" in the folder\n"),a("code",[e._v("src/languages/es_ES/commands/fun/")])])]),e._v(" "),a("div",{pre:!0,attrs:{class:"language-json extra-class"}},[a("pre",{pre:!0,attrs:{"v-pre":"",class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"DESCRIPTION"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Abrázate a ti mismo oa otro usuario"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"SELF"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("\"Si no tuvieras a nadie a quien abrazar, podrías haberme abrazado. Años a partir de ahora, cuando estés pensando en mí, dirás: '¿Cómo me las arreglé sin esa maravillosa y constante compañera?' *Guau.*\"")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"OTHER"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"{{user}} fue abrazado por {{mention}}"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("Notice, that there are 2 thing that were "),a("strong",[e._v("NOT")]),e._v(" translated. The "),a("code",[e._v("KEY")]),e._v(" names and\nthe "),a("code",[e._v("VARIABLES")]),e._v(". These 2 things should never be translated. Anything else can be\ntranslated upon your needs.")]),e._v(" "),a("h2",{pre:!0,attrs:{id:"localization-platform"}},[a("a",{pre:!0,attrs:{class:"header-anchor",href:"#localization-platform"}},[e._v("#")]),e._v(" Localization Platform")]),e._v(" "),a("p",[e._v("i18next works perfectly with localization platforms. For example, you can easily\nplug in "),a("code",[e._v("crowdin")]),e._v(" or "),a("code",[e._v("transifex")]),e._v(" to your project.")]),e._v(" "),a("ul",[a("li",[a("a",{pre:!0,attrs:{href:"https://www.transifex.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Transifex"),a("OutboundLink",{pre:!0})],1),e._v(" "),a("em",[e._v("This is the one I use in my bot but\nyou can use anything you like.")])]),e._v(" "),a("li",[a("a",{pre:!0,attrs:{href:"https://crowdin.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Crowdin"),a("OutboundLink",{pre:!0})],1)])]),e._v(" "),a("h2",{pre:!0,attrs:{id:"challenge"}},[a("a",{pre:!0,attrs:{class:"header-anchor",href:"#challenge"}},[e._v("#")]),e._v(" Challenge")]),e._v(" "),a("p",[e._v("Wow! You have even masted languages. Go ahead and jump back to the role command\nwe made earlier and add translation support to it. Give it some love!")]),e._v(" "),a("p",[e._v("Once you are ready, let's go make our first monitor.")])])])}),[],!1,null,null,null);t.default=n.exports}}]);