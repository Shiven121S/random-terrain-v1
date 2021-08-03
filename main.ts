function Map (Step: number) {
    console.log(Step)
    mySprite.x += 8
    tiles.setTileAt(tiles.locationOfSprite(mySprite), assets.tile`myTile`)
    VerticalChange = randint(-1, 1)
    if (VerticalChange == -1) {
        tiles.setTileAt(tiles.locationOfSprite(mySprite), assets.tile`myTile1`)
        mySprite.y += 8
        tiles.setTileAt(tiles.locationOfSprite(mySprite), assets.tile`myTile`)
    } else if (VerticalChange == 1) {
        mySprite.y += -8
        tiles.setTileAt(tiles.locationOfSprite(mySprite), assets.tile`myTile1`)
    } else {
        tiles.setTileAt(tiles.locationOfSprite(mySprite), assets.tile`myTile1`)
    }
}
let VerticalChange = 0
let mySprite: Sprite = null
tiles.setSmallTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 
    `, SpriteKind.Player)
mySprite.setFlag(SpriteFlag.Invisible, true)
tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 7))
tiles.setTileAt(tiles.locationOfSprite(mySprite), assets.tile`myTile1`)
console.log("0")
Map(1)
Map(2)
Map(3)
Map(4)
Map(5)
Map(6)
Map(7)
Map(8)
Map(9)
Map(10)
Map(11)
Map(12)
Map(13)
Map(14)
Map(15)
Map(16)
Map(17)
Map(18)
Map(19)
Map(20)
