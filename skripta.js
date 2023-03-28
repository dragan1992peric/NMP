
(()=> {
    alert("ulogujte se i imajte srecnu smenu punu baksisa");
})();
const poz = () => {
    if (document.getElementById('user').value == "djole" && document.getElementById('pass').value == "123")
    document.getElementById('iskocimi').style.visibility="hidden";
}
const Userko = (name) => {
    document.getElementById('userinfo').innerText = name.value;
}
const racuniSaStola = (e) => {
     const tabela = document.getElementById('porudzbine');
     const porudzbina = document.getElementsByClassName('porudzbina');
     const reduser = e.reduce ((akumulator, trenutna) => akumulator + trenutna.ukupno, 0, );
     const mapa = e.map((pdv) => pdv.ukupno+pdv.ukupno*0.2);
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
     document.getElementById('reduserZbir').innerText = reduser ;
     

     document.getElementById('pedeve').innerText = mapa.reduce ((a, b) => a + b, 0, );
}


const placeno = () => {
  document.getElementById('porudzbine').style.backgroundColor = "green";
}




const dodavanje = () => {
  const $counter = document.querySelector("#counter");
  const $increment = document.querySelector("#increment");
  const $decrement = document.querySelector("#decrement");
  const $reset = document.querySelector("#reset");

  const createStore = (initialState, reducer) => {
    const state = new Proxy(
      { value: initialState },
      {
        set(obj, prop, value) {
          obj[prop] = value;
          updateUI();
        },
      }
    );

    const getState = () => {
      return { ...state.value };
    }

    const dispatch = (action) => {
      const prevState = getState();
      state.value = reducer(prevState, action);
    }

    return {
      getState,
      dispatch,
    };
  }

  const initialState = { counter: 0 };

  const reducer = (state, action) => {
    switch (action) {
      case "INCREMENT":
        state.counter = state.counter + 1;
        break;
      case "DECREMENT":
        state.counter = state.counter - 1;
        break;
      case "RESET":
      default:
        state.counter = 0;
        break;
    }

    return state;
  }

  const store = createStore(initialState, reducer);

  const updateUI = () => {
    $counter.innerText = store.getState().counter;
  }

  $increment.addEventListener("click", () => {
    store.dispatch("INCREMENT");
  });
  $decrement.addEventListener("click", () => {
    store.dispatch("DECREMENT");
  });
  $reset.addEventListener("click", () => {
    store.dispatch("RESET");
  });
}
window.addEventListener("DOMContentLoaded", dodavanje);

function mojaRekurzija(obj, stack) {
  for (var property in obj) {
    if (obj.hasOwnProperty(property)) {
      if (typeof obj[property] == "object") {
        if (property === "bezalk" || property ==="alk"){
          meniPica(property);
        }
            mojaRekurzija(obj[property], stack + '.' + property);
          } else {
              meniPica(obj[property]);
          }
      }
  }
}




const meniPica = (e) => {
  const tabela = document.getElementById('pica');
  const pice = document.getElementsByClassName('pice');

  const prikaziPica = (e) => {
        if (isNaN(parseInt(e, 10))){
          console.log('parseInt',e);
          const red = document.createElement('tr');
          red.className = "pice";
          const naziv = document.createElement('td');
          naziv.textContent=e;
          red.appendChild(naziv);
          tabela.appendChild(red);
        } else {
          console.log('nije', e);
          const cena = document.createElement('td');
          cena.textContent=e;
          const redovi = document.getElementsByClassName('pice');
          redovi[redovi.length - 1].appendChild(cena);
          console.log(redovi);
        }
     };
  prikaziPica(e);
};























const prviRacun = [{naziv: 'kafa', kolicina: '2', jedinicnaCena: '140', ukupno:280},
{naziv: 'kola', kolicina: '3', jedinicnaCena: '110', ukupno:330}, 
{naziv: 'surutka', kolicina: '1', jedinicnaCena: '280', ukupno:280}];

const drugiRacun = [{naziv: 'supa', kolicina: '1', jedinicnaCena: '520', ukupno:520},
{naziv: 'sladoled', kolicina: '4', jedinicnaCena: '210', ukupno:840}, 
{naziv: 'fanta', kolicina: '1', jedinicnaCena: '130', ukupno:130}];

const treciRacun = [{naziv: 'krmenadla', kolicina: '1', jedinicnaCena: '650', ukupno:650},
{naziv: 'sladoled', kolicina: '4', jedinicnaCena: '210', ukupno:840}, 
{naziv: 'fanta', kolicina: '1', jedinicnaCena: '130', ukupno:130}];

const cetvrtiRacun = [{naziv: 'pihtije', kolicina: '2', jedinicnaCena: '480', ukupno:960},
{naziv: 'sladoled', kolicina: '4', jedinicnaCena: '210', ukupno:840}, 
{naziv: 'fanta', kolicina: '1', jedinicnaCena: '130', ukupno:130}];

const petiRacun = [{naziv: 'krompirici', kolicina: '3', jedinicnaCena: '240', ukupno:720},
{naziv: 'sladoled', kolicina: '4', jedinicnaCena: '210', ukupno:840}, 
{naziv: 'fanta', kolicina: '1', jedinicnaCena: '130', ukupno:130}];



const meni = 
  {
    bezalk:[
      {tip:'kola', cena:'120'},
      {tip:'fanta', cena:'110'},
      {tip:'sprite', cena:'130'},
  ],
  alk:[
    {tip:'pivo', cena:'150'},
    {tip:'vino', cena:'200'},
    {tip:'viskey', cena:'666'},
]
    };









