export function explore(creep: Creep, data: any = {}){
    const targetRoom = data.target;

    // Find a route from the current room to the target room
    const route = Game.map.findRoute(creep.room.name, targetRoom);

    // If a route is found (route is an array), move the creep to the next room along the route
    if (Array.isArray(route) && route.length > 0) {
        const exit = creep.pos.findClosestByPath(route[0].exit) as RoomPosition | undefined;
        if (exit) {
            creep.moveTo(exit, { visualizePathStyle: { stroke: '#ffffff' } });
        }
    }

    if (creep.room.memory.role == "explored"){
        creep.room.memory.lastEntered = Game.time

        if (creep.room.find(FIND_HOSTILE_STRUCTURES)){
            creep.room.memory.status = 'hostile'
        }
        if (creep.room.find(FIND_HOSTILE_CREEPS).length > 0 || creep.room.find(FIND_HOSTILE_POWER_CREEPS).length > 0){
            creep.room.memory.status = 'hostileCreeps'
        }
    }
}


