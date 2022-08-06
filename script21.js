

const lancerDe = function () {
    const nombreDecimal = (Math.random() * 6) + 1
    const nombre = Math.trunc(nombreDecimal)
    return nombre
}

let scoreCurrent1Calcul = []
let scoreCurrent2Calcul = []
let scoreTemp1Calcul = []
let scoreTemp2Calcul = []
let playerNumberAI = '0';
let total = 0
let resultemp1id = document.getElementById('resultemp1id')
let resultemp2 = document.getElementById('resultemp2')




const ClickButton = function() {
    let result = lancerDe()
    const image = document.getElementById('de-resultimg')
    image.src = 'images/' + result + '.png'

    const resultemp1 = document.getElementById('resultemp1id')
    const resultemp2 = document.getElementById('resultemp2')

    if(result === 1) {
        playerNumberAI++;
    }


    let resultemp1id = document.getElementById('resultemp1id')
    let resultemp2id = document.getElementById('resultemp2')

//**add point temp */------------------------------------------------------------------------------------------

if(playerNumberAI%2==0) {
    //player1
    resultemp2id.textContent = `0`;
    scoreTemp2Calcul = []
    var countemp1 = scoreTemp1Calcul.push(result)
 //  console.log(scoreTemp1Calcul)
   const reducer = (accumulator, currentValue) => accumulator +currentValue;
   let scoretotal1temp = scoreTemp1Calcul.reduce(reducer);
//    console.log(playerNumberAI);
    resultemp1id.textContent = `${scoretotal1temp}`;
    resultemp1id  
}
//-----------------------------------------------
if(playerNumberAI%2!==0) {
    //player2
    resultemp1id.textContent = `0`;
    scoreTemp1Calcul = []
    var countemp2 = scoreTemp2Calcul.push(result)
    const reducer = (accumulator, currentValue) => accumulator +currentValue;
    var scoretotal2temp = scoreTemp2Calcul.reduce(reducer);
    resultemp2id.textContent = `${scoretotal2temp}`;
    resultemp2id
}
//**end add point temp */-----------------------------------------------------------------------------------------------

//ID MODIF HTML
let BG1 = document.getElementById('BG1')
let BG2 = document.getElementById('BG2')
let Player1 = document.getElementById('player1')
let pointp1 = document.getElementById('pointp1')
let Player2 = document.getElementById('Player2')
let pointp2 = document.getElementById('pointp2')

//PLAYER 1 --------------------------------------------------------------------------------------------------------------------------------------
if(playerNumberAI%2==0 || buttonHold.addEventListener('click', holdfunc) ) {
    BG1.style.backgroundColor = "#f7f7f7";
    BG2.style.backgroundColor = "#fff";
    Player1.style.color = "#656565";
    pointp1.style.visibility = "visible";
    resultemp1id.style.color = "#ddabb5";
    Player2.style.color = "#c6c6c6";
    pointp2.style.visibility = "hidden";
    resultemp2id.style.color = '#e7abbb'; 
}
else{
   // console.log("le nombre est impaire")
    BG1.style.backgroundColor = "#fff";
    BG2.style.backgroundColor = "#f7f7f7";
    Player1.style.color = "#c6c6c6";
    pointp1.style.visibility = "hidden";
    resultemp1id.style.color = "#e7abbb";
    Player2.style.color = "#656565";
    pointp2.style.visibility = "visible";
    resultemp2id.style.color = '#ddabb5';
}
//END-------------------------------------------------------------------------------------------------------------------------------------------
}

let hold1corrent = document.getElementById('hold1corrent')
const current1 = 0
const current2 = 0

const holdfunc = function() {
  
if(playerNumberAI%2==0) {
    //player1    
    const g = document.getElementById('resultemp1id')
    const h = resultemp1id.textContent
    var countcurrent1 = scoreCurrent1Calcul.push(parseInt(h, 10))
    const reducer = (accumulator, curr) => accumulator + curr;
    console.log(scoreCurrent1Calcul.reduce(reducer));
    player1current = scoreCurrent1Calcul.reduce(reducer)
    console.log(parseInt(h, 10));
    hold1corrent.textContent = `${scoreCurrent1Calcul.reduce(reducer)}`;
}



if(playerNumberAI%2!==0) {
    //player2 
    console.log("p2")
    const k  = document.getElementById('resultemp2')
    const o = resultemp2.textContent
    var countcurrent2 = scoreCurrent2Calcul.push(parseInt(o, 10))
    const reducer = (accumulator, curr) => accumulator + curr;
    console.log(scoreCurrent2Calcul.reduce(reducer));
    player2current = scoreCurrent2Calcul.reduce(reducer)
    console.log(parseInt(o, 10));
    hold2corrent.textContent = `${scoreCurrent2Calcul.reduce(reducer)}`;
}
playerNumberAI = playerNumberAI + 1;

if(player2current >= 100) {
    window.alert("LE JOUEUR 2 A GAGNER");
}
if(player1current >= 100) {
    window.alert("LE JOUEUR 1 A GAGNER");
}

}



const buttonHold = document.getElementById('bouton-hold')
buttonHold.addEventListener('click', holdfunc)


const buttonRoll = document.getElementById('bouton-roll')
buttonRoll.addEventListener('click', ClickButton)
