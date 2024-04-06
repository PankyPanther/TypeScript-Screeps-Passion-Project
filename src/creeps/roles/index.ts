import { CreepRole } from 'definition'; 
import roleHarvester from './role.harvester';
import roleUpgrader from './role.upgrader';
import roleHauler from './role.hauler';
import roleScout from './role.scout';
import roleremoteHarvester from './role.remoteHarvester';
import roleremoteHauler from './role.remoteHauler';
import roleBuilder from './role.builder';
import roleRepairer from './role.repairer';

interface RoleLookup {
    [roleName: string]: CreepRole
}

export const ROLES: RoleLookup = {
    'builder': roleBuilder,
    'harvester': roleHarvester,
    'hauler': roleHauler,
    'remoteHarvester': roleremoteHarvester,
    'remoteHauler': roleremoteHauler,
    'repairer': roleRepairer,
    'scout': roleScout,
    'upgrader': roleUpgrader,
};


export function getRole(roleName: string): CreepRole | null{
    return ROLES[roleName] || null
}

export function runCreepRole(creep: Creep) {
    const role = creep.memory.role;
    if (ROLES[role]) {
        ROLES[role].run(creep)
    } else {
        console.log(`No role defined for Creep: ${creep.name}: killing creep`)
        creep.suicide()
    }
}
