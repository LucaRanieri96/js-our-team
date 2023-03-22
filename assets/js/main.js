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

const divEl = document.getElementById("info_team")

for (let i = 0; i < teamElements.length; i++) {
    const member = teamElements[i];
    const markup = (`${member.name}, ${member.role}, ${member.img}`)

    divEl.innerHTML += markup;
}

/*
BONUS 1:
Trasformare la stringa foto in una immagine effettiva */