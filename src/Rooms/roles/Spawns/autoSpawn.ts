import roleHarvester from "creeps/roles/role.harvester";


import { spawnScoreManager } from "managers/spawnScoreManager";

export function autoSpawn(room: Room) {
    let creepsAssignedToSource = 0
    let WalkableSpaces = 0

    room.find(FIND_SOURCES).find((source) => {
        creepsAssignedToSource += Memory.rooms[room.name].sources[source.id].creeps.length
        WalkableSpaces += Memory.rooms[room.name].sources[source.id].openSpots
    })

    let spawns = room.find(FIND_MY_SPAWNS);
    let creepBody = roleHarvester.getBody(room.energyCapacityAvailable)
    let newName =  `Kipper Spawn: ${Game.time}`;

    if (creepsAssignedToSource < WalkableSpaces){    
        if (creepsAssignedToSource + (creepsAssignedToSource / 2) < WalkableSpaces) {
            spawns[0].spawnCreep(creepBody, newName, {memory: {role: 'harvester', workRoom: room}})
        } else {
            spawns[0].spawnCreep(creepBody, newName, {memory: {role: 'upgrader', workRoom: room}})
        }
    }
}