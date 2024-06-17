const btn = document.querySelector('button');
const input_name = document.querySelector('input');

input_name.addEventListener('input', () => {
    if(input_name.value.length > 3){
        btn.classList.add('active');
    } else {
        btn.classList.remove('active');
    }
});