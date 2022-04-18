//Globalni DOM elementi
var bodovi = document.getElementById('bodovi').innerHTML;
console.log(bodovi)
//Funkcionalnost dugmeta 
var dugme = document.getElementById("Baton");
var konteiner = document.getElementById("Konteiner");

dugme.addEventListener('click', ()=>{
konteiner.style.display = "flex";
dugme.style.display= "none";
})


//Klasa koja nam sluzi za izradu jednog tima
class Timovi{
    constructor(naziv, liga, poeni, zadnji5){
        this.Naziv = naziv;
        this.Liga = liga;
        this.Poeni = poeni;
        this.Zadnjih5 = zadnji5;
    }
}

var poeniTima;

function Kreiraj(){
    var nazivTima = document.getElementById('nazivTima').value;
    var ligaTima = document.getElementById("Liga").value;
    poeniTima = document.getElementById('poeni').value;
    var zadnji5Tima = document.getElementById('zadnji5').value;

    var Tim = new Timovi(nazivTima, ligaTima, poeniTima, zadnji5Tima);

    console.log(Tim);

    var BodoviTima = 0;

    RacunajBodove(ligaTima, zadnji5Tima);
    BodoviTima = BodoviTima;
}

function RacunajBodove(liga, zadnji5){
    switch(liga){

        case 'Premier':
        BodoviTima =  poeniTima * 1.5;
        break;
    
        case 'LaLiga':
        BodoviTima =  poeniTima * 1.2;
        break;
    
        case 'Bundesliga':
        BodoviTima =  poeniTima * 0.8;
        break;
    
        case 'Francuska':
        BodoviTima =  poeniTima * 0.6;
        break;
    
        case 'SerieA':
        BodoviTima =  poeniTima * 1.0;
        break;
        }
    
        switch(parseInt(zadnji5)){
            case 1:
            BodoviTima = BodoviTima + 10;
            break;
            case 2:
            BodoviTima = BodoviTima + 20;
            break;
            case 3:
            BodoviTima = BodoviTima + 30;
            break;
            case 4:
            BodoviTima = BodoviTima + 40;
            break;
            case 5:
            BodoviTima = BodoviTima + 50;
            break;
        }
        console.log(BodoviTima);
}

