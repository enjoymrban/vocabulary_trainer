var lesson11 = {
    "assertiveness": "Durchsetzungsvermögen",
    "backup (verb)": "sichern",
    "backup (noun)": "Verstärkung",
    "break-up": "aufbrechen",
    "chamber": "Kammer"
};

var lesson12 = {
    "achievement": "Errungenschaft",
    "appraisal": "Bewertung",
    "assertivness": "Durchsetzungsvermögen",
	"assessment": "Bewertung",
	"cardboard": "Karton",
	"co-operation": "Zusammenarbeit",
	"contingency plan": "Notfallplan",
	"criteria": "Kriterien",
	"criterion":"Kriterium",
	"drop": "fallen",
	"effort": "Anstrengung",
	"electricity grid": "Stromnetz",
	"evaluation": "Auswertung",
	"gravity": "Erdanziehungskraft",
	"greenhouse": "Gewächshaus",
	"nutrient": "Nährstoff",
	"objective": "Zielsetzung",
	"participation": "Beteiligung",
	"performance": "Performance",
	"schedule": "Zeitplan",
	"scope": "Umfang",
	"seawater": "Meerwasser",
	"tender": "zärtlich",
	"water vapour": "Wasserdampf",
	"graphene sheet": "Graphenblatt",
	"graphite": "Graphit",
	"nanofluid": "Nanofluid",
	"nanogenerator": "Nanogenerator",
	"nanometre": "Nanometer",
	"nanoparticle": "Nanopartikel",
	"nanoscale": "nanoskalig",
	"nanoscale pore": "nanoskalige Pore",
	"nanowire": "Nanodraht",
	"smart dust": "intelligenter Staub",
	"transparency": "Transparenz",
	"transparent": "transparent",
	"assess": "beurteilen",
	"attempt(noun)": "Versuch",
	"copy": "kopieren",
	"expand on": "erweitern",
	"humidity": "Feuchtigkeit",
	"modify": "ändern",
	"reckon": "rechnen",
	"rely on": "sich verlassen auf",
	"roll out": "ausrollen",
	"saturate": "sättigen",
	"trickle": "Rinnsal",
	"come up": "ausdenken",
	"get hold of": "ergattern",
	"get on": "weiter kommen",
	"go about": "in Angriff nehmen",
	"go ahead": "mach weiter",
	"hang on": "abwarten",
	"turn out": "herauskommen",
	"go bankrupt": "Bankrott gehen",
	"essential": "wesentlich",
	"super-saturated": "übersättigt"

};
var questions = lesson11;


var currentQuestion = 0;
var maxQuestion = Object.keys(questions).length - 1;

var question = Object.keys(questions)[currentQuestion];
var answer = questions[question];

$(document).ready(function () {

    $("#question").val(question);


    $("#checkanswer").click(function () {
        let userAnswer = $("#answer").val();

        if (userAnswer === answer) {
            $("#answer").removeClass("wrongAnswer").addClass("rightAnswer");
            $("#showanswer").css("display", "none");
            setTimeout(nextQuestion, 200);
        } else {
            $("#answer").removeClass("rightAnswer").addClass("wrongAnswer");
            $("#showanswer").css("display", "inline");

        }


    });

    $("#showanswer").click(function () {

        $("#answer").val(answer);

    });


    $("#lesson11").click(function () {

        questions = lesson11;
        currentQuestion = 0;
        maxQuestion = Object.keys(questions).length - 1;

         question = Object.keys(questions)[currentQuestion];
         answer = questions[question];

        $("#question").val(question);


    });


    $("#lesson12").click(function () {

        questions = lesson12;
        currentQuestion = 0;
        maxQuestion = Object.keys(questions).length - 1;

        question = Object.keys(questions)[currentQuestion];
        answer = questions[question];

        $("#question").val(question);

    });


});

function nextQuestion() {
    $("#answer").removeClass("wrongAnswer rightAnswer");
    $("#answer").val("");

    if (currentQuestion < maxQuestion) {
        currentQuestion++;
    } else {
        currentQuestion = 0;
    }

    question = Object.keys(questions)[currentQuestion];
    answer = questions[question];

    $("#question").val(question);


}


$(document).ready(function(){
    $('#checkanswer').prop('disabled',true);
    $('#answer').keyup(function(){
        $('#checkanswer').prop('disabled', this.value == "" ? true : false);
    })
});


