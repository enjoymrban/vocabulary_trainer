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
    "criterion": "Kriterium",
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
var questions;


var currentQuestion;
var maxQuestion;
var maxQuestionTot;

var question;
var answer;

$(document).ready(function () {

    $("#question").val(question);


    $("#checkanswer").click(function () {
        let userAnswer = $("#answer").val();

        //Correct Answer
        if (userAnswer === answer) {
            if ($("#answer").hasClass("wrongAnswer")) {

            } else {
                delete questions[question];
            }
            $("#answer").removeClass("wrongAnswer").addClass("rightAnswer");
            $("#showanswer").css("display", "none");

            setTimeout(nextQuestion, 200);

            //Wrong Answer
        } else {
            $("#answer").removeClass("rightAnswer").addClass("wrongAnswer");
            $("#showanswer").css("display", "inline");
            $("#showanswer").keypress(function (e) {
                if (e.which == 13) {
                    alert('You pressed enter!');
                }
            });

            delete questions[question];
            questions[question] = answer;

        }


    });

    $("#showanswer").click(function () {

        $("#answer").val(answer);
        $('#checkanswer').prop('disabled', false);


    });


    $("#lesson11").click(function () {


        questions = JSON.parse(JSON.stringify(lesson11));
        currentQuestion = 0;
        maxQuestionTot = Object.keys(questions).length - 1;

        question = Object.keys(questions)[currentQuestion];
        answer = questions[question];
        $("#progress-bar").css("width", "0%");
        $("#question").val(question);


    });


    $("#lesson12").click(function () {

        questions = JSON.parse(JSON.stringify(lesson12));
        currentQuestion = 0;
        maxQuestionTot = Object.keys(questions).length - 1;

        question = Object.keys(questions)[currentQuestion];
        answer = questions[question];
        $("#progress-bar").css("width", "0%");
        $("#question").val(question);

    });


});

function nextQuestion() {

    $("#answer").removeClass("wrongAnswer rightAnswer");
    $("#answer").val("");
    $('#checkanswer').prop('disabled', true);
    maxQuestion = Object.keys(questions).length - 1;
    var progress = (maxQuestionTot - maxQuestion) * 100 / (maxQuestionTot + 1);
    $("#progress-bar").css("width", progress + "%");


    currentQuestion = Math.floor((Math.random() * maxQuestion));

    question = Object.keys(questions)[currentQuestion];
    answer = questions[question];

    $("#question").val(question);


}


$(document).ready(function () {
    $('#checkanswer').prop('disabled', true);
    $('#answer').keyup(function () {
        $('#checkanswer').prop('disabled', this.value == "" ? true : false);
    })
});


