export function upgrade(creep: Creep, data: any = {}) { 
    let controller = creep.room.controller;

    // if has source - go to source and harvest
    if (controller){
        if (creep.upgradeController(controller) == ERR_NOT_IN_RANGE) {
            creep.moveTo(controller)
        } else {
            if (!controller.sign == data.controllerText){
                if (Game.time % 10 === 1) {
                    if (creep.signController(controller, data.controllerText) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(controller)
                    }
                }
            }
        }
    }
}