function standoff_extrude_4_outline_fn(){
    return CAG.circle({"center":[206,-102.5],"radius":3.16})
.union(
    CAG.circle({"center":[179,-28.5],"radius":3.16})
).union(
    CAG.circle({"center":[112,-109],"radius":3.16})
).union(
    CAG.circle({"center":[100,-37],"radius":3.16})
).extrude({ offset: [0, 0, 4] });
}


function mounting_extrude_4_outline_fn(){
    return CAG.circle({"center":[206,-102.5],"radius":1.5})
.union(
    CAG.circle({"center":[179,-28.5],"radius":1.5})
).union(
    CAG.circle({"center":[112,-109],"radius":1.5})
).union(
    CAG.circle({"center":[100,-37],"radius":1.5})
).extrude({ offset: [0, 0, 4] });
}


function xlBoard_extrude_1_outline_fn(){
    return new CSG.Path2D([[87,-107.8878697],[87,-40.0691011]]).appendArc([89.1480211,-35.9622512],{"radius":5,"clockwise":true,"large":false}).appendPoint([105.4412471,-24.6475109]).appendArc([106.9550066,-23.9367713],{"radius":5,"clockwise":true,"large":false}).appendPoint([124.0707055,-19.1824105]).appendArc([125.4089249,-19],{"radius":5,"clockwise":true,"large":false}).appendPoint([146.8255916,-19]).appendArc([147.4049951,-19.0336843],{"radius":5,"clockwise":true,"large":false}).appendPoint([198.5794035,-25.004032]).appendArc([203,-29.9703476],{"radius":5,"clockwise":true,"large":false}).appendPoint([203,-62.3097675]).appendArc([203.1005487,-62.7467885],{"radius":1,"clockwise":false,"large":false}).appendPoint([226.9621569,-111.8573677]).appendArc([226.7950274,-116.5424728],{"radius":5,"clockwise":true,"large":false}).appendPoint([218.165383,-131.4894553]).appendArc([212.8626105,-133.893939],{"radius":5,"clockwise":true,"large":false}).appendPoint([142.6959669,-119.9786555]).appendArc([142.6390063,-119.9690599],{"radius":1,"clockwise":false,"large":false}).appendPoint([91.3121581,-112.840331]).appendArc([87,-107.8878697],{"radius":5,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}


function xlBoard_extrude_4_outline_fn(){
    return new CSG.Path2D([[87,-107.8878697],[87,-40.0691011]]).appendArc([89.1480211,-35.9622512],{"radius":5,"clockwise":true,"large":false}).appendPoint([105.4412471,-24.6475109]).appendArc([106.9550066,-23.9367713],{"radius":5,"clockwise":true,"large":false}).appendPoint([124.0707055,-19.1824105]).appendArc([125.4089249,-19],{"radius":5,"clockwise":true,"large":false}).appendPoint([146.8255916,-19]).appendArc([147.4049951,-19.0336843],{"radius":5,"clockwise":true,"large":false}).appendPoint([198.5794035,-25.004032]).appendArc([203,-29.9703476],{"radius":5,"clockwise":true,"large":false}).appendPoint([203,-62.3097675]).appendArc([203.1005487,-62.7467885],{"radius":1,"clockwise":false,"large":false}).appendPoint([226.9621569,-111.8573677]).appendArc([226.7950274,-116.5424728],{"radius":5,"clockwise":true,"large":false}).appendPoint([218.165383,-131.4894553]).appendArc([212.8626105,-133.893939],{"radius":5,"clockwise":true,"large":false}).appendPoint([142.6959669,-119.9786555]).appendArc([142.6390063,-119.9690599],{"radius":1,"clockwise":false,"large":false}).appendPoint([91.3121581,-112.840331]).appendArc([87,-107.8878697],{"radius":5,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 4] });
}


function board_extrude_4_outline_fn(){
    return new CSG.Path2D([[89,-107.8878697],[89,-40.0691011]]).appendArc([90.2888126,-37.6049913],{"radius":3,"clockwise":true,"large":false}).appendPoint([106.5820388,-26.2902508]).appendArc([107.4902944,-25.8638071],{"radius":3,"clockwise":true,"large":false}).appendPoint([124.6059932,-21.1094463]).appendArc([125.4089249,-21],{"radius":3,"clockwise":true,"large":false}).appendPoint([146.8255916,-21]).appendArc([147.1732337,-21.0202106],{"radius":3,"clockwise":true,"large":false}).appendPoint([198.3476421,-26.9905582]).appendArc([201,-29.9703476],{"radius":3,"clockwise":true,"large":false}).appendPoint([201,-62.3097675]).appendArc([201.3016461,-63.6208305],{"radius":3,"clockwise":false,"large":false}).appendPoint([225.1632543,-112.7314098]).appendArc([225.0629766,-115.5424728],{"radius":3,"clockwise":true,"large":false}).appendPoint([216.4333322,-130.4894553]).appendArc([213.2516687,-131.9321455],{"radius":3,"clockwise":true,"large":false}).appendPoint([143.0850252,-118.016862]).appendArc([142.9141431,-117.9880754],{"radius":3,"clockwise":false,"large":false}).appendPoint([91.5872948,-110.8593465]).appendArc([89,-107.8878697],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 4] });
}




                function _standoffs_case_fn() {
                    

                // creating part 0 of case _standoffs
                let _standoffs__part_0 = standoff_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _standoffs__part_0_bounds = _standoffs__part_0.getBounds();
                let _standoffs__part_0_x = _standoffs__part_0_bounds[0].x + (_standoffs__part_0_bounds[1].x - _standoffs__part_0_bounds[0].x) / 2
                let _standoffs__part_0_y = _standoffs__part_0_bounds[0].y + (_standoffs__part_0_bounds[1].y - _standoffs__part_0_bounds[0].y) / 2
                _standoffs__part_0 = translate([-_standoffs__part_0_x, -_standoffs__part_0_y, 0], _standoffs__part_0);
                _standoffs__part_0 = rotate([0,0,0], _standoffs__part_0);
                _standoffs__part_0 = translate([_standoffs__part_0_x, _standoffs__part_0_y, 0], _standoffs__part_0);

                _standoffs__part_0 = translate([0,0,0], _standoffs__part_0);
                let result = _standoffs__part_0;
                
            
                    return result;
                }
            
            

                function _holes_case_fn() {
                    

                // creating part 0 of case _holes
                let _holes__part_0 = mounting_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _holes__part_0_bounds = _holes__part_0.getBounds();
                let _holes__part_0_x = _holes__part_0_bounds[0].x + (_holes__part_0_bounds[1].x - _holes__part_0_bounds[0].x) / 2
                let _holes__part_0_y = _holes__part_0_bounds[0].y + (_holes__part_0_bounds[1].y - _holes__part_0_bounds[0].y) / 2
                _holes__part_0 = translate([-_holes__part_0_x, -_holes__part_0_y, 0], _holes__part_0);
                _holes__part_0 = rotate([0,0,0], _holes__part_0);
                _holes__part_0 = translate([_holes__part_0_x, _holes__part_0_y, 0], _holes__part_0);

                _holes__part_0 = translate([0,0,0], _holes__part_0);
                let result = _holes__part_0;
                
            
                    return result;
                }
            
            

                function _xlBottom_case_fn() {
                    

                // creating part 0 of case _xlBottom
                let _xlBottom__part_0 = xlBoard_extrude_1_outline_fn();

                // make sure that rotations are relative
                let _xlBottom__part_0_bounds = _xlBottom__part_0.getBounds();
                let _xlBottom__part_0_x = _xlBottom__part_0_bounds[0].x + (_xlBottom__part_0_bounds[1].x - _xlBottom__part_0_bounds[0].x) / 2
                let _xlBottom__part_0_y = _xlBottom__part_0_bounds[0].y + (_xlBottom__part_0_bounds[1].y - _xlBottom__part_0_bounds[0].y) / 2
                _xlBottom__part_0 = translate([-_xlBottom__part_0_x, -_xlBottom__part_0_y, 0], _xlBottom__part_0);
                _xlBottom__part_0 = rotate([0,0,0], _xlBottom__part_0);
                _xlBottom__part_0 = translate([_xlBottom__part_0_x, _xlBottom__part_0_y, 0], _xlBottom__part_0);

                _xlBottom__part_0 = translate([0,0,0], _xlBottom__part_0);
                let result = _xlBottom__part_0;
                
            
                    return result;
                }
            
            

                function _wall_case_fn() {
                    

                // creating part 0 of case _wall
                let _wall__part_0 = _outerWall_case_fn();

                // make sure that rotations are relative
                let _wall__part_0_bounds = _wall__part_0.getBounds();
                let _wall__part_0_x = _wall__part_0_bounds[0].x + (_wall__part_0_bounds[1].x - _wall__part_0_bounds[0].x) / 2
                let _wall__part_0_y = _wall__part_0_bounds[0].y + (_wall__part_0_bounds[1].y - _wall__part_0_bounds[0].y) / 2
                _wall__part_0 = translate([-_wall__part_0_x, -_wall__part_0_y, 0], _wall__part_0);
                _wall__part_0 = rotate([0,0,0], _wall__part_0);
                _wall__part_0 = translate([_wall__part_0_x, _wall__part_0_y, 0], _wall__part_0);

                _wall__part_0 = translate([0,0,0], _wall__part_0);
                let result = _wall__part_0;
                
            

                // creating part 1 of case _wall
                let _wall__part_1 = _innerWall_case_fn();

                // make sure that rotations are relative
                let _wall__part_1_bounds = _wall__part_1.getBounds();
                let _wall__part_1_x = _wall__part_1_bounds[0].x + (_wall__part_1_bounds[1].x - _wall__part_1_bounds[0].x) / 2
                let _wall__part_1_y = _wall__part_1_bounds[0].y + (_wall__part_1_bounds[1].y - _wall__part_1_bounds[0].y) / 2
                _wall__part_1 = translate([-_wall__part_1_x, -_wall__part_1_y, 0], _wall__part_1);
                _wall__part_1 = rotate([0,0,0], _wall__part_1);
                _wall__part_1 = translate([_wall__part_1_x, _wall__part_1_y, 0], _wall__part_1);

                _wall__part_1 = translate([0,0,0], _wall__part_1);
                result = result.subtract(_wall__part_1);
                
            
                    return result;
                }
            
            

                function _outerWall_case_fn() {
                    

                // creating part 0 of case _outerWall
                let _outerWall__part_0 = xlBoard_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _outerWall__part_0_bounds = _outerWall__part_0.getBounds();
                let _outerWall__part_0_x = _outerWall__part_0_bounds[0].x + (_outerWall__part_0_bounds[1].x - _outerWall__part_0_bounds[0].x) / 2
                let _outerWall__part_0_y = _outerWall__part_0_bounds[0].y + (_outerWall__part_0_bounds[1].y - _outerWall__part_0_bounds[0].y) / 2
                _outerWall__part_0 = translate([-_outerWall__part_0_x, -_outerWall__part_0_y, 0], _outerWall__part_0);
                _outerWall__part_0 = rotate([0,0,0], _outerWall__part_0);
                _outerWall__part_0 = translate([_outerWall__part_0_x, _outerWall__part_0_y, 0], _outerWall__part_0);

                _outerWall__part_0 = translate([0,0,0], _outerWall__part_0);
                let result = _outerWall__part_0;
                
            
                    return result;
                }
            
            

                function _innerWall_case_fn() {
                    

                // creating part 0 of case _innerWall
                let _innerWall__part_0 = board_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _innerWall__part_0_bounds = _innerWall__part_0.getBounds();
                let _innerWall__part_0_x = _innerWall__part_0_bounds[0].x + (_innerWall__part_0_bounds[1].x - _innerWall__part_0_bounds[0].x) / 2
                let _innerWall__part_0_y = _innerWall__part_0_bounds[0].y + (_innerWall__part_0_bounds[1].y - _innerWall__part_0_bounds[0].y) / 2
                _innerWall__part_0 = translate([-_innerWall__part_0_x, -_innerWall__part_0_y, 0], _innerWall__part_0);
                _innerWall__part_0 = rotate([0,0,0], _innerWall__part_0);
                _innerWall__part_0 = translate([_innerWall__part_0_x, _innerWall__part_0_y, 0], _innerWall__part_0);

                _innerWall__part_0 = translate([0,0,0], _innerWall__part_0);
                let result = _innerWall__part_0;
                
            
                    return result;
                }
            
            

                function caseBottom_case_fn() {
                    

                // creating part 0 of case caseBottom
                let caseBottom__part_0 = _standoffs_case_fn();

                // make sure that rotations are relative
                let caseBottom__part_0_bounds = caseBottom__part_0.getBounds();
                let caseBottom__part_0_x = caseBottom__part_0_bounds[0].x + (caseBottom__part_0_bounds[1].x - caseBottom__part_0_bounds[0].x) / 2
                let caseBottom__part_0_y = caseBottom__part_0_bounds[0].y + (caseBottom__part_0_bounds[1].y - caseBottom__part_0_bounds[0].y) / 2
                caseBottom__part_0 = translate([-caseBottom__part_0_x, -caseBottom__part_0_y, 0], caseBottom__part_0);
                caseBottom__part_0 = rotate([0,0,0], caseBottom__part_0);
                caseBottom__part_0 = translate([caseBottom__part_0_x, caseBottom__part_0_y, 0], caseBottom__part_0);

                caseBottom__part_0 = translate([0,0,0], caseBottom__part_0);
                let result = caseBottom__part_0;
                
            

                // creating part 1 of case caseBottom
                let caseBottom__part_1 = _holes_case_fn();

                // make sure that rotations are relative
                let caseBottom__part_1_bounds = caseBottom__part_1.getBounds();
                let caseBottom__part_1_x = caseBottom__part_1_bounds[0].x + (caseBottom__part_1_bounds[1].x - caseBottom__part_1_bounds[0].x) / 2
                let caseBottom__part_1_y = caseBottom__part_1_bounds[0].y + (caseBottom__part_1_bounds[1].y - caseBottom__part_1_bounds[0].y) / 2
                caseBottom__part_1 = translate([-caseBottom__part_1_x, -caseBottom__part_1_y, 0], caseBottom__part_1);
                caseBottom__part_1 = rotate([0,0,0], caseBottom__part_1);
                caseBottom__part_1 = translate([caseBottom__part_1_x, caseBottom__part_1_y, 0], caseBottom__part_1);

                caseBottom__part_1 = translate([0,0,0], caseBottom__part_1);
                result = result.subtract(caseBottom__part_1);
                
            

                // creating part 2 of case caseBottom
                let caseBottom__part_2 = _xlBottom_case_fn();

                // make sure that rotations are relative
                let caseBottom__part_2_bounds = caseBottom__part_2.getBounds();
                let caseBottom__part_2_x = caseBottom__part_2_bounds[0].x + (caseBottom__part_2_bounds[1].x - caseBottom__part_2_bounds[0].x) / 2
                let caseBottom__part_2_y = caseBottom__part_2_bounds[0].y + (caseBottom__part_2_bounds[1].y - caseBottom__part_2_bounds[0].y) / 2
                caseBottom__part_2 = translate([-caseBottom__part_2_x, -caseBottom__part_2_y, 0], caseBottom__part_2);
                caseBottom__part_2 = rotate([0,0,0], caseBottom__part_2);
                caseBottom__part_2 = translate([caseBottom__part_2_x, caseBottom__part_2_y, 0], caseBottom__part_2);

                caseBottom__part_2 = translate([0,0,0], caseBottom__part_2);
                result = result.union(caseBottom__part_2);
                
            

                // creating part 3 of case caseBottom
                let caseBottom__part_3 = _wall_case_fn();

                // make sure that rotations are relative
                let caseBottom__part_3_bounds = caseBottom__part_3.getBounds();
                let caseBottom__part_3_x = caseBottom__part_3_bounds[0].x + (caseBottom__part_3_bounds[1].x - caseBottom__part_3_bounds[0].x) / 2
                let caseBottom__part_3_y = caseBottom__part_3_bounds[0].y + (caseBottom__part_3_bounds[1].y - caseBottom__part_3_bounds[0].y) / 2
                caseBottom__part_3 = translate([-caseBottom__part_3_x, -caseBottom__part_3_y, 0], caseBottom__part_3);
                caseBottom__part_3 = rotate([0,0,0], caseBottom__part_3);
                caseBottom__part_3 = translate([caseBottom__part_3_x, caseBottom__part_3_y, 0], caseBottom__part_3);

                caseBottom__part_3 = translate([0,0,0], caseBottom__part_3);
                result = result.union(caseBottom__part_3);
                
            
                    return result;
                }
            
            
        
            function main() {
                return caseBottom_case_fn();
            }

        