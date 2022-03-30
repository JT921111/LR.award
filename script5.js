$('.form').on('click', function () {
  navigator.clipboard.writeText("LR.award 問題回報\n網頁名稱:\n需回報的功能:\n發生問題:");
  $('.copied').removeClass('hidden').addClass('showup');
  setTimeout(function () {
    $('.copied').removeClass('showup').addClass('hidden');
  }, 1200);
})

setInterval(function () {
  if (parseInt($('body').scrollTop() / $('body').height() * 100) < 5) {
    $('a').removeClass('next');
    $('.scroller .scroll-tag:nth-of-type(2), .scroller .scroll-tag:nth-of-type(3), .scroller .scroll-tag:nth-of-type(4)').addClass('next-tag');
    $('a:nth-of-type(1)').addClass('next');
  } else if (parseInt($('body').scrollTop() / $('body').height() * 100) < 37) {
    $('a').removeClass('next');
    $('.scroller .scroll-tag:nth-of-type(2)').removeClass('next-tag');
    $('.scroller .scroll-tag:nth-of-type(3), .scroller .scroll-tag:nth-of-type(4)').addClass('next-tag');
    $('a:nth-of-type(2)').addClass('next');
  } else if (parseInt($('body').scrollTop() / $('body').height() * 100) < 55) {
    $('a').removeClass('next');
    $('.scroller .scroll-tag:nth-of-type(2), .scroller .scroll-tag:nth-of-type(3)').removeClass('next-tag');
    $('.scroller .scroll-tag:nth-of-type(4)').addClass('next-tag');
    $('a:nth-of-type(3)').addClass('next');
  } else {
    $('a').removeClass('next');
    $('.scroller .scroll-tag:nth-of-type(2), .scroller .scroll-tag:nth-of-type(3), .scroller .scroll-tag:nth-of-type(4)').removeClass('next-tag');
  }
}, 100);