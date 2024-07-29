function alterarStatus(id) {

    let gameClicked = document.getElementById(`game-${id}`);

    let image = gameClicked.querySelector('.dashboard__item__img');

    let button = gameClicked.querySelector('.dashboard__item__button');


    if (image.classList.contains('dashboard__item__img--rented')) {

        if (confirm('Você tem certeza que quer devolver este jogo?')){

            image.classList.remove('dashboard__item__img--rented');
            button.classList.remove('dashboard__item__button--return');
            button.innerHTML = 'Alugar';

        }

    } else {

        image.classList.add('dashboard__item__img--rented');
        button.classList.add('dashboard__item__button--return');
        button.innerHTML = 'Devolver';

    }
    
}