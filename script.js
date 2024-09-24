const pw_length = document.getElementById('pw-length')
const use_digits = document.getElementById('use-digits')
const use_special_chars = document.getElementById('use-special-chars')

const error_message = document.getElementById('error-message')
const generated_pw = document.getElementById('generated-pw')

function rand_between(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

document.getElementById('form').addEventListener(
    'submit', (e) => {
        e.preventDefault()

        if (pw_length.value == '' || pw_length.value == null) {
            error_message.innerHTML = 'Please chose a password length.'
            return
        } else {
            error_message.innerHTML = ''
        }

        // TODO: Ask user to type the special characters.
        let characters = []
        if (use_special_chars.checked) {
            characters.push(...['*', '!', '@', '%', '$', '&', '#'])
        }
        for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
            characters.push(String.fromCharCode(i))
        }
        const charcnt = characters.length

        const length = parseInt(pw_length.value)
        // 1. Choose if it's going to be a character or a digit.
        let pw = ''
        for (let i = 0; i < length; i++) {
            let r = rand_between(1, 2)
            // console.log(r)
            if (r == 1 || !use_digits.checked) {
                // A character
                r = rand_between(0, charcnt)
                pw += characters[r]
            } else {
                // A digit
                pw += String.fromCharCode(rand_between('0'.charCodeAt(0), '9'.charCodeAt(0)))
            }
        }

        generated_pw.innerHTML = pw
    }
)
