const commando = require('discord.js-commando');


class volumeCommand extends commando.Command
{

    constructor(client)
    {

        super(client,{
            name: 'volume',
            group: 'simple',
            memberName: 'volume',
            description: ':)'
        });
    }

    async run(message, args)
    {
        message.channel.send('Set up your volume');
    }


}

module.exports = volumeCommand;