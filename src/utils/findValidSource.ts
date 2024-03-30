export function findValidSource(creep: Creep): Id<Source> | undefined{
    // eventually i would like it to check for open pos around it aswell


    let source = creep.room.find(FIND_SOURCES).find((source) => {
        let sourceWorkParts = Memory.rooms[creep.room.name].sources[source.id].creeps
            .map(name => {
                return Game.creeps[name]?.getActiveBodyparts(WORK) || 0
            })
            .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        
        let creepsAssignedToSource = Memory.rooms[creep.room.name].sources[source.id].creeps.length
        let WalkableSpaces = Memory.rooms[creep.room.name].sources[source.id].openSpots

        if (!source || sourceWorkParts >= 5 || creepsAssignedToSource >= WalkableSpaces) {
            return false
        }

        Memory.rooms[creep.room.name].sources[source.id].creeps.push(creep.name)
        return true
    })

    return source?.id
}