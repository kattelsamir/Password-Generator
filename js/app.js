//Initializing variable
let passLen = document.querySelector('#input-pass-len');
let passText = document.querySelector('.pass-text');
let generateBtn = document.querySelector('.generate-btn');
let normalText = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let capitalText = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let symbolText = ['!', '@', '#', '$', '%', '^', '&'];
let numberText = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let passArea = document.querySelector(".pass-area");
let checkBoxes = document.querySelectorAll('.checkbox');
let passType =[];
let copyButton = document.querySelector(".copy-btn");
let copiedButton = document.querySelector(".copied-btn")

//To know what type of password the user requires
for(let checkBox of checkBoxes){
    checkBox.addEventListener('click',function(){
        if(this.checked == true){
          passType.push(this.value);
        }
        else{
            var index = passType.indexOf(this.value);
            if (index > -1) {
              passType.splice(index, 1);
            }
        }
    })
}

//Adding event listeners and functions 
generateBtn.addEventListener('click', function () {
    copyButton.style.display='block';
    copiedButton.style.display='none';
    passArea.style.display = 'flex';
    let pass = [];
    text=normalText;
    if(passType.includes('capital')){
        text=text.concat(capitalText);
    }
    if(passType.includes('numbers')){
        text=text.concat(numberText);
    }
    if(passType.includes('symbols')){
        text=text.concat(symbolText);
    }
    while (pass.length < passLen.value) {
        pass.push(text[Math.floor(Math.random() * text.length)])
    }

    passText.innerText = pass.join("");
})

//Making the copy button green when clicked
copyButton.addEventListener('click',()=>
{
    console.log('hi');
    copyButton.style.display='none';
    copiedButton.style.display='block';
    navigator.clipboard.writeText(passText.innerText);
})
