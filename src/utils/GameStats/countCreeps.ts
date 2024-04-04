import { bodyParts } from "definition";
import { ROLES } from "creeps/roles"

export function countCreeps(){
    for(let role in ROLES){
        Memory.GameStats.creepCount[role] = 0
    }

    for (let creepName in Game.creeps) {
        let creep = Memory.creeps[creepName]

        for(let role in ROLES){
            if(creep.role === role){
                switch (role) {
                    case 'builder':
                        Memory.GameStats.creepCount.builder++;
                        break;
                    case 'harvester':
                        Memory.GameStats.creepCount.harvester++;
                        break;
                    case 'hauler':
                        Memory.GameStats.creepCount.hauler++;
                        break;
                    case 'remoteHarvester':
                        Memory.GameStats.creepCount.remoteHarvester++;
                        break;
                    case 'remoteHauler':
                        Memory.GameStats.creepCount.remoteHauler++;
                        break;
                    case 'scout':
                        Memory.GameStats.creepCount.scout++;
                        break;
                    case 'upgrader':
                        Memory.GameStats.creepCount.upgrader++;
                        break;
                    default:
                        throw new Error(`Unknown role: ${role}`);
                }
            }
        }
    }
}