import { RoomRole } from "utils/definition";
import { autoSpawn } from "./Spawns/autoSpawn";

const roleHome: RoomRole = {
    run: function(room) {

        if (Game.time % 10 === 0) {
            // autoSpawn(room)
        }
        if (Game.time % 10 === 2) {
            //events
        }        
        if (Game.time % 10 === 4) {
            //sdirrectives
        }
        if (Game.time % 10 === 7) {
            //
        }
    }
};


export default roleHome