export const commands: Map<CmdState, {[key: string]: (args: CommandArgs) => void}> = new Map();

commands.set("normal", normalCommands);