import cadquery as cq

def pcb():
    return  (
        cq.importers
        .importStep("sweeppp.step")
        # .translate((-90.75, 103, -5))
        .translate((-97.6, 96.9, -5))
    )

def r(pntList, length: float, width: float, angle: float):
    return (
        cq.Workplane()
        .pushPoints(pntList)
        .eachpoint(
            cq
            .Workplane()
            # .polarLine(squareSize, 0)
            # .polarLine(squareSize, 90)
            # .polarLine(squareSize, 180)
            # .close()
            # .extrude(2)
            .box(length, width, 5)
            .rotate((0, 0, 0), (0, 0, 1),  angle)
        )
    )

# height and width of switch holes
sw = 13.8
# height and width of keys
kx = 18
ky = 17
# above with padding
px = kx #+ 4
py = ky #+ 4

screwSize = 1.5

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

    (px*4, py*0 +12.5-3), # anchor
    (px*4, py*1 +12.5-3),
    (px*4, py*2 +12.5-3),
    (px*4, py*3 +12.5-3),

    (px*5 +1, py*0 +12.5-3),
    (px*5 +1, py*1 +12.5-3),

    (px*3, py*-1 +12.5-3),
    (px*4, py*-1 +12.5-3),
]

color = cq.Color(1, 1, 0.5, 0.1)

# anchor (px*4, py*0 +12.5-3)

# thumb1 = [(px*4, py*0 +12.5-3)]
# thumb1 = [(px*5, py*-1 +12.5-3)]
# thumb1 = [(px*5 +1, py*-1 +12.5-3 -1)]
thumb1 = [(px*5 +3, py*-1 +12.5-3 -2)]

# thumb2 = [(px*4, py*0 +12.5-3)]
# thumb2 = [(px*6, py*-1 +12.5-3)]
# thumb2 = [(px*6 +1, py*-1 +12.5 -8)]
# thumb2 = [(px*6 +6, py*-1 +12.5 -3)]
# thumb2 = [(px*6 +9, py*-1 +12.5 -5)]
thumb2 = [(px*6 +4, py*-1 +12.5-3 -9)]

c = (
    cq.Assembly()
    .add(pcb())
    .add(r(key_points, kx, ky, 0), color=color)
    .add(r(thumb1, kx, ky, -15), color=color)
    .add(r(thumb2, kx, ky, -30), color=color)
)