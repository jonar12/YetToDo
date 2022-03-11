const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('show_tasks')
		.setDescription('Displays all tasks.'),
	async execute(interaction) {
		await interaction.reply('*showing all tasks*');
	},
};
