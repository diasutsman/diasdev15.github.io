// to get random moles to show
let chooseMole = () => {
    let molesIndex = [0,1,2,3,4,5]
    let numberOfMole = 1+Math.floor(Math.random()*6)
    while (molesIndex.length > numberOfMole) {
        let idx = Math.floor(Math.random()*6);
        molesIndex.splice(idx,1)
    }
    return molesIndex
}
    let kotaks = document.getElementsByClassName("kotak")   
    // moles appear-disappear interval
    // let availableIdx = [1,1,1,1,1,1]
    setInterval(() => {
        
        let idxs = chooseMole()
        console.log(idxs);
        for (let i = 0; i < kotaks.length; i++){
            kotaks[i].style.backgroundImage = "none"
            kotaks[i].style.cursor = "auto"
        }
        idxs.forEach((i) => {
            /*if(availableIdx[i])*/kotaks[i].style.backgroundImage = "url(\"img/mole.png\")"
            kotaks[i].style.cursor = "pointer"
        })
    },1000)

    // if the moles got clicked
    document.querySelectorAll(".kotak").forEach((e,idx) => {
        e.addEventListener("click" ,() => {
            if(e.style.backgroundImage == "url(\"img/mole.png\")") {
                document.getElementById("score").children[0].innerHTML = parseInt(document.getElementById("score").children[0].innerHTML) + 1 ;
                e.style.border = "red solid 2px"
                setTimeout(() => e.style.border = "none", 30)
                e.style.backgroundImage = "none"
                // availableIdx[idx] = 0
            }
        })
    })
    
    // reset
    document.getElementById("reset").addEventListener("click",() => {
        document.getElementById("score").children[0].innerHTML = 0
        for (let i = 0; i < kotaks.length; i++){
            kotaks[i].style.backgroundImage = "none"
        }
        setTimeout(() => {}, 3000000000000)
    })