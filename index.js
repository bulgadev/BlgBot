import dotenv from 'dotenv'
dotenv.config()
import { Client, GatewayIntentBits } from 'discord.js'
import events from './event.js'

const TOKEN = process.env.TOKEN


const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers
    ]
})

let chat

client.once('ready', async () => {
    console.log('Its working, yippie')

    chat = await client.channels.fetch('1280205245024309283')

    sendmsg(chat)
})

function sendmsg(chat) {
    setTimeout(() => {
        chat.send('Bot is on :)')
    }, 100);
}

function alert(chat) {
    chat.send('alert')
}

client.on('messageCreate', message => {
    if (message.content === 'hi') {
        message.reply('sup, u good?');
    }
})

events.on('alerted', () => {
    console.log('done')
    chat.send('alert')
})


client.login(TOKEN)