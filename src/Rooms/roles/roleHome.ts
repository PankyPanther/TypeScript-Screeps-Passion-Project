import { RoomRole } from "definition";
import { autoSpawn } from "./Spawns/autoSpawn";
import { WhiteList } from "definition";
import { countCreeps } from "utils/GameStats/countCreeps";
import { countRoleParts } from "utils/GameStats/countRoleParts";

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
            //
        }
    }
};


export default roleHome