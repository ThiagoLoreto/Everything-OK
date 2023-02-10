function ok() {

    const ok = document.querySelector('.ok')
    const load = document.querySelector('.Load')
    const finish = document.querySelector('.finish')


    ok.addEventListener('click', function () {
        load.style.opacity = 100
        temporizador() 
    })

    let timer = 0
    let contagem
    function temporizador () {
        contagem = setInterval(function () {
        timer++
        load.innerHTML = `Making Everything OK is in progress: ${timer}%`
        if(timer === 100) {
            clearInterval(contagem)
            aparecerfinish()
            load.style.opacity = 0
        }
    }, 100)
    }

    function aparecerfinish() {
        finish.setAttribute(
            "style", 'opacity: 100; top: 30%; left: 35%') 
    } 

}

ok()