
exports.add = function(graphics) {
  Graphics.prototype.setFontRobotoSmall = function(scale) {
    // Actual height 19 (18 - 0)
    this.setFontCustom(atob("AAAAAAIAAA4AABwAAAAAAAAAABgAAfAAD8AA/AAPwAD+AAfgAB4AADAAAAAAAA/4AH/8Af/8BwAcDAAYGAAwMABgcAHAf/8Af/wAP+AAAAAAAAAAAAAMAAA4AABwAADAAAP//gf//AAAAAAAAAAAAAAAAAAAAAAAAOAGA8AcDwB4HAHwMA9gYDzAwOGBw4MB/gYD+AwAgBgAAAAAAAAcBwB4DwHgDwOGDgYMDAwYGBg4MDjw4D//gD5+AAAwAAAAAABAAAOAAB8AAH4AA8wAHxgAeDADwGAH//wP//gAAwAABgAADAAAAAAAAAA+OAf8eA/4OBhgMDDAYGGAwMODgYePAwf8BgfwAAAAAAAAAH4AB/8AP/8A5g8BnAYHMAwMYBgY4HAw/8AB/4AA/AAAAAAAAAYAAAwAABgAMDAB4GAPwMD8AYfgAz8AB/AAD4AAHAAAAAAAAAAAGDwA/P4B//4HHhwMGBgYMDAwYGBx4cB//wB8/gAA8AAAAAAAAAPgAB/wAH3wwODhgYDDAwGOBgMYDwzwD//AD/8AA+AAAAAAAAAAEAQAcBwA4DgAAAAAAAA="), 46, atob("BgkNDQ0NDQ0NDQ0NBg=="), 23+(scale<<8)+(1<<16));
  }
}
