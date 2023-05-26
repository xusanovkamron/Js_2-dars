/* undefined,boolean,object in JS */

/*let raqam = 45;  */           /* number(barcha sonlar) */
/*let text = "JavaScript";*/    /* string (barcha so'zlar) */
/*let soz;*/
/*let rost = false;*/            /* boolean (true,false) */
/*let arrayObject = [45,78,"matn","gap",true,false];*/ /* object */
/*let oddiyObject = {ism: "Shodmon", familiya: "Tursunov", yoshi: 35};*/     /* object */
/*console.log(oddiyObject);*/

/* functions in JS */

function savatchaniTekshir(uzatilganMalumot=[12,78,"dona",true,false]){

    if (uzatilganMalumot.length == 0){
        document.write("Savatchaning ichida " + uzatilganMalumot.length + " ta ma'lumot bor!");
    }else{
        document.write("Savatchaning ichida " + uzatilganMalumot.length + " dona ma'lumot bor!");
    }
}

let container = [12,true,false,"matn"];
savatchaniTekshir();

