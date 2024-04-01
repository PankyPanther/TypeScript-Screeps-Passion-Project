import roleHarvester from "creeps/roles/role.harvester"
import roleHauler from "creeps/roles/role.hauler"
import roleUpgrader from "creeps/roles/role.upgrader"

const creepPicker = {
    1: roleHarvester,
    2: roleHauler,
    3: roleUpgrader,
}



export function spawnScoreManager(): string {
    console.log(creepPicker[3])
    return ''
}