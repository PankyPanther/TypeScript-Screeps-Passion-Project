import { runCreepRole } from "creeps/roles";

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
}
