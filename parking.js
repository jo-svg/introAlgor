function getSpaces(spaces, yes, today){
    let count = 0;
    for( let i = 0; i <spaces; i++){
        if(yes[i].upper === 'C'&& today[i]==='C'){
            count++;
        }
    }
    return count;
}