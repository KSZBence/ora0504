import {ADATOK} from "./adatok.js";
import Termek from "./Termek.js";
class Termekek{
    #kedvncek
    constructor(){
        let szuloElem = $("body main div")
        for (let index = 0; index < ADATOK.length; index++) {
            let termek = new Termek(ADATOK[index], szuloElem);
        }        
    }
}

export default Termekek;