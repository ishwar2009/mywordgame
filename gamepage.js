player1name=localStorage.getItem("player 1 name");
player2name=localStorage.getItem("player 2 name");

player1score=0;
player2score=0;
document.getElementById("player1name").innerHTML=player1name +": ";
document.getElementById("player2name").innerHTML=player2name +": ";

document.getElementById("player1score").innerHTML=player1score;
document.getElementById("player2score").innerHTML=player2score;

document.getElementById("playerquestion").innerHTML="Question turn : "+ player1name;
document.getElementById("playeranswer").innerHTML="Answer turn : "+ player2name;

function sendword(){
    getword=document.getElementById("typeinput").value;
    word=getword.toLowerCase();
    console.log(word);

    Charat1=word.charAt(1);
    console.log(Charat1);

    length=Math.floor(word.length/2);
    charat2=word.charAt(length)
    console.log(charat2)

    lengthminus1=word.length-1;
    charat3=word.charAt(lengthminus1);
    console.log(charat3);

    removecharat1=word.replace(Charat1,"_");
    removecharat2=removecharat1.replace(charat2,"_");
    removecharat3=removecharat2.replace(charat3,"_");
    console.log(removecharat3);

    question="<h4 id='word_display'>Q."+removecharat3+"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>"; 
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"; 
    row = question + input_box + check_button ; 
    document.getElementById("output").innerHTML = row; 
    document.getElementById("typeinput").value = "";

}
var questionturn = "player1";
var answerturn = "player2";

function check() {
    getanswer=document.getElementById("input_check_box").value;
    answer=getanswer.toLowerCase();
    console.log(answer)

    if(answer==word)
    {
        if(answerturn=="player1")
        {
            player1score=player1score+1;
            document.getElementById("player1score").innerHTML=player1score
        }
        else{
            player2score=player2score+1;
            document.getElementById("player2score").innerHTML=player2score;
        }

    }
    if(questionturn=="player1")
    {
        questionturn="player2";
        document.getElementById("playerquestion").innerHTML="Question Turn-"+player2name;

    }
    else{
        questionturn="player1";
        document.getElementById("playerquestion").innerHTML="Question Turn-"+player1name;
    }
    if(answerturn=="player1")
    {
        answerturn="player2";
        document.getElementById("playeranswer").innerHTML="Answer Turn-"+player2name;

    }
    else{
        answerturn="player1";
        document.getElementById("playeranswer").innerHTML="Answer Turn-"+player1name;
    }
    
}
