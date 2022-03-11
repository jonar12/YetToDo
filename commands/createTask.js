const { SlashCommandBuilder } = require('@discordjs/builders');
const { Task } = require('./tasks/Task.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('create_task')
		.setDescription('Create a new task')
		.addStringOption(option =>
			option
				.setName('title')
				.setDescription('the title of your task')
				.setRequired(true)
		)
		.addStringOption(option =>
			option
				.setName('due_date')
				.setDescription(
					'the due date of the task in the format mm/dd/yyyy hh:mm'
				)
				.setRequired(false)
		),
	async execute(interaction) {
		const title = interaction.options.getString('title');
		const dueDate = interaction.options.getString('due_date');

		console.log(title, dueDate);
		// create task with title and due date
		// get the task into the database, if there are no previous tasks in the database, create an array and push the task
		await interaction.reply('*creating a new task*');
	},
};
