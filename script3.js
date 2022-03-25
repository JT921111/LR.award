$(document).ready(function () {
  async function shield() {
    $('.sh-list').append('<h2>7星</h2>')
    const data = await fetch("https://raw.githubusercontent.com/JT921111/LR.award/main/api/shield7.json");
    const getdata = await data.json();
    $.each(getdata, function (i) {
      $('.sh-list').append('<img src="' + getdata[i].link + '" data-promote-1="' + getdata[i].skill1 + '" data-promote-2="' + getdata[i].skill2 + '" data-promote-3="' + getdata[i].skill3 + '" title="' + getdata[i].name + '">')
    })
  }
  
  async function accessory() {
    $('.ac-list').append('<h2>7星</h2>')
    const data = await fetch("https://raw.githubusercontent.com/JT921111/LR.award/main/api/accessory7.json");
    const getdata = await data.json();
    $.each(getdata, function (i) {
      $('.ac-list').append('<img src="' + getdata[i].link + '" data-promote-1="' + getdata[i].skill1 + '" data-promote-2="' + getdata[i].skill2 + '" data-promote-3="' + getdata[i].skill3 + '" title="' + getdata[i].name + '">')
    })
  }

  shield();

  accessory();

  function nextpage() {
    if ($('.container').hasClass('step1')) {
      $('.container').removeClass('step1').addClass('step2');
    } else if ($('.container').hasClass('step2')) {
      $('.container').removeClass('step2').addClass('step3');
    } else if ($('.container').hasClass('step3')) {
      $('.container').removeClass('step3').addClass('step4');
    } else if ($('.container').hasClass('step4')) {
      $('.container').removeClass('step4').addClass('step5');
      $('.next').addClass('re');
    } else if ($('.container').hasClass('step5')) {
      $('.container').removeClass('step5').addClass('step1');
      //resetequip();
      $('.next').removeClass('re');
    } else {
      $('.container').addClass('step2');
    }
  }

  $('.next').click(function () {
    nextpage();
  })

  function addweapon() {
    for (var i = 1; i <= 3; i++) {
      if (powerup[i - 1] == 24) {
        powercal[0] += $('up' + i).val();
        powercal[2] += $('up' + i).val();
      } else {
        powercal[powerup[i - 1]] += $('up' + i).val();
      }
    }
  }

  document.addEventListener("keydown", function (event) {
    if (event.code == "ArrowDown") {
      nextpage();
    }
  })

  const powerup = [0, 0, 0];
  const powercal = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] //length 33
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

  $('.wp-list > img').click(function () {
    $('.wp-list > img').removeClass('choose');
    $(this).addClass('choose');
    $('.weapon h4').text($(this).attr('title'));
    powerup[0] = parseInt($(this).attr('data-promote-1'));
    powerup[1] = parseInt($(this).attr('data-promote-2'));
    powerup[2] = parseInt($(this).attr('data-promote-3'));
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
          $('.weapon h3:nth-of-type(' + j + ')').text('攻擊速度(數值)');
          break;
        case 9:
          $('.weapon h3:nth-of-type(' + j + ')').text('移動速度(數值)');
          break;
        case 10:
          $('.weapon h3:nth-of-type(' + j + ')').text('攻擊範圍(數值)');
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
          $('.weeapon h3:nth-of-type(' + j + ')').text('擊退抗性(%)');
          break;
      }
    }
  })

  $(document).on('click', '.sh-list > img', function () {
    $('.sh-list > img').removeClass('choose');
    $(this).addClass('choose');
    $('.shield h4').text($(this).attr('title'));
    powerup[0] = parseInt($(this).attr('data-promote-1'));
    powerup[1] = parseInt($(this).attr('data-promote-2'));
    powerup[2] = parseInt($(this).attr('data-promote-3'));
    for (var i = 0; i < 3; i++) {
      let j = i + 1;
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
          $('.shield h3:nth-of-type(' + j + ')').text('攻擊速度(數值)');
          break;
        case 9:
          $('.shield h3:nth-of-type(' + j + ')').text('移動速度(數值)');
          break;
        case 10:
          $('.shield h3:nth-of-type(' + j + ')').text('攻擊範圍(數值)');
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
    powerup[0] = parseInt($(this).attr('data-promote-1'));
    powerup[1] = parseInt($(this).attr('data-promote-2'));
    powerup[2] = parseInt($(this).attr('data-promote-3'));
    for (var i = 0; i < 3; i++) {
      let j = i + 1;
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
          $('.accessory h3:nth-of-type(' + j + ')').text('攻擊速度(數值)');
          break;
        case 9:
          $('.accessory h3:nth-of-type(' + j + ')').text('移動速度(數值)');
          break;
        case 10:
          $('.accessory h3:nth-of-type(' + j + ')').text('攻擊範圍(數值)');
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