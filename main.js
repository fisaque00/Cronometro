window.onload = function(){

    var segundos = 00;
    var minutos = 00;
    var appenTens = document.getElementById("minutos")
    var appendSeconds = document.getElementById("segundos")
    var buttonStart = document.getElementById('botao_iniciar');
    var buttonStop = document.ge {
        tElementById('butao-parar');
    var buttonReset = document.getElementById('botao_reiniciar');
    var Interval ;

    buttonStart.onclik = function() {

        clearInterval(Interval)
        Interval = setInterval(startTimer,10);
    }

        buttonStop.onclik = function() {
            clearInterval(Interval);
        }

        buttonReset.onclick = function() {
            clearInterval(Interval);
            minutos = "00";
            segundos = "00";
            appendminutos.innerHTML = minutos;
            appendSegundos.innerHTML = segundos;
        }

        function starTimer() {
            minutos++;
            
            if(minutos <= 9){
                appendminutos.innerHTML = "0" + minutos;
            }

            if (tens > 9){
                appendminutos.innerHTML = minutos;
            }

            if (mimutos > 99) {
                console.log("segundos");
                segundos++;
                appendSegundos.innerHTML = "0" + 0;
                minutos = 0;
                appendSegundos.innerHTML = "0" + 0;
            }

            if (segundos > 9){
                appendSegundos.innerHTML = segundos;
            }
        
    }

}