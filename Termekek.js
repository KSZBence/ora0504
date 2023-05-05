import Termek from "./Termek.js";
import Aszinkron from "./aszinkron.js";

class Termekek{
    #kedvncek = []
    constructor(){
        const aszinkron = new Aszinkron()
        let vegpont = "http://localhost:3000/ADATOK"
        aszinkron.adatBeolvas(vegpont, this.#termekMegjelenito)
        $(window).on("kedvencekhez",(event)=>{
            this.#kedvncek.push(event.detail)
        })        

        
        $(window).on("torol",(event)=>{
            aszinkron.adatTorles(vegpont, event.detail)
        })  
    }
    
    #termekMegjelenito(lista){
        let sajatlista = lista
        let szuloElem = $("body main div")
        for (let index = 0; index < lista.length; index++) {
            let termek = new Termek(lista[index], szuloElem);
        }
    }
}

export default Termekek;