class Termek{
    #adat
    #divElem
    #buttonElem
    constructor(adat, szuloElem){
        this.#adat = adat
        szuloElem.append(
            `<div class="col-sm-3 border border-3 rounded border-danger m-2 p-2"><h5>${this.#adat.nev}</h5><h5>${this.#adat.kor}</h5><h5>${this.#adat.fajta}</h5><h5>${this.#adat.ar}</h5>
            <button class="btn btn-danger m-1 mb-2">Kedvencekhez ad</button>
          </div>`
        )
        this.#divElem = szuloElem.children("div:last-child");
        this.#buttonElem = this.#divElem.children("div:last-child button");
        
        this.#buttonElem.on("click", ()=>{
            this.esemenyTrigger()
        })
    }

    esemenyTrigger(){
        const ev = new CustomEvent("gombEvent", {detail: this.#adat.id});
        window.dispatchEvent(ev);
    }
}
export default Termek