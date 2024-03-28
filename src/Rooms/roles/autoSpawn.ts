import roleHarvester from "creeps/roles/role.harvester";

export function autoSpawn(room: Room) {
    let spawns = room.find(FIND_MY_SPAWNS);
    let creepBody = roleHarvester.getBody(room.energyCapacityAvailable)
    var newName =  `${Game.time}`;
 
    if (!Game.creeps) {
        spawns[0].spawnCreep(creepBody, newName, {memory: {role: 'harvester'}});
    } else {
        spawns[0].spawnCreep(creepBody, newName, {memory: {role: 'upgrader'}});
    }
        
        
}