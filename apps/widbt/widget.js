WIDGETS["bluetooth"]={area:"tr",width:15,draw:function() {
  g.reset();
  if (NRF.getSecurityStatus().connected) {
    if (g.getBgColor() === 31) { // If background color is blue use cyan instead
      g.setColor("#0ff");
    } else {
      g.setColor((g.getBPP()>8) ? "#07f" : (g.theme.dark ? "#0ff" : "#00f"));
    }
  } else {
    g.setColor(g.theme.dark ? "#666" : "#999");
  }
  g.drawImage(atob("CxQBBgDgFgJgR4jZMawfAcA4D4NYybEYIwTAsBwDAA=="),2+this.x,2+this.y);
},changed:function() {
  WIDGETS["bluetooth"].draw();
}};
NRF.on('connect',WIDGETS["bluetooth"].changed);
NRF.on('disconnect',WIDGETS["bluetooth"].changed);

/*
** Advertise a writeable characteristic. Accepts text (in 20 char
** chunks) terminated with __EOM__ by itself. If there's text, show
** it (as an alarm), otherwise reload the alarm & msg files (empty
** string signals another BLE process updated those files)
*/
var BLEMessage = "";

NRF.setServices({});

NRF.setServices({
  "0x190a": {
    "0x0002": {
      value : [0],
      maxLen : 20,
      writable : true,
      onWrite : function(evt) {
		filterCmd(evt.data);
      }
    }
  }
}, { uart : false, advertise: [ '190a' ] });

// Change name to 'Golfwatch'
NRF.setAdvertising({}, {name:"Golfwatch"});
NRF.disconnect();

void filterCmd(String Command) {
	if (Command.substring(0, 7) == "AT+HOLE")
	{
        Bangle.buzz(100);
	}
	else if (Command.substring(0, 11) == "AT+NRHOLES=") {
		int holes = Command.substring(11).toInt();
		Bangle.buzz(holes*100);
	}
}
