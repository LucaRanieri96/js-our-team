/* 
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.  Ogni membro è caratterizzato dalle seguenti informazioni:
nome
ruolo
foto
*/
/*
Wayne Barnett/Founder & CEO/wayne-barnett-founder-ceo.jpg
Angela Caroll/Chief Editor/angela-caroll-chief-editor.jpg
Walter Gordon/Office Manager/walter-gordon-office-manager.jpg
Angela Lopez/Social Media Manager/angela-lopez-social-media-manager.jpg
Scott Estrada/Developer/scott-estrada-developer.jpg
Barbara Ramos/Graphic Designer/barbara-ramos-graphic-designer.jpg */

//MILESTONE 0:Creare l’array di oggetti con le informazioni fornite.

const teamElements = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    img: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    img: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    img: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    img: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    img: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    img: "barbara-ramos-graphic-designer.jpg",
  },
];

console.log(teamElements);

/*
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto */

for (let i = 0; i < teamElements.length; i++) {
  const member = teamElements[i];
  console.log(member.name, member.role, member.img);
}

/* 
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe */

// const divEl = document.getElementById("info_team")

// for (let i = 0; i < teamElements.length; i++) {
//     const member = teamElements[i];
//     const markup = (`${member.name}, ${member.role}, ${member.img}`)

//     divEl.innerHTML += markup;
// }

/*
BONUS 1:
Trasformare la stringa foto in una immagine effettiva */

const imgPath = "../assets/img/"; // percorso relativo della cartella contenente le immagini

teamElements[0].img = `${imgPath}angela-caroll-chief-editor.jpg`;
teamElements[1].img = `${imgPath}angela-lopez-social-media-manager.jpg`;
teamElements[2].img = `${imgPath}barbara-ramos-graphic-designer.jpg`;
teamElements[3].img = `${imgPath}scott-estrada-developer.jpg`;
teamElements[4].img = `${imgPath}walter-gordon-office-manager.jpg`;
teamElements[5].img = `${imgPath}wayne-barnett-founder-ceo.jpg`;

console.log(teamElements);

/*
BONUS 2:
Organizzare i singoli membri in card/schede */

const rowEl = document.querySelector(".row");
console.log(teamElements);

for (let i = 0; i < teamElements.length; i++) {
  const member = teamElements[i];
  console.log(member);
  const markup = `
      <div class="col-4 d-flex justify-content-center">
        <div class="card mb-4" style="width: 18rem;">
            <img src="${member.img}" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">
                ${member.name}
              </h5>
              <p class="card-text">
                ${member.role}
              </p>
            </div>
          </div>
        </div>`;

  rowEl.innerHTML += markup;
}
