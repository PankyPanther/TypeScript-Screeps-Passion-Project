export function test(): void {
    let sales: number = 123_456
    let course: string = 'Type'
    let is_published: boolean = true
    
    let level; // is type any because nothing was set to it
               // any can be assigned to anything

    // array
    let numbers: number[] = []
    numbers.forEach(n => n.toExponential)

    // tuples (fixed length arrray)
    let user: [number, string] = [1, 'will']

    //0 gives number and 1 gives string (as intended)
    user[0].toExponential
    user[1].concat

    user.push(1)

    const small = 1
    const med = 1
    const large = 1

    enum Size { Small, Medium, Large}

    type Employee = {
        readonly id: number, 
        name?: string
        retire: (date: Date) => void
    }

    let employee: Employee
}

function render(document: any) {
    console.log(document)
}