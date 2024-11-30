import cadquery as cq

kx = 18
ky = 17
px = kx + 4
py = ky + 4
screwSize = 1.5

result = cq.Workplane("XY").box(100, 100, 1)