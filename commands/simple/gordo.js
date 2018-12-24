const commando = require('discord.js-commando');
const discord = require('discord.js');


class GordoCommnad extends commando.Command
{
    constructor(client)
    {
        super(client,{

            name: 'gordo',
            group: 'simple',
            memberName: 'gordo',
            description: 'C pone a llorar'
        });
    }

    async run(message,args)
    {
        var myInfo = new discord.RichEmbed()
            .setDescription('Porque no gane con Zoe AD Supp')
            .setColor('#f4aa42')
            .setImage('http://funkyimg.com/i/2PsJ1.png')
            message.channel.sendEmbed(myInfo);
       



    }

}

module.exports = GordoCommnad;