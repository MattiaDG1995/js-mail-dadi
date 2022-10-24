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