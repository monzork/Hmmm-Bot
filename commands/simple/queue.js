const commando = require('discord.js-commando');


class QueueCommand extends commando.Command
{

    constructor(client)
    {

        super(client,{
            name: 'queue',
            group: 'simple',
            memberName: 'queue',
            description: ':)'
        });
    }


    async run(message, args)
    {
        message.channel.send('__**Song queue:**__');
    }

}

module.exports = QueueCommand;