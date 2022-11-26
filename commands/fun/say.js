module.exports = {
    name: 'say', 
    category: 'fun',
    run: (client, message, ) => {
        if (message.content.toLowerCase() == 'say') {
            message.reply('Momo : 0779829537');
        }
        console.log(message.content)
       
    }
}