$(document).ready(function () {

  async function ranger() {
    let data = await fetch("https://raw.githubusercontent.com/JT921111/LR.award/main/api/allrangers2.json")
    let getdata = await data.json()
    $.each(getdata, function (i) {
      $('.ranger-list').append('<div class="rg" style="background-image: url(' + getdata[i].link + ');" name="' + getdata[i].name + '" index="' + i + '" lv="' + getdata[i].lv + '"></div>')
      $('[index=' + i + ']').append('<p>' + $('[index=' + i + ']').attr('lv') + '</p>')
    })
  }
  async function weapon() {
    let data = await fetch("https://raw.githubusercontent.com/JT921111/LR.award/main/api/weapon7.json")
    let getdata = await data.json()
    $.each(getdata, function (i) {
      $('.weapon-list').append('<div class="eq" style="background-image: url(' + getdata[i].link + ');" name="' + getdata[i].name + '" sk1="' + getdata[i].skill1 + '" sk2="' + getdata[i].skill2 + '" sk3="' + getdata[i].skill3 + '"></div>')
    })
    data = await fetch("https://raw.githubusercontent.com/JT921111/LR.award/main/api/weapon6.json")
    getdata = await data.json()
    $.each(getdata, function (i) {
      $('.weapon-list').append('<div class="eq" style="background-image: url(' + getdata[i].link + ');" name="' + getdata[i].name + '" sk1="' + getdata[i].skill1 + '" sk2="' + getdata[i].skill2 + '" sk3="' + getdata[i].skill3 + '"></div>')
    })
  }
  async function shield() {
    let data = await fetch("https://raw.githubusercontent.com/JT921111/LR.award/main/api/shield7.json")
    let getdata = await data.json()
    $.each(getdata, function (i) {
      $('.shield-list').append('<div class="eq" style="background-image: url(' + getdata[i].link + ');" name="' + getdata[i].name + '" sk1="' + getdata[i].skill1 + '" sk2="' + getdata[i].skill2 + '" sk3="' + getdata[i].skill3 + '"></div>')
    })
    data = await fetch("https://raw.githubusercontent.com/JT921111/LR.award/main/api/shield6.json")
    getdata = await data.json()
    $.each(getdata, function (i) {
      $('.shield-list').append('<div class="eq" style="background-image: url(' + getdata[i].link + ');" name="' + getdata[i].name + '" sk1="' + getdata[i].skill1 + '" sk2="' + getdata[i].skill2 + '" sk3="' + getdata[i].skill3 + '"></div>')
    })
  }
  async function accessory() {
    let data = await fetch("https://raw.githubusercontent.com/JT921111/LR.award/main/api/accessory7.json")
    let getdata = await data.json()
    $.each(getdata, function (i) {
      $('.accessory-list').append('<div class="eq" style="background-image: url(' + getdata[i].link + ');" name="' + getdata[i].name + '" sk1="' + getdata[i].skill1 + '" sk2="' + getdata[i].skill2 + '" sk3="' + getdata[i].skill3 + '"></div>')
    })
    data = await fetch("https://raw.githubusercontent.com/JT921111/LR.award/main/api/accessory6.json")
    getdata = await data.json()
    $.each(getdata, function (i) {
      $('.accessory-list').append('<div class="eq" style="background-image: url(' + getdata[i].link + ');" name="' + getdata[i].name + '" sk1="' + getdata[i].skill1 + '" sk2="' + getdata[i].skill2 + '" sk3="' + getdata[i].skill3 + '"></div>')
    })
  }

  $('.overlay').css('display', 'none')
  ranger()
  weapon()
  shield()
  accessory()

  var rangerDatas = {
    "物理攻擊力": 0,
    "魔法攻擊力": 0,
    "體力": 0,
    "物理防禦力": 0,
    "魔法防禦力": 0,
    "攻擊速度": 0,
    "移動速度": 0,
    "攻擊範圍": 0,
    "暴擊率": 0,
    "暴擊傷害": 0,
    "閃避率": 0,
    "命中率": 0,
    "必中率": 0,
    "連擊機率": 0,
    "技能1發動率": 0,
    "技能1冷卻": 0,
    "技能2發動率": 0,
    "技能2冷卻": 0,
    "技能閃避率": 0,
    "技能命中率": 0,
    "技能必中率": 0,
    "技能再次發動率": 0,
    "技能抗性": 0,
    "昏迷抗性": 0,
    "靜止抗性": 0,
    "暴擊抗性": 0,
    "擊退抗性": 0,
    "重新生產時間": 0,
    "礦物成本": 0,
    "物反": 0,
    "魔反": 0
  }

  var skList = {
    0: "物理攻擊力(%)",
    1: "物理攻擊力",
    2: "魔法攻擊力(%)",
    3: "魔法攻擊力",
    4: "體力(%)",
    5: "體力",
    6: "物理防禦力",
    7: "魔法防禦力",
    8: "攻擊速度",
    9: "移動速度",
    10: "攻擊範圍",
    11: "暴擊率",
    12: "暴擊傷害",
    13: "閃避率",
    14: "命中率",
    15: "技能發動率",
    16: "技能閃避率",
    17: "技能命中率",
    18: "技能抗性",
    19: "減產",
    20: "減礦",
    21: "昏迷抗性",
    22: "靜止抗性",
    23: "總攻擊力(%)",
    24: "連擊機率",
    25: "技能再次發動率",
    26: "必中率",
    27: "技能必中率",
    28: "暴擊抗性",
    29: "物反",
    30: "魔反",
    31: "技能冷卻時間",
    32: "擊退抗性"
  }

  var eqSk = [
    [-1, 0],
    [-1, 0],
    [-1, 0],
    [-1, 0],
    [-1, 0],
    [-1, 0],
    [-1, 0],
    [-1, 0],
    [-1, 0]
  ]

  var eqList = {
    "物理攻擊力(%)": 0,
    "物理攻擊力": 0,
    "魔法攻擊力(%)": 0,
    "魔法攻擊力": 0,
    "體力(%)": 0,
    "體力": 0,
    "物理防禦力": 0,
    "魔法防禦力": 0,
    "攻擊速度": 0,
    "移動速度": 0,
    "攻擊範圍": 0,
    "暴擊率": 0,
    "暴擊傷害": 0,
    "閃避率": 0,
    "命中率": 0,
    "技能發動率": 0,
    "技能閃避率": 0,
    "技能命中率": 0,
    "技能抗性": 0,
    "減產": 0,
    "減礦": 0,
    "昏迷抗性": 0,
    "靜止抗性": 0,
    "總攻擊力(%)": 0,
    "連擊機率": 0,
    "技能再次發動率": 0,
    "必中率": 0,
    "技能必中率": 0,
    "暴擊抗性": 0,
    "物反": 0,
    "魔反": 0,
    "技能冷卻時間": 0,
    "擊退抗性": 0
  }

  async function rangerDataInput() {
    let data = await fetch("https://raw.githubusercontent.com/JT921111/LR.award/main/api/allrangers2.json")
    let getdata = await data.json()
    let rgData = getdata[$('.rg-selected').attr('index')]
    rangerDatas['物理攻擊力'] = rgData.physicalAttack
    rangerDatas['魔法攻擊力'] = rgData.magicAttack
    rangerDatas['體力'] = rgData.strength
    rangerDatas['物理防禦力'] = rgData.physicalDefense
    rangerDatas['魔法防禦力'] = rgData.magicDefense
    rangerDatas['攻擊速度'] = rgData.attackSpeed
    rangerDatas['移動速度'] = rgData.movementSpeed
    rangerDatas['攻擊範圍'] = rgData.attackRange
    rangerDatas['暴擊率'] = rgData.criticalRate
    rangerDatas['暴擊傷害'] = rgData.criticalDamage
    rangerDatas['閃避率'] = rgData.evasionRate
    rangerDatas['命中率'] = rgData.hitRate
    rangerDatas['技能1發動率'] = rgData.sk1ActivationRate
    rangerDatas['技能1冷卻'] = rgData.sk1Cooldown
    rangerDatas['技能2發動率'] = rgData.sk2ActivationRate
    rangerDatas['技能2冷卻'] = rgData.sk2Cooldown
    rangerDatas['技能閃避率'] = rgData.skillEvasionRate
    rangerDatas['技能命中率'] = rgData.skillHitRate
    rangerDatas['技能抗性'] = rgData.skillResistance
    rangerDatas['重新生產時間'] = rgData.reproduceTime
    rangerDatas['礦物成本'] = rgData.cost
  }

  function outputCalc() {
    $.each(eqList, function (index, value) {
      eqList[index] = 0
    })

    for (var i = 0; i < 9; i++) {
      let eqs = eqSk[i]
      if (eqs[0] != -1) {
        eqList[skList[eqs[0]]] = eqList[skList[eqs[0]]] + parseFloat(eqs[1])
      }
    }

    var rangerData
    rangerData = rangerDatas['物理攻擊力']
    $('.d1').text(rangerData + rangerData * (eqList['總攻擊力(%)'] + eqList['物理攻擊力(%)']) / 100 + eqList['物理攻擊力'])
    rangerData = rangerDatas['魔法攻擊力']
    $('.d2').text(rangerData + rangerData * (eqList['總攻擊力(%)'] + eqList['魔法攻擊力(%)']) / 100 + eqList['魔法攻擊力'])
    rangerData = rangerDatas['體力']
    $('.d3').text(rangerData + rangerData * eqList['體力(%)'] / 100 + eqList['體力'])
    rangerData = rangerDatas['物理防禦力']
    $('.d4').text(rangerData + eqList['物理防禦力'])
    rangerData = rangerDatas['魔法防禦力']
    $('.d5').text(rangerData + eqList['魔法防禦力'])
    rangerData = rangerDatas['攻擊速度']
    $('.d6').text(rangerData + eqList['攻擊速度'])
    rangerData = rangerDatas['移動速度']
    $('.d7').text(rangerData + eqList['移動速度'])
    rangerData = rangerDatas['攻擊範圍']
    $('.d8').text(rangerData + eqList['攻擊範圍'])
    rangerData = rangerDatas['暴擊率']
    $('.d9').text(rangerData + eqList['暴擊率'])
    rangerData = rangerDatas['暴擊傷害']
    $('.d10').text(rangerData + eqList['暴擊傷害'])
    rangerData = rangerDatas['閃避率']
    $('.d11').text(rangerData + eqList['閃避率'])
    rangerData = rangerDatas['命中率']
    $('.d12').text(rangerData + eqList['命中率'])
    rangerData = rangerDatas['必中率']
    $('.d13').text(rangerData + eqList['必中率'])
    rangerData = rangerDatas['連擊機率']
    $('.d14').text(rangerData + eqList['連擊機率'])
    rangerData = rangerDatas['技能1發動率']
    $('.d15').text(rangerData + eqList['技能發動率'])
    rangerData = rangerDatas['技能1冷卻']
    $('.d16').text(rangerData - rangerData * eqList['技能冷卻時間'])
    rangerData = rangerDatas['技能2發動率']
    $('.d17').text(rangerData + eqList['技能發動率'])
    rangerData = rangerDatas['技能2冷卻']
    $('.d18').text(rangerData - rangerData * eqList['技能冷卻時間'])
    rangerData = rangerDatas['技能閃避率']
    $('.d19').text(rangerData + eqList['技能閃避率'])
    rangerData = rangerDatas['技能命中率']
    $('.d20').text(rangerData + eqList['技能命中率'])
    rangerData = rangerDatas['技能必中率']
    $('.d21').text(rangerData + eqList['技能必中率'])
    rangerData = rangerDatas['技能再次發動率']
    $('.d22').text(rangerData + eqList['技能再次發動率'])
    rangerData = rangerDatas['技能抗性']
    $('.d23').text(rangerData + eqList['技能抗性'])
    rangerData = rangerDatas['昏迷抗性']
    $('.d24').text(rangerData + eqList['昏迷抗性'])
    rangerData = rangerDatas['靜止抗性']
    $('.d25').text(rangerData + eqList['靜止抗性'])
    rangerData = rangerDatas['暴擊抗性']
    $('.d26').text(rangerData + eqList['暴擊抗性'])
    rangerData = rangerDatas['擊退抗性']
    $('.d27').text(rangerData + eqList['擊退抗性'])
    rangerData = rangerDatas['重新生產時間']
    $('.d28').text(rangerData - rangerData * eqList['減產'] / 100)
    rangerData = rangerDatas['礦物成本']
    $('.d29').text(rangerData - rangerData * eqList['減礦'] / 100)
    rangerData = rangerDatas['物反']
    $('.d30').text(rangerData + eqList['物反'])
    rangerData = rangerDatas['魔反']
    $('.d31').text(rangerData + eqList['魔反'])
  }

  async function calculate(i) {
    if (i == 1 || $('.eq-selected').length) {
      switch (i) {
        case 1:
          $('.ranger').attr('style', $('.rg-selected').attr('style'))
          await rangerDataInput()
          break
        case 2:
          $('.weapon').attr('style', $('.eq-selected').attr('style'))
          eqSk[0][0] = $('.eq-selected').attr('sk1')
          eqSk[0][1] = $('.sk1').next().val()
          eqSk[1][0] = $('.eq-selected').attr('sk2')
          eqSk[1][1] = $('.sk2').next().val()
          eqSk[2][0] = $('.eq-selected').attr('sk3')
          eqSk[2][1] = $('.sk3').next().val()
          break
        case 4:
          $('.shield').attr('style', $('.eq-selected').attr('style'))
          eqSk[3][0] = $('.eq-selected').attr('sk1')
          eqSk[3][1] = $('.sk1').next().val()
          eqSk[4][0] = $('.eq-selected').attr('sk2')
          eqSk[4][1] = $('.sk2').next().val()
          eqSk[5][0] = $('.eq-selected').attr('sk3')
          eqSk[5][1] = $('.sk3').next().val()
          break
        case 8:
          $('.accessory').attr('style', $('.eq-selected').attr('style'))
          eqSk[6][0] = $('.eq-selected').attr('sk1')
          eqSk[6][1] = $('.sk1').next().val()
          eqSk[7][0] = $('.eq-selected').attr('sk2')
          eqSk[7][1] = $('.sk2').next().val()
          eqSk[8][0] = $('.eq-selected').attr('sk3')
          eqSk[8][1] = $('.sk3').next().val()
          break
        default:
          break
      }

      await outputCalc()
    }
  }

  $('.settings').on('click', '.ranger', function () {
    if ($('.ranger-list').css('display') == 'none') {
      $('.overlay').css('display', 'block')
      $('.ranger-list').addClass('show-list')
      $('.ranger-list').attr('tag', '1')
    }
  }).on('click', '.weapon', function () {
    if ($('.weapon-list').css('display') == 'none') {
      $('.overlay').css('display', 'block')
      $('.weapon-list').addClass('show-list')
      $('.weapon-list').attr('tag', '2')
    }
  }).on('click', '.shield', function () {
    if ($('.shield-list').css('display') == 'none') {
      $('.overlay').css('display', 'block')
      $('.shield-list').addClass('show-list')
      $('.shield-list').attr('tag', '4')
    }
  }).on('click', '.accessory', function () {
    if ($('.accessory-list').css('display') == 'none') {
      $('.overlay').css('display', 'block')
      $('.accessory-list').addClass('show-list')
      $('.accessory-list').attr('tag', '8')
    }
  })

  $(document).on('click', '.overlay', async function () {
    var i = parseInt($('.ranger-list').attr('tag')) + parseInt($('.weapon-list').attr('tag')) + parseInt($('.shield-list').attr('tag')) + parseInt($('.accessory-list').attr('tag'))
    await calculate(i)
    $('.overlay').css('display', 'none')
    $('.list').removeClass('show-list')
    $('.list').attr('tag', '0')
    $('div').removeClass('eq-selected')
    $('div').remove('.eq-datas')
  })

  $('.ranger .list').on('click', '.rg', function (event) {
    $('div').removeClass('rg-selected')
    $(event.target).addClass('rg-selected')
  })

  $('.equipments .list').on('click', '.eq', function (event) {
    $('div').remove('.eq-datas')
    $('div').removeClass('eq-selected')
    $(event.target).addClass('eq-selected')
    $('<div class="eq-datas eq-' + $(event.target).parent().parent().attr('class') + '"></div>').insertAfter(event.target)
    $('div.eq-datas').append('<div class="eq-name">' + $(event.target).attr('name') + '</div>')
    $('div.eq-datas').append('<div class="sk1">' + skList[$(event.target).attr('sk1')] + '</div><input class="eq-data" type="text" value="0">')
    $('div.eq-datas').append('<div class="sk2">' + skList[$(event.target).attr('sk2')] + '</div><input class="eq-data" type="text" value="0">')
    $('div.eq-datas').append('<div class="sk3">' + skList[$(event.target).attr('sk3')] + '</div><input class="eq-data" type="text" value="0">')
    $('div.eq-datas').append('<div class="eq-cover"></div>')
  }).on('click', '.no-eq', function (event) {
    $('div').remove('.eq-datas')
    $('div').removeClass('eq-selected')
    $('.no-eq').addClass('eq-selected')
  })
})