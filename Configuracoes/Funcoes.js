//Variables -----------------------------------------------------------------------------------------------------------------------------------
var chosenPawn = ""; //Formula: "ColorPawn"
var currentScreen = "";
var hasPlayed = false;
var DiceNumber = 0; //Represents the number obtained from rolling the dice
var currentPawnPlaying = ""; //represents whose turn is it
var PlayingOrder = []; //represents the order that each player msut follow per turn. Each value is the name (id) of a pawn.

var QuestionCardIsFilledIn = false; //checked true if the question card has been filled by the system (not the player)
var AnswerSubmitted = false; //checked true if the answer has been submitted. Prevents player from pressing the button twice or more times; (PlayingScreen / Question Card) 
var questionNum = 0; //the current question being shown
var AIquestionAppeared = false; //if the AI's question has appeared to it
//var PawnsTurn = ""; //Represents the current round/turn. May refer to the player as chosenPawn or any other AI

//Question Declarations
var Questions =
{
    //q (question) + number
    q1:
    {
        image: "https://www.infoescola.com/wp-content/uploads/2007/11/astecas-templo-maior_1177079476.jpg", //url of demonstrative image
        text: "A sociedade asteca era hierarquizada e rigidamente dividida. Era comandada por um imperador, chefe do ex&eacute;rcito. A sociedade asteca possu&iacute;a tr&ecirc;s cidades-estados, os nomes dessas cidades-estados eram&#58;", //the question itself
        opt1: "Ilmatecuhtli, Texcotlan e Tlacoppan", //option 1
        opt2: "Tezcatlipoca, Acapulco Texcoco", //option 2
        opt3: "Tenochtitlan, Texcoco e Tlacopan", //option 3
        opt4: "X&oacute;lot, Tenochttitlan e Quintana Roo", //option 4
        rightOpt: 3 //right option
    },
    q2:
    {
        image: "https://st2.depositphotos.com/1395980/6128/i/450/depositphotos_61283643-stock-photo-detail-of-the-temple-of.jpg", //url of demonstrative image
        text: "O deus Quetzalcóatl, era representado no formato de Pássaro com corpo humano era o principal deus da religi&atilde;o asteca. Esse deus representava&#58;", //the question itself
        opt1: "A vida, a vegeta&ccedil;&atilde;o, os alimentos e a for&ccedil;a espiritual existente nos indiv&iacute;duos. Tamb&eacute;m representava o planeta V&ecirc;nus", //option 1
        opt2: "O fogo e do calor. Representado pelo Sol", //option 3
        opt3: "Representava as chuvas, detinha o poder de produzir os rel&acirc;mpagos e trov&otilde;es. Era muito temido, pois tamb&eacute;m representava algumas doen&ccedil;as", //option 2
        opt4: "Representava a fertilidade", //option 4
        rightOpt: 1 //right option
    },
    q3:
    {
        image: "https://conteudo.imguol.com.br/c/entretenimento/35/2021/08/22/ilustracao-mostra-a-praca-central-e-o-templo-maior-no-seculo-16-hernan-cortes-descreveu-tenochtitlan-como-a-cidade-dos-palacios-1629667534342_v2_900x506.png.webp", //url of demonstrative image
        text: "No passado, os Astecas possuíam sua capital na Mesoam&eacute;rica, ela foi construída onde hoje se localiza qual cidade do México?", //the question itself
        opt1: "Puebla", //option 1
        opt2: "Ciudade de México", //option 2
        opt3: "Cuatula", //option 3
        opt4: "Xonacatlán", //option 4
        rightOpt: 2 //right option
    },
    q4:
    {
        image: "https://cdn.idntimes.com/content-images/community/2019/07/aztec-human-sacrifice-hero-353fee89cfa8909c4cf634c227df62df.jpg", //url of demonstrative image
        text: "Antigamente os Astecas realizavam sacrifícios humanos por que acreditavam que:", //the question itself
        opt1: "Era vital para que seus filhos nascessem", //option 1
        opt2: "Era vital para que contínuasse chovendo", //option 2
        opt3: "Era vital para o funcionamento da lua", //option 3
        opt4: "Era vital para o funcionamento do sol", //option 4
        rightOpt: 4 //right option
    },
    q5:
    {
        image: "https://cdnb.artstation.com/p/assets/images/images/046/203/249/large/gabriel-barisonzi-aztecahuitzilopochtli.jpg?1644528267", //url of demonstrative image
        text: "Segundo as lenas Astecas, eles teriam migrado de Aztlán até suas últimas três cidades e foram guiados por um deus, que deus era esse?", //the question itself
        opt1: "Quetzalcóatl", //option 1
        opt2: "Huitzilopochtli", //option 2
        opt3: "Centeotl", //option 3
        opt4: "Ometeotl", //option 4
        rightOpt: 2 //right option
    },
    q6:
    {
        image: "https://static.historiadomundo.com.br/conteudo/images/a-civilizacao-asteca-ruiu-sob-ofensiva-hernan-cortez-conquistador-espanhol-54c13325be810.jpg", //url of demonstrative image
        text: "Os Astecas acreditavam que existia uma ligação entre todos os seres do mundo com as forças do mundo espiritual, eles diziam que tudo que existia emanava essa ligação, que era chamada de:", //the question itself
        opt1: "teotl", //option 1
        opt2: "chinampa", //option 2
        opt3: "azcapotzalco", //option 3
        opt4: "xiuhpohualli", //option 4
        rightOpt: 1 //right option
    },
    q7:
    {
        image: "https://www.infoescola.com/wp-content/uploads/2010/02/conquista-asteca.jpg", //url of demonstrative image
        text: "Quem dominou os povos astecas foram:", //the question itself
        opt1: "Os Portuguêses", //option 1
        opt2: "Os Alemães", //option 3
        opt3: "Os Espanhóis", //option 2
        opt4: "Os Italianos", //option 4
        rightOpt: 3 //right option
    },
    q8:
    {
        image: "https://s1.static.brasilescola.uol.com.br/img/2018/11/deuses-astecas.jpg", //url of demonstrative image
        text: "A religião dos astecas, era:", //the question itself
        opt1: "O Cristianismo", //option 1
        opt2: "Politeísta", //option 2
        opt3: "O Islamismo ", //option 3
        opt4: "O Judaísmo", //option 4
        rightOpt: 2 //right option
    },
    q9:
    {
        image: "https://cdn.hipercultura.com/imagens/hiper-astecas-7-cke.jpg", //url of demonstrative image
        text: "O que os astecas faziam acreditando ser para o nascimento do sol e para apaziguar o deus Huitzilopochtli?", //the question itself
        opt1: "Oferta de sua colheita", //option 1
        opt2: "Sacrifício animal", //option 2
        opt3: "Plantação em grande quantidade", //option 3
        opt4: "Sacrifício humano", //option 4
        rightOpt: 4 //right option
    },
    q10:
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Murales_Rivera_-_Markt_in_Tlatelolco_3.jpg", //url of demonstrative image
        text: "Dentre as três cidades-estados que a sociedade asteca possuía, a principal delas era:", //the question itself
        opt1: "Tenochtitlan", //option 1
        opt2: "Texcoco", //option 2
        opt3: "Xólot", //option 3
        opt4: "Quintana Roo", //option 4
        rightOpt: 1 //right option
    }
};

//PawnInfo Objects (Formul�rio dos Pe�es)
var PawnInfo =
{
    RedPawn:
    {
        fictionalName: "Pe&atilde;o Vermelho",
        id: "RedPawn",
        class: "pawn",
        position: 0,
        classification: 1,
        color: "#ff3737"
    },
    YellowPawn:
    {
        fictionalName: "Pe&atilde;o Amarelo",
        id: "YellowPawn",
        class: "pawn",
        position: 0,
        classification: 5,
        color: "#f8ff52"
    },
    PurplePawn:
    {
        fictionalName: "Pe&atilde;o Roxo",
        id: "PurplePawn",
        class: "pawn",
        position: 0,
        classification: 2,
        color: "#be32ff"
    },
    BluePawn:
    {
        fictionalName: "Pe&atilde;o Azul",
        id: "BluePawn",
        class: "pawn",
        position: 0,
        classification: 3,
        color: "#3e77ff"
    }
};
//Effect Tiles
var Effect =
{
    E1: 2,
    E2: 1,
    E3: 1,
    E4: 2,
    E5: "start over"
}


//Initial Setup ------------------------------------------------------------------------------------------------------------------------------
//Pre-SetUp (sets the board up)
var lightSub = 0; //used by this section to change gradiant light levels of tiles (do not change value)
for (i = 1; i < 21; i++)
{
    //Creates each tile
    document.getElementById("board").innerHTML += ' <div class="tile" style="grid-area: num' + i + '; background-color: hsl(36, 80%,' + (20 - lightSub) + '%)" id="tile' + i + '">' + i +'</div>';   
    lightSub -= 5;
    
} //Sets up every tile in order, coloring accordingly
function ChooseQuestionTiles()
{

    var questions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var tiles = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    //distribute 10q in 19 spaces randomly using the Fisher-Yates algorithm

    //shuffle tiles
    for (let i = tiles.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i)
        const temp = tiles[i]
        tiles[i] = tiles[j]
        tiles[j] = temp
    }

    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i)
        const temp = questions[i]
        questions[i] = questions[j]
        questions[j] = temp
    }

    for (var k = 0; k < questions.length; k++)
    {
        document.getElementById("tile" + tiles[k]).innerHTML += '<img src="Configuracoes/QuestionTileIcon02.png" class="qTileIcon">';
        document.getElementById("tile" + tiles[k]).className += " Question" + questions[k];
    } 

} //Chooses question tiles and adds to their classes: " Question'NumberOfQuestion' ".
function ChooseEffectTiles()
{
    var EffectsArray = [1, 2, 3, 4, 5]; //selection of Effects
    for (let i = EffectsArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i)
        const temp = EffectsArray[i]
        EffectsArray[i] = EffectsArray[j]
        EffectsArray[j] = temp
    } // shuffles effects

    var NotEmptyTiles = [1];//already taken tiles
    for (var i = 0; i < 10; i++)
    {
        NotEmptyTiles.push(parseInt(document.getElementsByClassName("qTileIcon")[i].parentElement.id.slice(4))); //returns the tile of a question icon
    }

    var EmptyTiles = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]; //empty tiles
    for (var j = 0; j < NotEmptyTiles.length; j++)
    {
       EmptyTiles.splice ( EmptyTiles.indexOf( NotEmptyTiles[j]), 1 );
    }

    for (let i = EmptyTiles.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i)
        const temp = EmptyTiles[i]
        EmptyTiles[i] = EmptyTiles[j]
        EmptyTiles[j] = temp
    } //shuffle empty tiles
    console.log('Empty Tiles: ' + EmptyTiles);

    for (var j = 0; j < EffectsArray.length; j++)
    {
        document.getElementById("tile" + EmptyTiles[j]).className += " Effect" + EffectsArray[j];
        document.getElementById("tile" + EmptyTiles[j]).style.backgroundImage = "radial-gradient(rgba(239, 202, 116, 0.20), rgba(255, 51, 5, 0.70))";
        document.getElementById("tile" + EmptyTiles[j]).style.border = "black 3px dashed";
    } //per effect
    


} //Chooses Effect tiles and adds to their classes " Effect'NumberOfEffect' ".
function RandomizeClassifications()
{
    var AllPawns = document.getElementsByClassName("pawn");
    for (var i = 0; i < 4; i++)
    {
        var RandomNum = parseInt(Math.floor(Math.random() * 6))
        if (RandomNum == 0) { RandomNum = 1; }
        PawnInfo[AllPawns[i].id].classification = RandomNum;
    }
    PawnInfo[chosenPawn].classification = "?";
}




//In Order (Sequence of Events) ----------------------------------------------------------------------------------------------------------------

/*Starts Screen |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
ChangeScreen("SetUpScreen");
var HasPressedButton = false;
function Start()
{
    //Analyses the Pawn chosen -----------------------------------------------------------------------------------------------
    var A_Pawn_Was_Chosen = false;
    if (document.getElementById("YPchosen").checked) { chosenPawn = "YellowPawn"; A_Pawn_Was_Chosen = true; }
    else if (document.getElementById("PPchosen").checked) { chosenPawn = "PurplePawn"; A_Pawn_Was_Chosen = true; }
    else if (document.getElementById("BPchosen").checked) { chosenPawn = "BluePawn"; A_Pawn_Was_Chosen = true; }
    else if ((document.getElementById("RPchosen").checked)) { chosenPawn = "RedPawn"; A_Pawn_Was_Chosen = true; }
    else { document.getElementById("NoPawnSelectedWarning").style.display = 'inline'; }
    if (A_Pawn_Was_Chosen && !HasPressedButton)
    {
        //Starts the game  ------------------------------------------------------------------------------------------------------
        HasPressedButton = true;
        currentPawnPlaying = chosenPawn;
        ChoosePlayingOrder();
        console.log('PlayingOrder[0]: ' + PlayingOrder[0] + '\nPlayingOrder[1]: ' + PlayingOrder[1] + '\nPlayingOrder[2]: ' + PlayingOrder[2] + '\nPlayingOrder[3]: ' + PlayingOrder[3]);
        PawnInfo[chosenPawn].fictionalName = "Voc&ecirc;";
        document.getElementById("SetUpScreen").style.animation = "2s shrink forwards";
        setTimeout(ChangeScreen("PlayingScreen"), 2000);
        document.getElementById("tile1").innerHTML += SummonPawn("RedPawn");
        document.getElementById("tile1").innerHTML += SummonPawn("YellowPawn");
        document.getElementById("tile1").innerHTML += SummonPawn("PurplePawn");
        document.getElementById("tile1").innerHTML += SummonPawn("BluePawn");
        RandomizeClassifications();
        ChooseQuestionTiles();
        ChooseEffectTiles();
    }
}
function ChoosePlayingOrder()
{
    PlayingOrder[0] = chosenPawn;
    for (var i = 0; i < 4; i++)
    {
        if (i == 0) { if (PawnInfo.RedPawn.id != chosenPawn) PlayingOrder.push(PawnInfo.RedPawn.id); }
        else if (i == 1) { if (PawnInfo.BluePawn.id != chosenPawn) PlayingOrder.push(PawnInfo.BluePawn.id); }
        else if (i == 2) { if (PawnInfo.YellowPawn.id != chosenPawn) PlayingOrder.push(PawnInfo.YellowPawn.id); }
        else if (i == 3) { if (PawnInfo.PurplePawn.id != chosenPawn) PlayingOrder.push(PawnInfo.PurplePawn.id); }
        
    }
}
//   (Dice Rolling) 1st Play - No function




/*General Functions |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
//Change Screen In Right (playable area)
function ChangeScreen(ScreenName)
{
    switch (ScreenName)
    {
        case "SetUpScreen":
            document.getElementById("PlayerStatusBar").style.display = "none";
            document.getElementById("SetUpScreen").style.display = "block";
            document.getElementById("WaitingScreen").style.display = "none";
            document.getElementById("PlayingScreen").style.display = "none";
            currentScreen = "SetUpScreen";
            break;
        case "WaitingScreen":
            document.getElementById("PlayerStatusBar").style.display = "grid";
            document.getElementById("SetUpScreen").style.display = "none";
            document.getElementById("WaitingScreen").style.display = "block";
            document.getElementById("PlayingScreen").style.display = "none";
            currentScreen = "WaitingScreen";
            break;
        case "PlayingScreen":
            document.getElementById("PlayerStatusBar").style.display = "grid";
            document.getElementById("SetUpScreen").style.display = "none";
            document.getElementById("WaitingScreen").style.display = "none";
            document.getElementById("PlayingScreen").style.display = "block";
            currentScreen = "PlayingScreen";
            break;
        default:
            alert("Um erro ocorreu. Por favor, aperte Ctrl + R");        
    }
}
//Resets Variables
function ResetVariables()
{
    //Variables
    LastQuestionByPlayer = "";
    MayActivateClock = false;
    TileTooLongClock = 0;
    hasPlayed = false;
    pastRollingDice = false;
    AIquestionAppeared = false;
    //Environment
    document.getElementById("right").style.backgroundColor = "white";
    document.getElementById("question-card").style.display = "none";
    document.getElementById("AI-Thinking").style.display = "none";
}
//Function Used by ChangeTurn() to reset player-specific variables
function PlayersTurn() {
    document.getElementById("question-card").style.backgroundColor = "#dedede";
    questionNum = 0; //resets the questionNum variable;
    AnswerSubmitted = false;
    QuestionCardIsFilledIn = false; //resets question card;
    document.getElementById("rollTheDice").innerHTML = 'Rode o Dado!';
}
//Change Pawn's Turn Automatically ------> Important
function ChangeTurn()
{
    ResetVariables();
    console.clear();
    switch (currentPawnPlaying)
    {
        //Switch from Player screen to next
        case PlayingOrder[0]:
            ChangeScreen("WaitingScreen");
            currentPawnPlaying = PlayingOrder[1];
            break;

        //Switch from Pawn2 screen to next
        case PlayingOrder[1]:
            ChangeScreen("WaitingScreen");
            currentPawnPlaying = PlayingOrder[2];
            break;

        //Switch from Pawn3 screen to next
        case PlayingOrder[2]:
            ChangeScreen("WaitingScreen");
            currentPawnPlaying = PlayingOrder[3];
            break;

        //Switch from Pawn4 screen to next (player)
        case PlayingOrder[3]:
            ChangeScreen("PlayingScreen");
            currentPawnPlaying = chosenPawn;
            PlayersTurn();
            break;

        default:
            alert("Houve um erro ao mudar a rodada atual.");
    }
}

//Dice
function PlayDice()
{
    if (!hasPlayed)
    {
        hasPlayed = true;
        //Rolls the dice continuously
        RollingDice = setInterval(rollDice, 200);
        //Stops rolling the dice within 3secs
        setTimeout(stopRollingDice, 3000)
    }
}
function stopRollingDice()
{
    clearInterval(RollingDice);

    //Randomizes a number and sets the value of DiceNumber to that value
    var randomNum = 0;
    while (randomNum == 0) randomNum = Math.floor(Math.random() * 7);
    DiceNumber = randomNum;
    document.getElementById("Dice").innerHTML = '<img src="Configuracoes/Dice' + randomNum + '.png" alt="Dice" width="125">';
    console.log("finished rolling: " + DiceNumber);
}
function rollDice()
{
    var randomNum = 0;
    while (randomNum == 0) randomNum = Math.floor(Math.random() * 7);
    document.getElementById("Dice").innerHTML = '<img src="Configuracoes/Dice' + randomNum + '.png" alt="Dice" width="125">';
    console.log("rolled");
}

//Question Card
function AnalyseAnswer() {
    if (!AnswerSubmitted) {
        AnswerSubmitted = true;
        var GotAnswerRight;
        for (var i = 1; i < 5; i++) {
            if (document.getElementById("RadioOpt" + i).checked && Questions['q' + questionNum].rightOpt == i)
            { GotAnswerRight = true; console.log("You got it right!"); }
            if (!GotAnswerRight && i > 3) {
                var GoTo = parseInt(PawnInfo[chosenPawn].position) - 3;
                if (GoTo < 1) { GoTo = 1; }
                console.log("Wrong Option! Go Back to " + GoTo);

                //Checks if the tile the pawn is being sent to is a question tile
                if (document.getElementById("tile" + GoTo).className.includes("Question")) { MayActivateClock = true; }

                RemovePawn(chosenPawn);
                document.getElementById("tile" + GoTo).innerHTML += SummonPawn(chosenPawn);
            }
        }

        if (GotAnswerRight) { document.getElementById("question-card").style.backgroundColor = "#18ff00"; setTimeout(ChangeTurn, 1000);}
        else {
            document.getElementById("question-card").style.backgroundColor = "red";
        }
    }
} //Analyses selected answer when the analyse button is pressed


//Updates every 0.5s (should check for differences)
var UpdateInterval = setInterval(Update, 500);
var FX_MayGoBack = true;
var TileTooLongClock = 0;
var pastRollingDice = false;
var MayActivateClock = false; //allows the system to check for movement even if conditions are not met when it's true
function Update()
{

    //Updates Individual Pawn Info -----------------------------------------------------------------------
    if (currentScreen != "SetUpScreen")
    {
        var AllPawns = document.getElementsByClassName("pawn"); //fetches all pawns
        //Registers positions
        PawnInfo.RedPawn.position = document.getElementById("RedPawn").parentElement.id.slice(4);
        PawnInfo.BluePawn.position = document.getElementById("BluePawn").parentElement.id.slice(4);
        PawnInfo.YellowPawn.position = document.getElementById("YellowPawn").parentElement.id.slice(4);
        PawnInfo.PurplePawn.position = document.getElementById("PurplePawn").parentElement.id.slice(4);
    }
    
    //Updates Status Bar ---------------------------------------------------------------------------------
    if (currentScreen == "PlayingScreen" || currentScreen == "WaitingScreen") {

        //Updates the Status Bar
        document.getElementById("statusBarImage").innerHTML = ' <img src="Configuracoes/' + currentPawnPlaying + '.png" alt="Current Pawn" width="100" style="grid-area: barIcon; width: 10vh !important;">';
        document.getElementById("statusBarInfo").innerHTML = ' <div style="grid-area: nome; margin-left: -40%;"> Nome: ' + PawnInfo[currentPawnPlaying].fictionalName + '</div>';
        document.getElementById("statusBarInfo").innerHTML += ' <div style="grid-area: classificacao; margin-left: -40%;"> Classifica&ccedil;&atilde;o: &diams; ' + PawnInfo[currentPawnPlaying].classification + ' &diams;</div>';
        document.getElementById("statusBarInfo").innerHTML += ' <div style="grid-area: posicao; margin-left: -40%;"> Posi&ccedil;&atilde;o Atual: ' + PawnInfo[currentPawnPlaying].position + '</div>';

    }

    //Updates the pawns' movement and Controls Event Tiles
    if (currentScreen == "PlayingScreen" || currentScreen == "WaitingScreen")
    {
        //Moves the pawn to (its position + dice num)
        if (DiceNumber != 0) {

            var FinalPosition = parseInt(PawnInfo[currentPawnPlaying].position) + parseInt(DiceNumber);
            if (FinalPosition >= 20) {
                document.getElementById("tile20").innerHTML += SummonPawn(currentPawnPlaying);
                RemovePawn(currentPawnPlaying);
                EndGame();
            }
            else { 
            //Moving
            console.log('Final Position of ' + currentPawnPlaying + ' is: ' + FinalPosition);
            document.getElementById("tile" + FinalPosition).innerHTML += SummonPawn(currentPawnPlaying);
            RemovePawn(currentPawnPlaying);

            //Adapting Variables
            TileTooLongClock = 0; //resets clock on movement
            DiceNumber = 0; //resets dice num
            pastRollingDice = true;
            }
        }

        //Triggers question panel (triggered when the dice is rolled, it's the player's turn, and the tile is a Question Tile)
        if (document.getElementById(chosenPawn).parentElement.className.includes("Question") && !QuestionCardIsFilledIn && currentScreen == "PlayingScreen" && pastRollingDice) {
            QuestionCardIsFilledIn = true;
            //returns the number of the question
            questionNum = document.getElementById(chosenPawn).parentElement.className.slice(13);
            LastQuestionByPlayer = questionNum;

            //Enable question card
            document.getElementById("question-card").style.display = "block";
            console.log('QuestionNum: ' + questionNum);
            //Fill in the question
            document.getElementById("text").innerHTML = Questions['q' + questionNum].text;
            document.getElementById("image").src = Questions['q' + questionNum].image;
            document.getElementById("opt1").innerHTML = '<input type="radio" name="option" class="InputRadio" id="RadioOpt1"> ' + Questions['q' + questionNum].opt1;
            document.getElementById("opt2").innerHTML = '<input type="radio" name="option" class="InputRadio" id="RadioOpt2"> ' + Questions['q' + questionNum].opt2;
            document.getElementById("opt3").innerHTML = '<input type="radio" name="option" class="InputRadio" id="RadioOpt3"> ' + Questions['q' + questionNum].opt3;
            document.getElementById("opt4").innerHTML = '<input type="radio" name="option" class="InputRadio" id="RadioOpt4"> ' + Questions['q' + questionNum].opt4;
        }
        else if (document.getElementById(chosenPawn).parentElement.className.includes("Question") && QuestionCardIsFilledIn && currentScreen == "PlayingScreen" && pastRollingDice && !LastQuestionByPlayer)
        {
            ChangeTurn();
        }

        //If a pawn ends in a Effect tile
        else if (document.getElementById("tile" + PawnInfo[currentPawnPlaying].position).className.includes("Effect") && FX_MayGoBack) {
            TileTooLongClock = 0;
            FX_MayGoBack = false;
            var NumOfEffect = document.getElementById("tile" + PawnInfo[currentPawnPlaying].position).className.slice(11);

            console.log("Effect number is: " + NumOfEffect)//check for effect number
            var GoTo = 1;
            if (NumOfEffect == 5) GoTo = 1;
            if (NumOfEffect == 1) { GoTo = PawnInfo[currentPawnPlaying].position - Effect.E1; console.log('Effect: Go ' + Effect.E1); }
            if (NumOfEffect == 2) { GoTo = PawnInfo[currentPawnPlaying].position - Effect.E2; console.log('Effect: Go ' + Effect.E2); }
            if (NumOfEffect == 3) { GoTo = PawnInfo[currentPawnPlaying].position - Effect.E3; console.log('Effect: Go ' + Effect.E3); }
            if (NumOfEffect == 4) { GoTo = PawnInfo[currentPawnPlaying].position - Effect.E4; console.log('Effect: Go ' + Effect.E4); }
            if (GoTo < 1) { GoTo = 1; }
            if (document.getElementById("tile" + GoTo).className.includes("Question")) { MayActivateClock = true; }

            document.getElementById("EffectMessage").style.display = "inline";
            document.getElementById("EffectMessage").innerHTML = "Aiii! " + PawnInfo[currentPawnPlaying].fictionalName + ", volte para a casa " + GoTo + "!";
            setTimeout(function GoTime() {
                document.getElementById("EffectMessage").style.display = "none";
                RemovePawn(currentPawnPlaying);
                document.getElementById("tile" + GoTo).innerHTML += SummonPawn(currentPawnPlaying);
                console.log("Went to " + GoTo);
                FX_MayGoBack = true;
            }, 3500);
        }

        //Verify if pawn is in the same tile for too long 
        if ((!document.getElementById(currentPawnPlaying).parentElement.className.includes("Question") && pastRollingDice) || MayActivateClock)
        {
            console.log("Checking for movement...");
            TileTooLongClock += 0.5;
            if (TileTooLongClock > 4) { ChangeTurn(); TileTooLongClock = 0; };           
        }

        // If AI ends in Question Tile [ Finally Working :) ]
        if (currentScreen == "WaitingScreen" && document.getElementById(currentPawnPlaying).parentElement.className.includes("Question") && !AIquestionAppeared && pastRollingDice) {
            AIquestionAppeared = true;

            setTimeout(function QuestionAppears() {
                var RandomAnswer = 0;
                document.getElementById("AI-Thinking").innerHTML = "Por favor, aguarde enquanto o jogador atual responde a uma pergunta...";
                document.getElementById("AI-Thinking").style.display = "inline";
                //5 stars or 4 stars
                while (RandomAnswer <=  0) RandomAnswer = Math.floor(Math.random() * 3); //1 or 2

                //Setting thinking time
                var ThinkingTime = 0; //in seconds
                //The higher the classification, the lower the time
                switch (parseInt(PawnInfo[currentPawnPlaying].classification))
                {
                    case 5:
                            ThinkingTime = 2;
                            break;
                    case 4:
                            ThinkingTime = 3;
                            break;
                    case 3:
                            ThinkingTime = 4;
                            break;
                    case 2:
                            ThinkingTime = 4.5;
                            break;
                    case 1:
                        ThinkingTime = 4.5;
                        break;
                }
                

                var GotAnswerRight = false;
                if (parseInt(PawnInfo[currentPawnPlaying].classification) > 3) GotAnswerRight = true;
                else {
                    if (RandomAnswer == 1) GotAnswerRight = true;
                    else GotAnswerRight = false;
                }

                //Display answer
                setTimeout(function WorkNow() {

                    //doesnt move if the person got it right
                    if (!GotAnswerRight) {
                        var GoTo = 1;
                        GoTo = (PawnInfo[currentPawnPlaying].position - 3);
                        if (GoTo < 1) GoTo = 1;

                        //Checks if the tile the pawn is being sent to is a question tile
                        if (document.getElementById("tile" + GoTo).className.includes("Question")) { MayActivateClock = true; }

                        console.log("Moved " + currentPawnPlaying + " to tile" + GoTo + " for getting question wrong.");
                        document.getElementById("AI-Thinking").innerHTML = PawnInfo[currentPawnPlaying].fictionalName + " errou.";
                        document.getElementById("right").style.backgroundColor = "#e15555";
                        RemovePawn(currentPawnPlaying);
                        document.getElementById("tile" + GoTo).innerHTML += SummonPawn(currentPawnPlaying);
                    }
                    else
                    {
                        console.log(currentPawnPlaying + " gets to stay in their position for getting question right.");
                        document.getElementById("AI-Thinking").innerHTML = PawnInfo[currentPawnPlaying].fictionalName + " acertou!";
                        document.getElementById("right").style.backgroundColor = "#aae88a";
                        setTimeout(ChangeTurn, 2000);
                    }
                   
                }, (ThinkingTime * 2500));

            });
        }
    }

    //Update if there's more than one pawn in the same tile
    if (currentScreen != "SetUpScreen") {

        for (var j = 0; j < 4; j++) {
            var amountOfPawnsInTile = document.getElementsByClassName("pawn")[j].parentElement.querySelectorAll(".pawn").length;

            if (amountOfPawnsInTile == 1)
            {
                document.getElementsByClassName("pawn")[j].parentElement.querySelectorAll(".pawn")[0].style.margin = "0.8% auto 0 auto";
                document.getElementsByClassName("pawn")[j].parentElement.querySelectorAll(".pawn")[0].style.zIndex = "3";
            }
            if (amountOfPawnsInTile > 1) {
                //Changing 1
                document.getElementsByClassName("pawn")[j].parentElement.querySelectorAll(".pawn")[0].style.margin = "0.8% auto 0 -15%";
                document.getElementsByClassName("pawn")[j].parentElement.querySelectorAll(".pawn")[0].style.zIndex = "2";
                //Changing 2
                document.getElementsByClassName("pawn")[j].parentElement.querySelectorAll(".pawn")[1].style.margin = "0.8% auto 0 42%";
                document.getElementsByClassName("pawn")[j].parentElement.querySelectorAll(".pawn")[1].style.zIndex = "2";
            }
            if (amountOfPawnsInTile > 2)
            { 
                //Changing 3
                document.getElementsByClassName("pawn")[j].parentElement.querySelectorAll(".pawn")[2].style.zIndex = "3";
                document.getElementsByClassName("pawn")[j].parentElement.querySelectorAll(".pawn")[2].style.margin = "5% auto 0 auto";
            }
            if (amountOfPawnsInTile == 4)
            {
                //Changing 4
                document.getElementsByClassName("pawn")[j].parentElement.querySelectorAll(".pawn")[3].style.margin = "-10% auto 0 auto";
                document.getElementsByClassName("pawn")[j].parentElement.querySelectorAll(".pawn")[3].style.zIndex = "1";
            }
                         
        }

    }

    //Other pawns' turn 
    if (currentScreen == "WaitingScreen" && !hasPlayed)
    {
        //roll dice
        hasPlayed = false;
        document.getElementById("rollTheDice").innerHTML = 'Aguarde enquanto ' + PawnInfo[currentPawnPlaying].fictionalName + ' joga...';
        setTimeout(PlayDice, 3000);
    }

    //Tweaks dice display
    if (currentScreen != "SetUpScreen") { document.getElementById("rollTheDice").style.display = 'inline'; document.getElementById("Dice").style.display = 'block'; }
    else { document.getElementById("rollTheDice").style.display = 'none'; document.getElementById("Dice").style.display = 'none'; }

}

//Ends the game (when a pawn gets passed tile 20)
var PodiumOrder = [];
function EndGame()
{
    //Terminates the Update function
    clearInterval(UpdateInterval);

    //Defines podium order
    var AllPawns = document.getElementsByClassName("pawn"); //grabs pawns in order: worst to best

    //Adds the replay message
    document.getElementById("right").innerHTML = '<input id="replay" type="button" value="Jogar Novamente" onclick="location.reload(true);">';

    //Changes the right screen's content
    document.getElementById("right").innerHTML += '<div id="Podium"></div>';
    document.getElementById("right").style.backgroundImage = "linear-gradient(180deg, #fff151, #70210f)";
    document.getElementById("right").style.overflowY = "hidden";


    //Manages the Podium
    document.getElementById("Podium").innerHTML += ' <div id="firstPlace" class="podium" style="grid-area: first; background-color: ' + PawnInfo[AllPawns[3].id].color + ';">' + PawnInfo[AllPawns[3].id].fictionalName + '</div> ';
    document.getElementById("Podium").innerHTML += ' <div id="secondPlace" class="podium" style="grid-area: second; background-color: ' + PawnInfo[AllPawns[2].id].color + ';">' + PawnInfo[AllPawns[2].id].fictionalName + '</div> ';
    document.getElementById("Podium").innerHTML += ' <div id="thirdPlace" class="podium" style="grid-area: third; background-color: ' + PawnInfo[AllPawns[1].id].color + ';">' + PawnInfo[AllPawns[1].id].fictionalName + '</div> ';
    document.getElementById("Podium").innerHTML += ' <div id="fourthPlace" class="podium" style="grid-area: fourth; background-color: ' + PawnInfo[AllPawns[0].id].color + ';">' + PawnInfo[AllPawns[0].id].fictionalName + '</div> ';

    //Eliminates all elements on board
    for (i = 1; i < 21; i++) {
        document.getElementById("tile" + i).innerHTML = "";
    }

    console.clear();
}

//Special Pawn Functions (they alter the pawns mentioned in the arguments)
function SummonPawn(pawnName = "")
{
    return '<img src="Configuracoes/' + pawnName + '.png" alt="' + pawnName.slice(0, pawnName.indexOf("Pawn")) + ' Pawn" class="pawn" id="' + pawnName + '" width="65">'
}
function RemovePawn(pawnName = "")
{
    document.getElementById(pawnName).remove();
}

//Events
//Starting Screen shows first
//Player presses "start" after choosing a color (sets chosenPawn)
//Player is sent to the first round
//Player rolls the dice (sets DiceNumber)
//Pawn moves towards the tile