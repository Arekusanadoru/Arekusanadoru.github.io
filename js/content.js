function mainContent() {
    return `
        <span style="font-size: 18px; font-weight: bold">Размещение изображений с акциями </br>
Рекомендуем пройти тест во вкладке "Интерактив"
<div class="slider">
    <div class="item">
        <img src="images/main111.jpg" alt="Первый слайд">
    </div>

    <div class="item">
        <img src="images/vrach1.jpg" alt="Второй слайд">
    </div>

    <div class="item">
        <img src="images/vrach2.jpg" alt="Третий слайд">
    </div>

    <a class="prev" onclick="minusSlide()">&#10094;</a>
    <a class="next" onclick="plusSlide()">&#10095;</a>
</div>

<div class="slider-dots">
    <span class="slider-dots_item" onclick="currentSlide(1)"></span>
    <span class="slider-dots_item" onclick="currentSlide(2)"></span>
    <span class="slider-dots_item" onclick="currentSlide(3)"></span>
</div>
    `
}
function aboutContent() {
    return `
      <p> <span style="font-weight: bold; font-size: 17px; line-height: 2">Стоматологическая клиника "Zubov.net" </span>была основана в 2010 году стоматологом-терапевтом
Зубовым Александром Александровичем и его сыном Зубовым Матвеем Александровичем.</p>
<p>Перспектива работать в государственных медицинских учреждениях не привлекала ни
младшего, ни старшего Зубова, на то есть ряд существенных причин.</p>
<p><img src="images/main1.jpg" width="200" height="150" class="rightimg">Александр Александрович считает, что в век технологий людям нужно предоставлять самые
качественные услуги в области стоматологии. Для этого необходимы зарубежные
оборудование и медикаменты,  а отечественные аналоги найти достаточно сложно.</p>
<p><span style="font-style: italic; font-weight: bold;"><font color="#0000ff">"В собственной организации ты должен предоставить пациентам такие условия, в
которых было бы комфортно самому. Я не хочу лечить свои зубы отечественным материалом,
которого вечно не хватает в больницах. Я хочу, чтобы пациент пришел ко мне с проблемой, а я
раз - и смог решить эту проблему, потому что у меня есть все - и оборудование, и медикаменты,
и материалы, и приятная обстановка!" </p>
Зубов А.А.</font></span>
<p>В стоматологии работают 3 стоматолога-терапевта, 2 стоматолога-хирурга, 2 имплантолога.
Все врачи имеют высшие квалификационные категории. К сожалению, отсутствует детский
стоматолог, но эта проблема уже устраняется. Более подробную информацию о специалистах
Вы можете прочитать в разделе "ВРАЧИ".</p>
    `
}
function priceContent() {
    return `
        <span style="font-size: 15px; line-height: 2">
<p style="font-size: 19px"><font color="#0000ff"> <img src="images/price_content.jpg" width="400" height="600" class="rightimg">В стоматологии "Zubov.net" предоставляются следующие услуги:</font></p>
<p style="font-weight: bold">Лечение зубов:</p>
<p>-Кариес</p>
<p>-Пульпит</p>
<p>-Периодонтит</p>
<p>-Реставрация</p>
<p style="font-weight: bold">Хирургия:</p>
<p>-Атравматическое удаление зуба</p>
<p>-Консервация лунки после удаления зуба</p>
<p style="font-weight: bold">Имплантация:</p>
<p>-Виды имплантации</p>
<p>-Имплантация по методике "все на 4-х" или "все на 6-и"</p>
<p>-Синуслифтинг и костная пластика</p>
<p style="font-weight: bold">Протезирование зубов:</p>
<p>-Микропротезирование</p>
<p>-Протезирование зубов коронками</p>
<p>-Съемное протезирование</p>
</span>
    `
}
function stocksContent() {
    return `
        <span>Акции</span>
    `
}
function personalContent() {
    return `
        <span><p style="font-size:25px">Информация о врачах, их интересах и прочем :)</p>
<pre style="font-size: 17px"><img src="images/vrach1.jpg" width="250" height="300" class="leftimg">
 Зубов Александр Александрович, врач стоматолог-терапевт,
 врач стоматолог-хирург, врач высшей квалификационной категории.
 Стаж работы - 25 лет.
 Выпускник НГМУ, специальность - хирургическая стоматология.
 Может найти подход к любому пациенту, при этом
 просто и понятно объяснив его проблемы с зубами.
 Так же любитель юмора
 ( только вспомните название стоматологии и Вам все станет ясно).
 Амбициозный специалист, всегда стремящийся к самосовершенствованию.


</pre>
<pre style="font-size: 17px"><img src="images/vrach2.jpg" width="250" height="300" class="leftimg">
 Зубов Матвей Александрович, врач стоматолог-хирург,
 врач высшей квалификационно категории. Стаж работы - 5 лет.
 Выпускник НГМУ, специальность - хирургическая стоматология.
 Матвей Александрович пошел по стопам своего отца и не ошибся
 - огромные успехи в учебе в НГМУ,
 усидчивость ,схватывание любой информации налету
 - все это помогло преуспеть ему как молодому специалисту в области стоматологии
 и выиграть конкурс "Стоматолог года - 2018. Новосибирск".
 Добрый, спокойный, трепетно относящийся к любым проблемам пациента
 специалист.

</pre>
<pre style="font-size: 17px"><img src="images/vrach3.jpg" width="250" height="300" class="leftimg"> Кожевникова Юлия Алексеевна, врач стоматолог-терапевт,
 врач высшей квалификационной категории.
 Стаж работы – 13 лет. Выпускница РУДН, специальность – стоматология.
 Юлия Алексеевна после окончания РУДН немного проработала
 в столичной государственной больнице, после вернулась на родину,
 в Новосибирск, и познакомилась с Зубовым М.А,
 который заметил в ней качества хорошего специалиста и пригласил
 на работу в семейную клинику.
 Специалист отличается чуткостью, добротой. На первый взгляд
 ее нежные руки не годятся к работе стоматолога, но они могут вырвать
 и самый проблемный зуб мудрости, и вылечить запушенный кариес.

</pre>

<pre style="font-size: 17px"><img src="images/vrach4.jpg" width="250" height="300" class="leftimg">

 Сюткин Михаил Максимович, врач имплантолог,
 врач высшей квалификационной категории. Стаж работы – 5 лет. Выпускник НГМУ,
 специальность – хирургическая стоматология.
 Михаил Максимович является другом и бывшим одногруппником
 Зубова М.А. Успехи в учебе, спортивная деятельность (футбол),
 любовь к собакам, любитель юмора. Все перечисленные качества
 имеются и у основателя клиники – Зубова А.А, поэтому он стал
 лучшим другом и наставником молодого специалиста и пригласил
 в клинику.

</pre>

<pre style="font-size: 17px"><img src="images/vrach5.jpg" width="250" height="300" class="leftimg"> Мартынова Алина Дмитриевна,
 врач-имплантолог, врач высшей квалификационной категории.
 Стаж работы – 15 лет. Выпускница РУДН,
 специальность – стоматология.
 Алина Дмитриевна закончила РУДН и переехала
 в Новосибирск к мужу (у которого есть своя собственная клиника).
 Через некоторое время работы в клинике мужа она решила,
 что хочет работать в специализированном месте,
 а именно – в стоматологии.
 Отличается находчивостью, блестящим умом, начитанностью
 и заботой к пациентам.

</pre>

<pre style="font-size: 17px"><img src="images/vrach6.jpg" width="250" height="300" class="leftimg"> Полубатонова Галина Олеговна,
 врач-терапевт, врач высшей квалификационной категории.
 Стаж работы – 24 года. Выпускница НГМУ,
 специальность – стоматология общей практики.
 Галина Олеговна закончила учебу в сложное время – середина 90-х.
 Но ее упорство, желание помогать людям не сломило ее,
 и она устроилась в государственное учреждение. Проработав
 там некоторое время, она решила уйти в частную клинику.
 Причина – плохая обстановка в стоматологии в государственных
 больницах. Зубов А.А. с радостью принял на работу опытного
 специалиста с хорошими рекомендациями.
</pre>
</span>
    `
}
function jobContent() {
    return `
        <span style="line-height:2 "><p style="font-weight: bold; font-size: 19px">Вакансии:</p>
        <p style="font-weight: bold"> Детский стоматолог</p>
<p>Требования:
<p>-высшее медицинское образование;
<p>-не старше 60 лет;
<p>-опыт работы в стоматологии не менее 2 лет;
<p>-наличие опыта работы с детьми (необязательно, но желательно);
<p>-умение нахождения подхода к ребенку (суметь успокоить его, развеселить и т.п.);
<p>-готовность к обучению (курсы повышения квалификация, курсы психологии, участие в конкурсах).

<p>График работы: в будние дни с 9:00 до 19:00, сб-вс с 11:00 до 17:00. <p>Примечание: Вы не будете работать 7 дней в неделю, все зависит от нагрузки. Мы ищем 2-ух специалистов (детских стоматологов), график работы будет обсужден после нахождения кандидатов.
<p>Заработная плата: от 50 000 рублей.
<p style="font-weight: bold">Ассистент стоматолога</p>
<p>Требования:
<p>-средне-специальное или высшее медицинское образование;
<p>-опыт работы не требуется (но его наличие только к лучшему);
<p>-умение общаться с людьми, находить к ним подход;
<p>-готовность к обучению (курсы повышения квалификация, курсы психологии, участие в конкурсах).
<p>График работы: в зависимости от графика работы врача-стоматолога, к которому Вы будете прикреплены (не больше 5 дней в неделю), выходные (2 дня) идут подряд.
<p>Заработная плата: от 25 000 рублей.
</span>
    `
}
function interactive() {
    function fill() {
        let content = ''
        for(var q=0; q<questions.length; ++q) {
            var question = questions[q];
            var idx = 1 + q;
            content += '<li><span class="quest">' + question.text + '</span><br/>';
            for(var i in question.answers) {
                content += '<input type=radio name="q' + idx + '" value="' + i +
                '" onClick="Engine(' + q + ', this.value)">' + question.answers[i] + '<br/>';
            }
       }
       return content;
    }
return `
<pre style="font-weight: bold;text-align: center; font-size: 25px">                               Тест. В порядке ли Ваши зубы?</pre>
<form name="quiz">
<ol>
${fill()}
</ol>
</br>
<input type="button" class="btn" onClick="Score()" value="Проверить результаты" />
</form>
</br>
</br>
</br>
</br>
<p style="Font-weight: bold; font-size: 19px;">Здесь вы можете оставить свой комментарий</p>
<div id="vk_comments"></div>
<script type="text/javascript">
VK.Widgets.Comments("vk_comments", {limit: 20, attach: "*"});
</script>
`
}
