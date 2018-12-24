const commando = require('discord.js-commando');


class npCommand extends commando.Command
{

    constructor(client)
    {

        super(client,{
            name: 'np',
            group: 'simple',
            memberName: 'np',
            description: ':)'
        });
    }


    async run(message, args)
    {
        message.channel.send('Now Playing');
    }

}

module.exports = npCommand;