$('select').on('change', function() {
var valor=(this.value);
if(valor==="nada"){
$('#A-B').show();
    $('#B-C').show();
    $('#FINCA-D').show();
    $('#C-FINCA').show();
    $('#F-FINCA').show();
    $('#FINCA-E').show();
    $('#F-G').show();
    $('#G-FINCA').show();
}else if(valor==="A"){
    $('#A-B').show();
    $('#B-C').hide();
    $('#FINCA-D').hide();
    $('#C-FINCA').hide();
    $('#F-FINCA').hide();
    $('#FINCA-E').hide();
    $('#F-G').hide();
    $('#G-FINCA').hide();
  } else if(valor==="B"){
    $('#B-C').show();
    $('#A-B').hide();
    $('#FINCA-D').hide();
    $('#C-FINCA').hide();
    $('#F-FINCA').hide();
    $('#FINCA-E').hide();
    $('#F-G').hide();
    $('#G-FINCA').hide();
  }  else if(valor==="C"){
    $('#B-C').hide();
    $('#A-B').hide();
    $('#FINCA-D').hide();
    $('#C-FINCA').show();
    $('#F-FINCA').hide();
    $('#FINCA-E').hide();
    $('#F-G').hide();
    $('#G-FINCA').hide();
  }  else if(valor==="D"){
    $('#B-C').hide();
    $('#A-B').hide();
    $('#FINCA-D').show();
    $('#C-FINCA').hide();
    $('#F-FINCA').hide();
    $('#FINCA-E').hide();
    $('#F-G').hide();
    $('#G-FINCA').hide();
  }  else if(valor==="E"){
    $('#B-C').hide();
    $('#A-B').hide();
    $('#FINCA-D').hide();
    $('#C-FINCA').hide();
    $('#F-FINCA').hide();
    $('#FINCA-E').show();
    $('#F-G').hide();
    $('#G-FINCA').hide();
  }  else if(valor==="F"){
    $('#B-C').hide();
    $('#A-B').hide();
    $('#FINCA-D').hide();
    $('#C-FINCA').hide();
    $('#F-FINCA').show();
    $('#FINCA-E').hide();
    $('#F-G').hide();
    $('#G-FINCA').hide();
  }  else if(valor==="G"){
    $('#B-C').hide();
    $('#A-B').hide();
    $('#FINCA-D').hide();
    $('#C-FINCA').hide();
    $('#F-FINCA').hide();
    $('#FINCA-E').hide();
    $('#F-G').show();
    $('#G-FINCA').hide();
  }  else if(valor==="H"){
    $('#B-C').hide();
    $('#A-B').hide();
    $('#FINCA-D').hide();
    $('#C-FINCA').hide();
    $('#F-FINCA').hide();
    $('#FINCA-E').hide();
    $('#F-G').hide();
    $('#G-FINCA').show();
  }if (valor === "1") {
  $('#pist1').show();
  $('#pist2').hide();
  $('#pist3').hide();
  $('#pist4').hide();
  $('#pist5').hide();
  $('#pist6').hide();
  $('#pist7').hide();
  $('#pist8').hide();
  $('#pist9').hide();
  $('#pist10').hide();
  $('#pist11').hide();
  $('#pist12').hide();
  $('#pist13').hide();
  $('#pist14').hide();
  $('#pist15').hide();
  $('#pist16').hide();
  $('#pist17').hide();
  $('#pist18').hide();
  $('#pist19').hide();
  $('#pist19').hide();
  $('#pist20').hide();
  $('#pist21').hide();
  $('#pist22').hide();
  $('#pist23').hide();
  $('#pist24').hide();
  $('#pist25').hide();
  $('#pist26').hide();
} else if(valor === "2") {
  $('#pist2').show();
  $('#pist1').hide();
  $('#pist3').hide();
  $('#pist4').hide();
  $('#pist5').hide();
  $('#pist6').hide();
  $('#pist7').hide();
  $('#pist8').hide();
  $('#pist9').hide();
  $('#pist10').hide();
  $('#pist11').hide();
  $('#pist12').hide();
  $('#pist13').hide();
  $('#pist14').hide();
  $('#pist15').hide();
  $('#pist16').hide();
  $('#pist17').hide();
  $('#pist18').hide();
  $('#pist19').hide();
  $('#pist19').hide();
  $('#pist20').hide();
  $('#pist21').hide();
  $('#pist22').hide();
  $('#pist23').hide();
  $('#pist24').hide();
  $('#pist25').hide();
  $('#pist26').hide();
} else if(valor === "3") {
  $('#pist3').show();
  $('#pist1').hide();
  $('#pist2').hide();
  $('#pist4').hide();
  $('#pist5').hide();
  $('#pist6').hide();
  $('#pist7').hide();
  $('#pist8').hide();
  $('#pist9').hide();
  $('#pist10').hide();
  $('#pist11').hide();
  $('#pist12').hide();
  $('#pist13').hide();
  $('#pist14').hide();
  $('#pist15').hide();
  $('#pist16').hide();
  $('#pist17').hide();
  $('#pist18').hide();
  $('#pist19').hide();
  $('#pist19').hide();
  $('#pist20').hide();
  $('#pist21').hide();
  $('#pist22').hide();
  $('#pist23').hide();
  $('#pist24').hide();
  $('#pist25').hide();
  $('#pist26').hide();
} else if(valor === "4") {
  $('#pist4').show();
  $('#pist1').hide();
  $('#pist2').hide();
  $('#pist3').hide();
  $('#pist5').hide();
  $('#pist6').hide();
  $('#pist7').hide();
  $('#pist8').hide();
  $('#pist9').hide();
  $('#pist10').hide();
  $('#pist11').hide();
  $('#pist12').hide();
  $('#pist13').hide();
  $('#pist14').hide();
  $('#pist15').hide();
  $('#pist16').hide();
  $('#pist17').hide();
  $('#pist18').hide();
  $('#pist19').hide();
  $('#pist19').hide();
  $('#pist20').hide();
  $('#pist21').hide();
  $('#pist22').hide();
  $('#pist23').hide();
  $('#pist24').hide();
  $('#pist25').hide();
  $('#pist26').hide();
} else if(valor === "5") {
  $('#pist5').show();
  $('#pist1').hide();
  $('#pist2').hide();
  $('#pist3').hide();
  $('#pist4').hide();
  $('#pist6').hide();
  $('#pist7').hide();
  $('#pist8').hide();
  $('#pist9').hide();
  $('#pist10').hide();
  $('#pist11').hide();
  $('#pist12').hide();
  $('#pist13').hide();
  $('#pist14').hide();
  $('#pist15').hide();
  $('#pist16').hide();
  $('#pist17').hide();
  $('#pist18').hide();
  $('#pist19').hide();
  $('#pist19').hide();
  $('#pist20').hide();
  $('#pist21').hide();
  $('#pist22').hide();
  $('#pist23').hide();
  $('#pist24').hide();
  $('#pist25').hide();
  $('#pist26').hide();
} else if(valor === "6") {
  $('#pist6').show();
  $('#pist1').hide();
  $('#pist2').hide();
  $('#pist3').hide();
  $('#pist4').hide();
  $('#pist5').hide();
  $('#pist7').hide();
  $('#pist8').hide();
  $('#pist9').hide();
  $('#pist10').hide();
  $('#pist11').hide();
  $('#pist12').hide();
  $('#pist13').hide();
  $('#pist14').hide();
  $('#pist15').hide();
  $('#pist16').hide();
  $('#pist17').hide();
  $('#pist18').hide();
  $('#pist19').hide();
  $('#pist19').hide();
  $('#pist20').hide();
  $('#pist21').hide();
  $('#pist22').hide();
  $('#pist23').hide();
  $('#pist24').hide();
  $('#pist25').hide();
  $('#pist26').hide();
} else if(valor === "7") {
  $('#pist7').show();
  $('#pist1').hide();
  $('#pist2').hide();
  $('#pist3').hide();
  $('#pist4').hide();
  $('#pist5').hide();
  $('#pist6').hide();
  $('#pist8').hide();
  $('#pist9').hide();
  $('#pist10').hide();
  $('#pist11').hide();
  $('#pist12').hide();
  $('#pist13').hide();
  $('#pist14').hide();
  $('#pist15').hide();
  $('#pist16').hide();
  $('#pist17').hide();
  $('#pist18').hide();
  $('#pist19').hide();
  $('#pist19').hide();
  $('#pist20').hide();
  $('#pist21').hide();
  $('#pist22').hide();
  $('#pist23').hide();
  $('#pist24').hide();
  $('#pist25').hide();
  $('#pist26').hide();
} else if(valor === "8") {
  $('#pist8').show();
  $('#pist1').hide();
  $('#pist2').hide();
  $('#pist3').hide();
  $('#pist4').hide();
  $('#pist5').hide();
  $('#pist6').hide();
  $('#pist7').hide();
  $('#pist9').hide();
  $('#pist10').hide();
  $('#pist11').hide();
  $('#pist12').hide();
  $('#pist13').hide();
  $('#pist14').hide();
  $('#pist15').hide();
  $('#pist16').hide();
  $('#pist17').hide();
  $('#pist18').hide();
  $('#pist19').hide();
  $('#pist19').hide();
  $('#pist20').hide();
  $('#pist21').hide();
  $('#pist22').hide();
  $('#pist23').hide();
  $('#pist24').hide();
  $('#pist25').hide();
  $('#pist26').hide();
} else if(valor === "9") {
  $('#pist9').show();
  $('#pist1').hide();
  $('#pist2').hide();
  $('#pist3').hide();
  $('#pist4').hide();
  $('#pist5').hide();
  $('#pist6').hide();
  $('#pist7').hide();
  $('#pist8').hide();
  $('#pist10').hide();
  $('#pist11').hide();
  $('#pist12').hide();
  $('#pist13').hide();
  $('#pist14').hide();
  $('#pist15').hide();
  $('#pist16').hide();
  $('#pist17').hide();
  $('#pist18').hide();
  $('#pist19').hide();
  $('#pist19').hide();
  $('#pist20').hide();
  $('#pist21').hide();
  $('#pist22').hide();
  $('#pist23').hide();
  $('#pist24').hide();
  $('#pist25').hide();
  $('#pist26').hide();
} else if(valor === "10") {
  $('#pist10').show();
  $('#pist1').hide();
  $('#pist2').hide();
  $('#pist3').hide();
  $('#pist4').hide();
  $('#pist5').hide();
  $('#pist6').hide();
  $('#pist7').hide();
  $('#pist8').hide();
  $('#pist9').hide();
  $('#pist11').hide();
  $('#pist12').hide();
  $('#pist13').hide();
  $('#pist14').hide();
  $('#pist15').hide();
  $('#pist16').hide();
  $('#pist17').hide();
  $('#pist18').hide();
  $('#pist19').hide();
  $('#pist19').hide();
  $('#pist20').hide();
  $('#pist21').hide();
  $('#pist22').hide();
  $('#pist23').hide();
  $('#pist24').hide();
  $('#pist25').hide();
  $('#pist26').hide();
} else if(valor === "11") {
  $('#pist11').show();
  $('#pist1').hide();
  $('#pist2').hide();
  $('#pist3').hide();
  $('#pist4').hide();
  $('#pist5').hide();
  $('#pist6').hide();
  $('#pist7').hide();
  $('#pist8').hide();
  $('#pist9').hide();
  $('#pist10').hide();
  $('#pist12').hide();
  $('#pist13').hide();
  $('#pist14').hide();
  $('#pist15').hide();
  $('#pist16').hide();
  $('#pist17').hide();
  $('#pist18').hide();
  $('#pist19').hide();
  $('#pist19').hide();
  $('#pist20').hide();
  $('#pist21').hide();
  $('#pist22').hide();
  $('#pist23').hide();
  $('#pist24').hide();
  $('#pist25').hide();
  $('#pist26').hide();
} else if(valor === "12") {
  $('#pist12').show();
  $('#pist1').hide();
  $('#pist2').hide();
  $('#pist3').hide();
  $('#pist4').hide();
  $('#pist5').hide();
  $('#pist6').hide();
  $('#pist7').hide();
  $('#pist8').hide();
  $('#pist9').hide();
  $('#pist10').hide();
  $('#pist11').hide();
  $('#pist13').hide();
  $('#pist14').hide();
  $('#pist15').hide();
  $('#pist16').hide();
  $('#pist17').hide();
  $('#pist18').hide();
  $('#pist19').hide();
  $('#pist19').hide();
  $('#pist20').hide();
  $('#pist21').hide();
  $('#pist22').hide();
  $('#pist23').hide();
  $('#pist24').hide();
  $('#pist25').hide();
  $('#pist26').hide();
} else if(valor === "13") {
  $('#pist13').show();
  $('#pist1').hide();
  $('#pist2').hide();
  $('#pist3').hide();
  $('#pist4').hide();
  $('#pist5').hide();
  $('#pist6').hide();
  $('#pist7').hide();
  $('#pist8').hide();
  $('#pist9').hide();
  $('#pist10').hide();
  $('#pist11').hide();
  $('#pist12').hide();
  $('#pist14').hide();
  $('#pist15').hide();
  $('#pist16').hide();
  $('#pist17').hide();
  $('#pist18').hide();
  $('#pist19').hide();
  $('#pist19').hide();
  $('#pist20').hide();
  $('#pist21').hide();
  $('#pist22').hide();
  $('#pist23').hide();
  $('#pist24').hide();
  $('#pist25').hide();
  $('#pist26').hide();
} else if(valor === "14") {
  $('#pist14').show();
  $('#pist1').hide();
  $('#pist2').hide();
  $('#pist3').hide();
  $('#pist4').hide();
  $('#pist5').hide();
  $('#pist6').hide();
  $('#pist7').hide();
  $('#pist8').hide();
  $('#pist9').hide();
  $('#pist10').hide();
  $('#pist11').hide();
  $('#pist12').hide();
  $('#pist13').hide();
  $('#pist15').hide();
  $('#pist16').hide();
  $('#pist17').hide();
  $('#pist18').hide();
  $('#pist19').hide();
  $('#pist19').hide();
  $('#pist20').hide();
  $('#pist21').hide();
  $('#pist22').hide();
  $('#pist23').hide();
  $('#pist24').hide();
  $('#pist25').hide();
  $('#pist26').hide();
} else if(valor === "15") {
  $('#pist15').show();
  $('#pist1').hide();
  $('#pist2').hide();
  $('#pist3').hide();
  $('#pist4').hide();
  $('#pist5').hide();
  $('#pist6').hide();
  $('#pist7').hide();
  $('#pist8').hide();
  $('#pist9').hide();
  $('#pist10').hide();
  $('#pist11').hide();
  $('#pist12').hide();
  $('#pist13').hide();
  $('#pist14').hide();
  $('#pist16').hide();
  $('#pist17').hide();
  $('#pist18').hide();
  $('#pist19').hide();
  $('#pist19').hide();
  $('#pist20').hide();
  $('#pist21').hide();
  $('#pist22').hide();
  $('#pist23').hide();
  $('#pist24').hide();
  $('#pist25').hide();
  $('#pist26').hide();
} else if(valor === "16") {
  $('#pist16').show();
  $('#pist1').hide();
  $('#pist2').hide();
  $('#pist3').hide();
  $('#pist4').hide();
  $('#pist5').hide();
  $('#pist6').hide();
  $('#pist7').hide();
  $('#pist8').hide();
  $('#pist9').hide();
  $('#pist10').hide();
  $('#pist11').hide();
  $('#pist12').hide();
  $('#pist13').hide();
  $('#pist14').hide();
  $('#pist15').hide();
  $('#pist17').hide();
  $('#pist18').hide();
  $('#pist19').hide();
  $('#pist19').hide();
  $('#pist20').hide();
  $('#pist21').hide();
  $('#pist22').hide();
  $('#pist23').hide();
  $('#pist24').hide();
  $('#pist25').hide();
  $('#pist26').hide();
} else if(valor === "17") {
  $('#pist17').show();
  $('#pist1').hide();
  $('#pist2').hide();
  $('#pist3').hide();
  $('#pist4').hide();
  $('#pist5').hide();
  $('#pist6').hide();
  $('#pist7').hide();
  $('#pist8').hide();
  $('#pist9').hide();
  $('#pist10').hide();
  $('#pist11').hide();
  $('#pist12').hide();
  $('#pist13').hide();
  $('#pist14').hide();
  $('#pist15').hide();
  $('#pist16').hide();
  $('#pist18').hide();
  $('#pist19').hide();
  $('#pist19').hide();
  $('#pist20').hide();
  $('#pist21').hide();
  $('#pist22').hide();
  $('#pist23').hide();
  $('#pist24').hide();
  $('#pist25').hide();
  $('#pist26').hide();
} else if(valor === "18") {
  $('#pist18').show();
  $('#pist1').hide();
  $('#pist2').hide();
  $('#pist3').hide();
  $('#pist4').hide();
  $('#pist5').hide();
  $('#pist6').hide();
  $('#pist7').hide();
  $('#pist8').hide();
  $('#pist9').hide();
  $('#pist10').hide();
  $('#pist11').hide();
  $('#pist12').hide();
  $('#pist13').hide();
  $('#pist14').hide();
  $('#pist15').hide();
  $('#pist16').hide();
  $('#pist17').hide();
  $('#pist19').hide();
  $('#pist19').hide();
  $('#pist20').hide();
  $('#pist21').hide();
  $('#pist22').hide();
  $('#pist23').hide();
  $('#pist24').hide();
  $('#pist25').hide();
  $('#pist26').hide();
} else if(valor === "19") {
  $('#pist19').show();
  $('#pist1').hide();
  $('#pist2').hide();
  $('#pist3').hide();
  $('#pist4').hide();
  $('#pist5').hide();
  $('#pist6').hide();
  $('#pist7').hide();
  $('#pist8').hide();
  $('#pist9').hide();
  $('#pist10').hide();
  $('#pist11').hide();
  $('#pist12').hide();
  $('#pist13').hide();
  $('#pist14').hide();
  $('#pist15').hide();
  $('#pist16').hide();
  $('#pist17').hide();
  $('#pist18').hide();
  $('#pist19').hide();
  $('#pist20').hide();
  $('#pist21').hide();
  $('#pist22').hide();
  $('#pist23').hide();
  $('#pist24').hide();
  $('#pist25').hide();
  $('#pist26').hide();
} else if(valor === "20") {
  $('#pist20').show();
  $('#pist1').hide();
  $('#pist2').hide();
  $('#pist3').hide();
  $('#pist4').hide();
  $('#pist5').hide();
  $('#pist6').hide();
  $('#pist7').hide();
  $('#pist8').hide();
  $('#pist9').hide();
  $('#pist10').hide();
  $('#pist11').hide();
  $('#pist12').hide();
  $('#pist13').hide();
  $('#pist14').hide();
  $('#pist15').hide();
  $('#pist16').hide();
  $('#pist17').hide();
  $('#pist18').hide();
  $('#pist19').hide();
  $('#pist19').hide();
  $('#pist21').hide();
  $('#pist22').hide();
  $('#pist23').hide();
  $('#pist24').hide();
  $('#pist25').hide();
  $('#pist26').hide();
} else if(valor === "21") {
  $('#pist21').show();
  $('#pist1').hide();
  $('#pist2').hide();
  $('#pist3').hide();
  $('#pist4').hide();
  $('#pist5').hide();
  $('#pist6').hide();
  $('#pist7').hide();
  $('#pist8').hide();
  $('#pist9').hide();
  $('#pist10').hide();
  $('#pist11').hide();
  $('#pist12').hide();
  $('#pist13').hide();
  $('#pist14').hide();
  $('#pist15').hide();
  $('#pist16').hide();
  $('#pist17').hide();
  $('#pist18').hide();
  $('#pist19').hide();
  $('#pist19').hide();
  $('#pist20').hide();
  $('#pist22').hide();
  $('#pist23').hide();
  $('#pist24').hide();
  $('#pist25').hide();
  $('#pist26').hide();
} else if(valor === "22") {
  $('#pist22').show();
  $('#pist1').hide();
  $('#pist2').hide();
  $('#pist3').hide();
  $('#pist4').hide();
  $('#pist5').hide();
  $('#pist6').hide();
  $('#pist7').hide();
  $('#pist8').hide();
  $('#pist9').hide();
  $('#pist10').hide();
  $('#pist11').hide();
  $('#pist12').hide();
  $('#pist13').hide();
  $('#pist14').hide();
  $('#pist15').hide();
  $('#pist16').hide();
  $('#pist17').hide();
  $('#pist18').hide();
  $('#pist19').hide();
  $('#pist19').hide();
  $('#pist20').hide();
  $('#pist21').hide();
  $('#pist23').hide();
  $('#pist24').hide();
  $('#pist25').hide();
  $('#pist26').hide();
} else if(valor === "23") {
  $('#pist23').show();
  $('#pist1').hide();
  $('#pist2').hide();
  $('#pist3').hide();
  $('#pist4').hide();
  $('#pist5').hide();
  $('#pist6').hide();
  $('#pist7').hide();
  $('#pist8').hide();
  $('#pist9').hide();
  $('#pist10').hide();
  $('#pist11').hide();
  $('#pist12').hide();
  $('#pist13').hide();
  $('#pist14').hide();
  $('#pist15').hide();
  $('#pist16').hide();
  $('#pist17').hide();
  $('#pist18').hide();
  $('#pist19').hide();
  $('#pist19').hide();
  $('#pist20').hide();
  $('#pist21').hide();
  $('#pist22').hide();
  $('#pist24').hide();
  $('#pist25').hide();
  $('#pist26').hide();
} else if(valor === "24") {
  $('#pist24').show();
  $('#pist1').hide();
  $('#pist2').hide();
  $('#pist3').hide();
  $('#pist4').hide();
  $('#pist5').hide();
  $('#pist6').hide();
  $('#pist7').hide();
  $('#pist8').hide();
  $('#pist9').hide();
  $('#pist10').hide();
  $('#pist11').hide();
  $('#pist12').hide();
  $('#pist13').hide();
  $('#pist14').hide();
  $('#pist15').hide();
  $('#pist16').hide();
  $('#pist17').hide();
  $('#pist18').hide();
  $('#pist19').hide();
  $('#pist19').hide();
  $('#pist20').hide();
  $('#pist21').hide();
  $('#pist22').hide();
  $('#pist23').hide();
  $('#pist25').hide();
  $('#pist26').hide();
} else if(valor === "25") {
  $('#pist25').show();
  $('#pist1').hide();
  $('#pist2').hide();
  $('#pist3').hide();
  $('#pist4').hide();
  $('#pist5').hide();
  $('#pist6').hide();
  $('#pist7').hide();
  $('#pist8').hide();
  $('#pist9').hide();
  $('#pist10').hide();
  $('#pist11').hide();
  $('#pist12').hide();
  $('#pist13').hide();
  $('#pist14').hide();
  $('#pist15').hide();
  $('#pist16').hide();
  $('#pist17').hide();
  $('#pist18').hide();
  $('#pist19').hide();
  $('#pist19').hide();
  $('#pist20').hide();
  $('#pist21').hide();
  $('#pist22').hide();
  $('#pist23').hide();
  $('#pist24').hide();
  $('#pist26').hide();
} else if(valor === "26") {
  $('#pist26').show();
  $('#pist1').hide();
  $('#pist2').hide();
  $('#pist3').hide();
  $('#pist4').hide();
  $('#pist5').hide();
  $('#pist6').hide();
  $('#pist7').hide();
  $('#pist8').hide();
  $('#pist9').hide();
  $('#pist10').hide();
  $('#pist11').hide();
  $('#pist12').hide();
  $('#pist13').hide();
  $('#pist14').hide();
  $('#pist15').hide();
  $('#pist16').hide();
  $('#pist17').hide();
  $('#pist18').hide();
  $('#pist19').hide();
  $('#pist19').hide();
  $('#pist20').hide();
  $('#pist21').hide();
  $('#pist22').hide();
  $('#pist23').hide();
  $('#pist24').hide();
  $('#pist25').hide();
} else if(valor === "0") {
  $('#pist1').show();
  $('#pist2').show();
  $('#pist3').show();
  $('#pist4').show();
  $('#pist5').show();
  $('#pist6').show();
  $('#pist7').show();
  $('#pist8').show();
  $('#pist9').show();
  $('#pist10').show();
  $('#pist11').show();
  $('#pist12').show();
  $('#pist13').show();
  $('#pist14').show();
  $('#pist15').show();
  $('#pist16').show();
  $('#pist17').show();
  $('#pist18').show();
  $('#pist19').show();
  $('#pist19').show();
  $('#pist20').show();
  $('#pist21').show();
  $('#pist22').show();
  $('#pist23').show();
  $('#pist24').show();
  $('#pist25').show();
  $('#pist26').show();
}
});