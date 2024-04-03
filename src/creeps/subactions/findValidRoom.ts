export function findValidRoom(creep: Creep) {
    let currentRoomName = creep.room.name;

    // Step 2: Determine Neighboring Rooms
    let exits = Game.map.describeExits(currentRoomName);
    let adjacentRooms: string[] = Object.values(exits); // Array of neighboring room names
    
    // Step 3: Filter out already explored rooms
    let unexploredRooms = adjacentRooms.filter(roomName => !Memory.rooms[roomName]);
    
    // Step 4: Calculate distance to the home room for each neighboring room
    let homeRoom = creep.memory.homeRoom; // Assuming 'Spawn1' is your spawn room
    let sortedRooms = unexploredRooms.sort((roomA, roomB) => {
        let routeA = Game.map.findRoute(homeRoom, roomA);
        let distanceA = routeA === -2 ? Infinity : routeA.length;
        
        let routeB = Game.map.findRoute(homeRoom, roomB);
        let distanceB = routeB === -2 ? Infinity : routeB.length;
        
        return distanceA - distanceB;
    });
    
    // Step 5: Check If Room Exists
    for (let roomName of sortedRooms) {
        if (Game.map.isRoomAvailable(roomName)) {
            // Room is available, you can navigate to it
            return roomName; // Return the first available room after exploration
        } else {
            // Room is not available (e.g., it's owned by another player)
        }
    }

    // If all neighboring rooms are unavailable, return null or undefined
    return null;
}