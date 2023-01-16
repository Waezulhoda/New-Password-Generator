let password_el=document.querySelector(".password")
let length_el=document.querySelector("#length")
let capital_checkBox=document.querySelector('#capital')
let small_checkBox=document.querySelector('#small')
let number_checkBox=document.querySelector('#number')
let symbol_checkBox=document.querySelector('#symbol')
let passH3 = document.querySelector(".pass-h3")
let copyBtn = document.querySelector(".copy")
let image = document.querySelector(".password-img")
let image2 = document.querySelector(".password-img2")
let image3 = document.querySelector(".password-img3")
let image4 = document.querySelector(".password-img4")
let image5 = document.querySelector(".password-img5")
let copied = document.querySelector(".copied")
let refreshButton = document.querySelector(".reload")

let lastCharType=[]
const checkBox={
    "capital":true,
    "small":true,
    "number":true,
    "symbol":false
}

const characters={
    "capital":["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],

    "small":["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],

    "number":["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],

    "symbol":["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
}

const numOfCharacter={
    "capital":26,
    "small":26,
    "number":10,
    "symbol":29
}

const typeOfCharacter=["capital","small","number","symbol"]


let totalFalse=1

let passwordLength=8

function randomChar(){
    return Math.floor(Math.random()*4)
}

function generatePassword(){
    console.log(checkBox)
    let password=''
    console.log(totalFalse)
    for(let i=0;i<passwordLength;i++){
        let row=false
        if (totalFalse==4){
            chr='capital'
            capital_checkBox.checked=true
            
        }else{
            while (row==false){
                chr=typeOfCharacter[randomChar()] //capital small number symbol
                row=checkBox[chr] //true false
            }
        }

        index=Math.floor(Math.random()*(numOfCharacter[chr]))
        password+=characters[chr][index]
    }
    if (totalFalse==4){
        totalFalse-=1
        checkBox['capital']=true
    }
    password_el.textContent=password
    copied.style.opacity=0
    passwordStrength()
    buttonRefresh()
   
}
function buttonRefresh(){
    refreshButton.style.transform = "rotate(-360deg)"
    refreshButton.style.transition = "transform 1s ease-in-out"
}

function passwordStrength(){
    if (passwordLength>=1 && passwordLength<=4){
        passH3.textContent = "VERY WEAK"
        passH3.style.backgroundColor = "#d93511"
        image4.style.position = "absolute"
        image4.style.left = "3rem"
        image4.style.transition = "all 1s ease-in-out"
        image5.style.left = "-40rem"

    }else if(passwordLength>=5 && passwordLength<=7){
        passH3.textContent = "WEAK"
        passH3.backgroundColor = "#d93511"
        image5.style.position = "absolute"
        image5.style.left = "3rem"
        image5.style.transition = "all 1s ease-in-out"
        image4.style.left = "-40rem"
        image.style.left = "-40rem"

    }else if (passwordLength>=8 && passwordLength<=9){
        passH3.textContent = "GOOD"
        passH3.style.backgroundColor = "#f1c80b"
        image.style.position = "absolute"
        image.style.left = "3rem"
        image.style.transition = "all 1s ease-in-out"
        image5.style.left = "-40rem"
        image2.style.left = "-40rem"

    }else if (passwordLength>=10 && passwordLength<=11){
        passH3.textContent = "STRONG"
        passH3.style.backgroundColor = "#007bff"
        image2.style.position = "absolute"
        image2.style.left = "3rem"
        image2.style.transition = "all 1s ease-in-out"
        image3.style.left = "-40rem"
        image.style.left = "-40rem"
       
    }else{
        passH3.textContent = "VERY STRONG"
        passH3.style.backgroundColor = "#007bff"
        image3.style.position = "absolute"
        image3.style.left = "3rem"
        image3.style.transition = "all 1s ease-in-out"
        image2.style.left = "-40rem"
        
    }

}

function fade(){
    copied.style.transition='0.8';
    copied.style.opacity=0
};

function hideCopied(){
    setTimeout(() => {
        copied.style.transition='0.8';
        copied.style.opacity=0
        fade()
    }, 1000);
}

function copyPassWord(){
    let text = password_el.innerHTML;
    const copyContent = async()=>{
        try{
            await navigator.clipboard.writeText(text);
            console.log(`content copied clipboard`);
        }catch(err){
            console.error(`Failed to copy:err`);
        }
    }
    copied.style.transition='0.8';
    copied.style.opacity = 1
    copyContent()
    hideCopied()
}



function handlePlus(){
    if(passwordLength>=20){
        return
    }
    passwordLength+=1
    generatePassword()
    length_el.textContent=passwordLength
}

function handleMinus(){
    if (passwordLength<=1){
        return
    }
    passwordLength-=1
    generatePassword()
    length_el.textContent=passwordLength
}

function handleCapital(){
    if (capital_checkBox.checked==false){
        totalFalse+=1
    }else{
        totalFalse-=1
    }
    checkBox['capital']=capital_checkBox.checked

    generatePassword()
    
}

function handleSmall(){
    if (small_checkBox.checked==false){
        totalFalse+=1
    }else{
        totalFalse-=1
    }
    checkBox['small']=small_checkBox.checked
    generatePassword()
   
}

function handleNumber(){
    if (number_checkBox.checked==false){
        totalFalse+=1
    }else{
        totalFalse-=1
    }
    checkBox['number']=number_checkBox.checked
    generatePassword()
    
}

function handleSymbol(){
    if (symbol_checkBox.checked==false){
        totalFalse+=1
    }else{
        totalFalse-=1
    }
    checkBox['symbol']=symbol_checkBox.checked
    generatePassword()
   
}


password=generatePassword()

