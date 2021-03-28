// REFERENZE
// pescaggio dei nodi che ci serviranno

/* interazione del bottone di invio
al click deve capitare qualcosa*/

// bottone del invio , salviamo l'oggetto del nodo 
var btn = document.getElementById('button');
// ref, per l'inserimento del nome
var burgerNome = document.getElementById('name');
// ref, per gli ingredienti
var ingredienti = document.getElementsByClassName('ingredient-checkbox');
// ref, per il prezzo
var diplayPrezzo = document.getElementById('price');
// per lo sconto 
var coupon = document.getElementById('coupon');


// SETTINGS
var coupons = ['1234ciao', '4567ciao', '891011ciao'];




/**
 * PRIMA cosa che voglio gestire è
 * il calcolo del prezzo al click
 */


/** due informazioni qui
 * 1 fare un gestore di evento -- CLICK è: cosa stiamo ascoltando,
 * tra di loro sempre la VIRGOLA
 * 2 come facciamo ad indicare la funzionalità
 */

// ascoltatore di evento in posizione cosi
btn.addEventListener('click', function(){
    //nel momento che fà il click voglio vedere il suo valore 
    // ma nel momento spacifico
    // usiamo VALUE per leggere il valore 
    var nomeClick = burgerNome.value.trim();
    
    //nome obbligatorio (decisione)
    if(nomeClick.length === 0) {
        // errore
        alert('Non hai inserito il tuo nome');
    } else { 
       // 1. aggiunta costo ingredienti al prezzo base
       // la metto qua così viene settata ogni volta che clicco
       var prezzo = 50;
       
       for(var i = 0; i < ingredienti.length; i++){
           // la salviamo in una variabile per comodità
           var ingredientiCheck = ingredienti[i];
           console.log(ingredientiCheck.checked);

           // decisione
           if(ingredientiCheck.checked === true) {
            console.log(ingredientiCheck.value);
            // aggiornare il prezzo , con l'aggiunta dei vari ingredienti
            // parseInt perchè così non valore stringa
            prezzo += parseInt(ingredientiCheck.value);

           }
       } // finito il loop
       console.log(prezzo);


       // 3. coupon / sconto , con il codice che ci inserisci l'utente
       var couponCodice = coupon.value;
       //console.log(couponCodice );
       // combinazione di includes con if decisione dentro ( è chi dobbiamo cercare)
       if(coupons.includes(couponCodice) ){
        //console.log('codice corretto');

        // 20% di sconto
        prezzo -= prezzo * 0.2;
       }

       // 2. stampa il prezzo
       diplayPrezzo.innerHTML = prezzo.toFixed(2);
    }



})