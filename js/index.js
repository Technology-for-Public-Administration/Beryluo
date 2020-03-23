
function convert(num){
  var bin = "";
  var conv = [];

  while(num>0) {
      bin = num%2 + bin;
      num = Math.floor(num/2);
  }
  conv = bin.split("");
  while(conv.length < 6){
	  conv.unshift("0");
  }
  return conv;
}

window.setInterval(function(){
    var since = 1582296502000;
    var now = new Date().getTime();
    var d = parseInt((now - since) / 86400000);
    var remain = (now - since) % 86400000;
    var h = parseInt(remain / 3600000);
	remain = remain % 3600000;
    var m = parseInt(remain / 60000);
    var s = parseInt((remain % 60000) / 1000);
  
    var time= addZero(h) + " : " + addZero(m) + " : " + addZero(s);
  
    $('.title').text("We've known each other for " + d + " days, " + h + " hours, " + m + " minutes, " + s + " seconds.");

    var binaryArray = convert(s);
    lightSeconds(binaryArray);
    
    var binaryArray = convert(m);
    lightMinutes(binaryArray);
  
     var binaryArray = convert(h);
    lightHours(binaryArray);
  
}, 1000);

function lightSeconds(array){
    $('.seconds td').attr('class','num0');
  for(var i =0; i<array.length; i++){
    $('.seconds td:eq('+i+')').attr('class','num'+array[i]);
  }
}

function lightMinutes(array){
    $('.minutes td').attr('class','num0');
  for(var i =0; i<array.length; i++){
    $('.minutes td:eq('+i+')').attr('class','num'+array[i]);
  }
}

function lightHours(array){
    $('.hours td').attr('class','num0');
  for(var i =0; i<array.length; i++){
    $('.hours td:eq('+i+')').attr('class','num'+array[i]);
  }
}

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

$(document).ready(function() {
  $.ajax({
    type:"GET",
    url:"https://v1.jinrishici.com/shuqing/aiqing",
    dataType:"json",
    success:function(data){
      $(".mb-0").text(data.content);
    }
  })
});