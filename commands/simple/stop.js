const commando = require('discord.js-commando');


class StopCommand extends commando.Command
{

    constructor(client)
    {

        super(client,{
            name: 'stop',
            group: 'simple',
            memberName: 'stop',
            description: ':)'
        });
    }


    async run(message, args)
    {
        message.channel.send('Stop Command');
    }

}

module.exports = StopCommand;