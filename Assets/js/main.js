// Ciclo for 0-100
for (let i = 0; i < 100; i++) {

    // Stamp crea numeri da 1 a 100
    let stamp = i+1 

    // SVILUPPO LOGICA CONDIZIONALE:
    const boxContainer = document.getElementById("boxContainer");

    // Se Multiplo di 3 e di 5
    if (stamp % 3 == 0 && stamp % 5 == 0) {
        console.log("FizzBuzz");
        boxContainer.innerHTML += `<div class="bgBlue dFlex justyCenter alignCenter">${stamp}</div>`;

    // Se Solo Multiplo di 3
    } else if (stamp % 3 == 0 && stamp % 5 != 0) {
        console.log("Fizz");
        boxContainer.innerHTML += `<div class="bgPink dFlex justyCenter alignCenter">${stamp}</div>`;

    // Se Solo Multiplo di 5
    } else if (stamp % 3 != 0 && stamp % 5 == 0) {
        console.log("Buzz");
        boxContainer.innerHTML += `<div class="bgRed dFlex justyCenter alignCenter">${stamp}</div>`;

    // Se NON Multiplo di 3 e 5
    } else {
        console.log(stamp);
        boxContainer.innerHTML += `<div class="bgGreen dFlex justyCenter alignCenter">${stamp}</div>`;
    }

    // console.log( "contatore vale: ", i, " - stamp vale: ", stamp );
}