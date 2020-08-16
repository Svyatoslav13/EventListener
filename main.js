$(document).ready(function () {
    $('input').on('input', function () {
        console.log($(this).val());
    })  
      
    $('button').on('click', function (event){
        event.preventDefault();
        alert('Спасибо за нажатие на нашу замечательную кнопку. Значение вашего поля — ' + $('input').val());
    })
})
