$(document).ready(function () {
    console.log('document ready')
    handlePlurality();
    $('input[type=text]').keyup(fillInValues)
    $(`#version`).change(changeVersion)
    $(`#pronoun`).change(fillPronouns)
})

function fillInValues() {
    let who = $(`#who`).val()
    console.log(`filling in values for '${who}'`)
    $(`.who`).html(who)
}

function handlePlurality() {
    handelPlurity('noun');
    handelPlurity('verb');

    function handelPlurity(partOfSpeech) {
        let pronoun = $(`#pronoun`).val()
        let singular = pronouns[pronoun].singular[partOfSpeech]
        console.log(`singluar[${partOfSpeech}] === `, singular)
        if (singular) {
            console.log(`showing singular ${partOfSpeech}`)
            $(`span.plural.${partOfSpeech}`).hide()
            $(`span.singular.${partOfSpeech}`).show()
        }
        else {
            console.log(`showing plurals ${partOfSpeech}`)
            $(`span.plural.${partOfSpeech}`).show()
            $(`span.singular.${partOfSpeech}`).hide()
        }
    }
}

function changeVersion() {
    let version = $(this).val();
    console.log('change version to ', version)
    $(`.scripture`).hide()
    $(`.citation`).hide()
    $(`.${version}`).show()
}
