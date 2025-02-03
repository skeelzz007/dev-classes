 const hexadecimalNumberSystem = [0,1,2,3,4,5,6,7,8,9,"A", "B", "C", "D", "E", "F"]
let cta = document.getElementById("cta")
let reset = document.getElementById("reset")
let firstHexCode = document.getElementById("first-hex-code")
let firstColorBox = document.getElementById("first-color-box")
let SecondHexCode = document.getElementById("second-hex-code")
let SecondColorBox = document.getElementById("second-color-box")
let thirdHexCode = document.getElementById("third-hex-code")
let thirdColorBox = document.getElementById("third-color-box")
let resetColor = "#D9D9D9"
let textResetColor = "#D9D9D9"
let defaultColor = "#000000"


function generateRandomNumber(){
   let randomNumber = Math.floor (Math.random() * hexadecimalNumberSystem.length)
   return randomNumber
}



cta.addEventListener("click" ,function(){
    let hexCodeForFirstBox = "#"
    let hexCodeForSecondBox = "#"
    let hexCodeForThirdBox = "#"

    for (let x = 0; x < 6; x++) {
      // for first box

       hexCodeForFirstBox += hexadecimalNumberSystem[generateRandomNumber()]

     // for second box

       hexCodeForSecondBox += hexadecimalNumberSystem[generateRandomNumber()]

    // for third box

       hexCodeForThirdBox += hexadecimalNumberSystem[generateRandomNumber()]
          
    }

   
    // for first box
    firstColorBox.style.backgroundColor = hexCodeForFirstBox
    firstHexCode.textContent = hexCodeForFirstBox

    // for second box
    SecondColorBox.style.backgroundColor = hexCodeForSecondBox
    SecondHexCode.textContent = hexCodeForSecondBox

    // for third box
    thirdColorBox.style.backgroundColor = hexCodeForThirdBox
    thirdHexCode.textContent = hexCodeForThirdBox
})


reset.addEventListener("click", function() {
   

   // for first box
   firstColorBox.style.backgroundColor = resetColor
   firstHexCode.textContent = textResetColor
   firstHexCode.style.color = defaultColor
   // for second box

   SecondColorBox.style.backgroundColor = resetColor
   SecondHexCode.textContent = textResetColor
   SecondHexCode.style.color = defaultColor
  // for third box

  thirdColorBox.style.backgroundColor = resetColor
  thirdHexCode.textContent = textResetColor
  thirdHexCode.style.color = defaultColor

  }

 
);
