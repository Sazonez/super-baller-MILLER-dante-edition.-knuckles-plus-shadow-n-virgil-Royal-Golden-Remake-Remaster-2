let counter
var y 
var x

counter = 0
y = 50
x = 150
adiconal = 0
startval = 200
clickercount = 0
clickpauto = -1
autocost = 10
reduc = 1
colors = ["green", "blue", "red", "yellow", "gray"]
timer = 0

var rebq = 0

const dsp = document.getElementById("display")

const button = document.getElementById("butao")

const tg = document.getElementById("thiaguinho")

const gamble = document.getElementById("butao2")

const kil = document.getElementById("centro")

const kachin = document.getElementById("kaching")

const peh = document.getElementById("peh")

const reb = document.getElementById("butao3")

const req = document.getElementById("requi")

const auto = document.createElement("button")

const upg = document.getElementById("upg")

const dark = document.getElementById("dark")





button.addEventListener("click", () => {

    counter = counter + 1 + adiconal
    tg.innerHTML = counter

    y = y + 1
    x = x + 2

    
    button.style.height = y + "px"
    button.style.width = x + "px"
    button.style.transition = "0.5s"




    rancolor = colors[Math.floor(Math.random() * colors.length)];
    console.log(rancolor);
    button.style.backgroundColor = rancolor
    
 





    dsp.innerHTML = "+" + (adiconal + 1) 
    dsp.style.transition = "0.5s"
    dsp.style.marginBottom = "50px" 


    setTimeout(() =>{
        dsp.innerHTML = ""
        dsp.style.marginBottom = "0px" 
    }, 400)


    








})



gamble.addEventListener("click", () => {


    gamble.disabled = true;
    gamble.textContent = "Aguarde..."

    sorte = ["sim", "não", "não"]
    sortepux = sorte[Math.floor(Math.random() * sorte.length)]
    console.log(sortepux)
    kil.style.transition = "0.2s"


    if (sortepux == "sim") {
       
        counter = counter + counter
        tg.innerHTML = counter
        x = x + x / reduc
        y = y + y / reduc
        button.style.height = y + "px" 
        button.style.width = x + "px" 
        if (noite) {
            kil.style.backgroundColor = "darkgreen"  
        } else {
            kil.style.backgroundColor = "green"  
        }

        kachin.play()
        
        
        

    } else {
        counter =  Math.trunc(counter / 4)


        tg.innerHTML = counter      
        x = x / 4
        y = y / 4
                
        button.style.height = y + "px"
        button.style.width = x + "px"
        if (noite) {
            kil.style.backgroundColor = "darkred"  
        } else {
            kil.style.backgroundColor = "red"  
        }
        
        peh.play()
    }

    setTimeout(() =>{
        if (noite) {
            kil.style.backgroundColor = "black"   
        } else {
            kil.style.backgroundColor = "white"   
        }
        
    }, 400)

    setTimeout(() => {
        gamble.disabled = false
        gamble.textContent = "Gamble"
    }, 5000);
   


})

butao3.addEventListener("click", () => {

    if (counter >= startval) {
        adiconal = adiconal + 1
        x = 0
        y = 0
        button.style.height = y + "px"
        button.style.width = x + "px"
        counter = 0
        tg.innerHTML = counter
        startval = startval + startval
        req.innerHTML = "Next Rebirth = " + startval  
        rebq = rebq + 1
        butao3.innerHTML = "Rebirth " + rebq  
        console.log("Rebirth")
        clickpauto = clickpauto + 1
        button.style.transition = "0.1s"
        reduc = reduc + 1


        if (rebq == 2) {

            
            auto.setAttribute("type", "button")
            auto.style.width = "150px"
            auto.style.height = "50px"
            auto.style.backgroundColor = "black"
            auto.style.position = "absolute"
            auto.style.top = "70%"
            auto.style.left = "46%"
            auto.style.borderRadius = "100px"
            auto.style.backgroundColor = "rgb(212, 173, 173)"
            auto.innerHTML = "autocçocler 10clks"


            console.log("kaboom")
            document.body.appendChild(auto)
        }
        
    }



})

auto.addEventListener("click", () => {
    if (counter >= autocost) {
        clickercount = clickercount + 1
        

        
        counter = counter - autocost
        x = x - autocost - autocost 
        y = y - autocost 
        button.style.height = y + "px"
        button.style.width = x + "px"
        tg.innerHTML = counter
        autocost = Math.trunc(autocost * 1.2)
        auto.innerHTML = "autoclicker " + autocost + "clks"
        upg.play()



        if (clickercount >= 1) {
            setInterval(() => {
            counter = counter + clickpauto
            y = y + 1 / reduc
            x = x + 2 / reduc
            button.style.height = y + "px"
            button.style.width = x + "px"
            tg.innerHTML = counter



        }, 2000/clickercount);
    
    }

}





})

noite = false

dark.addEventListener("click", () => {

    noite = !noite

    if (noite) {
        colors = ["rgba(53, 52, 52, 1)"  ]
        button.style.backgroundColor = "rgba(53, 52, 52, 1)"
        kil.style.backgroundColor = "black"
        kil.style.color = "white"
        kil.style.transition = "0.5s"
        dsp.style.color = "white"
        dark.style.backgroundColor = "darkgray"     
         
        
    }else{
        colors = ["green", "blue", "red", "yellow", "gray"]

        kil.style.backgroundColor = ""
        kil.style.color = ""
        kil.style.transition = "0.5s"
        dsp.style.color = ""
        dark.style.backgroundColor = "black"
        
        

    }


})

dark.style.color = "white"

setInterval(() => {
    timer = timer + 1
    dark.innerHTML = timer
}, 1000);











