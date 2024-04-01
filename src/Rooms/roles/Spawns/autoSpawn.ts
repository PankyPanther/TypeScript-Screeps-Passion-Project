import roleHarvester from "creeps/roles/role.harvester";
import roleHauler from "creeps/roles/role.hauler";
import roleScout from "creeps/roles/role.scout";
import roleUpgrader from "creeps/roles/role.upgrader";
import { spawnScoreManager } from "managers/spawnScoreManager";

interface BODY {
    [bodyName: string]: BodyPartConstant[]
}

export function autoSpawn(room: Room) {
    let creep: string | undefined = spawnScoreManager(room)
    console.log(`Trying to Spawn: ${creep}`)
    if (creep){

        const bodyLookup: BODY = {
            "harvester": roleHarvester.getBody(room.energyCapacityAvailable),
            "hauler": roleHauler.getBody(room.energyCapacityAvailable),
            "scout": roleScout.getBody(room.energyCapacityAvailable),
            "upgrader": roleUpgrader.getBody(room.energyCapacityAvailable),
        }

        let spawns = room.find(FIND_MY_SPAWNS);
        let newName =  `Kipper Spawn: ${Game.time}${creep}`;
        spawns[0].spawnCreep(bodyLookup[creep], newName, {memory: {role: creep, workRoom: room}})
    }

}