export const commands: Map<CommandState, {[key: string]: (args: CommandArgs) => void}> = new Map();

commands.set("normal", normalCommands);
commands.set("battle", battleCommands);