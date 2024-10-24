const number_thing = [
    {number: 128, power: 7},
    {number: 64, power: 6},
    {number: 32, power: 5},
    {number: 16, power: 4},
    {number: 8, power: 3},
    {number: 4, power: 2},
    {number: 2, power: 1},
    {number: 1, power: 0}
]

function convert(number){
    let binary = []
    number_thing.forEach((number) =>{
        if (power.number>number){
            binary = 0
            console.log(binary)
            return;
        }
        else if (power.number<=number){
            number = number-power.number
            binary= 1
            console.log(binary);
        }
    })
}


function revert(binary, space){
    let number = []
    for (let i = 0; i <space; i++){
        if (binary[i] === 0){
            return;
        }
        else if (binary.i === 1){
            number_thing.forEach((power)=>{
                if (binary[i] === power.power){
                    console.log(power.number)
                }
            })
        }
    }
    
}
revert(101, 3)