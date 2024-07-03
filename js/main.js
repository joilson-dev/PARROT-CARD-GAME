
document.addEventListener('DOMContentLoaded', function() {
    let letterQuantity = 0;

    while (isNaN(letterQuantity) || letterQuantity < 4 || letterQuantity > 14) {
        let input = prompt('Quantas cartas deseja jogar? Insira um número entre 4 e 14');
        letterQuantity = parseInt(input);
    }

});

function eventClick(element){
    element.classList.toggle("turn-card");
}