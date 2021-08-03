// function average(getal1, getal2) {

//     return (getal1 + getal2) / 2;

// }

// let resultaat = average(12, 20);

// console.log(resultaat);

////// deel 1

// function printPersoon(naam, leeftijd) {
//     console.log(naam + " is " + leeftijd + " jaar oud!");
// }

// printPersoon("dollo", 16);
// printPersoon("timon", 17);
// printPersoon("jens", 18);

////// deel 2

// class Persoon {

//     constructor(naam, leeftijd) {
//       this.naam = naam;
//       this.leeftijd = leeftijd;
//     }

// }

// let jens = new Persoon("jens", 18);

// console.log(jens.naam);
// console.log(jens.leeftijd);

///////deel 3

// class Plant {

//     constructor(species, thc) {
//         this.species = species;
//         this.thc = thc;
//     }

// }

// function crossbreed(plant1, plant2) {

//     return new Plant(plant1.species + " x " + plant2.species, (plant1.thc + plant2.thc) / 2);

// }

// function printPlant(plant) {
//     console.log(plant.species + " heeft " + plant.thc + "% thc");
// }

// let geert = new Plant("strawberry", 27);
// let maryjane = new Plant("gorilla glue", 24);

// let combinatie = crossbreed(maryjane, geert);

// printPlant(combinatie);


////// deel 4

// let landen = ["nederland", "engeland", "duitsland"];

// landen.push("griekenland");

// console.log(landen);

////// deel 5

// for(let i = 0; i < 100; i++) {

//     console.log("banaan");

// }

///// deel 6

// let matties = ["dollo", "jensie", "blacka man"];

// for(let mattie of matties) {
//     console.log(mattie);
// }

// console.log("dat ware me matties");

//// deel 7

// let leeftijd = prompt("Wat is jouw leeftijd?");

// if(leeftijd < 18) {
//     console.log("te jong swa");
// } else if(leeftijd == 18) {
//     console.log("joow net oud genoeg swa");
// } else {
//     console.log("lekka maaaaan");
// }

//// deel 8

// class Plant {

//     constructor(naam, soort, thcGehalte) {
//         this.naam = naam;
//         this.soort = soort;
//         this.thcGehalte = thcGehalte;
//     }

//     printPlant() {

//         console.log(this.naam + " is een " + this.soort + " en heeft " + this.thcGehalte + "% thc.");
    
//     }

//     crossbreed(otherPlant) {

//         let eindNaam = this.naam + " x " + otherPlant.naam;
//         let eindThcGehalte = (this.thcGehalte + otherPlant.thcGehalte) / 2;
    
//         let eindSoort;
    
//         if (this.soort == "sativa" && otherPlant.soort == "sativa") {
//             eindSoort = "sativa";
//         } else if(this.soort == "indica" && otherPlant.soort == "indica") { 
//             eindSoort = "indica";
//         } else {
//             eindSoort = "hybrid";
//         }
    
//         return new Plant(eindNaam, eindSoort, eindThcGehalte);
//     }

// }

// let planten = [
//                 new Plant("strawberry", "hybrid", 27),
//                 new Plant("gorille glue", "indica", 24),
//                 new Plant("lemon haze", "sativa", 22)
//               ];

// planten.push(planten[1].crossbreed(planten[2]));

// for(let plant of planten) {
//     plant.printPlant();
// }


///// deel 9
// let persoon = {
//     naam: "timon",
//     leeftijd: 12,
//     haarkleur: 3
// };

// console.log(persoon.leeftijd);

///// deel 10
// window.addEventListener('load', function(event) {
    
//     let h1element = document.getElementById("headign");

//     console.log(h1element);

// });

/////deel 11

// function buttonClick() {
//     let waarde1 = parseInt(document.getElementById("inputding1").value);
//     let waarde2 = parseInt(document.getElementById("inputding2").value);

//     console.log(waarde1 + waarde2);

// }