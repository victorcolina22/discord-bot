const { SlashCommandBuilder } = require("discord.js");

const ERRORS_CODE = [400, 404, 403, 500];

module.exports = {
  data: new SlashCommandBuilder()
    .setName("fetch-users")
    .setDescription("Fetch for users from jsonplaceholder API"),
  async execute(interaction) {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );

      if (ERRORS_CODE.includes(response.status)) {
        await interaction.reply("Hubo un error al buscar los todos");
      }

      const users = await response.json();

      let userList = "";
      users.forEach((user) => {
        userList += `${user.name}\n`;
      });

      await interaction.reply(userList);
    } catch (error) {
      throw error;
    }
  },
};
