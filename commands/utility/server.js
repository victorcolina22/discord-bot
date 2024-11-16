const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("server")
    .setDescription("Provides information about the server."),
  async execute(interaction) {
    // interaction.guild is the object representing the Guild in which the command was run

    const guildCreatedAt = interaction.guild.createdAt;
    const day = new Date(guildCreatedAt).getDate();
    const month = new Date(guildCreatedAt).getMonth() + 1;
    const year = new Date(guildCreatedAt).getFullYear();
    const date = `${day}-${month}-${year}`;

    await interaction.reply(
      `This server is ${interaction.guild.name} and has ${interaction.guild.memberCount} members, created on: ${date}.`,
    );
  },
};
