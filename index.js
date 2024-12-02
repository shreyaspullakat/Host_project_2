let ran_num = Math.floor(Math.random() * 100 + 1)
let game_run = 0
let count = 0
const total_attempts = 10;
const get_hint = document.getElementById('hint')
const get_btn = document.getElementById('check')
const get_attempt=document.getElementById('attempt')
const get_form = document.forms['num_forms']['num']

console.log('ran_num', ran_num);
function check() {

    if (game_run == 0 && count < total_attempts) {
        let guess_num = get_form.value;
        console.log('guess_num:', guess_num);
        count += 1

        console.log("attempt:", count);
        get_attempt.innerHTML=`Attempts: ${count}`
        // Takes the value of count, assigns it to the string and displays it in the html

        if (guess_num < ran_num) {
            document.getElementById('hint').innerHTML = 'Guess higher'
        }
        else if (guess_num > ran_num) {
            document.getElementById('hint').innerHTML = 'Guess lower'

        }
        else {
            document.getElementById('hint').innerHTML = "Guessed correctly"
            console.log('You guessed correctly')
            game_run = 1
            get_btn.innerHTML='reset'
           

        }
    }
    else {
        console.log('game not running');
        reset()
    }
}
function reset()    
 {
    ran_num = Math.floor(Math.random() * 100 + 1)
    console.log('ran_num', ran_num);
    count=0
    game_run=0
    get_hint.innerHTML='Guess it'
    get_btn.innerHTML='check'
    get_attempt.innerHTML='Attempts:0'
    get_form.value= ""


}