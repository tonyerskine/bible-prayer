$(document).ready(function () {
    console.log('document ready')
    showHidePlurals();
    $('input[type=radio]').change(showHidePlurals)
    $('input[type=text]').keyup(fillInValues)
    $(`#version`).change(changeVersion)
})

function fillInValues() {
    let who = $(`#who`).val()
    console.log(`filling in values for '${who}'`)
    $(`.who`).html(who)
    $(`.possessive`).append(`'s`)
}

function showHidePlurals() {
    let plural = $('input[name=plural]:checked').val()
    if (plural === `false`) {
        $("span.plural").hide()
        $("span.singular").show()
    }
    else {
        console.log('showing plurals')
        $("span.plural").show()
        $("span.singular").hide()
    }
}

function changeVersion() {
    let version = $(this).val();
    console.log('change version to ', version)
    $(`.scripture`).hide()
    $(`.citation`).hide()
    $(`.${version}`).show()
}
