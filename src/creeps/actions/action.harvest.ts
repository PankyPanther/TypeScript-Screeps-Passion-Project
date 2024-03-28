export function harvest(creep: Creep, data: any = {}) { 
    let storedSource = Game.getObjectById<Source>(data.sourceID)

    // if has source - go to source and harvest
    if(storedSource){
        if (creep.harvest(storedSource) == ERR_NOT_IN_RANGE) {
            creep.moveTo(storedSource)
        }
    }
}