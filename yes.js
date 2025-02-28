const input = [5, 16, 0, 10, 4, 15]

function compareNumbers(a, b) {
    return a - b;
}

function yes(){
    const numberOf = input.shift();
    input.join();
    input.sort(compareNumbers);
    let distance = [];
    let distances = [];
    for(i=0; i<numberOf-1; i++){distance.push((input[i+1]-input[i])/2);}
    for(i=0; i<numberOf-2; i++){distances.push(distance[i]+distance[i+1]);}
    distances.join();
    distances.sort(compareNumbers);
    console.log(distances[0]);
}
yes();