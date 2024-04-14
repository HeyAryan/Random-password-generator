import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'random-password-generator';
  passwordLength:number=30
  // alphabet:boolean = true
  numbers:boolean = false
  symbols:boolean = false
  lowercase:boolean = true
  uppercase:boolean = false
  generatedPassword = ""

  lowerCaseAlphabetList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  upperCaseAlphabetList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  numbersList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  symbolsList = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", ";", ":", "'", "<", ">", ",", ".", "?", "/"]


  generatePassword(){
    this.generatedPassword = "";
    console.log("generate password")
    var passwordPool:any[]= [];
    if(this.numbers){
      passwordPool = passwordPool.concat(this.numbersList)
    }
    console.log(passwordPool)
    if(this.lowercase){
      passwordPool = passwordPool.concat(this.lowerCaseAlphabetList)
    }
    console.log(passwordPool)
    if(this.uppercase){
      passwordPool = passwordPool.concat(this.upperCaseAlphabetList)
    }
    console.log(passwordPool)
    if(this.symbols){
      passwordPool = passwordPool.concat(this.symbolsList)
    }
    console.log(passwordPool)

    for(var i=0; i<this.passwordLength;i++){
      var index = Math.floor(Math.random()*(passwordPool.length))
      console.log(index)
      this.generatedPassword = this.generatedPassword + passwordPool[index]
    }
    console.log(this.generatedPassword)
  }
}
