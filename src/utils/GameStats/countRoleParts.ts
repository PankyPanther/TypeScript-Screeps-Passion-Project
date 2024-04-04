import { ROLES } from "creeps/roles";
import { bodyParts } from "definition";

export function countRoleParts(): void {
    if(!Memory.GameStats.creepRolePartCount) {
        Memory.GameStats.creepRolePartCount = {}
    }
    
    for (let creepName in Game.creeps) {
        for(let role in ROLES){
            if (!Memory.GameStats.creepRolePartCount[role]){
                Memory.GameStats.creepRolePartCount[role] = {}
            }
            for (let partName in bodyParts) {
                const part: BodyPartConstant = partName as BodyPartConstant;
                if (!Memory.GameStats.creepRolePartCount[role][part]){
                    Memory.GameStats.creepRolePartCount[role][part] = 0
                }
                Memory.GameStats.creepRolePartCount[role][part] = 0;
            }
        }
    }

    for (let creepName in Game.creeps) {
        let creepMemory = Memory.creeps[creepName];
        let creep = Game.creeps[creepName];
        if (creep) {
            for (let role in ROLES) {
                if (creepMemory.role === role) {
                    for (let part in bodyParts) {
                        switch (part) {
                            case 'move':
                                Memory.GameStats.creepRolePartCount[role][part] += creep.getActiveBodyparts(MOVE);
                                break;
                            case 'work':
                                Memory.GameStats.creepRolePartCount[role][part] += creep.getActiveBodyparts(WORK);
                                break;
                            case 'carry':
                                Memory.GameStats.creepRolePartCount[role][part] += creep.getActiveBodyparts(CARRY);
                                break;
                            case 'attack':
                                Memory.GameStats.creepRolePartCount[role][part] += creep.getActiveBodyparts(ATTACK);
                                break;
                            case 'ranged_attack':
                                Memory.GameStats.creepRolePartCount[role][part] += creep.getActiveBodyparts(RANGED_ATTACK);
                                break;
                            case 'heal':
                                Memory.GameStats.creepRolePartCount[role][part] += creep.getActiveBodyparts(HEAL);
                                break;
                            case 'claim':
                                Memory.GameStats.creepRolePartCount[role][part] += creep.getActiveBodyparts(CLAIM);
                                break;
                            case 'tough':
                                Memory.GameStats.creepRolePartCount[role][part] += creep.getActiveBodyparts(TOUGH);
                                break;
                            default:
                                throw new Error(`Unknown creep part: ${part}`);
                        }
                    }
                }
            }
        }

    }
}