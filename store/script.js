const imoveis = [
    // APARTAMENTOS
    {
        name: "Apartamento 3 Quartos",
        location: "Ponta Verde, Maceió",
        room: 3,
        suite: 1,
        vacancies: 2,
        size: 85,
        price: 680000,
        image: "https://plus.unsplash.com/premium_photo-1684175656320-5c3f701c082c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        filters: ["apartamento"]
    },
    {
        name: "Apartamento 2 Quartos",
        location: "Jatiúca, Maceió",
        room: 2,
        suite: 1,
        vacancies: 1,
        size: 65,
        price: 520000,
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        filters: ["apartamento"]
    },

    // CASAS
    {
        name: "Casa Térrea",
        location: "Tabuleiro do Martins, Maceió",
        room: 3,
        suite: 1,
        vacancies: 2,
        size: 120,
        price: 480000,
        image: "https://plus.unsplash.com/premium_photo-1767545112649-41c712887765?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        filters: ["casa"]
    },
    {
        name: "Casa em Condomínio",
        location: "Guaxuma, Maceió",
        room: 4,
        suite: 3,
        vacancies: 3,
        size: 180,
        price: 980000,
        image: "https://images.unsplash.com/photo-1632398414290-15262b0ec12d?q=80&w=968&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        filters: ["casa"]
    },

    // CASAS DE ALTO PADRÃO
    {
        name: "Casa Alto Padrão em Condomínio",
        location: "Barra de São Miguel, AL",
        room: 5,
        suite: 4,
        vacancies: 4,
        size: 320,
        price: 2150000,
        image: "https://plus.unsplash.com/premium_photo-1682377521753-58d1fd9fa5ce?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        filters: ["mansao"]
    },

    // CHÁCARA
    {
        name: "Chácara com Área Verde",
        location: "Marechal Deodoro, AL",
        room: 3,
        suite: 2,
        vacancies: 5,
        size: 2500,
        price: 890000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomRPoWN6uksV0VY-B8XxAVVM5DBXozeA3Tg&s",
        filters: ["chacara"]
    },

    // CASA DE PRAIA
    {
        name: "Casa de Praia",
        location: "Ipioca, Maceió",
        room: 4,
        suite: 3,
        vacancies: 4,
        size: 200,
        price: 1650000,
        image: "https://blog.lojasdonna.com.br/wp-content/uploads/2019/12/casa-de-praia.jpg",
        filters: ["casa de praia"]
    }
]

const items = document.querySelector('.items')
const filters = document.querySelectorAll('.filter')

function renderItems(lista) {
    lista.forEach(property => {
        const newProperty = document.createElement('div')
        newProperty.classList.add("item")
        newProperty.innerHTML = `<img src="${property.image}" alt="Foto de imóvel">

                <div class="title-item">
                    <h3>${property.name}</h3>
                    <p>${property.location}</p>
                </div>

                <ul class="ul-item">
                    <li>${property.room} Quartos</li>
                    <li>${property.suite} Suítes</li>
                    <li>${property.vacancies} Vagas</li>
                    <li>${property.size} m2</li>
                </ul>

                <div class="price-item">
                    <h3>${property.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</h3>
                    <button>Comprar</button>
                </div>`
        items.appendChild(newProperty)
    });
}
renderItems(imoveis)

filters.forEach(botao => {
    botao.addEventListener('click', (e) => {
        items.innerHTML = ""
        filters.forEach(botaoClass => {
            botaoClass.classList.remove("selected")
        })
        botao.classList.add("selected")
        const selected = botao.dataset.filter
        const filter = imoveis.filter(imovel => imovel.filters.includes(selected))

        if (selected === "all"){
            renderItems(imoveis)
            return
        }

        renderItems(filter)
    })
});