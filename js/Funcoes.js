
// TODO: fazer o vetor imgShuffle embaralhar as imagens do vetor images
// TODO: refatorar e comentar

var images = new Array("css/Imgs/js.png", "css/Imgs/python.png", "css/Imgs/c.png", "css/Imgs/java.png", "css/Imgs/kotlin.png", "css/Imgs/php.png", "css/Imgs/ruby.png", "css/Imgs/js.png", "css/Imgs/python.png", "css/Imgs/c.png", "css/Imgs/java.png", "css/Imgs/kotlin.png", "css/Imgs/php.png", "css/Imgs/ruby.png");
var imgShuffle = new Array("css/Imgs/js.png", "css/Imgs/python.png", "css/Imgs/c.png", "css/Imgs/java.png", "css/Imgs/kotlin.png", "css/Imgs/php.png", "css/Imgs/ruby.png","css/Imgs/js.png", "css/Imgs/python.png", "css/Imgs/c.png", "css/Imgs/java.png", "css/Imgs/kotlin.png", "css/Imgs/php.png", "css/Imgs/ruby.png");
var click = 0;
var carta1;


$(document).ready(function(){

    for(i = 1; i <= 14; i++)
    {
        $(".card:nth-child("+ i +") .back").html("<img src=" + imgShuffle[i - 1] + ">");
    }

    // função do flip importado de bliblioteca https://nnattawat.github.io/flip/
    $(".card").flip({
        axis: 'y',
        trigger: 'click'
    });

    $(".card").click(function(){
        click++; 
        if(click == 2)
        {
            if(carta1 == $(this).html())
            {
                alert("ganhou!");
            }
            click = 0;
        }
        else
            carta1 = $(this).html();
    });


})