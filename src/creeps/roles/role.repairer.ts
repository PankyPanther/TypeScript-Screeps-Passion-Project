import { CreepRole } from "definition"
import { runStates } from "managers/state_manager"
import { findGatherPlace } from "creeps/subactions/findGatherPlace";
import { gather } from "creeps/actions/action.gather";
import { repair } from "creeps/actions/action.repair";

// roleHarvester: CreepRole
const roleRepairer: CreepRole = {
    getRoleName() { return 'repairer'; },

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
                    creep.memory.target = {}
                    creep.memory.path = {}
                    return "REPAIRING" 
                }

                gather(creep, {
                    target: data.target
                }) 

                return 'GATHERING';
                
            },

            REPAIRING: (data: any, creep: Creep) =>{
                if (!data.target){
                    let structure = creep.room.find(FIND_STRUCTURES)
                        .filter((struct) => {
                            return struct.hits < struct.hitsMax && (struct.structureType == STRUCTURE_CONTAINER || struct.structureType == STRUCTURE_ROAD) 
                        })
                        .sort((a, b) => (a.hits / a.hitsMax) - (b.hits / b.hitsMax))[0]

                    creep.memory.target = structure
                }

                if (data.target.hits === data.target.hitsMax){
                    delete creep.memory.target
                }
                
                if (creep.store.getUsedCapacity(RESOURCE_ENERGY) == 0) {
                    creep.memory.target = {}
                    creep.memory.path = {}
                    return "GATHERING" 
                }

                repair(creep, {
                    target: data.target
                }) 

                return "REPAIRING" 
            }

        
        };
    
        runStates(states, data, creep);
    }
};


export default roleRepairer