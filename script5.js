$('.form').on('click', function () {
  navigator.clipboard.writeText("LR.award 問題回報\n網頁名稱:\n需回報的功能:\n發生問題:");
  $('.copied').removeClass('hidden').addClass('showup');
  setTimeout(function () {
    $('.copied').removeClass('showup').addClass('hidden');
  }, 1200);
})