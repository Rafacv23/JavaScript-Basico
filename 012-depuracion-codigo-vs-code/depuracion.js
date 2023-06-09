fibonacci = (numero) => {
    let num = 0;
    let num2 = 1;
    console.log(num);
    while (num2 <= numero){
        console.log(num2);
        let temp = num;
        num = num2;
        num2 = temp + num;
    }
}

fibonacci(10);