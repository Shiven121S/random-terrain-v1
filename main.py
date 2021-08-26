def Map(Step: number):
    global VerticalChange
    print(Step)
    mySprite.x += 8
    tiles.set_tile_at(tiles.location_of_sprite(mySprite),
        assets.tile("""
            myTile
        """))
    VerticalChange = randint(-1, 1)
    if VerticalChange == -1:
        tiles.set_tile_at(tiles.location_of_sprite(mySprite),
            assets.tile("""
                myTile1
            """))
        mySprite.y += 8
        tiles.set_tile_at(tiles.location_of_sprite(mySprite),
            assets.tile("""
                myTile
            """))
    elif VerticalChange == 1:
        mySprite.y += -8
        tiles.set_tile_at(tiles.location_of_sprite(mySprite),
            assets.tile("""
                myTile1
            """))
    else:
        tiles.set_tile_at(tiles.location_of_sprite(mySprite),
            assets.tile("""
                myTile1
            """))
VerticalChange = 0
mySprite: Sprite = None
tiles.set_small_tilemap(tilemap("""
    level1
"""))
mySprite = sprites.create(img("""
        1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1
    """),
    SpriteKind.player)
mySprite.set_flag(SpriteFlag.INVISIBLE, True)
tiles.place_on_tile(mySprite, tiles.get_tile_location(0, 7))
tiles.set_tile_at(tiles.location_of_sprite(mySprite),
    assets.tile("""
        myTile1
    """))
print("0")
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