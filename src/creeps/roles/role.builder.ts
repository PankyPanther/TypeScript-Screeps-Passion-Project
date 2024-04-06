import { CreepRole } from "definition"
import { runStates } from "managers/state_manager"
import { findGatherPlace } from "creeps/subactions/findGatherPlace";
import { gather } from "creeps/actions/action.gather";
import { build } from "creeps/actions/action.build";


// roleHarvester: CreepRole
const roleBuilder: CreepRole = {
    getRoleName() { return 'builder'; },

    getBody(energyCapacity) {
        if (energyCapacity >= 550) {
            return [
                WORK, WORK,
                WORK, MOVE,
                MOVE, CARRY,
                CARRY, CARRY
            ]
        }
        return [
            MOVE, MOVE,
            WORK, CARRY
        ]
    },

    run: function(creep) {
        // Define your states as functions
        const data = {
            target: creep.memory.target
        };

        const states = {
                GATHERING: (data: any, creep: Creep) => {
                    if (!data.target){
                        creep.memory.target = findGatherPlace(creep)
                    }

                    if (creep.store.getFreeCapacity() == 0) { 
                        creep.memory.path = {}
                        creep.memory.target = {}
                        return "BUILDING" 
                    }

                    gather(creep, {
                        target: data.target
                    }) 

                    return 'GATHERING';
                    
                },
            
                BUILDING: (data: any, creep: Creep) => {
                    if (creep.store.getUsedCapacity(RESOURCE_ENERGY) == 0) {
                        creep.memory.path = {}
                        creep.memory.target = {}
                        return "GATHERING" 
                    }

                    creep.memory.target = creep.room.find(FIND_CONSTRUCTION_SITES)

                    build(creep, {
                        target: data.target
                    }) 
                    
                    return "BUILDING"
                },
        
        };
    
        runStates(states, data, creep);
    }
};


export default roleBuilder