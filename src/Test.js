var text= ""
for(var i = 1; i<=4 ; i++){
     for(var j = 1; j<=4-i ; j++){
          text += " "
     }
     text += String(i)
   
          text += "*".repeat(2*(i-1))
     
     text += String(i)
     for(var j = 1; j<=4-i ; j++){
          text += " "
     }
     text += "\n"
}
for(var i = 3; i>0 ; i--){
     for(var j = 1; j<=4-i ; j++){
          text += " "
     }
     text += String(i)
   
          text += "*".repeat(2*(i-1))
     
     text += String(i)
     for(var j = 1; j<=4-i ; j++){
          text += " "
     }
     text += "\n"
}
console.log(text)