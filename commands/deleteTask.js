const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('delete_task')
		.setDescription('Delete a task.'),
	async execute(interaction) {
		await interaction.reply('*Deleting task #*');
	},
};
