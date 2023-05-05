import Termek from "./Termek.js";
import Aszinkron from "./aszinkron.js";

class Termekek{
    #kedvncek = []
    constructor(){
        const aszinkron = new Aszinkron()
        let vegpont = "adatok.json"
        aszinkron.adatBeolvas(vegpont, this.#termekMegjelenito)
        $(window).on("gombEvent",(event)=>{
            this.#kedvncek.push(event.detail)
        })        
    }
    
    #termekMegjelenito(lista){
        let sajatlista = lista.LISTA
        let szuloElem = $("body main div")
        for (let index = 0; index < ADATOK.length; index++) {
            let termek = new Termek(lista[index], szuloElem);
        }
    }
}

export default Termekek;