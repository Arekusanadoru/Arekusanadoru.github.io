(function() {
    fillNavMenu();
    $('#main').addClass('active');
    fillMainSection('main');

    $('[name="section"]').click(function() {
        let id = this.id;
        $('[name="section"]').toArray().forEach((element) => $(element).removeClass('active'));
        $(this).addClass('active');
        selectThisSection(id)
        fillMainSection(id)
    })
})()
function selectThisSection(id) {
    data.forEach(function(element) {
        if (element.id == id) element.active = true;
        else element.active = false;
    })
}
function fillNavMenu() {
    $('.header_nav').append(`<ul>
        ${data.reduce((a, b) => a + `<li id="${b.id}" name="section">${b.name}</li>`, '')};
    </ul>`)
}
function fillMainSection(id) {
    let current_content = data.filter((element) => element.active == true)[0].content;
    $('.main_content').empty().append(`
        ${current_content()}
    `)
}