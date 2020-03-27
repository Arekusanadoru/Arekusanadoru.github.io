var subtitle = "Этот тест позволяет понять кто молодец а кто пидор";
var questions=[
{
	text: "Света молодец?",
	answers: ["нет",
			"да",
			"ясен хуй да"],
	correctAnswer: 2
},
{
	text: "Ты пидор?",
	answers: ["да",
			"нет",
			"не определился"],
	correctAnswer: 1
},
{
	text: "Романовский пидор?",
	answers: ["Да",
			"нет",
			"не спрашивал"],
	correctAnswer: 0
}
];

var yourAns = new Array;
var score = 0;

function Engine(question, answer) {yourAns[question]=answer;}

function Score(){
	 var answerText = "Результаты:\n";
	 for(var i = 0; i < yourAns.length; ++i){
	var num = i+1;
	answerText=answerText+"\n    Вопрос №"+ num +"";
	if(yourAns[i]!=questions[i].correctAnswer){
			answerText=answerText+"\n    Правильный ответ: " +
		questions[i].answers[questions[i].correctAnswer] + "\n";
		}
				else{
			answerText=answerText+": Верно! \n";
			++score;
			}
			 }

	 answerText=answerText+"\nВсего правильных ответов: "+score+"\n";

	 alert(answerText);
	 yourAns = [];
	 score = 0;
	 clearForm("quiz");
}
function clearForm(name) {
	 var f = document.forms[name];
	 for(var i = 0; i < f.elements.length; ++i) {
	if(f.elements[i].checked)
		f.elements[i].checked = false;
}
}
<h1>document.write(title)</h1>
<h2>document.write(subtitle)</h2>
<form name="quiz">
<ol>
for(var q=0; q<questions.length; ++q) {
	 var question = questions[q];
	 var idx = 1 + q;
	 document.writeln('<li><span class="quest">' + question.text + '</span><br/>');
	 for(var i in question.answers) {
	document.writeln('<input type=radio name="q' + idx + '" value="' + i +
	'" onClick="Engine(' + q + ', this.value)">' + question.answers[i] + '<br/>');
}
}
</ol>
<input type="button" onClick="Score()" value="Проверить результаты" />
</form>
