const lengthSlider = document.querySelector(".pass-length input"),
options = document.querySelectorAll(".option input"),
passwordInput = document.querySelector(".input-box input"),
generateBtn =document.querySelector(".generate-btn");
const characters={
    lowercase:"abcdefghijklmnopqrstuvwxyz",
    uppercase:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    number:"0987654321",
    symbols:"~!@#$%^&*()_+=-{}[]:;',./<>?/",

}
const generatePassword =()=>{
    let staticPassword="",
    randomPassword ="",
    excludeDuplicate=false,
    passLength=lengthSlider.value;
    options.forEach(option=>{ // looping through each options checkbox
        if(option.checked){ // if checkbox is checked
        //     console.log(option);
        //if check id isnot exc-duplicates && spaces
               if (option.id!=="exc-duplicates" && option.id!=="spaces"){
             //adding particular key value from character object to static password
            staticPassword +=  characters[option.id];
        }
       else if(option.id==="spaces"){//if id is spaces
        staticPassword += `${staticPassword}`;//adding spaces
       }
       else{ //else pass true value to excludeDuplicate 
        excludeDuplicate=true;
       }
        
        }
    })
    // console.log(staticPassword);
    for(let i =0 ; i< passLength;i++){
        let randomChar = staticPassword[Math.floor(Math.random()*staticPassword.length)];
        if(excludeDuplicate){
            !randomPassword.includes(randomChar) || randomChar == " "? randomPassword += randomChar: i--;
        }
        else{
            randomPassword+=randomChar;
        }
     }
    // console.log(randomPassword);
    passwordInput.value  = randomPassword;
    
    
}
const updateSlider =()=>{
    document.querySelector(".pass-length span").innerText=(lengthSlider.value);
     
}
updateSlider();
generatePassword();

lengthSlider.addEventListener("input", updateSlider);
generateBtn.addEventListener("click",generatePassword);