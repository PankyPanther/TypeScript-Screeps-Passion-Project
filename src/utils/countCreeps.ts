export function countCreeps(role: string): number{
    let amount: number = 0
    for (let creepName in Memory.creeps) {
        if (Memory.creeps.hasOwnProperty(creepName)) {
            let creep = Memory.creeps[creepName];
            if (creep.role === role){
                amount++
            }
        }
    }

    return amount
}