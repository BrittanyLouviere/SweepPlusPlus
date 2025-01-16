import cadquery as cq

# height and width of switch holes
sw = 13.8
# height and width of keys
kx = 18
ky = 17
# above with padding
px = kx #+ 4
py = ky #+ 4

screwSize = 1.5

pcb = (
    cq.importers
    .importStep("sweeppp.step")
    .translate((-97.6, 96.9, -5))
)

key_points = [
    (px*0, py*0),
    (px*0, py*1),
    (px*0, py*2),
    (px*0, py*3),

    (px*1, py*0 +12.5),
    (px*1, py*1 +12.5),
    (px*1, py*2 +12.5),
    (px*1, py*3 +12.5),

    (px*2, py*0 +12.5+5),
    (px*2, py*1 +12.5+5),
    (px*2, py*2 +12.5+5),
    (px*2, py*3 +12.5+5),

    (px*3, py*0 +12.5),
    (px*3, py*1 +12.5),
    (px*3, py*2 +12.5),
    (px*3, py*3 +12.5),

    (px*4, py*0 +12.5-3),
    (px*4, py*1 +12.5-3),
    (px*4, py*2 +12.5-3),
    (px*4, py*3 +12.5-3),

    (px*5 +1, py*0 +12.5-3),
    (px*5 +1, py*1 +12.5-3),

    (px*3, py*-1 +12.5-3),
    (px*4, py*-1 +12.5-3),
    # (px*5 +3, py*-1 +12.5-5),
    # (px*6 +6, py*-1 +12.5-6),
]

thumb1 = (
    cq.Workplane()
    # .pushPoints([(px*5 +2.5, py*-1 +12.5-5.5)])
    .pushPoints([(px*5 +3, py*-1 +12.5-3-2)])
    .box(sw, sw, 5)
    # .rotate('<X<Y<Z', '<X>Y<Z', -15)
    # .rotate((kx/2, ky/2, 0), (kx/2, ky/2, 1), -15)
)

rotationStart = (
    thumb1
    .vertices('<X').vertices('<Y').vertices('<Z')
    .objects[0]
    .Center()
)

rotationEnd = (
    thumb1
    .vertices('<X').vertices('>Y').vertices('<Z')
    .objects[0]
    .Center()
)

# TODO how does rotate work??????
thumb1 = (
    thumb1
    .rotate(rotationStart, rotationEnd, -15)
)

r = (
    cq.Workplane()
    .pushPoints(key_points)
    .box(sw, sw, 5)
    .add(thumb1)
    .add(
        cq.Workplane()
        # .pushPoints([(px*6 +6, py*-1 -3)])
        .pushPoints([(px*6 +6, py*-1 +12.5-3-3)])
        .box(sw, sw, 5)
        .rotateAboutCenter((0, 0, 1), -30)
    )

    # .objects[0]
    # .scale(0.85)
)