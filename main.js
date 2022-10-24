let utenti = ['mario@gmail.com', 'sara@gmail.com', 'luca@gmail.com'];
let avviso = document.getElementById('avviso')

function start(){

    let controlloMail = document.getElementById('text').value;
    let verifica = false;

    for(let i = 0; i < utenti.length; i++) {
       

        if( controlloMail == utenti[i] ){
            // console.log( `${controlloMail} è già presente`);
            verifica = true;
            
        } else{

            // console.log( `${controlloMail} non è presente`);
        }
    }

    if( verifica == true){
        avviso.innerHTML = `<p>utente presente!</p>`;

    } else {
        avviso.innerHTML = `<p>utente non presente!</p>`;
    }
}

let vinte = 0;
let perse = 0; 

function random(){

    dadoUtente = ('dadoUtente');
    dadoUtente = Math.round(Math.random() * 5) + 1 ;
    document.getElementById('dadoUtente').innerHTML = ` hai fatto ${dadoUtente}`;

    dadoCp = ('dadoCp');
    dadoCp = Math.round(Math.random() * 5) + 1 ;
    document.getElementById('dadoCp').innerHTML = ` hai fatto ${dadoCp}`;


    if( dadoUtente > dadoCp){
        // console.log('vinto')
        document.getElementById('dadoUtente').innerHTML = `Hai fatto ${dadoUtente}`;
        document.getElementById('dadoCp').innerHTML = `il pc ha fatto ${dadoCp}`;
        document.getElementById('risultato').innerHTML = `hai vinto`;
        vinte = vinte + 1;

    }else if(dadoUtente < dadoCp){
        // console.log('perso')
        document.getElementById('dadoUtente').innerHTML = `Hai fatto ${dadoUtente}`;
        document.getElementById('dadoCp').innerHTML = `il pc ha fatto ${dadoCp}`;
        document.getElementById('risultato').innerHTML = `hai perso`;
        perse = perse +1;
    }else{
        // console.log('pareggio')
        document.getElementById('dadoUtente').innerHTML = `Hai fatto ${dadoUtente}`;
        document.getElementById('dadoCp').innerHTML = `il pc ha fatto ${dadoCp}`;
        document.getElementById('risultato').innerHTML = `pareggio`; 
    }

    document.getElementById('vinte').innerHTML = `Hai vinto ${vinte} volte`;
    document.getElementById('perse').innerHTML = `il PC ha vinto ${perse} volte`;

}