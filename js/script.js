window.addEventListener('scroll', function () {

    function fade(direction){

        var imagen = document.querySelectorAll('.img__'+direction);

    for (var i = 0; i < imagen.length; i++) {

        var altura = window.innerHeight / 1.3;

        var distancia = imagen[i].getBoundingClientRect().top;


        console.log(altura)
        console.log(distancia)

        imagen[i].classList.add('transform_'+direction)


        if (distancia <= altura) {

            imagen[i].classList.add('img__aparece');
        }
        else {

            imagen[i].classList.remove('img__aparece');
        }


    }

    }


    
    fade('up') 
    fade('right')
    fade('left')  
    










})