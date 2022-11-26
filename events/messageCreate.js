module.exports = (client, message) => {
    if (message.author.bot) return;
    const prefix = '$';
    if (!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(' ');
    const cmd = args.shift().toLowerCase();
    const command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
    if (command) {
        if (command.category === 'music' && !message.member.voice.channel) return message.channel.send('vui long vao room de su dung lenh!');
        command.run(client, message, args);
    } 
}