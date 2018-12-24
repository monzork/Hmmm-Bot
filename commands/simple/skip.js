const commando = require('discord.js-commando');


class SkipCommand extends commando.Command
{

    constructor(client)
    {

        super(client,{
            name: 'skip',
            group: 'simple',
            memberName: 'skip',
            description: 'skip music :)'
        });
    }

    async run(message, args)
    {
        message.channel.send(':FeelsGoodMan:');
    }


}

module.exports = SkipCommand;