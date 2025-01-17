// array team
const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    image: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    image: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    image: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    image: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    image: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    image: "img/female3.png"
  }
];

console.table(teamMembers);

// Selezioniamo il contenitore principale
const container = document.getElementById("team-container");

let items = "";

for (let i = 0; i < teamMembers.length; i++) {
  let teamIesimo = teamMembers[i];

  const { name, role, email, image } = teamIesimo;

  // console.log(name, role, email, img);


  items += `

    < div class="team-container" >

        <div class="img-container">

            <img src="img/${image}" alt="${name}" />

        </div>

        <div class="text-container">

            <h3>${name}</h3>

            <span>${role}</span>

            <span>${email}</span>

        </div>

    </div >

    `

  console.table(items);

}

// output nel DOM
container.innerHTML = items;

