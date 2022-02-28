$('.selection').mouseup(function () {
  if ($(this).hasClass('check')) {
    $(this).addClass('uncheck').removeClass('check');
  } else if ($(this).hasClass('uncheck')) {
    $(this).addClass('check').removeClass('uncheck');
  } else if ($(this).hasClass('all')) {
    if ($(this).hasClass('finish')) {
      $('.finish.uncheck').addClass('check').removeClass('uncheck');
    } else if ($(this).hasClass('c')) {
      $(this).removeClass('c').addClass('unc').text("全部選取");
      $('.mode.check').addClass('uncheck').removeClass('check');
    } else if ($(this).hasClass('unc')) {
      $(this).removeClass('unc').addClass('c').text("全部取消");
      $('.mode.uncheck').addClass('check').removeClass('uncheck');
    } else if ($(this).hasClass('drop')) {
      $('.drop.check').addClass('uncheck').removeClass('check');
    }
  }
})

const finishfilter = [1, 1, 1, 1];
const modefilter = [1, 1, 1, 1, 1, 1];
const dropfilter = [0, 0, 0, 0, 0, 0, 0, 0];

function filterList(n) {
  if (n < 10) {
    if (n == 0) {
      finishfilter[0] = 1;
      finishfilter[1] = 1;
      finishfilter[2] = 1;
      finishfilter[3] = 1;
    } else {
      switch (finishfilter[n - 1]) {
        case 0:
          finishfilter[n - 1] = 1;
          break;
        case 1:
          finishfilter[n - 1] = 0;
          break;
      }
    }
  } else if (n < 20) {
    if (n == 10) {
      if($(".mode.all").hasClass('c')){
        modefilter[0] = 1;
        modefilter[1] = 1;
        modefilter[2] = 1;
        modefilter[3] = 1;
        modefilter[4] = 1;
        modefilter[5] = 1;
      } else {
        modefilter[0] = 0;
        modefilter[1] = 0;
        modefilter[2] = 0;
        modefilter[3] = 0;
        modefilter[4] = 0;
        modefilter[5] = 0;
      }
    } else {
      switch (modefilter[n - 11]) {
        case 0:
          modefilter[n - 11] = 1;
          break;
        case 1:
          modefilter[n - 11] = 0;
          break;
      }
    }
  } else {
    if (n == 20) {
      dropfilter[0] = 0;
      dropfilter[1] = 0;
      dropfilter[2] = 0;
      dropfilter[3] = 0;
      dropfilter[4] = 0;
      dropfilter[5] = 0;
      dropfilter[6] = 0;
      dropfilter[7] = 0;
    } else {
      switch (dropfilter[n - 21]) {
        case 0:
          dropfilter[n - 21] = 1;
          break;
        case 1:
          dropfilter[n - 21] = 0;
          break;
      }
    }
  }
  var tablefetch = document.getElementsByTagName("table"), i;
  var tablefilter = tablefetch[0].rows;
  for (i = 1; i < tablefilter.length; i++) {
    var finishfetch = tablefilter[i].getElementsByTagName("td")[0].getAttribute("data-mode");
    var modefetch = tablefilter[i].getElementsByTagName("td")[6].getAttribute("data-drop");
    if (finishfilter[finishfetch] == 1 && modefilter[modefetch] == 1) {
      var j, matches = 0;
      const dropfetch = [0, 0, 0, 0];
      for (j = 0; j < 4; j++) {
        dropfetch[j] = tablefilter[i].getElementsByTagName("td")[j + 3].getAttribute("data-drop-type")
      }
      for (j = 0; j < dropfilter.length; j++) {
        if (matches == 1) {
          break;
        }
        if (j == dropfetch[0] || j == dropfetch[1] || j == dropfetch[2] || j == dropfetch[3]) {
          continue;
        }
        if (dropfilter[j] == 1) {
          matches = 1;
          break;
        }
      }
      if (matches == 0) {
        tablefilter[i].style.display = "";
      } else {
        tablefilter[i].style.display = "none";
      }
    } else {
      tablefilter[i].style.display = "none";
    }
  }
}