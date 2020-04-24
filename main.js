function startGame(){
    document.turn="X";
    document.winner= null;
    setMessage(document.turn + "gets to start")

}

function setMessage(msg){
document.getElementById("message").innerHTML = msg;
}


function nextMove(Square){
    if (document.winner != null)
    {
        setMessage(document.turn   + "aleready won!!")
    }
    else if(Square.innerText == '') 
    {
    Square.innerText = document.turn;
    switchturn();
    }
    else
    {
        setMessage("Try another square!!!!!!");
    }


}



function switchturn(){
    if(checkForWinner(document.turn))
    {
        setMessage("congrats" + document.turn +"you won!!")
        document.winner = documnet.turn;
    }
    else if(document.turn == "X")
    {
        document.turn = "O"
        setMessage("Its"+ document.turn +"'s turn");

    }
    else
    {
        document.turn = "X";
        setMessage("Its"+ document.turn +"'s turn");
    }


}


function checkForWinner(move)
{
        var result = false;
        if (checkRow(1, 2, 3, move) ||
        checkRow(4, 5, 6, move) ||
        checkRow(7, 8, 9, move) ||
        checkRow(1, 4, 7, move) ||
        checkRow(2, 5, 8, move) ||
        checkRow(3, 6, 9, move) ||
        checkRow(1, 5, 9, move) ||
        checkRow(3, 5, 7, move) )
        {
            result = true;
        }
            return result;
}


function checkRow(a,b,c,move)
{
    var result = false;
    if(getBox(a) == move && getBox(b) == move && getBox(c) == move)
    {
        result = true;
    }
    return result;

}

function getBox(number)
    {
        return document.getElementById("s" + number).innerText;
    }