// pick random number from 1 to 20
function generateRandom(){
    return Math.floor((Math.random() * 20) + 1)
}
let computerRandom  = generateRandom();

// defining other variables
const msg = document.querySelector(".msg");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");
const body = document.querySelector("body");
const value = document.querySelector(".value")
const again = document.querySelector(".again");
const input = document.querySelector(".input")


// picking user number from input and compare
document.querySelector(".check").addEventListener("click", () => {
    const userRandom = Number(document.querySelector("input").value);


    if(userRandom === 0){     
        msg.innerHTML = "⛔ No Number";
    }
    else if(userRandom > 20 || userRandom < 0){
        
        Swal.fire({
            title: "Error!",
            text: "Invalid number",
            icon: "error",
            customClass:{
                title: "swal-title",
                htmlContainer: "swal-content"
            }
        })
    }
    else{
        if(userRandom === computerRandom){
            success();
         }else{
             failed();
         }
    }


    

   
    function success(){
        msg.innerHTML = "👍 Corrent Number!";

        if(Number(score.innerHTML) > Number(highscore.innerHTML)) {
            highscore.innerHTML = score.innerHTML;
        }
        body.classList.add("correct");
        input.classList.add("correct")
        value.innerHTML = computerRandom.toString();
    }
    
    function failed(){

        if(computerRandom < userRandom){
            msg.innerHTML = "📈 too high!"
        }else{
            msg.innerHTML = "📉 too low!"
        }

        let counter = Number(score.innerHTML);
        
        

        if(counter <= 0) {
            Swal.fire({
                title: "Failed",
                icon: "info",
                text: "Game over, try again!",
                customClass:{
                    title: "swal-title",
                    htmlContainer: "swal-content"
                }
            })
        }else{
            counter --;
        }
        

        score.innerHTML = counter;
        body.classList.remove("correct")
        input.classList.remove("correct")
        value.innerHTML = "?"

    }
    
});

again.addEventListener("click", () => {
    value.innerHTML = "?";
    score.innerHTML = "20";
    msg.innerHTML = "Start guessing ...";
    input.value = "";
    body.classList.remove("correct")
    input.classList.remove("correct")
    computerRandom = generateRandom() // generate new Random
    
})


