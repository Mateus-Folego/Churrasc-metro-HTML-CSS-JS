let adults = document.getElementById('adults');
let kids = document.getElementById('kids');
let alcoholicDrink = document.getElementById('alcoholicDrink');
let duration = document.getElementById('duration');
const button = document.getElementsByClassName('buttons')[0];
const backWindow = document.getElementsByClassName('backWindow')[0];
const showCalculation = document.getElementsByClassName('showCalculation')[0];

function changeWindow(){
    showCalculation.classList.toggle('open');
    backWindow.classList.toggle('open');
};

function closeWindow(){
    changeWindow();
};

function beefCalc(duration){
    if(duration <= 6){
        return 200;
    }

    else if (duration <= 12){
         return 400;
    }

     else if (duration <= 18){
        return 600;
    }

    else if (duration <= 24){
        return 800;
    }
};

function chikenSausaCalc(duration){
    if(duration <= 6){
        return 150;
    }

    else if (duration <= 12){
         return 300;
    }

     else if (duration <= 18){
        return 450;
    }

    else if (duration <= 24){
        return 600;
    }
};

function waterCalc(duration){
    if(duration <= 6){
        return 500;
    }

    else if (duration <= 12){
         return 1000;
    }

     else if (duration <= 18){
        return 1500;
    }

    else if (duration <= 24){
        return 2000;
    }
};

function sodaCalc(duration){
    if(duration <= 6){
        return 400;
    }

    else if (duration <= 12){
         return 800;
    }

     else if (duration <= 18){
        return 1200;
    }

    else if (duration <= 24){
        return 1600;
    }
};

function beerCalc(duration){
    if(duration <= 6){
        return 900;
    }

    else if (duration <= 12){
         return 1800;
    }

     else if (duration <= 18){
        return 2700;
    }

    else if (duration <= 24){
        return 3600;
    }
};

function calculate(){
    if (adults.value == '' || kids.value == '' || duration.value == '' || alcoholicDrink.value == ''){
        alert('Por favor, preencha todos os campos.');
    }

    else if (Number(adults.value) < Number(alcoholicDrink.value)){
        alert('Ops! O número de pessoas que consomem bebida alcólica está maior do que o de adultos... Reveja isto :)');
    }

    else if (duration.value > 24){
        alert('Ops! O programa não suporta durações maiores do que 24 horas ):');
    }

    else if(Number(adults.value) <0 || Number(kids.value) <0 || Number(duration.value) <0 || Number(alcoholicDrink.value) <0){
        alert('Por favor, insira apenas números válidos. ');
    }

    else if(Number(duration.value) == 0){
        alert('Ops! A duração do evento não pode ser igual a zero... Reveja isto.');
    }

    else{

        let major = Number(adults.value);
        let young = Number(kids.value);
        let time = Number(duration.value);
        let drinkBeer = Number(alcoholicDrink.value);

        let beef = beefCalc(time) * major + (beefCalc(time)/2 * young );
        let chiken = chikenSausaCalc(time) * major + (chikenSausaCalc(time)/2 * young);
        let sausage = chikenSausaCalc(time) * major + (chikenSausaCalc(time)/2 * young);
        let water = waterCalc(time) * major + (waterCalc(time)/2 * young);
        let soda = sodaCalc(time) * major + (sodaCalc(time) * young);
        let beer = beerCalc(time) * drinkBeer; 

        showCalculation.innerHTML = `<button onclick = 'closeWindow()' class="btnClose"><i class="fa fa-remove fa-2x"></i></button>`;
        showCalculation.innerHTML += `<h1 class="boxTitle">Para Realizar o seu churrasco você irá precisar de :</h1>`
        showCalculation.innerHTML += `<ul>`;
        showCalculation.innerHTML += `<li class = 'beef'>${beef/1000} Kg de carne vermelha; </li>`;
        showCalculation.innerHTML += `<li class = 'chiken'>${chiken/1000} Kg de frango; </li>`;
        showCalculation.innerHTML += `<li class = 'sausage'>${sausage/1000} Kg de linguiça; </li>`;
        showCalculation.innerHTML += `<li class = 'water'>${water/1000} Litros de água; </li>`;
        showCalculation.innerHTML += `<li class = 'soda'>${soda/1000} Litros de refrigerante; </li>`;
        showCalculation.innerHTML += `<li class = 'beer'>${beer/300} latas (300ml) de cerveja. </li>`;
        showCalculation.innerHTML += `</ul>`;

        changeWindow();
    };
};
