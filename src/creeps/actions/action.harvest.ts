export function harvest(creep: Creep, data: any = {}) { 
    let storedSource = Game.getObjectById<Source>(data.sourceID)

    // if has source - go to source and harvest
    if(storedSource){
        if(creep.pos.isNearTo(storedSource)){
            creep.harvest(storedSource);
        } else {
            creep.moveTo(storedSource, {visualizePathStyle: {stroke: '#E0115F'}});
        }
    }
}