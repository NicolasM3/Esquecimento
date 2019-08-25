var images = new Array("css/Imgs/js.png", "css/Imgs/python.png", "css/Imgs/c.png", "css/Imgs/java.png", "css/Imgs/kotlin.png", "css/Imgs/php.png", "css/Imgs/ruby.png", "css/Imgs/js.png", "css/Imgs/python.png", "css/Imgs/c.png", "css/Imgs/java.png", "css/Imgs/kotlin.png", "css/Imgs/php.png", "css/Imgs/ruby.png");
var imgShuffle = new Array();
var click = 0;
var carta1;

function ShuffleImages(organizedArray, shuffleArray)
{
    var organizedArraylength = organizedArray.length,
        randonIndex = 0;

    for(i = 0; i < organizedArraylength; i++)
    {
        randonIndex = Math.floor(Math.random() * (organizedArray.length - 0) + 0);

        shuffleArray.push(images[randonIndex]);
        organizedArray.splice(randonIndex, 1);
    }
}

$(document).ready(function(){

    ShuffleImages(images, imgShuffle);

    for(i = 1; i <= 14; i++)
    {
        $(".card:nth-child("+ i +") .back").html("<img src=" + imgShuffle[i - 1] + ">");
    }

    // função do flip importado de bliblioteca https://nnattawat.github.io/flip/
    $(".card").flip({
        axis: 'y',
        //trigger: 'click'
    });

    $(".card").click(function clique()
    {
        var acertos = new Array("a");
        click++; 

        if(click == 2)  
        {
            if(carta1 == $(this).html())
            {
                alert("ganhou!");
                for(i = 1; i <= 14; i++)
                {
                    if($(".card:nth-child(" + i + ")").html() == $(this).html()){
                        acertos.push(i)
                        alert(acertos);
                        $(".card:nth-child(" + i + ")").off("flip");
                        $(".card:nth-child(" + i + ")").off("click");
                    }
                }
            }
            else
            {
                alert(acertos);
                click = 0;
                alert("Infelizmente errou.");
                for(i = 1; i <= 14; i++)
                {
                    if(i == acertos[0] || i == acertos[2] || i == acertos[4] || i == acertos[6] || i == acertos[8] || i == acertos[10] || i == acertos[12] || i == acertos[14])
                    {
                        return;
                    }
                    else if($(".card:nth-child(" + i + ")").data("flip-model").isFlipped)
                    {
                        $(".card:nth-child(" + i + ")").flip(false);
                    }
                }
            }
            click = 0;
        }
        else
        {
            carta1 = $(this).html();
            //$(this).off("flip");
            //$(this).off("click");
        }
        
    });


})