const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('create_task_list')
		.setDescription('Create a new task list'),
	async execute(interaction) {
		await interaction.reply('*creating a new task list*');
	},
};
