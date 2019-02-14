$(document).ready(function () {
    console.log('document ready')
    fillInValues();
    $('input').change(fillInValues)
    $('input[type=text]').keydown(fillInValues)
    $(`#version`).change(changeVersion)
})

function fillInValues() {
    let plural = $('input[name=plural]:checked').val()
    if (plural === `false`) {
        $("span.plural").hide()
    }
    else {
        console.log('showing plurals')
        $("span.plural").show()
    }
}

function changeVersion() {
    let version = $(this).val();
    console.log('change version to ', version)
    $(`.scripture`).hide()
    $(`.${version}`).show()
}
