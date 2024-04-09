import { CreepRole } from "definition"
import { runStates } from "managers/state_manager"
import { findValidRoom } from "creeps/subactions/findValidRoom";
import { explore } from "creeps/actions/action.explore";

// roleHarvester: CreepRole
const roleScout: CreepRole = {
    getRoleName() { return 'scout'; },

    getBody(energyCapacity) {
        if (energyCapacity >= 500) {
            return [
                MOVE, MOVE,
                MOVE, MOVE,
                MOVE, MOVE,
                MOVE, MOVE,
                MOVE, MOVE
            ]
        }
        return [
            MOVE, MOVE
        ]
    },

    run: function(creep) {
        // Define your states as functions
        const data = {
            target: creep.memory.target
        };

        const states = {
                EXPLORING: (data: any, creep: Creep) => {
                    if (!data.target){
                        creep.memory.target = findValidRoom(creep); 
                        // console.log(findValidRoom(creep))
                    }
                    explore(creep, {
                        target: data.target
                    })
                    return 'EXPLORING';
                    
                },
            
                FLEEING: (data: any, creep: Creep) => {
                    
                    return "FLEEING";
                },
        
        };
    
        runStates(states, data, creep);
    }
};


export default roleScout