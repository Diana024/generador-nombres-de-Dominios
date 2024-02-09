/* eslint-disable no-console */
let pronombres= ["Yo", "Tu", "El", "Ella", "Nosotros", "Vosotros", "Ellos"];
let adjetivos= ["amable", "directo","antiguo","estupendobajo","grande","increíble"];
let sustantivos= ["silla", "teléfono", "camisa", "pelota", "comba", "sudadera", "palo"]; 

for (let i= 0; i < pronombres.length; i++) {
    for (let j= 0; j < adjetivos.length; j++) {
        for (let k= 0; k < sustantivos.length; k++) {
            if (k < 2)
                console.log(pronombres[i] + adjetivos[j] + sustantivos[k] + ".com");
            else if (k > 3)
                console.log(pronombres[i] + adjetivos[j] + sustantivos[k] + ".es");
            else 
                console.log(pronombres[i] + adjetivos[j] + sustantivos[k] + ".org");
        }
    }
}