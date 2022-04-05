$(document).ready(function () {
  // async function rangers() {
  //   const data = await fetch("https://raw.githubusercontent.com/JT921111/LR.award/main/api/allrangers.json");
  //   const getdata = await data.json();
  //   $.each(getdata, function (i) {
  //     $('.rangers-list').append('<div class="rangerchoosen" title="' + getdata[i].name + '" imglink="' + getdata[i].link + '" p140-1="' + getdata[i].pa1 + '" p140-2="' + getdata[i].pa2 + '" p140-3="' + getdata[i].pa3 + '" p140-4="' + getdata[i].pa4 + '" p140-5="' + getdata[i].pa5 + '" p140-6="' + getdata[i].pa6 + '" p140-7="' + getdata[i].pa7 + '" p140-8="' + getdata[i].pa8 + '" p140-9="' + getdata[i].pa9 + '" p140-10="' + getdata[i].pa10 + '" p140-11="' + getdata[i].pa11 + '" p140-12="' + getdata[i].pa12 + '" p140-13="' + getdata[i].pa13 + '" p140-14="' + getdata[i].pa14 + '" p140-15="' + getdata[i].pa15 + '" p140-16="' + getdata[i].pa16 + '" p140-17="' + getdata[i].pa17 + '" p140-18="' + getdata[i].pa18 + '" p240-1="' + getdata[i].pb1 + '" p240-2="' + getdata[i].pb2 + '" p240-3="' + getdata[i].pb3 + '" p240-4="' + getdata[i].pb4 + '" p240-5="' + getdata[i].pb5 + '" p240-6="' + getdata[i].pb6 + '" p240-7="' + getdata[i].pb7 + '" p240-8="' + getdata[i].pb8 + '" p240-9="' + getdata[i].pb9 + '" p240-10="' + getdata[i].pb10 + '" p240-11="' + getdata[i].pb11 + '" p240-12="' + getdata[i].pb12 + '" p240-13="' + getdata[i].pb13 + '" p240-14="' + getdata[i].pb14 + '" p240-15="' + getdata[i].pb15 + '" p240-16="' + getdata[i].pb16 + '" p240-17="' + getdata[i].pb17 + '" p240-18="' + getdata[i].pb18 + '"></div>')
  //   })
  //   $('.ranger-list').append('<div class="extra-spacing"></div>');
  // }

  async function weapon() {
    $('.wp-list').append('<h2>7星</h2>')
    const data = await fetch("https://raw.githubusercontent.com/JT921111/LR.award/main/api/weapon7.json");
    const getdata = await data.json();
    $.each(getdata, function (i) {
      $('.wp-list').append('<img src="' + getdata[i].link + '" data-promote-1="' + getdata[i].skill1 + '" data-promote-2="' + getdata[i].skill2 + '" data-promote-3="' + getdata[i].skill3 + '" title="' + getdata[i].name + '" alt="圖片資源缺失">')
    })
    $('.wp-list').append('<h2>6星</h2>')
    const data2 = await fetch("https://raw.githubusercontent.com/JT921111/LR.award/main/api/weapon6.json");
    const getdata2 = await data2.json();
    $.each(getdata2, function (i) {
      $('.wp-list').append('<img src="' + getdata2[i].link + '" data-promote-1="' + getdata2[i].skill1 + '" data-promote-2="' + getdata2[i].skill2 + '" data-promote-3="' + getdata2[i].skill3 + '" title="' + getdata2[i].name + '" alt="圖片資源缺失">')
    })
    $('.wp-list').append('<div class="extra-spacing"></div>');
  }

  async function shield() {
    $('.sh-list').append('<h2>7星</h2>')
    const data = await fetch("https://raw.githubusercontent.com/JT921111/LR.award/main/api/shield7.json");
    const getdata = await data.json();
    $.each(getdata, function (i) {
      $('.sh-list').append('<img src="' + getdata[i].link + '" data-promote-1="' + getdata[i].skill1 + '" data-promote-2="' + getdata[i].skill2 + '" data-promote-3="' + getdata[i].skill3 + '" title="' + getdata[i].name + '" alt="圖片資源缺失">')
    })
    $('.sh-list').append('<h2>6星</h2>')
    const data2 = await fetch("https://raw.githubusercontent.com/JT921111/LR.award/main/api/shield6.json");
    const getdata2 = await data2.json();
    $.each(getdata2, function (i) {
      $('.sh-list').append('<img src="' + getdata2[i].link + '" data-promote-1="' + getdata2[i].skill1 + '" data-promote-2="' + getdata2[i].skill2 + '" data-promote-3="' + getdata2[i].skill3 + '" title="' + getdata2[i].name + '" alt="圖片資源缺失">')
    })
    $('.sh-list').append('<div class="extra-spacing"></div>');
  }

  async function accessory() {
    $('.ac-list').append('<h2>7星</h2>')
    const data = await fetch("https://raw.githubusercontent.com/JT921111/LR.award/main/api/accessory7.json");
    const getdata = await data.json();
    $.each(getdata, function (i) {
      $('.ac-list').append('<img src="' + getdata[i].link + '" data-promote-1="' + getdata[i].skill1 + '" data-promote-2="' + getdata[i].skill2 + '" data-promote-3="' + getdata[i].skill3 + '" title="' + getdata[i].name + '" alt="圖片資源缺失">')
    })
    $('.ac-list').append('<h2>6星</h2>')
    const data2 = await fetch("https://raw.githubusercontent.com/JT921111/LR.award/main/api/accessory6.json");
    const getdata2 = await data2.json();
    $.each(getdata2, function (i) {
      $('.ac-list').append('<img src="' + getdata2[i].link + '" data-promote-1="' + getdata2[i].skill1 + '" data-promote-2="' + getdata2[i].skill2 + '" data-promote-3="' + getdata2[i].skill3 + '" title="' + getdata2[i].name + '" alt="圖片資源缺失">')
    })
    $('.ac-list').append('<div class="extra-spacing"></div>');
  }

  // rangers();

  weapon();

  shield();

  accessory();

  const powcal = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  function collectdata() {
    $.each(powcal, function (i) {
      var j = i + 1;
      powcal[i] = $('#d' + j).val();
    })
  }

  function addequipw() {
    for (var i = 1; i <= 3; i++) {
      powercal[powerup[i - 1]] += parseFloat($('.weapon .up' + i).val());
    }
  }

  function addequips() {
    for (var i = 4; i <= 6; i++) {
      powercal[powerup[i - 1]] += parseFloat($('.shield .up' + i).val());
    }
  }

  function addequipa() {
    for (var i = 7; i <= 9; i++) {
      powercal[powerup[i - 1]] += parseFloat($('.accessory .up' + i).val());
    }
  }

  function removeequipw() {
    for (var i = 1; i <= 3; i++) {
      powercal[powerup[i - 1]] -= parseFloat($('.weapon .up' + i).val());
    }
  }

  function removeequips() {
    for (var i = 4; i <= 6; i++) {
      powercal[powerup[i - 1]] -= parseFloat($('.shield .up' + i).val());
    }
  }

  function removeequipa() {
    for (var i = 7; i <= 9; i++) {
      powercal[powerup[i - 1]] -= parseFloat($('.accessory .up' + i).val());
    }
  }

  function equipcal() {
    let pc = parseInt(parseFloat(powcal[0]) * (100 + parseFloat(powercal[0]) + parseFloat(powercal[23])) / 100 + parseFloat(powercal[1]));
    $('.data-list li:nth-of-type(1) span').text(pc);
    pc = parseInt(parseFloat(powcal[1]) * (100 + parseFloat(powercal[2]) + parseFloat(powercal[23])) / 100 + parseFloat(powercal[3]));
    $('.data-list li:nth-of-type(2) span').text(pc);
    pc = parseInt(parseFloat(powcal[2]) * (100 + parseFloat(powercal[4])) / 100 + parseFloat(powercal[5]));
    $('.data-list li:nth-of-type(3) span').text(pc);
    pc = parseInt(parseFloat(powcal[3]) + parseFloat(powercal[6]));
    $('.data-list li:nth-of-type(4) span').text(pc);
    pc = parseInt(parseFloat(powcal[4]) + parseFloat(powercal[7]));
    $('.data-list li:nth-of-type(5) span').text(pc);
    pc = parseInt(parseFloat(powcal[5]) * (100 + parseFloat(powercal[8])) / 100);
    $('.data-list li:nth-of-type(6) span').text(pc);
    pc = parseInt(parseFloat(powcal[6]) + parseFloat(powercal[9]));
    $('.data-list li:nth-of-type(7) span').text(pc);
    pc = parseInt(parseFloat(powcal[7]) * (100 + parseFloat(powercal[10])) / 100);
    $('.data-list li:nth-of-type(8) span').text(pc);
    pc = parseInt(parseFloat(powcal[8]) + parseFloat(powercal[11]));
    $('.data-list li:nth-of-type(9) span').text(pc);
    pc = parseInt(parseFloat(powcal[9]) + parseFloat(powercal[12]));
    $('.data-list li:nth-of-type(10) span').text(pc);
    pc = parseInt(parseFloat(powercal[24]));
    $('.data-list li:nth-of-type(11) span').text(pc);
    pc = parseInt(parseFloat(powcal[10]) + parseFloat(powercal[13]));
    $('.data-list li:nth-of-type(12) span').text(pc);
    pc = parseInt(parseFloat(powcal[11]) + parseFloat(powercal[14]));
    $('.data-list li:nth-of-type(13) span').text(pc);
    pc = parseInt(parseFloat(powercal[26]));
    $('.data-list li:nth-of-type(14) span').text(pc);
    pc = parseInt(parseFloat(powcal[12]) + parseFloat(powercal[15]));
    $('.data-list li:nth-of-type(15) span').text(pc);
    pc = parseInt(parseFloat(powercal[25]));
    $('.data-list li:nth-of-type(16) span').text(pc);
    pc = parseInt(parseFloat(powcal[13]) + parseFloat(powercal[16]));
    $('.data-list li:nth-of-type(17) span').text(pc);
    pc = parseInt(parseFloat(powcal[14]) + parseFloat(powercal[17]));
    $('.data-list li:nth-of-type(18) span').text(pc);
    pc = parseInt(parseFloat(powercal[27]));
    $('.data-list li:nth-of-type(19) span').text(pc);
    pc = parseInt(parseFloat(powcal[15]) + parseFloat(powercal[18]));
    $('.data-list li:nth-of-type(20) span').text(pc);
    pc = parseInt(parseFloat(powercal[21]));
    $('.data-list li:nth-of-type(21) span').text(pc);
    pc = parseInt(parseFloat(powercal[22]));
    $('.data-list li:nth-of-type(22) span').text(pc);
    pc = parseInt(parseFloat(powercal[32]));
    $('.data-list li:nth-of-type(23) span').text(pc);
    pc = parseInt(parseFloat(powercal[28]));
    $('.data-list li:nth-of-type(24) span').text(pc);
    pc = parseInt(parseFloat(powercal[31]));
    $('.data-list li:nth-of-type(25) span').text(pc);
    pc = Math.max(parseInt(parseFloat(powcal[16]) * (100 - parseFloat(powercal[19])) / 10) / 10, 1.3);
    $('.data-list li:nth-of-type(26) span').text(pc);
    pc = parseInt(parseFloat(powcal[17]) * (100 - parseFloat(powercal[20])) / 100);
    $('.data-list li:nth-of-type(27) span').text(pc);
    pc = parseInt(parseFloat(powercal[29]));
    $('.data-list li:nth-of-type(28) span').text(pc);
    pc = parseInt(parseFloat(powercal[30]));
    $('.data-list li:nth-of-type(29) span').text(pc);
    $('.main-cal div:nth-of-type(2)').text($('.data-list li:nth-of-type(27) span').text());
    $('.main-cal div:nth-of-type(4)').text(parseInt((parseInt($('.data-list li:nth-of-type(1) span').text()) + parseInt($('.data-list li:nth-of-type(2) span').text())) * parseInt($('.data-list li:nth-of-type(6) span').text()) / 1000 * 3));
    $('.main-cal div:nth-of-type(6)').text($('.data-list li:nth-of-type(3) span').text());
    $('.main-cal div:nth-of-type(8)').text(parseInt($('.data-list li:nth-of-type(4) span').text()) + parseInt($('.data-list li:nth-of-type(5) span').text()));
    if (rangercalc != "0") {
      $('.final-ranger').text('');
      $('.final-ranger').css('background-image', 'url(' + rangercalc + ')');
    } else {
      $('.final-ranger').text('自訂');
      $('.final-ranger').css('background-image', 'none');
    }
  }

  function resetequip() {
    $.each(powercal, function (i) {
      powercal[i] = 0;
    })
  }

  function nextpage() {
    if ($('.container').hasClass('step1')) {
      collectdata();
      $('.container').removeClass('step1 up').addClass('step2 down');
      $('.last').removeClass('first');
    } else if ($('.container').hasClass('step2')) {
      addequipw();
      $('.container').removeClass('step2 up').addClass('step3 down');
    } else if ($('.container').hasClass('step3')) {
      addequips();
      $('.container').removeClass('step3 up').addClass('step4 down');
    } else if ($('.container').hasClass('step4')) {
      addequipa();
      $('.container').removeClass('step4 up').addClass('step5 down');
      $('.next').addClass('re');
      equipcal();
    } else if ($('.container').hasClass('step5')) {
      $('.container').removeClass('step5 up').addClass('step1 down');
      resetequip();
      $('.next').removeClass('re');
      $('.last').addClass('first');
    } else {
      collectdata();
      $('.container').addClass('step2 down');
      $('.last').removeClass('first');
    }
  }

  function lastpage() {
    if ($('.container').hasClass('step2')) {
      $('.container').removeClass('step2 down').addClass('step1 up');
      $('.last').addClass('first');
    } else if ($('.container').hasClass('step3')) {
      removeequipw();
      $('.container').removeClass('step3 down').addClass('step2 up');
    } else if ($('.container').hasClass('step4')) {
      removeequips();
      $('.container').removeClass('step4 down').addClass('step3 up');
    } else if ($('.container').hasClass('step5')) {
      removeequipa();
      $('.container').removeClass('step5 down').addClass('step4 up');
      $('.next').removeClass('re');
    }
  }

  $('.next').click(function () {
    nextpage();
  })

  $('.last').click(function () {
    lastpage();
  })

  document.addEventListener("keydown", function (event) {
    if (event.code == "ArrowDown") {
      nextpage();
    } else if (event.code == "ArrowUp") {
      lastpage();
    }
  })

  let rangerdataadd = "0"
  let rangercalc = "0";
  var lvls = 140;
  const powerup = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
  const powercal = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] //length 33
  //0 物攻%
  //1 物攻
  //2 魔攻%
  //3 魔攻
  //4 體%
  //5 體
  //6 物防
  //7 魔防
  //8 攻速
  //9 移速
  //10 範
  //11 暴
  //12 暴傷
  //13 閃
  //14 命
  //15 技發
  //16 技閃
  //17 技命
  //18 技抗
  //19 減產
  //20 減礦
  //21 昏迷
  //22 靜止
  //23 總攻擊力
  //24 連擊機率
  //25 技能再次發動率
  //26 必中率
  //27 技能必中率
  //28 爆擊抗性
  //29 物反
  //30 魔反
  //31 技能冷卻
  //32 擊退

  function dataaddin() {
    if (rangercalc != "0") {
      for (var i = 1; i <= 18; i++) {
        $('#d' + i).val(rangerdataadd.attr('p' + lvls + '-' + i));
      }
    } else {
      for (var i = 1; i <= 18; i++) {
        $('#d' + i).val(0);
      }
    }
  }

  $(document).on('click', '.lvl-change', function () {
    switch (lvls) {
      case 140:
        lvls = 240;
        $('.lvl-change').text('Lv.240');
        $('.lvl-change').css('background-color', 'hsl(10, 100%, 43%)');
        break;
      case 240:
        lvls = 140;
        $('.lvl-change').text('Lv.140');
        $('.lvl-change').css('background-color', 'hsl(50, 100%, 56%)');
        break;
    }
    dataaddin();
  })

  $(document).on('click', '.ranger-list > div', function () {
    $('.ranger-list > div').removeClass('choose');
    $(this).addClass('choose');
    rangerdataadd = $(this)
    if ($(this).hasClass('rangersdefault')) {
      rangercalc = "0";
      dataaddin();
    } else {
      rangercalc = $(this).attr('imglink');
      dataaddin();
    }
  })

  $(document).on('click', '.wp-list > img', function () {
    $('.wp-list > img').removeClass('choose');
    $(this).addClass('choose');
    $('.weapon h4').text($(this).attr('title'));
    powerup[0] = parseFloat($(this).attr('data-promote-1'));
    powerup[1] = parseFloat($(this).attr('data-promote-2'));
    powerup[2] = parseFloat($(this).attr('data-promote-3'));
    for (var i = 0; i < 3; i++) {
      let j = i + 1;
      switch (powerup[i]) {
        case 0:
          $('.weapon h3:nth-of-type(' + j + ')').text('物理攻擊力(%)');
          break;
        case 1:
          $('.weapon h3:nth-of-type(' + j + ')').text('物理攻擊力(數值)');
          break;
        case 2:
          $('.weapon h3:nth-of-type(' + j + ')').text('魔法攻擊力(%)');
          break;
        case 3:
          $('.weapon h3:nth-of-type(' + j + ')').text('魔法攻擊力(數值)');
          break;
        case 4:
          $('.weapon h3:nth-of-type(' + j + ')').text('體力(%)');
          break;
        case 5:
          $('.weapon h3:nth-of-type(' + j + ')').text('體力(數值)');
          break;
        case 6:
          $('.weapon h3:nth-of-type(' + j + ')').text('物理防禦力(數值)');
          break;
        case 7:
          $('.weapon h3:nth-of-type(' + j + ')').text('魔法防禦力(數值)');
          break;
        case 8:
          $('.weapon h3:nth-of-type(' + j + ')').text('攻擊速度(%)');
          break;
        case 9:
          $('.weapon h3:nth-of-type(' + j + ')').text('移動速度(數值)');
          break;
        case 10:
          $('.weapon h3:nth-of-type(' + j + ')').text('攻擊範圍(%)');
          break;
        case 11:
          $('.weapon h3:nth-of-type(' + j + ')').text('暴擊機率(%)');
          break;
        case 12:
          $('.weapon h3:nth-of-type(' + j + ')').text('暴擊傷害(%)');
          break;
        case 13:
          $('.weapon h3:nth-of-type(' + j + ')').text('閃避率(%)');
          break;
        case 14:
          $('.weapon h3:nth-of-type(' + j + ')').text('命中率(%)');
          break;
        case 15:
          $('.weapon h3:nth-of-type(' + j + ')').text('技能發動率(%)');
          break;
        case 16:
          $('.weapon h3:nth-of-type(' + j + ')').text('技能閃避率(%)');
          break;
        case 17:
          $('.weapon h3:nth-of-type(' + j + ')').text('技能命中率(%)');
          break;
        case 18:
          $('.weapon h3:nth-of-type(' + j + ')').text('技能抗性(%)');
          break;
        case 19:
          $('.weapon h3:nth-of-type(' + j + ')').text('減少重新生產時間(%)');
          break;
        case 20:
          $('.weapon h3:nth-of-type(' + j + ')').text('減少礦物成本(%)');
          break;
        case 21:
          $('.weapon h3:nth-of-type(' + j + ')').text('昏迷抗性(%)');
          break;
        case 22:
          $('.weapon h3:nth-of-type(' + j + ')').text('靜止抗性(%)');
          break;
        case 23:
          $('.weapon h3:nth-of-type(' + j + ')').text('總攻擊力(%)');
          break;
        case 24:
          $('.weapon h3:nth-of-type(' + j + ')').text('連擊機率(%)');
          break;
        case 25:
          $('.weapon h3:nth-of-type(' + j + ')').text('技能再次發動率(%)');
          break;
        case 26:
          $('.weapon h3:nth-of-type(' + j + ')').text('必中率(%)');
          break;
        case 27:
          $('.weapon h3:nth-of-type(' + j + ')').text('技能必中率(%)');
          break;
        case 28:
          $('.weapon h3:nth-of-type(' + j + ')').text('暴擊抗性(%)');
          break;
        case 29:
          $('.weapon h3:nth-of-type(' + j + ')').text('物理傷害反射率(%)');
          break;
        case 30:
          $('.weapon h3:nth-of-type(' + j + ')').text('魔法傷害反射率(%)');
          break;
        case 31:
          $('.weapon h3:nth-of-type(' + j + ')').text('技能冷卻減少(%)');
          break;
        case 32:
          $('.weapon h3:nth-of-type(' + j + ')').text('擊退抗性(%)');
          break;
      }
    }
  })

  $(document).on('click', '.sh-list > img', function () {
    $('.sh-list > img').removeClass('choose');
    $(this).addClass('choose');
    $('.shield h4').text($(this).attr('title'));
    powerup[3] = parseFloat($(this).attr('data-promote-1'));
    powerup[4] = parseFloat($(this).attr('data-promote-2'));
    powerup[5] = parseFloat($(this).attr('data-promote-3'));
    for (var i = 3; i < 6; i++) {
      let j = i - 2;
      switch (powerup[i]) {
        case 0:
          $('.shield h3:nth-of-type(' + j + ')').text('物理攻擊力(%)');
          break;
        case 1:
          $('.shield h3:nth-of-type(' + j + ')').text('物理攻擊力(數值)');
          break;
        case 2:
          $('.shield h3:nth-of-type(' + j + ')').text('魔法攻擊力(%)');
          break;
        case 3:
          $('.shield h3:nth-of-type(' + j + ')').text('魔法攻擊力(數值)');
          break;
        case 4:
          $('.shield h3:nth-of-type(' + j + ')').text('體力(%)');
          break;
        case 5:
          $('.shield h3:nth-of-type(' + j + ')').text('體力(數值)');
          break;
        case 6:
          $('.shield h3:nth-of-type(' + j + ')').text('物理防禦力(數值)');
          break;
        case 7:
          $('.shield h3:nth-of-type(' + j + ')').text('魔法防禦力(數值)');
          break;
        case 8:
          $('.shield h3:nth-of-type(' + j + ')').text('攻擊速度(%)');
          break;
        case 9:
          $('.shield h3:nth-of-type(' + j + ')').text('移動速度(數值)');
          break;
        case 10:
          $('.shield h3:nth-of-type(' + j + ')').text('攻擊範圍(%)');
          break;
        case 11:
          $('.shield h3:nth-of-type(' + j + ')').text('暴擊機率(%)');
          break;
        case 12:
          $('.shield h3:nth-of-type(' + j + ')').text('暴擊傷害(%)');
          break;
        case 13:
          $('.shield h3:nth-of-type(' + j + ')').text('閃避率(%)');
          break;
        case 14:
          $('.shield h3:nth-of-type(' + j + ')').text('命中率(%)');
          break;
        case 15:
          $('.shield h3:nth-of-type(' + j + ')').text('技能發動率(%)');
          break;
        case 16:
          $('.shield h3:nth-of-type(' + j + ')').text('技能閃避率(%)');
          break;
        case 17:
          $('.shield h3:nth-of-type(' + j + ')').text('技能命中率(%)');
          break;
        case 18:
          $('.shield h3:nth-of-type(' + j + ')').text('技能抗性(%)');
          break;
        case 19:
          $('.shield h3:nth-of-type(' + j + ')').text('減少重新生產時間(%)');
          break;
        case 20:
          $('.shield h3:nth-of-type(' + j + ')').text('減少礦物成本(%)');
          break;
        case 21:
          $('.shield h3:nth-of-type(' + j + ')').text('昏迷抗性(%)');
          break;
        case 22:
          $('.shield h3:nth-of-type(' + j + ')').text('靜止抗性(%)');
          break;
        case 23:
          $('.shield h3:nth-of-type(' + j + ')').text('總攻擊力(%)');
          break;
        case 24:
          $('.shield h3:nth-of-type(' + j + ')').text('連擊機率(%)');
          break;
        case 25:
          $('.shield h3:nth-of-type(' + j + ')').text('技能再次發動率(%)');
          break;
        case 26:
          $('.shield h3:nth-of-type(' + j + ')').text('必中率(%)');
          break;
        case 27:
          $('.shield h3:nth-of-type(' + j + ')').text('技能必中率(%)');
          break;
        case 28:
          $('.shield h3:nth-of-type(' + j + ')').text('暴擊抗性(%)');
          break;
        case 29:
          $('.shield h3:nth-of-type(' + j + ')').text('物理傷害反射率(%)');
          break;
        case 30:
          $('.shield h3:nth-of-type(' + j + ')').text('魔法傷害反射率(%)');
          break;
        case 31:
          $('.shield h3:nth-of-type(' + j + ')').text('技能冷卻減少(%)');
          break;
        case 32:
          $('.shield h3:nth-of-type(' + j + ')').text('擊退抗性(%)');
          break;
      }
    }
  })

  $(document).on('click', '.ac-list > img', function () {
    $('.ac-list > img').removeClass('choose');
    $(this).addClass('choose');
    $('.accessory h4').text($(this).attr('title'));
    powerup[6] = parseFloat($(this).attr('data-promote-1'));
    powerup[7] = parseFloat($(this).attr('data-promote-2'));
    powerup[8] = parseFloat($(this).attr('data-promote-3'));
    for (var i = 6; i < 9; i++) {
      let j = i - 5;
      switch (powerup[i]) {
        case 0:
          $('.accessory h3:nth-of-type(' + j + ')').text('物理攻擊力(%)');
          break;
        case 1:
          $('.accessory h3:nth-of-type(' + j + ')').text('物理攻擊力(數值)');
          break;
        case 2:
          $('.accessory h3:nth-of-type(' + j + ')').text('魔法攻擊力(%)');
          break;
        case 3:
          $('.accessory h3:nth-of-type(' + j + ')').text('魔法攻擊力(數值)');
          break;
        case 4:
          $('.accessory h3:nth-of-type(' + j + ')').text('體力(%)');
          break;
        case 5:
          $('.accessory h3:nth-of-type(' + j + ')').text('體力(數值)');
          break;
        case 6:
          $('.accessory h3:nth-of-type(' + j + ')').text('物理防禦力(數值)');
          break;
        case 7:
          $('.accessory h3:nth-of-type(' + j + ')').text('魔法防禦力(數值)');
          break;
        case 8:
          $('.accessory h3:nth-of-type(' + j + ')').text('攻擊速度(%)');
          break;
        case 9:
          $('.accessory h3:nth-of-type(' + j + ')').text('移動速度(數值)');
          break;
        case 10:
          $('.accessory h3:nth-of-type(' + j + ')').text('攻擊範圍(%)');
          break;
        case 11:
          $('.accessory h3:nth-of-type(' + j + ')').text('暴擊機率(%)');
          break;
        case 12:
          $('.accessory h3:nth-of-type(' + j + ')').text('暴擊傷害(%)');
          break;
        case 13:
          $('.accessory h3:nth-of-type(' + j + ')').text('閃避率(%)');
          break;
        case 14:
          $('.accessory h3:nth-of-type(' + j + ')').text('命中率(%)');
          break;
        case 15:
          $('.accessory h3:nth-of-type(' + j + ')').text('技能發動率(%)');
          break;
        case 16:
          $('.accessory h3:nth-of-type(' + j + ')').text('技能閃避率(%)');
          break;
        case 17:
          $('.accessory h3:nth-of-type(' + j + ')').text('技能命中率(%)');
          break;
        case 18:
          $('.accessory h3:nth-of-type(' + j + ')').text('技能抗性(%)');
          break;
        case 19:
          $('.accessory h3:nth-of-type(' + j + ')').text('減少重新生產時間(%)');
          break;
        case 20:
          $('.accessory h3:nth-of-type(' + j + ')').text('減少礦物成本(%)');
          break;
        case 21:
          $('.accessory h3:nth-of-type(' + j + ')').text('昏迷抗性(%)');
          break;
        case 22:
          $('.accessory h3:nth-of-type(' + j + ')').text('靜止抗性(%)');
          break;
        case 23:
          $('.accessory h3:nth-of-type(' + j + ')').text('總攻擊力(%)');
          break;
        case 24:
          $('.accessory h3:nth-of-type(' + j + ')').text('連擊機率(%)');
          break;
        case 25:
          $('.accessory h3:nth-of-type(' + j + ')').text('技能再次發動率(%)');
          break;
        case 26:
          $('.accessory h3:nth-of-type(' + j + ')').text('必中率(%)');
          break;
        case 27:
          $('.accessory h3:nth-of-type(' + j + ')').text('技能必中率(%)');
          break;
        case 28:
          $('.accessory h3:nth-of-type(' + j + ')').text('暴擊抗性(%)');
          break;
        case 29:
          $('.accessory h3:nth-of-type(' + j + ')').text('物理傷害反射率(%)');
          break;
        case 30:
          $('.accessory h3:nth-of-type(' + j + ')').text('魔法傷害反射率(%)');
          break;
        case 31:
          $('.accessory h3:nth-of-type(' + j + ')').text('技能冷卻減少(%)');
          break;
        case 32:
          $('.accessory h3:nth-of-type(' + j + ')').text('擊退抗性(%)');
          break;
      }
    }
  })
})