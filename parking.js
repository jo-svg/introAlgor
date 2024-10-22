const n = 5;
const firstRow = "CC..C";
const secondRow = ".CC..";

function emptyParking (n, firstRow, secondRow){
    let output = 0;
    for (m=0; m<n; m++){
        firstRow.forEach((i) => {
            if (i === "C"){
                output + 1
            }
            else if (i === "."){
                return;
            }
        });
    }
    console.log(output);
}

emptyParking(n, firstRow, secondRow);