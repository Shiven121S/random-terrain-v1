function Fill () {
    for (let value of tiles.getTilesByType(assets.tile`myTile1`)) {
        tiles.placeOnTile(mySprite, value)
        mySprite.y += 8
        if (tiles.tileIs(tiles.locationOfSprite(mySprite), assets.tile`myTile`)) {
            mySprite.y += 8
        }
        while (tiles.tileIs(tiles.locationOfSprite(mySprite), assets.tile`myTile0`)) {
            tiles.setTileAt(tiles.locationOfSprite(mySprite), assets.tile`myTile`)
            mySprite.y += 8
        }
    }
}
function GenerateATile () {
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
for (let index = 0; index < 20; index++) {
    GenerateATile()
}
Fill()
