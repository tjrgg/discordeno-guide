(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{443:function(e,t,s){"use strict";s.r(t);var a=s(31),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"hosting-your-bot-online-24-7"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hosting-your-bot-online-24-7"}},[e._v("#")]),e._v(" Hosting Your Bot Online 24/7!")]),e._v(" "),s("p",[e._v("Once you feel that you are ready to get your bot to stay online 24/7, follow the\nguide below. This guide, is going to use\n"),s("a",{attrs:{href:"https://p.hyper.expert/aff.php?aff=125",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hyper Expert"),s("OutboundLink")],1),e._v(" as our hosting provider.\nYou can use any you wish, but I recommend using\n"),s("a",{attrs:{href:"https://p.hyper.expert/aff.php?aff=125",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hyper Expert"),s("OutboundLink")],1),e._v(" for the following\nreasons.")]),e._v(" "),s("ul",[s("li",[e._v("I host all my bots on it. That's currently 6 bots with over 2 million users\nand 10K servers. They could grow to another 3-5 times their current size\nwithout issues.")]),e._v(" "),s("li",[e._v("Launch a high performance server in seconds.")]),e._v(" "),s("li",[e._v("One of the cheapest VPS options, I have ever seen!")]),e._v(" "),s("li",[e._v("The best part in my opinion is: "),s("strong",[e._v("They have a Discord Server where you can get\nhelp if you need help with hosting your bot!!!")])])]),e._v(" "),s("h2",{attrs:{id:"local-computer-24-7"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#local-computer-24-7"}},[e._v("#")]),e._v(" Local Computer 24/7")]),e._v(" "),s("p",[e._v("If you have a computer that you can keep running 24/7, you can actually run the\nbot on it. Just use the PM2 module to run the bot in the background.")]),e._v(" "),s("h2",{attrs:{id:"virtual-private-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#virtual-private-server"}},[e._v("#")]),e._v(" Virtual Private Server")]),e._v(" "),s("p",[e._v("For most people, this is where you are going to want to be.")]),e._v(" "),s("h3",{attrs:{id:"buying-the-vps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#buying-the-vps"}},[e._v("#")]),e._v(" Buying The VPS")]),e._v(" "),s("p",[e._v("Go to the "),s("a",{attrs:{href:"https://p.hyper.expert/aff.php?aff=125",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hyper Expert Website"),s("OutboundLink")],1),e._v(" and get\na VPS of your choice. Depending on your needs, you can choose a larger more\npowerful VPS, but I recommend starting out with the base model and then raise it\nwhen you need to.")]),e._v(" "),s("h3",{attrs:{id:"setting-up-the-vps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-the-vps"}},[e._v("#")]),e._v(" Setting Up The VPS")]),e._v(" "),s("p",[e._v("Once your ready and logged into the server, the first thing you should do is\nchange your password!")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("passwd")]),e._v("\n")])])]),s("p",[e._v("Enter the password twice and make sure you do not forget this password. Save it\nsomewhere safe!")]),e._v(" "),s("p",[e._v("Next, let's make sure you have the latest updates on your server so all bug\nfixes and features are available for your server.")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" update "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" upgrade -y\n")])])]),s("p",[e._v("In case there is some bug that let's someone access your machine, you always\nwant to have an extra layer of protection. So let's create a separate user on\nyour server where your bot will be.")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("adduser "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("USERNAME"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])]),s("p",[e._v("You will be prompted to enter a password. Use a different password for this for\nincreased security. Save this password as well!")]),e._v(" "),s("p",[e._v("Once your user has been created, you now should give this user sudo powers so it\ncan do everything your root access could.")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("usermod")]),e._v(" -aG "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("USERNAME"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])]),s("p",[e._v("Now let's install the required stuff for our bot. The following command will\ninstall Deno to your server.")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -fsSL https://deno.land/x/install/install.sh "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sh")]),e._v("\n")])])]),s("p",[e._v("Now that we have Deno installed let's install Denon which will keep the process\nrunning even after you log out or close your VPS terminal. For Node.JS devs,\nDenon is like Nodemon/PM2 for Deno.")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("deno "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" --allow-read --allow-run --allow-write --allow-net -f -q --unstable https://deno.land/x/denon/denon.ts\n")])])]),s("p",[e._v("Once, that is done you can simply run the bot.")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("denon run --allow-net --allow-read --no-check mod.ts\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);