// Número da página buscada
let page = 1;

// Requisição dos dados
fetch(`https://reqres.in/api/users?page=${page}`)
    .then((res) => res.json())
    .then((users) => addCardsUser(users));

function addCardsUser(users) {
    //Percorre os usuarios retornado da fetch API
    users.data.map((user) => {
        let fullName = user.first_name + ' ' + user.last_name;
        let contact = user.email;
        let image = user.avatar;
        //Adiciona o elemento do card do usuario na página html
        const containerUsers = document.querySelector('.container-users');
        containerUsers.append(buildCardUser(fullName, contact,image));
    });
    console.log(users);
    const pageUsers = document.querySelector('.page-users')
    pageUsers.innerText = `mostrando ${users.per_page} de ${users.total}`
}

function buildCardUser(fullName, contact, image) {
    // Cria os elementos
    const divUser = document.createElement('div');
    const divAvatarUser = document.createElement('div');
    const imgAvatar = document.createElement('img');
    const divInfoUser = document.createElement('div');
    const h3fullNameUser = document.createElement('h3');
    const spanContactUser = document.createElement('span');
    const divEditUser= document.createElement('div');
    const imgEditUser = document.createElement('img')
    const archorEditUser = document.createElement('a')

    // Adicionar as classes nos elementos
    divUser.className = 'user'
    divAvatarUser.className = 'container-avatar'
    imgAvatar.className = 'avatar'
    divInfoUser.className = 'container-info-user'
    h3fullNameUser.className = 'fullname-user'
    spanContactUser.className = 'contact-user'
    divEditUser.className = 'container-icon-edit'
    imgEditUser.className = 'icon-edit'

    // Adiciona os dados nos elementos
    imgAvatar.setAttribute('src', image);
    archorEditUser.setAttribute('href', '#id');
    imgEditUser.setAttribute('src', '../public/assets/icons/icon-edit.svg');
    h3fullNameUser.innerText = `${fullName}`;
    spanContactUser.innerText = `${contact}`;

    //Adicionar no dentro do elemento pai (divUser)
    divAvatarUser.append(imgAvatar);
    divInfoUser.append(h3fullNameUser);
    divInfoUser.append(spanContactUser);
    archorEditUser.append(imgEditUser)
    divEditUser.append(archorEditUser)
    divUser.append(divEditUser);
    divUser.append(divAvatarUser);
    divUser.append(divInfoUser);

    return divUser
}
