class Termek{
    #adat
    #divElem
    #buttonElem
    #torolButton
    constructor(adat, szuloElem){
        this.#adat = adat
        let txt = `<div class="col-sm-3 border border-3 rounded border-danger m-2 p-2"><h5>${this.#adat.nev}</h5><h5>${this.#adat.kor}</h5><h5>${this.#adat.fajta}</h5><h5>${this.#adat.ar}</h5>
        <button class="btn btn-danger m-1 mb-2">Kedvencekhez ad</button> <button class="btn btn-info m-1 mb-2">törol</button>
      </div>`;
        szuloElem.append(txt)
        this.#divElem = szuloElem.children("div:last-child");
        this.#buttonElem = this.#divElem.children("div:last-child button");
        this.#torolButton = this.#divElem.children("div:last-child .btn-info");
        
        this.#buttonElem.on("click", ()=>{
            this.kedvencekhez()
        })

        this.#torolButton.on("click", ()=>{
            this.torol()
        })
    }

    kedvencekhez(){
        const ev = new CustomEvent("kedvencekhez", {detail: this.#adat.id});
        window.dispatchEvent(ev);
    }

    torol(){
        const ev = new CustomEvent("torol", {detail: this.#adat.id});
        window.dispatchEvent(ev);
    }
}
export default Termek