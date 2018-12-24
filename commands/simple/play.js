const commando = require('discord.js-commando');


class PlayCommand extends commando.Command
{

    constructor(client)
    {

        super(client,{
            name: 'play',
            group: 'simple',
            memberName: 'play',
            description: 'Play music :)'
        });
    }

    async run(message, args)
    {
        message.channel.send('Searching...');
    }




}

module.exports = PlayCommand;