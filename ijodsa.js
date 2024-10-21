function factorial (n){
    for (let i = 1; i <= n; i++){
        if (n % i === 0){
            console.log(i)
        }
        else if(n % i === 1){
            return;
        }
    }
}