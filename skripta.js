
// (()=> {
//     alert("ulogujte se i imajte srecnu smenu punu baksisa");
// })();
const poz = () => {
    if (document.getElementById('user').value == "djoka" && document.getElementById('pass').value == "krivi")
    document.getElementById('iskocimi').style.visibility="hidden";
}
const Userko = (name) => {
    document.getElementById('userinfo').innerText = name.value;
}
const racuniSaStola = (e) => {
     const tabela = document.getElementById('porudzbine');
     const porudzbina = document.getElementsByClassName('porudzbina');
     if (porudzbina.length > 0) {
        const restart = () => {
        for (let i = porudzbina.length-1; i >= 0; --i) {
        porudzbina[i].remove();
        }}
        restart();
     }
     const popuniTabelu = (e) => {
        e.forEach(element => {
            const red = document.createElement('tr');
            red.className = "porudzbina";
            const naziv = document.createElement('td');
            naziv.textContent=element.naziv;
            const kolicina = document.createElement('td');
            kolicina.textContent=element.kolicina;
            const jedinicnaCena = document.createElement('td');
            jedinicnaCena.textContent=element.jedinicnaCena;
            const ukupno = document.createElement('td');
            ukupno.textContent=element.ukupno;
            red.appendChild(naziv);
            red.appendChild(kolicina);
            red.appendChild(jedinicnaCena);
            red.appendChild(ukupno);
            tabela.appendChild(red);
        });
     }
     popuniTabelu(e);
}



























const prviRacun = [{naziv: 'kafa', kolicina: '2', jedinicnaCena: '140', ukupno:'280'},
{naziv: 'kola', kolicina: '3', jedinicnaCena: '110', ukupno:'330'}, 
{naziv: 'surutka', kolicina: '1', jedinicnaCena: '280', ukupno:'280'}];

const drugiRacun = [{naziv: 'supa', kolicina: '1', jedinicnaCena: '520', ukupno:'520'},
{naziv: 'sladoled', kolicina: '4', jedinicnaCena: '210', ukupno:'840'}, 
{naziv: 'fanta', kolicina: '1', jedinicnaCena: '130', ukupno:'130'}];