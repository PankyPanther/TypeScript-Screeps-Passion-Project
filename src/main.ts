import { runCreepRole } from "creeps/roles";
import { runRoomRole } from "Rooms/roles";
import { isInitialize, initialize} from "Rooms/roles/initialize";

export function loop(): void {
  console.log(`Current game tick is ${Game.time}`);
  
  for (const creepName in Memory.creeps) {
    if(!Game.creeps[creepName]) {
      console.log(`Deleting memory for dead creep: ${creepName}`)
      delete Memory.creeps[creepName];
    }
  }

  for (let creepName in Game.creeps) {
      let creep = Game.creeps[creepName]
      runCreepRole(creep)
  }

  for (let roomName in Game.rooms) {
    const room = Game.rooms[roomName];
    if (!isInitialize(room)) {
      initialize(room)
    }
    runRoomRole(room);
  }
}
