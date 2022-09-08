let Letra = ""
let Mensaje = "AREQUIPE"
basic.forever(function () {
    for (let index = 0; index <= Mensaje.length; index++) {
        Letra = Mensaje.substr(index, 1)
        basic.showString(Letra)
        if (Letra == "A") {
            basic.showString(".-")
        } else if (Letra == "B") {
            basic.showString("-...")
        } else if (Letra == "C") {
            basic.showString("-.-.")
        } else if (Letra == "D") {
            basic.showString("-..")
        } else if (Letra == "E") {
            basic.showString(".")
        } else if (Letra == "F") {
            basic.showString("..-.")
        } else if (Letra == "G") {
            basic.showString("--.")
        } else if (Letra == "H") {
            basic.showString("....")
        } else if (Letra == "I") {
            basic.showString("..")
        } else if (Letra == "J") {
            basic.showString(".---")
        } else if (Letra == "K") {
            basic.showString("-.-")
        } else if (Letra == "L") {
            basic.showString(".-..")
        } else if (Letra == "M") {
            basic.showString("--")
        } else if (Letra == "N") {
            basic.showString("-.")
        } else if (Letra == "O") {
            basic.showString("---")
        } else if (Letra == "P") {
            basic.showString(".--.")
        } else if (Letra == "Q") {
            basic.showString("--.-")
        } else if (Letra == "R") {
            basic.showString(".-.")
        } else if (Letra == "S") {
            basic.showString("...")
        } else if (Letra == "T") {
            basic.showString("-")
        } else if (Letra == "U") {
            basic.showString("..-")
        } else if (Letra == "V") {
            basic.showString("...-")
        } else if (Letra == "W") {
            basic.showString(".--")
        } else if (Letra == "X") {
            basic.showString("-..-")
        } else if (Letra == "Y") {
            basic.showString("-.--")
        } else if (Letra == "Z") {
            basic.showString("--.")
        } else if (Letra == "0") {
            basic.showString("-----")
        } else if (Letra == "1") {
            basic.showString(".----")
        } else if (Letra == "2") {
            basic.showString("..---")
        } else if (Letra == "3") {
            basic.showString("...--")
        } else if (Letra == "4") {
            basic.showString("....-")
        } else if (Letra == "5") {
            basic.showString(".....")
        } else if (Letra == "6") {
            basic.showString("-....")
        } else if (Letra == "7") {
            basic.showString("--...")
        } else if (Letra == "8") {
            basic.showString("---..")
        } else if (Letra == "9") {
            basic.showString("----.")
        }
    }
})
