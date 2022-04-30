const generatePassword = document.getElementById("generate-password")
const suggestionTexts = document.querySelectorAll(".pwd-suggestion")
const pwdLength = document.getElementById('passlength')
let pwd = ''

generatePassword.addEventListener("click", passwordFunction)


function generateP() {
    let pass= ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 
       'abcdefghijklmnopqrstuvwxyz0123456789@#$';
       for (let i = 1; i <= pwdLength.value; i++) {
        var char = Math.floor(Math.random()
                    * str.length + 1);          
        pass += str.charAt(char)
    }     
    pwd = pass     
}


function passwordFunction(){
    suggestionTexts.forEach(item => {
        item.innerHTML = ''
        item.style.backgroundColor = "#273549";
        item.style.color = "#55f991"
        generateP()
        item.innerHTML = pwd
        }
    )
}

// var el_down = document.getElementById("geeks");
  
        /* Function to generate combination of password */

  
        // function gfg_Run() {
        //     el_down.innerHTML = generateP();
        // }