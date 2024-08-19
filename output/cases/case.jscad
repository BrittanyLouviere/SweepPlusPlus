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
            
            

                function case_case_fn() {
                    

                // creating part 0 of case case
                let case__part_0 = _xlBottom_case_fn();

                // make sure that rotations are relative
                let case__part_0_bounds = case__part_0.getBounds();
                let case__part_0_x = case__part_0_bounds[0].x + (case__part_0_bounds[1].x - case__part_0_bounds[0].x) / 2
                let case__part_0_y = case__part_0_bounds[0].y + (case__part_0_bounds[1].y - case__part_0_bounds[0].y) / 2
                case__part_0 = translate([-case__part_0_x, -case__part_0_y, 0], case__part_0);
                case__part_0 = rotate([0,0,0], case__part_0);
                case__part_0 = translate([case__part_0_x, case__part_0_y, 0], case__part_0);

                case__part_0 = translate([0,0,0], case__part_0);
                let result = case__part_0;
                
            

                // creating part 1 of case case
                let case__part_1 = _wall_case_fn();

                // make sure that rotations are relative
                let case__part_1_bounds = case__part_1.getBounds();
                let case__part_1_x = case__part_1_bounds[0].x + (case__part_1_bounds[1].x - case__part_1_bounds[0].x) / 2
                let case__part_1_y = case__part_1_bounds[0].y + (case__part_1_bounds[1].y - case__part_1_bounds[0].y) / 2
                case__part_1 = translate([-case__part_1_x, -case__part_1_y, 0], case__part_1);
                case__part_1 = rotate([0,0,0], case__part_1);
                case__part_1 = translate([case__part_1_x, case__part_1_y, 0], case__part_1);

                case__part_1 = translate([0,0,0], case__part_1);
                result = result.union(case__part_1);
                
            
                    return result;
                }
            
            
        
            function main() {
                return case_case_fn();
            }

        