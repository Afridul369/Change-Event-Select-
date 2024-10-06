let department = document.querySelector('#department');

department.addEventListener('change', handler);

function handler (e){

    console.log(e.target.value);

}