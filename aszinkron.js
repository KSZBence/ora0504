class Aszinkron{
    constructor(){

    }

    adatBeolvas(vegpont, callbackFv){
        fetch(vegpont, {
            method: "GET",
        })
        .then((response)=>response.json())
        .then((data)=>{callbackFv(data);
        })
        .catch((error)=>console.log(error))
    }

    adatTorles(vegpont, id){
        vegpont = vegpont+"/"+id
        fetch(vegpont, {
            method: "DELETE",
        })
        .then((response)=>response.json())
        .then((data)=>{console.log(data);;
        })
        .catch((error)=>console.log(error))
    }

}
export default Aszinkron