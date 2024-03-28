import { getSourceBodyParts } from "./getSourceBodyParts"

export function assignSource(creep: Creep, ): string {
    // // look at all of the sources in the roo
    
    // creep.body({type: WORK});
    // // find how many work parts are be used at each source
    
    // // which ever has less - the creep will be assigned to the source
    // // if more than 5 work parts are at both sources - leave and go find another source

    return creep.room.find(FIND_SOURCES)[0].id
}