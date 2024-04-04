export function countRoleParts(role: string, part: BodyPartConstant): number {
    let amount = 0
    for (let creepName in Memory.creeps) {
        if (Memory.creeps.hasOwnProperty(creepName)) {
            let creep = Game.creeps[creepName];
            if (creep.memory.role === role){
                if (creep.getActiveBodyparts(part)){
                    amount += creep.getActiveBodyparts(part)
                }
            }
        }
    }

    return amount
}