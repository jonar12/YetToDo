const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('edit_task')
		.setDescription('edit a task.'),
	async execute(interaction) {
		await interaction.reply('*Editing task #*');
	},
};
