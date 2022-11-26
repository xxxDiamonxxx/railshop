const checkSameRoom = (message) => {
    if (!message.member.voice.channel) return message.reply('vào room đê');
    if (!message.guild.me.voice.channelID || message.guild.me.voice.channelID == message.member.voice.channelID ) return;
}

module.exports = {
    checkSameRoom,
}