import { CreepRole } from "definition"
import { runStates } from "managers/state_manager"
import { findValidRoom } from "creeps/subactions/findValidRoom";
import { explore } from "creeps/actions/action.explore";

// roleHarvester: CreepRole
const roleScout: CreepRole = {
    getRoleName() { return 'scout'; },

    getBody(energyCapacity) {
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
                    if (!data.target || creep.room.name == data.target){
                        creep.memory.target = findValidRoom(creep); 
                    }
                    console.log(creep.room.name == data.target, creep.room.name == data.target.name, creep.room == data.target)
                    console.log(creep.room.name, data.target, data.target.name)
                    console.log(data.target)
                    creep.suicide()
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