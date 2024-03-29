export function findValidSource(creep: Creep): Id<Source> | undefined{

    let source = creep.room.find(FIND_SOURCES).find((source) => {
        let sourceWorkParts = Memory.rooms[creep.room.name].sources[source.id].creeps
            .map(name => {
                return Game.creeps[name]?.getActiveBodyparts(WORK) || 0
            })
            .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

        if (!source || sourceWorkParts >= 5) {
            return false
        }

        Memory.rooms[creep.room.name].sources[source.id].creeps.push(creep.name)
        return true
    })

    return source?.id
}