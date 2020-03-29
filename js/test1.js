var subtitle = "Этот тест позволяет понять кто молодец а кто нет";
var questions=[
{
	text: "Вы стали замечать, что десны иногда кровоточат при чистке зубов?",
	answers: ["нет",
			"да"],
	correctAnswer: 0
},
{
	text: "Реагируют ли зубы на сладкое, кислое, горячее, холодное?",
	answers: ["нет",
			"да"],
	correctAnswer: 0
},
{
	text: "Вы редко простужаетесь, подхватываете гайморит или ангину?",
	answers: ["нет",
			"да"],
	correctAnswer: 1
},
{
	text: "Посещаете стоматолога не реже раза в год?",
	answers: ["нет",
			"да"],
	correctAnswer: 1
},
{
	text: "На трех или более зубах у вас уже стояли пломбы к 20 годам?",
	answers: ["нет",
			"да"],
	correctAnswer: 0
},
{
	text: "Правильный ли у вас прикус?",
	answers: ["нет",
			"да"],
	correctAnswer: 1
},
{
	text: "После еды стараетесь если не почистить зубы, то хотя бы тщательно прополоскать рот или пожевать жвачку?",
	answers: ["нет",
			"да"],
	correctAnswer: 1
},
{
	text: "Частенько грызете семечки, используете свои челюсти в качестве «орехоколки»?",
	answers: ["нет",
			"да"],
	correctAnswer: 0
},
{
	text: "Принадлежите ли к отряду курильщиков?",
	answers: ["нет",
			"да"],
	correctAnswer: 0
},
{
	text: "Страдаете ли вы проблемами с пищеварением?",
	answers: ["нет",
			"да"],
	correctAnswer: 0
},

];

var yourAns = new Array;
var score = 0;

function Engine(question, answer) {yourAns[question]=answer;}

function Score(){
	 var answerText = "Результаты:\n";
	 var sum = 10;
	 for(var i = 0; i < yourAns.length; ++i){
	var num = i+1;
	if(yourAns[i]==questions[i].correctAnswer){
			++score;
		}
			 }
if(score==sum){
	answerText="Зубы в порядке, поздравляем Вас :)";}

	else{
		answerText="Скорее всего, ваши зубы не в порядке, рекомендуем обратиться к специалистам!"
	}

	 smoke.alert(answerText);
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
