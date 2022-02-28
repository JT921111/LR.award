$('.next').click(function () {
  console.log('aaa');
  if($('.container').hasClass('step1')) {
    $('.container').removeClass('step1').addClass('step2');
  } else if($('.container').hasClass('step2')) {
    $('.container').removeClass('step2').addClass('step3');
  } else if($('.container').hasClass('step3')) {
    $('.container').removeClass('step3').addClass('step4');
  } else if($('.container').hasClass('step4')) {
    $('.container').removeClass('step4').addClass('step5');
    $('.next').addClass('re');
  } else if($('.container').hasClass('step5')) {
    $('.container').removeClass('step5').addClass('step1');
    $('.next').removeClass('re');
  } else {
    $('.container').addClass('step2');
  }
})