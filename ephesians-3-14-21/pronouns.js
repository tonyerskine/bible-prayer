var pronouns = {
    I: {
        subject: 'I',
        object: 'me',
        posessive: 'my',
        reflexive: 'myself',
        singular: {
            noun: true,
            verb: false,
        },

    },
    you: {
        subject: 'you',
        object: 'you',
        posessive: 'your',
        reflexive: 'yourself',
        singular: {
            noun: true,
            verb: false,
        },
    },
    he: {
        subject: 'he',
        object: 'him',
        posessive: 'his',
        reflexive: 'himself',
        singular: {
            noun: true,
            verb: true,
        },
    },
    she: {
        subject: 'she',
        object: 'her',
        posessive: 'her',
        reflexive: 'herself',
        singular: {
            noun: true,
            verb: true,
        },
    },
    we: {
        subject: 'we',
        object: 'us',
        posessive: 'our',
        reflexive: 'ourselves',
        singular: {
            noun: false,
            verb: false,
        },
    },
    they: {
        subject: 'they',
        object: 'them',
        posessive: 'their',
        reflexive: 'themselves',
        singular: {
            noun: false,
            verb: false,
        },
    },
}

function fillPronouns() {
    let pronoun = $(`#pronoun`).val()
    console.log(`filling pronouns with '${pronoun}'`)
    $(`.pronoun.subject`).html(pronouns[pronoun].subject)
    $(`.pronoun.object`).html(pronouns[pronoun].object)
    $(`.pronoun.possessive`).html(pronouns[pronoun].posessive)
    $(`.pronoun.reflexive`).html(pronouns[pronoun].reflexive)
    handlePlurality()
}