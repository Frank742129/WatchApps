(() => {

  function getFace(){
  

  var W = g.getWidth();
  var H = g.getHeight();
  var F = 44;

  function drawTime() {    
      function convert(n){
          var t0 = [" ","one","two","three","four","five","six","seven","eight","nine"];
          var t1 = ["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
          var t20= ["twenty","thirty","forty","fifty"];
          if(n<10) return {top:" ",bot:t0[n]};
          else if(n<20) return {top:" ",bot:t1[n-10]};
          else if(n<60) return {top:t20[Math.floor(n/10)-2],bot:t0[n%10]};
          return "error";     
      }
      g.reset();
      g.clearRect(0,40,W-1,H-1);
      var d = new Date();
      g.setColor(g.theme.fg);
      g.setFontAlign(0,0);
      g.setFont("Vector",44);
      var txt = convert(d.getHours());
      g.setColor(g.theme.fg);
      g.drawString(txt.top,W/2,H/2-2*F);
      g.setColor(g.theme.fg2);
      g.drawString(txt.bot,W/2,H/2-F);
      txt = convert(d.getMinutes());
      g.setColor(g.theme.fg);
      g.drawString(txt.top,W/2,H/2);
      g.setColor(g.theme.fg2);
      g.drawString(txt.bot,W/2,H/2+F);
    }


  return {init:drawTime, tick:drawTime, tickpersec:false};
  }

return getFace;

})();