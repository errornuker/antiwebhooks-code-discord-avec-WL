
const bot = new Discord.Client()
const Discord = require('discord.js');

//a faire pour que �a fonctionne mais je recommande d'ajout� ce bout de code au code de votre bot
// npm i discord.js



bot.on('ready', () => {
    console.info(`Bp  ${bot.user.tag}!`);
});

bot.login("token de ton bot")



bot.on('webhookUpdate', async channel => {
    const audit = (await channel.guild.fetchAuditLogs()).entries.first();
    if (audit.action === 'WEBHOOK_CREATE') {

        if (audit.executor.id === 'id du mec a WL') {
            console.log('blaz du mec WL webhook')
        } else {
            if (audit.executor.id === 'id du mec a WL') {
                console.log('blaze du mec WL webhook')
            } else {
                (await channel.fetchWebhooks(audit.id)).first().delete();
                console.log('un pd a cr�� un webhook')
                // possible de rajouter le fait que �a kick/ ban le mec qui a cr�� le webhook 
                // message.guild.member(message.author.id).ban({ reason: 'antiwebhook' })
                // message.guild.member(message.author.id).kick();
            }
        }
    }
})