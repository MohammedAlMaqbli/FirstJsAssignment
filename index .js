const inputs = document.querySelectorAll('input')
const textarea = document.querySelector('textarea')
const btn = document.querySelector('a');
const form = document.querySelector('form')
let sub = true
const patterns = {
    name: /^([a-z]){3,12}$/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/i,
    age: /^[2-7][0-9]$/,
    phone: /^(7[1703][0-9]{7})$/,
    message: /^.{1,299}$/s
}
function validate(field, regex) {

    if (regex.test(field.value)) {
        field.className = 'valid';

        document.getElementById('send').style.display = 'none'
    } else {
        field.className = 'invalid';
        sub = false
        document.getElementById('send').style.display = 'none'
    }

}
inputs.forEach(input => {
    input.addEventListener('keyup', (e) => {

        validate(e.target, patterns[e.target.attributes.name.value])
    })
});
textarea.addEventListener('keyup', (e) => {
    validate(e.target, patterns.message)

});

form.addEventListener('submit', (e) => {
    e.preventDefault()
    inputs.forEach(input => {

        validate(input, patterns[input.name])
    });
    validate(message, patterns.message)
    let check = document.querySelectorAll('.invalid').length == 0
    if (check) {
        document.getElementById('send').style.display = 'inline'
    } else {
        document.getElementById('send').style.display = 'none'
    }
    console.log(check)
});
sub = true
