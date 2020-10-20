require("Font7x11Numeric7Seg").add(Graphics);

function draw() {
  g.clear();
  var d = new Date();
  var size = Math.floor(g.getWidth()/(7*5));
  var x = (g.getWidth()/2) - size*6,
      y = (g.getHeight()/2) - size*7;
  g.setFont("7x11Numeric7Seg",size).setFontAlign(1,-1);
  g.drawString(d.getHours(), x, y);
  g.setFontAlign(-1,-1);
  if (d.getSeconds()&1) g.drawString(":", x,y);
  g.drawString(("0"+d.getMinutes()).substr(-2),x+size*4,y);
  // draw seconds
  g.setFont("7x11Numeric7Seg",size/2);
  g.drawString(("0"+d.getSeconds()).substr(-2),x+size*18,y + size*7);
  // date
  var s = d.toString().split(" ").slice(0,4).join(" ");
  g.reset().setFontAlign(0,-1);
  g.drawString(s,g.getWidth()/2, y + size*12);
  g.flip();
}

setInterval(draw, 1000);
draw();
