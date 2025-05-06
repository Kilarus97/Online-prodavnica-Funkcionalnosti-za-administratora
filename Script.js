`use strict`

class Artikal {
    constructor(naziv, cena,opis) {
        this.naziv = naziv
        this.cena = cena
        this.opis = opis
    }
}

let nVidiaRTX = new Artikal ('RTX4090oc',850,"Jedna od najacih")
let Ryzen7 = new Artikal('Ryzen7_5700X',350,"Veoma mocan processor sa 8 jezgara na 3.4GHz")
let Kingston = new Artikal('Kingston_Fury',200,"DDR4 Memorija sa radnim taktom od 3400MHz")

let nizArtikala = [nVidiaRTX,Ryzen7,Kingston]



const tabela = document.querySelector('#artikli');
const ispisNaziv = document.querySelector('#ispisNaziv');
const ispisCena = document.querySelector('#ispisCena');
const ispisOpis = document.querySelector('#ispisOpis');

tabela.addEventListener('click',(event) => {
    const red = event.target.closest('tr');

    if (red && red.rowIndex > 0){
        const brojArtikla = red.querySelectorAll('td')[1].textContent;
        const artikal = nizArtikala.find(a => a.naziv == brojArtikla);
            if(artikal) {
                ispisNaziv.textContent = artikal.naziv;
                ispisCena.textContent = artikal.cena;
                ispisOpis.textContent = artikal.opis;
            }
    }
});


let submitBtn = document.querySelector('#dugmici')

submitBtn.addEventListener('click',function(event){
    event.preventDefault();

    const forma = document.querySelector('#kreiraj');
        const formaData = new FormData(forma);
        
        const naziv = formaData.get('naziv');
        const cena = formaData.get('Cena');
        const opis =formaData.get('Opis');

        console.log({naziv, cena, opis })

        let noviArtikal = new Artikal(naziv,cena,opis);
        nizArtikala.push(noviArtikal);
        
        sacuvajArtikalUlokalStorage(nizArtikala);
        ispisiUTabeli(nizArtikala)
})
        

function ispisiUTabeli(nizArtikala) {

    let tabela = document.querySelector("#artikliBody")
    tabela.innerHTML = '';

    let i = 1 

    for(artikal of nizArtikala){
    let noviRed = tabela.insertRow()

    let brojCell = noviRed.insertCell()
    brojCell.textContent = i;

    let nazivCell = noviRed.insertCell()
    nazivCell.textContent = artikal.naziv

    let cenaCell = noviRed.insertCell()
    cenaCell.textContent = artikal.cena
    i++
    }

}

function sacuvajArtikalUlokalStorage(nizArtikala){
    console.log("Čuvanje u localStorage:", nizArtikala);
    localStorage.setItem("artikli",JSON.stringify(nizArtikala))
}

function ucitajArtikalIzLokalStorage(){
    let sacuvaniPodaci = localStorage.getItem("artikli")

    if(sacuvaniPodaci){
        nizArtikala = JSON.parse(sacuvaniPodaci)
        console.log(nizArtikala)
        ispisiUTabeli(nizArtikala);
    }
}

document.addEventListener("DOMContentLoaded", ucitajArtikalIzLokalStorage);