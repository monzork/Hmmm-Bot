const weather = require('weather-js');
const commando = require('discord.js-commando');
const Discord = require('discord.js');

class WeatherCommand extends commando.Command
{

    constructor(client)
    {
        super(client,{
            name: 'weather',
            group: 'simple',
            memberName: 'weather',
            description: 'Just see your weather 4Head'
        });
    }
    


    async run(message, args)
    {
        console.log(args);
        weather.find({search: args, degreeType: 'C'}, function(err, result) {
            if(err) console.log(err);
           
            console.log(JSON.stringify(result, null, 2));
            var current = result[0].current;
            var location = result[0].location;
             const embed = new Discord.RichEmbed()
          .setDescription(`**${current.skytext}**`)
          .setAuthor(`Weather for ${current.observationpoint}`)
          .setThumbnail(current.imageUrl)
          .setColor(0x00AE86)
          .addField('Timezone',`UTC${location.timezone}`, true)
          .addField('Degree Type',location.degreetype, true)
          .addField('Temperature',`${current.temperature} Degrees`, true)
          .addField('Feels Like', `${current.feelslike} Degrees`, true)
          .addField('Winds',current.winddisplay, true)
          .addField('Humidity', `${current.humidity}%`, true)
          message.channel.send({embed});
          });

    }
}

module.exports = WeatherCommand;