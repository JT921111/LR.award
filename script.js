$('.selection').click(function () {
  if ($(this).hasClass('point')) {
    $(this).addClass('uncheck').removeClass('check').removeClass('point');
  } else if ($(this).hasClass('check')) {
    if ($(this).hasClass('ranger')) {
      $(this).addClass('point');
    } else {
      $(this).addClass('uncheck').removeClass('check');
    }
  } else if ($(this).hasClass('uncheck')) {
    $(this).addClass('check').removeClass('uncheck');
  } else if ($(this).hasClass('all')) {
    if ($(this).hasClass('mode')) {
      $('.mode.uncheck').addClass('check').removeClass('uncheck');
    } else if ($(this).hasClass('drop')) {
      $('.drop.check').addClass('uncheck').removeClass('check').removeClass('point');
    }
  }
})

$('.backtothetop').on('click', function () {
  $('html, body').animate({ scrollTop: 0 }, 300);
  return false;
})

function sortTable(n) {
  if (n == 1 || n == 2 || n == 12) {
    var table, rows, switching, i, x, y, shouldSwitch, dirn, switchcount = 0;
    table = document.getElementById("AllList");
    switching = true;
    dirn = "asc";
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 2; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("td")[n];
        y = rows[i + 1].getElementsByTagName("td")[n];
        if (dirn == "asc") {
          if (Number(x.innerHTML) > Number(y.innerHTML)) {
            shouldSwitch = true;
            break;
          }
        } else if (dirn == "desc") {
          if (Number(x.innerHTML) < Number(y.innerHTML)) {
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount++;
      } else {
        if (switchcount == 0 && dirn == "asc") {
          dirn = "desc";
          switching = true;
        }
      }
    }
  }// else {
    // var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    // table = document.getElementById("AllList");
    // switching = true;
    // dir = "asc";
    // while (switching) {
    //   switching = false;
    //   rows = table.rows;
    //   for (i = 2; i < (rows.length - 1); i++) {
    //     shouldSwitch = false;
    //     x = rows[i].getElementsByTagName("td")[n];
    //     y = rows[i + 1].getElementsByTagName("td")[n];
    //     if (dir == "asc") {
    //       if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
    //         shouldSwitch = true;
    //         break;
    //       }
    //     } else if (dir == "desc") {
    //       if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
    //         shouldSwitch = true;
    //         break;
    //       }
    //     }
    //   }
    //   if (shouldSwitch) {
    //     rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
    //     switching = true;
    //     switchcount++;
    //   } else {
    //     if (switchcount == 0 && dir == "asc") {
    //       dir = "desc";
    //       switching = true;
    //     }
    //   }
    // }
  //}
}

const modefilter = [1, 1, 1, 1, 1];
const dropfilter = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function filterList(n) {
  if (n < 10) {
    if (n == 0) {
      modefilter[0] = 1;
      modefilter[1] = 1;
      modefilter[2] = 1;
      modefilter[3] = 1;
      modefilter[4] = 1;
    } else {
      switch (modefilter[n - 1]) {
        case 0:
          modefilter[n - 1] = 1;
          break;
        case 1:
          modefilter[n - 1] = 0;
          break;

      }
    }
  } else {
    if (n == 10) {
      dropfilter[0] = 0;
      dropfilter[1] = 0;
      dropfilter[2] = 0;
      dropfilter[3] = 0;
      dropfilter[4] = 0;
      dropfilter[5] = 0;
      dropfilter[6] = 0;
      dropfilter[7] = 0;
      dropfilter[8] = 0;
    } else {
      switch (dropfilter[n - 11]) {
        case 0:
          dropfilter[n - 11] = 1;
          break;
        case 1:
          if (n == 11) {
            dropfilter[n - 11] = 2;
          } else {
            dropfilter[n - 11] = 0;
          }
          break;
        case 2:
          dropfilter[n - 11] = 0;
          break;
      }
    }
  }
  var tablefetch = document.getElementsByTagName("table"), i;
  var tablefilter = tablefetch[0].rows;
  for (i = 2; i < tablefilter.length; i++) {
    var modefetch = tablefilter[i].getElementsByTagName("td")[0].getAttribute("data-mode");
    if (modefilter[modefetch] == 1) {
      var j, matches = 0;
      for (j = 0; j < dropfilter.length; j++) {
        var dropfetch = tablefilter[i].getElementsByTagName("td")[j + 3].getAttribute("data-drop");
        if (dropfetch < dropfilter[j]) {
          matches = 1;
        }
        if (matches == 1) {
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

$('.floaticon').click(function () {
  if ($('.floaticon').hasClass('active')) {
    $('.floaticon').addClass('unactive').removeClass('active');
    $('.extraitem1').addClass('unspread1').removeClass('spread1');
    $('.extraitem2').addClass('unspread2').removeClass('spread2');
    $('.extraitem3').addClass('unspread3').removeClass('spread3');
    $('.extraitem4').addClass('unspread4').removeClass('spread4');
    setTimeout(function () {
      $('.extrabg').css('display', 'none');
      $('.extraitem').css('display', 'none');
    }, 350);
  } else {
    if ($('.floaticon').hasClass('unactive')) {
      $('.floaticon').removeClass('unactive');
    }
    $('.floaticon').addClass('active').removeClass('unactive');
    $('.extrabg').css('display', 'block');
    $('.extraitem').css('display', 'block');
    $('.extraitem1').addClass('spread1').removeClass('unspread1');
    $('.extraitem2').addClass('spread2').removeClass('unspread2');
    $('.extraitem3').addClass('spread3').removeClass('unspread3');
    $('.extraitem4').addClass('spread4').removeClass('unspread4');
  }
})

$('.extraitem1').click(function () {
  window.open("unlimited-tower.html", "_blank");
})

$('.extraitem2').click(function () {
  window.open("equipment.emulator.html", "_blank");
})

$('.extraitem3').click(function () {
  window.open("starter.html", "_blank");
})

$('.extraitem4').click(function () {
  window.open("help.html", "_blank");
})