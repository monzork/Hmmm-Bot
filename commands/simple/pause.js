const commando = require('discord.js-commando');


class PauseCommand extends commando.Command
{

    constructor(client)
    {

        super(client,{
            name: 'pause',
            group: 'simple',
            memberName: 'pause',
            description: ':)'
        });
    }


    async run(message, args)
    {
        message.channel.send('Pausing...');
    }

}

module.exports = PauseCommand;