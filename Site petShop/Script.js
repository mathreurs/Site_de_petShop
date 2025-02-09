let num = 0;

function playSound(){
    let audio = document.getElementById("sound");
    audio.currentTime = 0;
    audio.play();
    num++;
    console.log(num);

    if(num == 3){
        let cab = document.getElementById("head");
        let cabecalho = document.getElementById("cabecalho");
        cab.style.height = "200px";
        cabecalho.style.height = "100px";

        var hiddenImages = document.getElementById("hidden-image")
        hiddenImages.style.display = "block";
    }
}


