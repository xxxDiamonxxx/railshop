const { readdirSync } = require ('fs');
const slasCommands = [];
const guildID = "971692019183411200";

module.exports = (client) => {
    let count = 0;
    readdirSync('./slashCommands/').forEach(dir => {
        const commands = readdirSync(`./slashCommands/${dir}`).filter(file => file.endsWith('.js'));
        for (const file of commands) {
            const pull = require(`../slashCommands/${dir}/${file}`);
            if (pull.name) {
                client.interactions.set(pull.name, pull);
                slasCommands.push(pull);
                count++;
            } else {
                continue;
            }
        }
    });

    client.once('ready', async () => {
        await client.guilds.cache.get(guildID).commands.set(slasCommands);
        // await client.application.commands.set(slasCommands);
    });

    console.log(`Đã load  ${count} salsh commands!`);
}