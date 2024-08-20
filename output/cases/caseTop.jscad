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
    new CSG.Path2D([[200.8376268,-120.5020095],[213.8280078,-128.0020095]]).appendPoint([221.3280078,-115.0116285]).appendPoint([208.3376268,-107.5116285]).appendPoint([200.8376268,-120.5020095]).close().innerToCAG()
).union(
    new CSG.Path2D([[183.1945529,-115.5116097],[197.6834403,-119.3938953]]).appendPoint([201.5657259,-104.9050079]).appendPoint([187.0768385,-101.0227223]).appendPoint([183.1945529,-115.5116097]).close().innerToCAG()
).union(
    new CSG.Path2D([[164.5,-115],[179.5,-115]]).appendPoint([179.5,-100]).appendPoint([164.5,-100]).appendPoint([164.5,-115]).close().innerToCAG()
).union(
    new CSG.Path2D([[146.5,-115],[161.5,-115]]).appendPoint([161.5,-100]).appendPoint([146.5,-100]).appendPoint([146.5,-115]).close().innerToCAG()
).union(
    new CSG.Path2D([[182.5,-81],[197.5,-81]]).appendPoint([197.5,-66]).appendPoint([182.5,-66]).appendPoint([182.5,-81]).close().innerToCAG()
).union(
    new CSG.Path2D([[182.5,-98],[197.5,-98]]).appendPoint([197.5,-83]).appendPoint([182.5,-83]).appendPoint([182.5,-98]).close().innerToCAG()
).union(
    new CSG.Path2D([[164.5,-47],[179.5,-47]]).appendPoint([179.5,-32]).appendPoint([164.5,-32]).appendPoint([164.5,-47]).close().innerToCAG()
).union(
    new CSG.Path2D([[164.5,-64],[179.5,-64]]).appendPoint([179.5,-49]).appendPoint([164.5,-49]).appendPoint([164.5,-64]).close().innerToCAG()
).union(
    new CSG.Path2D([[164.5,-81],[179.5,-81]]).appendPoint([179.5,-66]).appendPoint([164.5,-66]).appendPoint([164.5,-81]).close().innerToCAG()
).union(
    new CSG.Path2D([[164.5,-98],[179.5,-98]]).appendPoint([179.5,-83]).appendPoint([164.5,-83]).appendPoint([164.5,-98]).close().innerToCAG()
).union(
    new CSG.Path2D([[146.5,-44],[161.5,-44]]).appendPoint([161.5,-29]).appendPoint([146.5,-29]).appendPoint([146.5,-44]).close().innerToCAG()
).union(
    new CSG.Path2D([[146.5,-61],[161.5,-61]]).appendPoint([161.5,-46]).appendPoint([146.5,-46]).appendPoint([146.5,-61]).close().innerToCAG()
).union(
    new CSG.Path2D([[146.5,-78],[161.5,-78]]).appendPoint([161.5,-63]).appendPoint([146.5,-63]).appendPoint([146.5,-78]).close().innerToCAG()
).union(
    new CSG.Path2D([[146.5,-95],[161.5,-95]]).appendPoint([161.5,-80]).appendPoint([146.5,-80]).appendPoint([146.5,-95]).close().innerToCAG()
).union(
    new CSG.Path2D([[128.5,-39],[143.5,-39]]).appendPoint([143.5,-24]).appendPoint([128.5,-24]).appendPoint([128.5,-39]).close().innerToCAG()
).union(
    new CSG.Path2D([[128.5,-56],[143.5,-56]]).appendPoint([143.5,-41]).appendPoint([128.5,-41]).appendPoint([128.5,-56]).close().innerToCAG()
).union(
    new CSG.Path2D([[128.5,-73],[143.5,-73]]).appendPoint([143.5,-58]).appendPoint([128.5,-58]).appendPoint([128.5,-73]).close().innerToCAG()
).union(
    new CSG.Path2D([[128.5,-90],[143.5,-90]]).appendPoint([143.5,-75]).appendPoint([128.5,-75]).appendPoint([128.5,-90]).close().innerToCAG()
).union(
    new CSG.Path2D([[110.5,-44],[125.5,-44]]).appendPoint([125.5,-29]).appendPoint([110.5,-29]).appendPoint([110.5,-44]).close().innerToCAG()
).union(
    new CSG.Path2D([[110.5,-61],[125.5,-61]]).appendPoint([125.5,-46]).appendPoint([110.5,-46]).appendPoint([110.5,-61]).close().innerToCAG()
).union(
    new CSG.Path2D([[110.5,-78],[125.5,-78]]).appendPoint([125.5,-63]).appendPoint([110.5,-63]).appendPoint([110.5,-78]).close().innerToCAG()
).union(
    new CSG.Path2D([[110.5,-95],[125.5,-95]]).appendPoint([125.5,-80]).appendPoint([110.5,-80]).appendPoint([110.5,-95]).close().innerToCAG()
).union(
    new CSG.Path2D([[92.5,-56.5],[107.5,-56.5]]).appendPoint([107.5,-41.5]).appendPoint([92.5,-41.5]).appendPoint([92.5,-56.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[92.5,-73.5],[107.5,-73.5]]).appendPoint([107.5,-58.5]).appendPoint([92.5,-58.5]).appendPoint([92.5,-73.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[92.5,-90.5],[107.5,-90.5]]).appendPoint([107.5,-75.5]).appendPoint([92.5,-75.5]).appendPoint([92.5,-90.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[92.5,-107.5],[107.5,-107.5]]).appendPoint([107.5,-92.5]).appendPoint([92.5,-92.5]).appendPoint([92.5,-107.5]).close().innerToCAG()
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

        