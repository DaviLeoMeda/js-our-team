

const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];

const pathImg = `./assets/img/`

let HTMLpath = document.querySelector('.row');


for (let w = 0; w < team.length; w++) {

    HTMLpath.innerHTML +=
        `
        <div class="col-4" style=">
            <div class="card my-3" style="width: 18rem;">
                <img src="${pathImg}${team[w]['image']}" class="card-img-top" alt="">
                <div class="card-body text-center">
                    <h5 class="card-title">${team[w]['name']}</h5>
                    <p class="card-text">${team[w]['role']}</p>
                </div>
            </div>
        </div>
    `
}
