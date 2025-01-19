import cadquery as cq
import yaml

config = """
units:
  # default unit is mm

  # Proxy Spacing Variables
  # Kailh Choc keys are 18mm wide and 17mm tall
  kx: cx
  ky: cy
  $default_width: cx
  $default_height: cy

  # Cherry MX keys are 19mm x 19mm
  #kx: u
  #ky: u

  # Padding Variables
  px: kx + 4
  py: ky + 4

  # Defaults to M2 screws
  screwSize: 1.5

points:
  zones:
    matrix:
      # Fix placement on KiCAD sheet.
      anchor:
        shift: [100, -100]
      key:
        padding: 1ky
        spread: 1kx
      columns:
        pinky:
          key:
            column_net: P20
        ring:
          key:
            stagger: 12.5
            column_net: P19
        middle:
          key:
            stagger: 5
            column_net: P18
        index:
          key:
            stagger: -5
            column_net: P15
        inner:
          key:
            stagger: -3
            column_net: P10
        inner2:
          rows:
            top:
              skip: true
            num:
              skip: true
          key:
            column_net: P9
            spread: 1kx + 1
      rows:
        bottom:
          row_net: P7
        home:
          row_net: P8
        top:
          row_net: P16
        num:
          row_net: P21
    thumbs:
      key:
        padding: 1ky
        spread: 1kx
      anchor:
        ref: matrix_inner_bottom
        shift: [-1kx, -1ky]
      columns:
        outer2:
          key:
            column_net: P18
        outer:
          key:
            column_net: P15
        home:
          key:
            splay: -15
            shift: [3, -2]
            column_net: P10
        inner:
          key:
            splay: -15
            shift: [6, -3]
            column_net: P9
      rows:
        cluster:
          row_net: P6
"""

yaml = yaml.load(config, Loader=yaml.SafeLoader)

kx = 18
ky = 17

px = kx + 4
py = ky + 4

padding: float = ky
spread: float = kx

keys = cq.Workplane()
key_anchors = {}

for zoneName, zone in yaml['points']['zones'].items():
    rows = zone['rows'].keys()
    stagger = 0

    if 'anchor' in zone:
        if 'ref' in zone['anchor']:
            point = key_anchors[zone['anchor']['ref']]
            keys = keys.center(point[0]-kx, point[1]-ky)  # TODO hardcoded for now
    c = 0
    for columnName, column in zone['columns'].items():
        stagger += column['key']['stagger'] if 'stagger' in column['key'] else 0
        col_rows = column['rows'] if 'rows' in column else {}
        shift = column['key']['shift'] if 'shift' in column['key'] else [0,0]
        splay = column['key']['splay'] if 'splay' in column['key'] else 0
        r = 0
        for row in rows:
            if row in col_rows: continue
            point = (spread*c + shift[0], padding*r + stagger + shift[1])
            keys = (
                keys.workplane()
                .pushPoints([point])
                .box(kx-1, ky-1, 5)
            )
            key_anchors[f"{zoneName}_{columnName}_{row}"] = point
            r += 1
        c += 1