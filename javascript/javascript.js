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
    "assertivness": "Durchsetzungsvermögen"
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


