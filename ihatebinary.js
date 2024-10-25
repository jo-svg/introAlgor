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
    let number = 0
    let binaryString = binary.toString();
    for (let i = space-1; i >-1; i--){
        if (binaryString[i] === '0'){
            continue;
            //dont use return because it will return the number as 0, instead use continue so it continues the function
        }
        else if (binaryString[i] === "1"){
            number_thing.forEach((power)=>{
                if (space -1 -i === power.power){
                    //if space = 4, i = 3 then power = 0
                    //if space = 4, i = 2 then power = 1
                    //if space = 4, i = 1 then power = 2
                    //if space = 4, i = 0 then power = 3
                    //you get 4 outputs, this equation: space -1 -i helps reverse the adding part
                    number += power.number
                }
            })
        }
    }
    console.log(number);
}

revert(1011,4);

