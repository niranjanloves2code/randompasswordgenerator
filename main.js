const passwordBox = document.getElementById('password')
const length = 12;

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const loweCase = 'abcdefghijklmnopqrstuvwxyz'
const number = '0123456789'
const symbol = "'@#$%^&*()_+~`|{}[]<>?/+-*/='"
const allchars = upperCase + loweCase + number + symbol

function createPassword(){
    let password = ''
    password += upperCase[Math.floor(Math.random() * upperCase.length)]
    password += loweCase[Math.floor(Math.random() * loweCase.length)]
    password += number[Math.floor(Math.random() * number.length)]
    password += symbol[Math.floor(Math.random() * symbol.length)]

    while(length > password.length){
     password += allchars[Math.floor(Math.random() * allchars.length)]
    }
    passwordBox.value = password
}

// function copyPassword(){
//     const pbBox = passwordBox.select()
//     const clipBoardApi = navigator.clipboard.writeText(pbBox)
//     console.log(clipBoardApi)
//     // clipBoardApi(pbBox)
//     // console.log(pbBox)
    
// }

function copyPassword(){
    passwordBox.select()
    document.execCommand( 'copy')
}