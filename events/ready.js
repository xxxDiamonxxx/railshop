module.exports = (client) => {
    console.log('Bot is ready!');
    client.user.setPresence({ activities: [{ name: 'Bot by DIAMON'}], status: 'online'} );
}