const commando = require('discord.js-commando');


class ResumeCommand extends commando.Command
{

    constructor(client)
    {

        super(client,{
            name: 'resume',
            group: 'simple',
            memberName: 'resume',
            description: ':)'
        });
    }


    async run(message, args)
    {
        message.channel.send('Resuming...');
    }

}

module.exports = ResumeCommand;