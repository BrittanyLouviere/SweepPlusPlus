import cadquery as cq

# TODO not getting correct sizing
# pcb import is correct size

kx = 18
ky = 17
px = kx + 4
py = ky + 4
screwSize = 1.5

pcb = cq.importers.importStep("sweeppp.step").translate((-97.5, 97, -5))

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

r = (
    cq.Workplane()
    .pushPoints(key_points)
    .box(kx, ky, 5)
    .add(
        cq.Workplane()
        .pushPoints([(px*5 +3, py*-1 +12.5-5)])
        .box(kx, ky, 5)
        .rotateAboutCenter((0, 0, 1), -15)
    )
    .add(
        cq.Workplane()
        .pushPoints([(px*6 +6, py*-1 -3)])
        .box(kx, ky, 5)
        .rotateAboutCenter((0, 0, 1), -30)
    )
)