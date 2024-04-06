import { RoomRole } from "definition";
import { autoSpawn } from "./Spawns/autoSpawn";
import { countCreeps } from "utils/GameStats/countCreeps";
import { countRoleParts } from "utils/GameStats/countRoleParts";
import { findValidRemote } from "creeps/subactions/findValidRemote";

import { findAdjacentRooms } from "creeps/subactions/findAdjacentRooms";

const roleHome: RoomRole = {
    run: function(room) {
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
                // console.log(findValidRemote(room), 'room')
            }
        }
    }
};


export default roleHome