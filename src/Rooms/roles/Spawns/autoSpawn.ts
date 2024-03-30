import roleHarvester from "creeps/roles/role.harvester";

export function autoSpawn(room: Room) {
    let spawns = room.find(FIND_MY_SPAWNS);
    let creepBody = roleHarvester.getBody(room.energyCapacityAvailable)
    let newName =  `${Game.time}`;
 
    spawns[0].spawnCreep(creepBody, newName, {memory: {role: 'harvester', workRoom: room}});
}