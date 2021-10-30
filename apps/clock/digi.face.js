(() => {

function getFace(){

    var W = g.getWidth();
    var H = g.getHeight();

    var buf = Graphics.createArrayBuffer(W,92,1,{msb:true});
    function flip() {
      g.setColor(g.theme.fg);
      g.drawImage({width:buf.getWidth(),height:buf.getHeight(),buffer:buf.buffer},0,H/2-46);
    }
    
    var W = g.getWidth();
    var H = g.getHeight();

    function drawTime() {
      buf.clear();
      buf.setColor(1);
      var d = new Date();
      var da = d.toString().split(" ");
      var time = da[4];
      buf.setFont("Vector",54);
      buf.setFontAlign(0,-1);
      buf.drawString(time,W/2,0);
      buf.setFont("6x8",2);
      buf.setFontAlign(0,-1);
      var date = d.toString().substr(0,15);
      buf.drawString(date, W/2, 70);
      flip();
    }  
    return {init:drawTime, tick:drawTime};
}

return getFace;

})();