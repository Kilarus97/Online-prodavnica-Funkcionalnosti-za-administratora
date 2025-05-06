`use strict`

class Artikal {
    constructor(broj,naziv, cena,opis) {
        this.broj = broj
        this.naziv = naziv
        this.cena = cena
        this.opis = opis
    }
}

let nVidiaRTX = new Artikal (1,'RTX4090oc',850,"Jedna od najacih")
let Ryzen7 = new Artikal(2,'Ryzen7_5700X',350,"Veoma mocan processor sa 8 jezgara na 3.4GHz")
let Kingston = new Artikal(3,'Kingston_Fury',200,"DDR4 Memorija sa radnim taktom od 3400MHz")

let nizArtikala = [nVidiaRTX,Ryzen7,Kingston]

ispisiUTabeli(nizArtikala)

const tabela = document.querySelector('#artikli');
const ispisNaziv = document.querySelector('#ispisNaziv');
const ispisCena = document.querySelector('#ispisCena');
const ispisOpis = document.querySelector('#ispisOpis');

tabela.addEventListener('click',(event) => {
    const red = event.target.closest('tr');

    if (red && red.rowIndex > 0){
        const brojArtikla = red.querySelector('td').textContent;
        const artikal = nizArtikala.find(a => a.broj == brojArtikla);
            if(artikal) {
                ispisNaziv.textContent = artikal.naziv;
                ispisCena.textContent = artikal.cena;
                ispisOpis.textContent = artikal.opis;
            }
    }
});


function ispisiUTabeli(nizArtikala) {

    let tabela = document.querySelector('#artikli');

    for(Artikal of nizArtikala){
    let noviRed = tabela.insertRow()

    let brojCell = noviRed.insertCell()
    brojCell.textContent = Artikal.broj

    let nazivCell = noviRed.insertCell()
    nazivCell.textContent = Artikal.naziv

    let cenaCell = noviRed.insertCell()
    cenaCell.textContent = Artikal.cena
    }

}