import cadquery as cq

def pcb():
    return  (
        cq.importers
        .importStep("sweeppp.step")
        .translate((-97.6, 96.9, -5))
    )

def pointToBox(pntList, length: float, width: float, angle: float):
    return (
        cq.Workplane()
        .pushPoints(pntList)
        .eachpoint(
            cq
            .Workplane()
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

color = cq.Color(1, 1, 0.5, 0.1)

key_points = []

# matrix
stagger = 0
spread = 0
for column in range(6):
    stagger += {
        0: 0,
        1: 12.5,
        2: 5,
        3: -5,
        4: -3,
        5: 0
    }[column]

    for row in range(4):
        if column == 5 and row > 1: continue
        if column == 5: spread = 1
        key_points.append((px*column + spread, py*row + stagger))

# thumbs
key_points.append((px*3, py*-1 +12.5-3))
key_points.append((px*4, py*-1 +12.5-3))

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
    .add(pointToBox(key_points, kx, ky, 0), color=color)
    .add(pointToBox(thumb1, kx, ky, -15), color=color)
    .add(pointToBox(thumb2, kx, ky, -30), color=color)
)

result = cq.Assembly().add(pcb())
