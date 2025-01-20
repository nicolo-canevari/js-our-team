// array team
const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    image: "male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    image: "female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    image: "male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    image: "female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    image: "male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    image: "female3.png"
  }
];

// debugging
console.table(teamMembers);

// Selezioniamo il contenitore principale
const container = document.querySelector(".team-container");

// creouna variabile items e la stai inizializzo con una stringa vuota
let items = "";

// ciclo for che itera sull'array items, con ogni iterazione del ciclo accede a un elemento dell'array e assegna i suoi valori a variabili
for (let i = 0; i < teamMembers.length; i++) {
  let teamIesimo = teamMembers[i];

  const { name, role, email, image } = teamIesimo;

  // console.log(name, role, email, img);


  // "aggiungere" o "concatenare" un valore a una variabile esistente. 
  // Concatenare stringhe (o altri tipi di dati) alla variabile items.
  items += `

    <div class="team-container">

        <div class="img-container">

            <img src="img/${image}" alt="${name}" />

        </div>

        <div class="text-container">

            <h3>${name}</h3>

            <span>${role}</span><br>

            <a>${email}</a><br>

        </div>

    </div >

    `
  // debugging
  console.table(items);

}

// output nel DOM
container.innerHTML = items;

