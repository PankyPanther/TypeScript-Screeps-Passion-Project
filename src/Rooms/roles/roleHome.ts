import { RoomRole } from "definition";
import { autoSpawn } from "./Spawns/autoSpawn";
import { countCreeps } from "utils/GameStats/countCreeps";
import { countRoleParts } from "utils/GameStats/countRoleParts";
import { findValidRemote } from "creeps/subactions/findValidRemote";

import { findAdjacentRooms } from "creeps/subactions/findAdjacentRooms";
import { towerManager } from "managers/towerManager";

const roleHome: RoomRole = {
    run: function(room) {
        let towers = room.find(FIND_STRUCTURES).filter((tower) => {
            return tower.structureType === STRUCTURE_TOWER && tower.store.getFreeCapacity(RESOURCE_ENERGY) > 0
        }) as StructureTower[]
        if (towers.length){
            for (let tower of towers){
                towerManager(room, tower)
            }
        }

        if (Game.time % 10 === 0) {
            autoSpawn(room)
        }
        if (Game.time % 10 === 2) {
            countCreeps()
        }        
        if (Game.time % 10 === 4) {
            countRoleParts()
        }
        if (Game.time % 10 === 7) {
            if (Memory.GameStats.needRemote) {
                // console.log(findValidRemote(room.name), 'room')
            }
        }
        if (Game.time % 10 === 8) {

        }
    }
};


export default roleHome