const discord = require('discord.js')

module.exports.run = async(client, message, args) => {
let nome = new discord.MessageEmbed()

.setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
.setThumbnail(message.guild.iconURL({ dynamic: true }))
.setTitle(`<:natal2:921192892733751347> Feliz natal <:natal2:921192892733751347>`)
.setDescription(`🎅| ${message.author} Que neste Natal e em todos os dias do próximo ano, possamos fazer de Jesus nosso melhor amigo, pois Ele é o maior motivo do Natal e da nossa existência. Feliz Natal e um novo ano cheio de amor, paz, amizade, humildade e sabedoria.`)
.setColor('RED')

message.channel.send(nome)
}
