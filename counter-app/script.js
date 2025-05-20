const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");



let count = 0;

buttons.forEach((button)=> {
    button.addEventListener('click', (event)=> {
        const btnVal = event.currentTarget;

        if(btnVal.classList.contains('decrease')){
            count--;
        }
        else if(btnVal.classList.contains('increase')){
            count++;
        }
        else if(btnVal.classList.contains('reset')){
            count = 0;
        }
        // console.log(count);
        display.textContent = count;
    });
});