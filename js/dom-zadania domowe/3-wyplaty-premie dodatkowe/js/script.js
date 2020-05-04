"use strict";
console.log("Wypłaty Premii");

let btn = document.getElementById('oblicz')
let numberOfEmployees = document.querySelectorAll(".pracownik").length;

btn.addEventListener('click', () => {
    let listOfEmployees = [];
    let allTimes = [];
    for (let i = 0; i < numberOfEmployees; i++) {
        listOfEmployees[i] = document.querySelector(`#pracownik${i + 1}`)
        let name = listOfEmployees[i].children[0].innerText;
        let time = listOfEmployees[i].children[1].value;
        let rate = listOfEmployees[i].children[2].value;
        let amount = listOfEmployees[i].children[3].innerText;
        if (time > 160) {
            listOfEmployees[i].children[3].innerText = 160 * rate + (time - 160) * 2 * rate;
            amount = 160 * rate + (time - 160) * 2 * rate;
        }
        else {
            listOfEmployees[i].children[3].innerText = rate * time;
            amount = rate * time;
        }

        if (time < 100) {
            listOfEmployees[i].children[0].style.background = 'red'
            listOfEmployees[i].children[1].style.background = 'red'
            listOfEmployees[i].children[2].style.background = 'red'
            listOfEmployees[i].children[3].style.background = 'red'
        }
        else if (time >= 100) {
            listOfEmployees[i].children[0].style.background = '#f5f544';
            listOfEmployees[i].children[1].style.background = '#2595a8';
            listOfEmployees[i].children[2].style.background = '#35b835';
            listOfEmployees[i].children[3].style.background = '#ee82ee';
        }

        allTimes[i] = {
            name: name,
            time: time,
            rate: rate,
            amount: amount
        }
    }

    allTimes.sort((a, b) => {
        return b.time - a.time
    })

    najlepsi.innerText = ''

    for (let i = 0; i < 3; i++) {

        let pracownik = document.createElement('div');
        pracownik.setAttribute('id', `najlepszy-${i + 1}`)

        let imie = document.createElement('span')
        imie.setAttribute('class', 'pracownik')
        imie.innerText = allTimes[i].name;
        pracownik.appendChild(imie)

        let czas = document.createElement('span')
        czas.setAttribute('class', 'czas')
        czas.innerText = allTimes[i].time;
        pracownik.appendChild(czas)

        let stawka = document.createElement('span')
        stawka.setAttribute('class', 'stawka')
        stawka.innerText = allTimes[i].rate;
        pracownik.appendChild(stawka)

        let kwota = document.createElement('span')
        kwota.setAttribute('class', 'kwota')
        kwota.innerText = allTimes[i].amount;
        pracownik.appendChild(kwota)

        najlepsi.appendChild(pracownik)
    }
})

let najlepsi = document.createElement('div')
najlepsi.setAttribute('class', 'najlepsi');
document.querySelector('#pracownicy').appendChild(najlepsi)