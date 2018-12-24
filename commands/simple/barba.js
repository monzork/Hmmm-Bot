const commando = require('discord.js-commando');
const discord = require('discord.js');



class BarbaCommnad extends commando.Command
{
    constructor(client)
    {
        super(client,{

            name: 'barba',
            group: 'simple',
            memberName: 'barba',
            description: 'BarbaSticker'
        });
    }
//'http://funkyimg.com/i/2PnPM.jpg'
    async run(message,args)
    {
        var myInfo = new discord.RichEmbed()
            .setDescription('Que dice este chupapijas')
            .setColor('#42f4e5')
            .setImage('http://funkyimg.com/i/2PnPM.jpg')
            message.channel.sendEmbed(myInfo);
    }
}

module.exports =BarbaCommnad;