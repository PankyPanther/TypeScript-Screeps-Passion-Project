import { moveToLocation } from "creeps/PathFinding/moveToLocation";

export function store(creep: Creep, data: any = {}) { 
    let spawn = creep.room.find(FIND_MY_SPAWNS)[0];



    if (spawn && spawn.store.energy < 300) {
        if (creep.transfer(spawn, RESOURCE_ENERGY) != ERR_NOT_IN_RANGE) {
            creep.transfer(spawn, RESOURCE_ENERGY);
            return
        } else {
            moveToLocation(creep, spawn)
            return
        }
    }



    const extensions = creep.room.find(FIND_STRUCTURES, {
        filter: { structureType: STRUCTURE_EXTENSION }
    }) as StructureExtension[];
    let leastEnergyExtension: StructureExtension | null = null;
    let leastEnergy = Infinity;

    extensions.forEach(extension => {
        const energy = extension.store.getUsedCapacity(RESOURCE_ENERGY);
        if (energy < leastEnergy) {
            leastEnergy = energy;
            leastEnergyExtension = extension;
        }
    });

    if (leastEnergyExtension && spawn.store.energy < 50){
        if (creep.transfer(leastEnergyExtension, RESOURCE_ENERGY) != ERR_NOT_IN_RANGE) {
            creep.transfer(leastEnergyExtension, RESOURCE_ENERGY);
            return
        } else {
            moveToLocation(creep, spawn)
            return
        }
    }

     
}