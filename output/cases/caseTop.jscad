function topCutout_extrude_1_outline_fn(){
    return new CSG.Path2D([[89,-107.8878697],[89,-40.0691011]]).appendArc([90.2888126,-37.6049913],{"radius":3,"clockwise":true,"large":false}).appendPoint([106.5820388,-26.2902508]).appendArc([107.4902944,-25.8638071],{"radius":3,"clockwise":true,"large":false}).appendPoint([124.6059932,-21.1094463]).appendArc([125.4089249,-21],{"radius":3,"clockwise":true,"large":false}).appendPoint([146.8255916,-21]).appendArc([147.1732337,-21.0202106],{"radius":3,"clockwise":true,"large":false}).appendPoint([198.3476421,-26.9905582]).appendArc([201,-29.9703476],{"radius":3,"clockwise":true,"large":false}).appendPoint([201,-62.3097675]).appendArc([201.3016461,-63.6208305],{"radius":3,"clockwise":false,"large":false}).appendPoint([225.1632543,-112.7314098]).appendArc([225.0629766,-115.5424728],{"radius":3,"clockwise":true,"large":false}).appendPoint([216.4333322,-130.4894553]).appendArc([213.2516687,-131.9321455],{"radius":3,"clockwise":true,"large":false}).appendPoint([143.0850252,-118.016862]).appendArc([142.9141431,-117.9880754],{"radius":3,"clockwise":false,"large":false}).appendPoint([91.5872948,-110.8593465]).appendArc([89,-107.8878697],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    CAG.circle({"center":[206,-102.5],"radius":1.5})
.union(
    CAG.circle({"center":[179,-28.5],"radius":1.5})
).union(
    CAG.circle({"center":[112,-109],"radius":1.5})
).union(
    CAG.circle({"center":[100,-37],"radius":1.5})
).union(
    new CSG.Path2D([[183.9293998,-115.0873456],[197.2591762,-118.6590484]]).appendPoint([200.830879,-105.329272]).appendPoint([187.5011026,-101.7575692]).appendPoint([183.9293998,-115.0873456]).close().innerToCAG()
).union(
    new CSG.Path2D([[111.1,-43.4],[124.9,-43.4]]).appendPoint([124.9,-29.6]).appendPoint([111.1,-29.6]).appendPoint([111.1,-43.4]).close().innerToCAG()
).union(
    new CSG.Path2D([[111.1,-77.4],[124.9,-77.4]]).appendPoint([124.9,-63.6]).appendPoint([111.1,-63.6]).appendPoint([111.1,-77.4]).close().innerToCAG()
).union(
    new CSG.Path2D([[111.1,-94.4],[124.9,-94.4]]).appendPoint([124.9,-80.6]).appendPoint([111.1,-80.6]).appendPoint([111.1,-94.4]).close().innerToCAG()
).union(
    new CSG.Path2D([[93.1,-72.9],[106.9,-72.9]]).appendPoint([106.9,-59.1]).appendPoint([93.1,-59.1]).appendPoint([93.1,-72.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[93.1,-89.9],[106.9,-89.9]]).appendPoint([106.9,-76.1]).appendPoint([93.1,-76.1]).appendPoint([93.1,-89.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[93.1,-106.9],[106.9,-106.9]]).appendPoint([106.9,-93.1]).appendPoint([93.1,-93.1]).appendPoint([93.1,-106.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[111.1,-60.4],[124.9,-60.4]]).appendPoint([124.9,-46.6]).appendPoint([111.1,-46.6]).appendPoint([111.1,-60.4]).close().innerToCAG()
).union(
    new CSG.Path2D([[93.1,-55.9],[106.9,-55.9]]).appendPoint([106.9,-42.1]).appendPoint([93.1,-42.1]).appendPoint([93.1,-55.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[165.1,-114.4],[178.9,-114.4]]).appendPoint([178.9,-100.6]).appendPoint([165.1,-100.6]).appendPoint([165.1,-114.4]).close().innerToCAG()
).union(
    new CSG.Path2D([[147.1,-114.4],[160.9,-114.4]]).appendPoint([160.9,-100.6]).appendPoint([147.1,-100.6]).appendPoint([147.1,-114.4]).close().innerToCAG()
).union(
    new CSG.Path2D([[183.1,-80.4],[196.9,-80.4]]).appendPoint([196.9,-66.6]).appendPoint([183.1,-66.6]).appendPoint([183.1,-80.4]).close().innerToCAG()
).union(
    new CSG.Path2D([[183.1,-97.4],[196.9,-97.4]]).appendPoint([196.9,-83.6]).appendPoint([183.1,-83.6]).appendPoint([183.1,-97.4]).close().innerToCAG()
).union(
    new CSG.Path2D([[165.1,-80.4],[178.9,-80.4]]).appendPoint([178.9,-66.6]).appendPoint([165.1,-66.6]).appendPoint([165.1,-80.4]).close().innerToCAG()
).union(
    new CSG.Path2D([[165.1,-97.4],[178.9,-97.4]]).appendPoint([178.9,-83.6]).appendPoint([165.1,-83.6]).appendPoint([165.1,-97.4]).close().innerToCAG()
).union(
    new CSG.Path2D([[147.1,-43.4],[160.9,-43.4]]).appendPoint([160.9,-29.6]).appendPoint([147.1,-29.6]).appendPoint([147.1,-43.4]).close().innerToCAG()
).union(
    new CSG.Path2D([[147.1,-77.4],[160.9,-77.4]]).appendPoint([160.9,-63.6]).appendPoint([147.1,-63.6]).appendPoint([147.1,-77.4]).close().innerToCAG()
).union(
    new CSG.Path2D([[147.1,-94.4],[160.9,-94.4]]).appendPoint([160.9,-80.6]).appendPoint([147.1,-80.6]).appendPoint([147.1,-94.4]).close().innerToCAG()
).union(
    new CSG.Path2D([[129.1,-38.4],[142.9,-38.4]]).appendPoint([142.9,-24.6]).appendPoint([129.1,-24.6]).appendPoint([129.1,-38.4]).close().innerToCAG()
).union(
    new CSG.Path2D([[129.1,-72.4],[142.9,-72.4]]).appendPoint([142.9,-58.6]).appendPoint([129.1,-58.6]).appendPoint([129.1,-72.4]).close().innerToCAG()
).union(
    new CSG.Path2D([[129.1,-89.4],[142.9,-89.4]]).appendPoint([142.9,-75.6]).appendPoint([129.1,-75.6]).appendPoint([129.1,-89.4]).close().innerToCAG()
).union(
    new CSG.Path2D([[165.1,-46.4],[178.9,-46.4]]).appendPoint([178.9,-32.6]).appendPoint([165.1,-32.6]).appendPoint([165.1,-46.4]).close().innerToCAG()
).union(
    new CSG.Path2D([[165.1,-63.4],[178.9,-63.4]]).appendPoint([178.9,-49.6]).appendPoint([165.1,-49.6]).appendPoint([165.1,-63.4]).close().innerToCAG()
).union(
    new CSG.Path2D([[147.1,-60.4],[160.9,-60.4]]).appendPoint([160.9,-46.6]).appendPoint([147.1,-46.6]).appendPoint([147.1,-60.4]).close().innerToCAG()
).union(
    new CSG.Path2D([[129.1,-55.4],[142.9,-55.4]]).appendPoint([142.9,-41.6]).appendPoint([129.1,-41.6]).appendPoint([129.1,-55.4]).close().innerToCAG()
).union(
    new CSG.Path2D([[201.657242,-120.2823943],[213.6083926,-127.1823943]]).appendPoint([220.5083926,-115.2312437]).appendPoint([208.557242,-108.3312437]).appendPoint([201.657242,-120.2823943]).close().innerToCAG()
).union(
    new CSG.Path2D([[182,-63.5],[200,-63.5]]).appendPoint([200,-29.5]).appendPoint([182,-29.5]).appendPoint([182,-63.5]).close().innerToCAG()
)).extrude({ offset: [0, 0, 1] });
}




                function caseTop_case_fn() {
                    

                // creating part 0 of case caseTop
                let caseTop__part_0 = topCutout_extrude_1_outline_fn();

                // make sure that rotations are relative
                let caseTop__part_0_bounds = caseTop__part_0.getBounds();
                let caseTop__part_0_x = caseTop__part_0_bounds[0].x + (caseTop__part_0_bounds[1].x - caseTop__part_0_bounds[0].x) / 2
                let caseTop__part_0_y = caseTop__part_0_bounds[0].y + (caseTop__part_0_bounds[1].y - caseTop__part_0_bounds[0].y) / 2
                caseTop__part_0 = translate([-caseTop__part_0_x, -caseTop__part_0_y, 0], caseTop__part_0);
                caseTop__part_0 = rotate([0,0,0], caseTop__part_0);
                caseTop__part_0 = translate([caseTop__part_0_x, caseTop__part_0_y, 0], caseTop__part_0);

                caseTop__part_0 = translate([0,0,0], caseTop__part_0);
                let result = caseTop__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return caseTop_case_fn();
            }

        