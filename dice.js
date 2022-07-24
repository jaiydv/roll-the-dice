
function roll(){
        var dice1 = Math.floor(Math.random() * 6)+1;
        var dice2 = Math.floor(Math.random() * 6)+1;

        var dice1image = "images/dice"+ dice1 + ".png";
        var dice2image = "images/dice"+ dice2 +".png";

        document.querySelectorAll("img")[0].setAttribute("src",dice1image);
        document.querySelectorAll("img")[1].setAttribute("src",dice2image);


        if (dice1> dice2 ){
            var winner = document.getElementsByClassName("player")[0].innerHTML
            document.querySelector("h1").innerHTML = winner +" wins";

        }

        else if (dice2> dice1 ){
            var winner = document.getElementsByClassName("player")[1].innerHTML
            document.querySelector("h1").innerHTML = winner +" wins";
        }
        else{
        document.querySelector("h1").innerHTML = "draw";

        }

    };
function enter(ind){
    var name1 =prompt("enter player name");
    document.getElementsByClassName("player")[ind].innerHTML=name1;
}