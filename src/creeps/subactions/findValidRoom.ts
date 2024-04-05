import { findAdjacentRooms } from "./findAdjacentRooms";

export function findValidRoom(creep: Creep) {
    let currentRoomName = creep.room.name;

    let exits = Game.map.describeExits(currentRoomName);
    let adjacentRooms: string[] = findAdjacentRooms(currentRoomName, 1); 
    
    let unexploredRooms = adjacentRooms.filter(roomName => !Memory.rooms[roomName]);
    
    let homeRoom = creep.memory.homeRoom; 
    let sortedRooms = unexploredRooms.sort((roomA, roomB) => {
        let routeA = Game.map.findRoute(homeRoom, roomA);
        let distanceA = routeA === -2 ? Infinity : routeA.length;
        
        let routeB = Game.map.findRoute(homeRoom, roomB);
        let distanceB = routeB === -2 ? Infinity : routeB.length;
        
        return distanceA - distanceB;
    });
    
    // Step 5: Check If Room Exists
    for (let roomName of sortedRooms) {
        if (Game.map.getRoomStatus(roomName)) {
            // Room is available, you can navigate to it
            return roomName; // Return the first available room after exploration
        } else {
            // Room is not available (e.g., it's owned by another player)
        }
    }

    return null;
}