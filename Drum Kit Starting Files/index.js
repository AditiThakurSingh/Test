
// for(var i=0;i<document.querySelectorAll(".drum").length;i++){

// document.querySelectorAll("button")[i].addEventListener("click",response)
// }
// function response(){
//     alert("I got clicked")
// }

// or

var a= document.querySelectorAll(".drum").length

for(var i=0;i<a;i++){

    document.querySelectorAll("button")[i].addEventListener("click",function (){
        // var audio = new Audio('sounds/crash.mp3');
        // always mention folder name with a '/' before putting the sound file or image
// audio.play();
// console.log(this);
// this.style.color= "white"
var buttoninnerHTML= this.innerHTML
    switch ( buttoninnerHTML) {
        case 'w':
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        
        case 'a':
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
           break; 

        case 's':
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
           break;
           
           case 'd':
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;      
    
            case 'j':
                var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
            break;

            case 'k':
                var tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
                break;
                
            case 'l':
                var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
                break;  
                 
                 
        default:
            console.log(buttoninnerHTML)
            break;
    }
    })
    }
    document.addEventListener('keypress',function(event){
        console.log(event)
        console.log(event.key)
        var key= event.key

        switch (key) {
            case "w":
                var crash = new Audio('sounds/crash.mp3');
                crash.play();
                break;
            
            case 'a':
                var kick = new Audio('sounds/kick-bass.mp3');
                kick.play();
               break; 
    
            case 's':
                var snare = new Audio('sounds/snare.mp3');
                snare.play();
               break;
               
               case 'd':
                var tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
                break;      
        
                case 'j':
                    var tom2 = new Audio('sounds/tom-2.mp3');
                    tom2.play();
                break;
    
                case 'k':
                    var tom3 = new Audio('sounds/tom-3.mp3');
                    tom3.play();
                    break;
                    
                case 'l':
                    var tom4 = new Audio('sounds/tom-4.mp3');
                    tom4.play();
                    break;  
                     
                     
            default:
                console.log(key)
                break;
        }
    })