"use strict";

console.log('działa')

$(function () {
    $('.btn').on('click', function () {
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php',
            function (data) {
                $('#dane-programisty').empty();
                $('#dane-programisty').html(
                    `<p>Imie: ${data.imie}</p>
                        <p>Nazwisko: ${data.nazwisko}</p>
                        <p>Imie: ${data.zawod}</p>
                        <p>Imie: ${data.firma}</p>`)
            })
    })

})