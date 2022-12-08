//Question Declarations
var Questions =
{
    //q (question) + number
    q1:
    {
        image: "imagens/img01.jpg", //url of demonstrative image
        text: "A sociedade asteca era hierarquizada e rigidamente dividida. Era comandada por um imperador, chefe do ex&eacute;rcito. A sociedade asteca possu&iacute;a tr&ecirc;s cidades-estados, os nomes dessas cidades-estados eram&#58;", //the question itself
        opt1: "Ilmatecuhtli, Texcotlan e Tlacoppan", //option 1
        opt2: "Tezcatlipoca, Acapulco Texcoco", //option 2
        opt3: "Tenochtitlan, Texcoco e Tlacopan", //option 3
        opt4: "X&oacute;lot, Tenochttitlan e Quintana Roo", //option 4
        rightOpt: 3 //right option
    },
    q2:
    {
        image: "imagens/img02.jpg", //url of demonstrative image
        text: "O deus Quetzalc&oacute;atl, era representado no formato de &#34;P&aacute;ssaro Serpente&#34; com corpo humano era o principal deus da religi&atilde;o asteca. Esse deus representava&#58;", //the question itself
        opt1: "A vida, a vegeta&ccedil;&atilde;o, os alimentos e a for&ccedil;a espiritual existente nos indiv&iacute;duos. Tamb&eacute;m representava o planeta V&ecirc;nus", //option 1
        opt3: "O fogo e do calor. Representado pelo Sol", //option 3
        opt2: "Representava a fertilidade", //option 4
        opt4: "Representava as chuvas, detinha o poder de produzir os rel&acirc;mpagos e trov&otilde;es. Era muito temido, pois tamb&eacute;m representava algumas doen&ccedil;as", //option 2
        rightOpt: 1 //right option
    },
    q3:
    {
        image: "imagens/img03.jpg", //url of demonstrative image
        text: "No passado, os Astecas possuíam sua capital na Mesoamérica, ela foi construída onde hoje se localiza qual cidade do México?", //the question itself
        opt1: "Puebla", //option 1
        opt2: "Ciudade de México", //option 2
        opt3: "Cuatula", //option 3
        opt4: "Xonacatlán", //option 4
        rightOpt: 2 //right option
    },
    q4:
    {
        image: "imagens/img04.jpg", //url of demonstrative image
        text: "Antigamente os Astecas realizavam sacrifícios humanos por que acreditavam que:", //the question itself
        opt1: "Era vital para que seus filhos nascessem", //option 1
        opt2: "Era vital para que contínuasse chovendo", //option 2
        opt3: "Era vital para o funcionamento da lua", //option 3
        opt4: "Era vital para o funcionamento do sol", //option 4
        rightOpt: 4 //right option
    },
    q5:
    {
        image: "imagens/img05.jpg", //url of demonstrative image
        text: "Segundo as lenas Astecas, eles teriam migrado de Aztlán até suas últimas três cidades e foram guiados por um deus, que deus era esse?", //the question itself
        opt1: "Quetzalcóatl", //option 1
        opt2: "Huitzilopochtli", //option 2
        opt3: "Centeotl", //option 3
        opt4: "Ometeotl", //option 4
        rightOpt: 2 //right option
    },
    q6:
    {
        image: "imagens/img06.jpg", //url of demonstrative image
        text: "Os Astecas acreditavam que existia uma ligação entre todos os seres do mundo com as forças do mundo espiritual, eles diziam que tudo que existia emanava essa ligação, que era chamada de:", //the question itself
        opt1: "teotl", //option 1
        opt2: "chinampa", //option 2
        opt3: "azcapotzalco", //option 3
        opt4: "xiuhpohualli", //option 4
        rightOpt: 1 //right option
    },
    q7:
    {
        image: "imagens/img07.jpg", //url of demonstrative image
        text: "Quem dominou os povos astecas foram:", //the question itself
        opt1: "Os Portuguêses", //option 1
        opt2: "Os Alemães", //option 3
        opt3: "Os Espanhóis", //option 2
        opt4: "Os Italianos", //option 4
        rightOpt: 3 //right option
    },
    q8:
    {
        image: "imagens/img08.jpg", //url of demonstrative image
        text: "A religião dos astecas, era:", //the question itself
        opt1: "O Cristianismo", //option 1
        opt2: "Politeísta", //option 2
        opt3: "O Islamismo ", //option 3
        opt4: "O Judaísmo", //option 4
        rightOpt: 2 //right option
    },
    q9:
    {
        image: "imagens/img09.jpg", //url of demonstrative image
        text: "O que os astecas faziam acreditando ser para o nascimento do sol e para apaziguar o deus Huitzilopochtli?", //the question itself
        opt1: "Oferta de sua colheita", //option 1
        opt2: "Sacrifício animal", //option 2
        opt3: "Plantação em grande quantidade", //option 3
        opt4: "Sacrifício humano", //option 4
        rightOpt: 4 //right option
    },
    q10:
    {
        image: "imagens/img10.jpg", //url of demonstrative image
        text: "Dentre as três cidades-estados que a sociedade asteca possuía, a principal delas era:", //the question itself
        opt1: "Tenochtitlan", //option 1
        opt2: "Texcoco", //option 2
        opt3: "Xólot", //option 3
        opt4: "Quintana Roo", //option 4
        rightOpt: 1 //right option
    }
};

//launching correction cards
for (var i = 1; i < 11; i++)
{
    document.getElementById("main").innerHTML += '<div class="question-card"> <label id="text' + i + '">Question</label><br /> <img id = "image' + i + '" alt = "question image" width = "400" class="image"> <br /> <label id="opt1' + i + '"><input type="radio" name="option" />Op��o 1</label><br /> <label id="opt2' + i + '"><input type="radio" name="option" />Op��o 2</label><br /> <label id="opt3' + i + '"><input type="radio" name="option" />Op��o 3</label><br /> <label id="opt4' + i + '"><input type="radio" name="option" />Op��o 4</label><br /><div id="answer' + i + '" class="Answer" style="display: block;"></div></div>';

    document.getElementById("text" + i).innerHTML = Questions["q" + i].text;
    document.getElementById("image" + i).src = Questions["q" + i].image;
    document.getElementById("opt1" + i).innerHTML = '<input type="radio" name="option" class="InputRadio" id="RadioOpt1"> ' + Questions["q" + i].opt1;
    document.getElementById("opt2" + i).innerHTML = '<input type="radio" name="option" class="InputRadio" id="RadioOpt2"> ' + Questions["q" + i].opt2;
    document.getElementById("opt3" + i).innerHTML = '<input type="radio" name="option" class="InputRadio" id="RadioOpt3"> ' + Questions["q" + i].opt3;
    document.getElementById("opt4" + i).innerHTML = '<input type="radio" name="option" class="InputRadio" id="RadioOpt4"> ' + Questions["q" + i].opt4;
    document.getElementById("answer" + i).innerHTML = 'Gabarito: Op&ccedil;&atilde;o ' + Questions["q" + i].rightOpt;
}
