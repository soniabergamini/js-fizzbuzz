// Ciclo for 0-100
for (let i = 0; i < 100; i++) {

    // Stampa crea numeri da 1 a 100
    let stamp = i+1 

    if (stamp % 3 == 0 && stamp % 5 == 0) {
        console.log("FizzBuzz");
    } else if (stamp % 3 == 0 && stamp % 5 != 0) {
        console.log("Fizz");
    } else if (stamp % 3 != 0 && stamp % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(stamp);
    }

    // console.log( "contatore vale: ", i, " - stamp vale: ", stamp );

}