$(function () {

  $('.wrapper .tab').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.wrapper').find('.tab-item').removeClass('active-tab').hide();
    $('.wrapper .tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#' + id).addClass('active-tab').fadeIn();
    return false;
  });

  $('.tab1').on('click', function () {
    $('.intro').removeClass('active');
    $('.intro2').addClass('active');
    $('.intro3').addClass('active');
    $('.intro').removeClass('h_active');
    $('.intro').removeClass('b_active');
  });
  $('.tab2').on('click', function () {
    $('.intro2').removeClass('active');
    $('.intro').addClass('active');
    $('.intro3').addClass('active');
    $('.intro').removeClass('h_active');
    $('.intro').removeClass('b_active');
  });
  $('.tab3').on('click', function () {
    $('.intro3').removeClass('active');
    $('.intro2').addClass('active');
    $('.intro').addClass('active');
    $('.intro').removeClass('h_active');
    $('.intro').removeClass('b_active');
  });
  $('.tab4').on('click', function () {
    $('.intro').addClass('h_active');
    $('body').addClass('b_active');
  });
  $('.tab5').on('click', function () {
    $('.intro').addClass('h_active');
    $('body').addClass('b_active');
  });

  $('.search--right__item').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.search--right__items').find('.search--right__item').removeClass('active');
    $(this).addClass('active');
    return false;
  });

  $('.rashet__choice-item').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.rashet__choice-items').find('.rashet__choice-item').removeClass('active');
    $(this).addClass('active');
    return false;
  });

  $('.total__filter button').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.total__filter').find('button').removeClass('active');
    $(this).addClass('active');
    return false;
  });

  $('.total__choice-btn').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.total__choice-btns').find('.total__choice-btn').removeClass('active');
    $(this).addClass('active');
    return false;
  });

  $('#switch').click(function () {
    $("#switch").toggleClass("checkLight");
  });
  $('#switch1').click(function () {
    $("#switch1").toggleClass("checkLight");
  });
  $('#switch2').click(function () {
    $("#switch2").toggleClass("checkLight");
  });
  $('#switch3').click(function () {
    $("#switch3").toggleClass("checkLight");
  });

  $('select').styler();

  $(".accordion-item__line").click(function () {
    var container = $(this).parents(".accordion-list__item");
    var answer = container.find(".accordion-item");
    answer.toggleClass("accordion-item--opened");
  });




  // var $classLoop = $('.tab'),
  //   i = 0;
  // setInterval(function () {
  //   $classLoop.removeClass('active').filter($classLoop[i]).toggleClass('active');
  //   i < $classLoop.length - 1 ? i++ : i = 0;
  // }, 2000);

 


});

function slowScroll(id) {
  var offset = 0;
  $('html, body').animate({
    scrollTop: $(id).offset().top - offset
  }, 1200);
  return false;
}

// var no_active_delay = 3; // Количество секунд простоя мыши, при котором пользователь считается неактивным
// var now_no_active = 0; // Текущее количество секунд простоя мыши
// setInterval("now_no_active++;", 1000); // Каждую секунду увеличиваем количество секунд простоя мыши
// setInterval("updateChat()", 1000); // Запускаем функцию updateChat() через определённый интервал
// document.onmousemove = activeUser; // Ставим обработчик на движение курсора мыши
// function activeUser() {
//   now_no_active = 0; // Обнуляем счётчик простоя секунд
// }
// function updateChat() {
//   if (now_no_active >= no_active_delay) { // Проверяем не превышен ли "предел активности" пользователя
//     // alert("Пользователь не активен"); // В реальности стоит убрать, а здесь дано как доказательство того, что всё работает




//     return;
//   }

// }



