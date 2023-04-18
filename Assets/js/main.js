// SOLUZIONE 1 con innerHTML
document.getElementById('buttonClick1').addEventListener("click",
    function openFirstSection() {
        document.getElementById('boxContainer1').style.display = 'flex';
        document.getElementById('btnContainer1').style.display = 'none';

        // Ciclo for 1-100
        for (let i = 0; i < 100; i++) {

            // Stamp crea numeri da 1 a 100
            let stamp = i + 1

            // SVILUPPO LOGICA CONDIZIONALE:
            const boxContainer1 = document.getElementById("boxContainer1");

            // Se Multiplo di 3 e di 5 - oppure se Multiplo di 15
            if (stamp % 3 == 0 && stamp % 5 == 0) {
                // console.log("FizzBuzz");
                boxContainer1.innerHTML += `<div class="bgBlue dFlex justyCenter alignCenter cPointer">FizzBuzz</div>`;

            // Se Solo Multiplo di 3
            } else if (stamp % 3 == 0 && stamp % 5 != 0) {
                // console.log("Fizz");
                boxContainer1.innerHTML += `<div class="bgPink dFlex justyCenter alignCenter cPointer">Fizz</div>`;

            // Se Solo Multiplo di 5
            } else if (stamp % 3 != 0 && stamp % 5 == 0) {
                // console.log("Buzz");
                boxContainer1.innerHTML += `<div class="bgRed dFlex justyCenter alignCenter cPointer">Buzz</div>`;

            // Se NON Multiplo di 3 e 5
            } else {
                // console.log(stamp);
                boxContainer1.innerHTML += `<div class="bgGreen dFlex justyCenter alignCenter cPointer">${stamp}</div>`;
            }

            // console.log( "contatore vale: ", i, " - stamp vale: ", stamp );
        }

    }
);

// SOLUZIONE 2 con append
document.getElementById('buttonClick2').addEventListener("click",
    function openSecondSection() {
        document.getElementById('btnContainer2').style.display = 'none';
        const boxContainer2 = document.querySelector("section.boxContainer2");
        boxContainer2.style.display = 'flex';

        // Ciclo for 101-200
        for (let i = 0; i < 100; i++) {

            // Stamp crea numeri da 1 a 100
            let stamp = i + 101

            // SVILUPPO LOGICA CONDIZIONALE:
            const box = document.createElement('div');
            box.classList.add('dFlex', 'justyCenter', 'alignCenter', 'cPointer');

            // Se Multiplo di 3 e di 5 - oppure se Multiplo di 15
            if (stamp % 15 == 0) {
                box.className += " bgBlue";
                box.append("FizzBuzz");
                boxContainer2.append(box);

                // Visualizza Numero in hover
                box.addEventListener("mouseover",
                    function mouseOver() {
                        box.innerText = stamp;
                    }
                );
                box.addEventListener("mouseout",
                    function mouseOut() {
                        box.innerText = ("FizzBuzz");
                    }
                );

            // Se Solo Multiplo di 3
            } else if (stamp % 3 == 0) {
                box.className += " bgPink";
                box.append("Fizz");
                boxContainer2.append(box);

                // Visualizza Numero in hover
                box.addEventListener("mouseover",
                    function mouseOver() {
                        box.innerText = stamp;
                    }
                );
                box.addEventListener("mouseout",
                    function mouseOut() {
                        box.innerText = ("Fizz");
                    }
                );

            // Se Solo Multiplo di 5
            } else if (stamp % 5 == 0) {
                box.className += " bgRed";
                box.append("Buzz");
                boxContainer2.append(box);

                // Visualizza Numero in hover
                box.addEventListener("mouseover",
                    function mouseOver() {
                        box.innerText = stamp;
                    }
                );
                box.addEventListener("mouseout",
                    function mouseOut() {
                        box.innerText = ("Buzz");
                    }
                );

            // Se NON Multiplo di 3 e 5
            } else {
                box.className += " bgGreen";
                box.append(stamp);
                boxContainer2.append(box);
            }
        }
    }
);
