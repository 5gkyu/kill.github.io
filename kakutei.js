function kakutei() {

    var X=document.getElementById("X").value;
    var Y=document.getElementById("Y").value;


    var atk=parseFloat(document.getElementById("atk").value);
    var urt=parseFloat(document.getElementById("urt").value);
    var urtnum=parseFloat(document.getElementById("urtnum").value);
    var gje=parseFloat(document.getElementById("gje").value);
    var gjenum=parseFloat(document.getElementById("gjenum").value);

    var gia=document.getElementById("damegeg");
    var gusb=document.getElementById("gusb");
    var ruffsb=document.getElementById("ruffsb");
    var bitbc=document.getElementById("bitbc");
    var bitb=parseFloat(document.getElementById("bitb").value);

    if(atk!==0){
            if(gia.checked && !ruffsb.checked && !bitbc.checked && !gusb.checked){
        atk=atk+atk*0.15;
        urt=urt+urt*0.15;
    }
            if(ruffsb.checked && !gia.checked && !bitbc.checked && !gusb.checked){
        atk=atk+atk*0.2;
        urt=urt+urt*0.2;
    }
            if(bitbc.checked && !gia.checked && !ruffsb.checked && !gusb.checked){
        atk=atk+atk*bitb;
        urt=urt+urt*bitb;
    }
            if(gusb.checked && !bitbc.checked && !gia.checked && !ruffsb.checked){
        atk=atk+atk*0.25;
        urt=urt+urt*0.25;
    }
    
        if(gia.checked&&ruffsb.checked&&!bitbc.checked&& !gusb.checked){
            atk=atk+atk*0.15+atk*0.2;
            urt=urt+urt*0.15+urt*0.2;
        }
        if(gia.checked&&bitbc.checked&&!ruffsb.checked&& !gusb.checked){
            atk=atk+atk*0.15+atk*bitb;
            urt=urt+urt*0.15+urt*bitb;
        }
        if(ruffsb.checked&&bitbc.checked&&!gia.checked&& !gusb.checked){
            atk=atk+atk*0.2+atk*bitb;
            urt=urt+urt*0.2+urt*bitb;
        }
        if(gia.checked&&ruffsb.checked&&bitbc.checked&& !gusb.checked){
            atk=atk+(atk*0.15)+(atk*0.2)+(atk*bitb);
            urt=urt+urt*0.15+urt*0.2+urt*bitb;
        }
        if(gia.checked&&!ruffsb.checked&&!bitbc.checked&&gusb.checked){
            atk=atk+atk*0.15+atk*0.25;
            urt=urt+urt*0.15+urt*0.25;
        }
        if(!gia.checked&&ruffsb.checked&&!bitbc.checked&&gusb.checked){
            atk=atk+atk*0.25+atk*0.2;
            urt=urt+urt*0.25+urt*0.2;
        }
        if(!gia.checked&&!ruffsb.checked&&bitbc.checked&&gusb.checked){
            atk=atk+atk*0.25+atk*bitb;
            urt=urt+urt*0.25+urt*bitb;
        }
        if(gia.checked&&ruffsb.checked&&!bitbc.checked&&gusb.checked){
            atk=atk+(atk*0.15)+(atk*0.2)+(atk*0.25);
            urt=urt+urt*0.15+urt*0.2+urt*0.25;
        }
        if(gia.checked&&!ruffsb.checked&&bitbc.checked&&gusb.checked){
            atk=atk+(atk*0.15)+(atk*bitb)+(atk*0.25);
            urt=urt+urt*0.15+urt*bitb+urt*0.25;
        }
        if(!gia.checked&&ruffsb.checked&&bitbc.checked&&gusb.checked){
            atk=atk+(atk*bitb)+(atk*0.2)+(atk*0.25);
            urt=urt+urt*bitb+urt*0.2+urt*0.25;
        }
        if(gia.checked&&ruffsb.checked&&bitbc.checked&&gusb.checked){
            atk=atk+(atk*0.15)+(atk*0.2)+atk*0.25+atk*bitb;
            urt=urt+urt*0.15+urt*0.2+urt*0.25+urt*bitb;
        }
    var urtsum=urt*urtnum;
    var gjesum=gje*gjenum;
    var sum=urtsum+gjesum;

    var urt20=urt-urt*0.2;
    var urtsum20=urt20*urtnum;
    var sum20=urtsum20+gjesum;
    var urt25=urt-urt*0.25;
    var urtsum25=urt25*urtnum;
    var sum25=urtsum25+gjesum;
    var urt29=urt-urt*0.29;
    var urtsum29=urt29*urtnum;
    var sum29=urtsum29+gjesum;
    var urt50=urt-urt*0.5;
    var urtsum50=urt50*urtnum;
    var sum50=urtsum50+gjesum;
    ///////////////////////

    let currentTotal = 0;
   
    let step4400=0;
    let steps4400=0;
    let step4600=0;
    let steps4600=0;
    let step4800=0;
    let steps4800=0;
    let step5200=0;
    let steps5200=0;
    let step5600=0;
    let steps5600=0;
    let step5800=0;
    let steps5800=0;
    let step6000=0;
    let steps6000=0;
    let step6200=0;
    let steps6200=0;
    let step6400=0;
    let steps6400=0;
    let step6600=0;
    let steps6600=0;
    let step6800=0;
    let steps6800=0;
    let step7000=0;
    let steps7000=0;
    let step7200=0;
    let steps7200=0;
    let step7400 = 0;
    let steps7400 = 0;
    let step7600=0;
    let steps7600=0;
    let step7800=0;
    let steps7800=0;
    let step8000=0;
    let steps8000=0;
    let step8400=0;
    let steps8400=0;
    let step8600=0;
    let steps8600=0;
    let step8800=0;
    let steps8800=0;
    let step9000=0;
    let steps9000=0;
    let step9600=0;
    let steps9600=0;
    let step10000=0;
    let steps10000=0;
    let step10400=0;
    let steps10400=0;
    let step10600=0;
    let steps10600=0;
    let step10800=0;
    let steps10800=0;
    let step11600=0;
    let steps11600=0;
    let step12000=0;
    let steps12000=0;
    let step14000=0;
    let steps14000=0;
    let stepjacky=0;
    let stepsjacky=0;
    let stepbibi=0;
    let stepsbibi=0;
    let stepbodyrt=0;
    let stepsbodyrt=0;
    let stepstarbodyrt=0;
    let stepsstarbodyrt=0;
    let stepstarheadrt=0;
    let stepsstarheadrt=0;
    let stepmeg=0;
    ///////////////////////
    var hp4400=4400-sum;
    var shp4400=5300-sum;
    var hp4600=4600-sum;
    var shp4600=5500-sum;
    var hp4800=4800-sum;
    var shp4800=5700-sum;
    var hp5200=5200-sum;
    var shp5200=6100-sum;
    var hp5600=5600-sum;
    var shp5600=6500-sum;
    var hp5800=5800-sum;
    var shp5800=6700-sum;
    var hp6000=6000-sum;
    var shp6000=6900-sum;
    var hp6200=6200-sum;
    var shp6200=7100-sum;
    var hp6400=6400-sum;
    var shp6400=7300-sum;
    var hp6600=6600-sum;
    var shp6600=7500-sum;
    var hp6800=6800-sum;
    var shp6800=7700-sum;
    var hp7000=7000-sum;
    var shp7000=7900-sum;
    var hp7200=7200-sum;
    var shp7200=8100-sum;
    var hp7400=7400-sum;
    var shp7400=8300-sum;
    var hp7600=7600-sum;
    var shp7600=8500-sum;
    var hp7800=7800-sum;
    var shp7800=8700-sum;
    var hp8000=8000-sum;
    var shp8000=8900-sum;
    var hp8400=8400-sum;
    var shp8400=9300-sum;
    var hp8600=8600-sum;
    var shp8600=9500-sum;
    var hp8800=8800-sum;
    var shp8800=9700-sum;
    var hp9000=9000-sum;
    var shp9000=9900-sum;
    var hp9600=9600-sum;
    var shp9600=10500-sum;
    var hp10000=10000-sum;
    var shp10000=10900-sum;
    var hp10400=10400-sum;
    var shp10400=11300-sum;
    var hp10600=10600-sum;
    var shp10600=11500-sum;
    var hp10800=10800-sum;
    var shp10800=11700-sum;
    var hp11600=11600-sum;
    var shp11600=12500-sum;
    var hp12000=12000-sum;
    var shp12000=12900-sum;
    var hp14000=14000-sum;
    var shp14000=14900-sum;


    var hpbjacky=10000-sum20;
    var shpbjacky=10900-sum20;
    var hpbbibi=9600-sum20;
    var shpbbibi=10500-sum20;
    var bodyrt=7800-sum29;
    var sbodyrt=8700-sum29;
    var starbodyrt=7800-sum50;
    var sstarbodyrt=8700-sum50;
    var starheadrt=7800-sum20;
    var sstarheadrt=8700-sum20;
    var starmeg=4600-sum25;
    ///////////////////////
    while (currentTotal < hp4400) {
        currentTotal += atk;
        step4400++;
    }
    currentTotal=0;
    while(currentTotal<shp4400){
        currentTotal += atk;
        steps4400++;
    }
    currentTotal=0;
    while (currentTotal < hp4600) {
        currentTotal += atk;
        step4600++;
    }
    currentTotal=0;
    while(currentTotal<shp4600){
        currentTotal += atk;
        steps4600++;
    }
    currentTotal=0;
    while (currentTotal < hp4800) {
        currentTotal += atk;
        step4800++;
    }
    currentTotal=0;
    while(currentTotal<shp4800){
        currentTotal += atk;
        steps4800++;
    }
    currentTotal=0;
    while (currentTotal < hp5200) {
        currentTotal += atk;
        step5200++;
    }
    currentTotal=0;
    while(currentTotal<shp5200){
        currentTotal += atk;
        steps5200++;
    }
    currentTotal=0;
    while (currentTotal < hp5600) {
        currentTotal += atk;
        step5600++;
    }
    currentTotal=0;
    while(currentTotal<shp5600){
        currentTotal += atk;
        steps5600++;
    }
    currentTotal=0;
    while (currentTotal < hp5800) {
        currentTotal += atk;
        step5800++;
    }
    currentTotal=0;
    while(currentTotal<shp5800){
        currentTotal += atk;
        steps5800++;
    }
    currentTotal=0;
    while (currentTotal < hp6000) {
        currentTotal += atk;
        step6000++;
    }
    currentTotal=0;
    while(currentTotal<shp6000){
        currentTotal += atk;
        steps6000++;
    }
    currentTotal=0;
    while (currentTotal < hp6200) {
        currentTotal += atk;
        step6200++;
    }
    currentTotal=0;
    while(currentTotal<shp6200){
        currentTotal += atk;
        steps6200++;
    }
    currentTotal=0;
    while(currentTotal<hp6400){
        currentTotal += atk;
        step6400++;
    }
    currentTotal=0;
    while(currentTotal<shp6400){
        currentTotal += atk;
        steps6400++;
    }
    currentTotal=0;
    while (currentTotal < hp6600) {
        currentTotal += atk;
        step6600++;
    }
    currentTotal=0;
    while(currentTotal<shp6600){
        currentTotal += atk;
        steps6600++;
    }
    currentTotal=0;
    while (currentTotal < hp6800) {
        currentTotal += atk;
        step6800++;
    }
    currentTotal=0;
    while(currentTotal<shp6800){
        currentTotal += atk;
        steps6800++;
    }
    currentTotal=0;
    while (currentTotal < hp7000) {
        currentTotal += atk;
        step7000++;
    }
    currentTotal=0;
    while(currentTotal<shp7000){
        currentTotal += atk;
        steps7000++;
    }
    currentTotal=0;
    while (currentTotal < hp7200) {
        currentTotal += atk;
        step7200++;
    }
    currentTotal=0;
    while(currentTotal<shp7200){
        currentTotal += atk;
        steps7200++;
    }
    currentTotal=0;
    while (currentTotal < hp7400) {
        currentTotal += atk;
        step7400++;
    }
    currentTotal=0;
    while(currentTotal<shp7400){
        currentTotal += atk;
        steps7400++;
    }
    currentTotal=0;
    while (currentTotal < hp7600) {
        currentTotal += atk;
        step7600++;
    }
    currentTotal=0;
    while(currentTotal<shp7600){
        currentTotal += atk;
        steps7600++;
    }
    currentTotal=0;
    while (currentTotal < hp7800) {
        currentTotal += atk;
        step7800++;
    }
    currentTotal=0;
    while(currentTotal<shp7800){
        currentTotal += atk;
        steps7800++;
    }
    currentTotal=0;
    while (currentTotal < hp8000) {
        currentTotal += atk;
        step8000++;
    }
    currentTotal=0;
    while(currentTotal<shp8000){
        currentTotal += atk;
        steps8000++;
    }
    currentTotal=0;
    while (currentTotal < hp8400) {
        currentTotal += atk;
        step8400++;
    }
    currentTotal=0;
    while(currentTotal<shp8400){
        currentTotal += atk;
        steps8400++;
    }
    currentTotal=0;
    while (currentTotal < hp8600) {
        currentTotal += atk;
        step8600++;
    }
    currentTotal=0;
    while(currentTotal<shp8600){
        currentTotal += atk;
        steps8600++;
    }
    currentTotal=0;
    while (currentTotal < hp8800) {
        currentTotal += atk;
        step8800++;
    }
    currentTotal=0;
    while(currentTotal<shp8800){
        currentTotal += atk;
        steps8800++;
    }
    currentTotal=0;
    while (currentTotal < hp9000) {
        currentTotal += atk;
        step9000++;
    }
    currentTotal=0;
    while(currentTotal<shp9000){
        currentTotal += atk;
        steps9000++;
    }
    currentTotal=0;
    while (currentTotal < hp9600) {
        currentTotal += atk;
        step9600++;
    }
    currentTotal=0;
    while(currentTotal<shp9600){
        currentTotal += atk;
        steps9600++;
    }
    currentTotal=0;
    while (currentTotal < hp10000) {
        currentTotal += atk;
        step10000++;
    }
    currentTotal=0;
    while(currentTotal<shp10000){
        currentTotal += atk;
        steps10000++;
    }
    currentTotal=0;
    while (currentTotal < hp10400) {
        currentTotal += atk;
        step10400++;
    }
    currentTotal=0;
    while(currentTotal<shp10400){
        currentTotal += atk;
        steps10400++;
    }
    currentTotal=0;
    while (currentTotal < hp10600) {
        currentTotal += atk;
        step10600++;
    }
    currentTotal=0;
    while(currentTotal<shp10600){
        currentTotal += atk;
        steps10600++;
    }
    currentTotal=0;
    while (currentTotal < hp10800) {
        currentTotal += atk;
        step10800++;
    }
    currentTotal=0;
    while(currentTotal<shp10800){
        currentTotal += atk;
        steps10800++;
    }
    currentTotal=0;
    while (currentTotal < hp11600) {
        currentTotal += atk;
        step11600++;
    }
    currentTotal=0;
    while(currentTotal<shp11600){
        currentTotal += atk;
        steps11600++;
    }
    currentTotal=0;
    while (currentTotal < hp12000) {
        currentTotal += atk;
        step12000++;
    }
    currentTotal=0;
    while(currentTotal<shp12000){
        currentTotal += atk;
        steps12000++;
    }
    currentTotal=0;
    while (currentTotal < hp14000) {
        currentTotal += atk;
        step14000++;
    }
    currentTotal=0;
    while(currentTotal<shp14000){
        currentTotal += atk;
        steps14000++;
    }
    currentTotal=0;
////////////////////特別キャラ
    while (currentTotal < hpbjacky) {
        currentTotal += atk*0.8;
        stepjacky++;
    }
    currentTotal=0;
    while(currentTotal<shpbjacky){
        currentTotal += atk*0.8;
        stepsjacky++;
    }
    currentTotal=0;
    while (currentTotal < hpbbibi) {
        currentTotal += atk*0.8;
        stepbibi++;
    }
    currentTotal=0;
    while(currentTotal<shpbbibi){
        currentTotal += atk*0.8;
        stepsbibi++;
    }
    currentTotal=0;
    while (currentTotal < bodyrt) {
        currentTotal += atk*0.71;
        stepbodyrt++;
    }
    currentTotal=0;
    while(currentTotal<sbodyrt){
        currentTotal += atk*0.71;
        stepsbodyrt++;
    }
    currentTotal=0;
    while (currentTotal < starbodyrt) {
        currentTotal += atk*0.5;
        stepstarbodyrt++;
    }
    currentTotal=0;
    while(currentTotal<sstarbodyrt){
        currentTotal += atk*0.5;
        stepsstarbodyrt++;
    }
    currentTotal=0;
    while (currentTotal < starheadrt) {
        currentTotal += atk*0.8;
        stepstarheadrt++;
    }
    currentTotal=0;
    while(currentTotal<sstarheadrt){
        currentTotal += atk*0.8;
        stepsstarheadrt++;
    }
    currentTotal=0;
    while (currentTotal < starmeg) {
        currentTotal += atk*0.75;
        stepmeg++;
    }
    currentTotal=0;
    document.getElementById("Xhit").innerText=X+"を何回当てるか";
    document.getElementById("Yhit").innerText=Y+"を何回当てるか";

    document.getElementById("tyuui").innerText="通常攻撃と"+X+"は上記のバフがかかりますが、"+Y+"はバフがかかりません。"; 
    document.getElementById("sum").innerText="バフ込みダメージ\n通常攻撃"+atk+"ダメージ×倒すまで\n"+X+""+urtsum+"ダメージ×"+urtnum+"回\n"+Y+""+gjesum+"ダメージ×"+gjenum+"回";
    document.getElementById("shery").innerText = step7400+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("sshery").innerText = steps7400+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("nita").innerText = step8000+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("snita").innerText = steps8000+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("colt").innerText = step5600+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("scolt").innerText = steps5600+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("bull").innerText = step10000+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("sbull").innerText = steps10000+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("block").innerText = step4800+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("sblock").innerText = steps4800+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("elprimo").innerText = step12000+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("selprimo").innerText = steps12000+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("barley").innerText = step4800+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("sbarley").innerText = steps4800+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("poco").innerText = step7400+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("spoco").innerText = steps7400+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("rosa").innerText = step10000+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("srosa").innerText = steps10000+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("jessi").innerText = step6000+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("sjessi").innerText = steps6000+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("dynamike").innerText = step5600+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("sdynamike").innerText = steps5600+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("tick").innerText = step4400+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("stick").innerText = steps4400+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("bit").innerText = step10000+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("sbit").innerText = steps10000+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("rico").innerText = step5600+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("srico").innerText = steps5600+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("darryl").innerText = step10600+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("sdarryl").innerText = steps10600+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("penny").innerText = step6400+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("spenny").innerText = steps6400+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("carl").innerText = step8000+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("scarl").innerText = steps8000+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("jacky").innerText = step10000+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("sjacky").innerText = steps10000+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("bjacky").innerText = stepjacky+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("bsjacky").innerText = stepsjacky+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("gas").innerText = step6400+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("sgas").innerText = steps6400+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("bo").innerText = step7200+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("sbo").innerText = steps7200+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("emz").innerText = step7200+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("semz").innerText = steps7200+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("stu").innerText = step5800+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("sstu").innerText = steps5800+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("piper").innerText = step4800+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("spiper").innerText = steps4800+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("pam").innerText = step9600+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("spam").innerText = steps9600+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("frank").innerText = step14000+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("sfrank").innerText = steps14000+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("bibi").innerText = step9600+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("sbibi").innerText = steps9600+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("bbibi").innerText = stepbibi+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("bsbibi").innerText = stepsbibi+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("bea").innerText = step4800+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("sbea").innerText = steps4800+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("nani").innerText = step4800+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("snani").innerText = steps4800+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("edger").innerText = step6600+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("sedger").innerText = steps6600+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("griff").innerText = step6800+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("sgriff").innerText = steps6800+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("grom").innerText = step5600+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("sgrom").innerText = steps5600+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("bonny").innerText = step9600+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("sbonny").innerText = steps9600+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("gale").innerText = step7600+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("sgale").innerText = steps7600+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("collet").innerText = step6800+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("scollet").innerText = steps6800+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("belle").innerText = step5200+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("sbelle").innerText = steps5200+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("ash").innerText = step10800+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("sash").innerText = steps10800+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("lola").innerText = step7600+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("slola").innerText = steps7600+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("sam").innerText = step10800+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("ssam").innerText = steps10800+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("mandy").innerText = step5600+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("smandy").innerText = steps5600+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("maisie").innerText = step7200+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("smaisie").innerText = steps7200+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("hank").innerText = step11600+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("shank").innerText = steps11600+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("pearl").innerText = step8400+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("spearl").innerText = steps8400+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    // document.getElementById("larry").innerText = step+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    // document.getElementById("slarry").innerText = steps+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("mortis").innerText = step7600+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("smortis").innerText = steps7600+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("tara").innerText = step6200+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("stara").innerText = steps6200+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("gene").innerText = step7200+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("sgene").innerText = steps7200+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("max").innerText = step6000+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("smax").innerText = steps6000+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("mrp").innerText = step6800+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("smrp").innerText = steps6800+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("sprout").innerText = step6000+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("ssprout").innerText = steps6000+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("byron").innerText = step4800+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("sbyron").innerText = steps4800+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("squeak").innerText = step7200+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("ssqueak").innerText = steps7200+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("lou").innerText = step6400+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("slou").innerText = steps6400+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("ruffs").innerText = step5600+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("sruffs").innerText = steps5600+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("buzz").innerText = step8800+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("sbuzz").innerText = steps8800+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("fang").innerText = step8600+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("sfang").innerText = steps8600+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("eve").innerText = step5800+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("seve").innerText = steps5800+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("janet").innerText = step6400+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("sjanet").innerText = steps6400+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("otis").innerText = step6400+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("sotis").innerText = steps6400+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("buster").innerText = step10400+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("sbuster").innerText = steps10400+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("gray").innerText = step6600+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("sgray").innerText = steps6600+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("rt").innerText = step7800+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("srt").innerText = steps7800+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("bodyrt").innerText = stepbodyrt+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("sbodyrt").innerText = stepsbodyrt+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("starbodyrt").innerText = stepstarbodyrt+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("sstarbodyrt").innerText = stepsstarbodyrt+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("starheadrt").innerText = stepstarheadrt+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("sstarheadrt").innerText = stepsstarheadrt+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";

    document.getElementById("willow").innerText = step5600+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("swillow").innerText = steps5600+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("dug").innerText = step10000+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("sdug").innerText = steps10000+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("chuck").innerText = step9000+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("schuck").innerText = steps9000+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("charlie").innerText = step6600+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("scharlie").innerText = steps6600+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("mico").innerText = step6000+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("smico").innerText = steps6000+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("spike").innerText = step4800+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("sspike").innerText = steps4800+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("crow").innerText = step4800+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("scrow").innerText = steps4800+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("leon").innerText = step6800+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("sleon").innerText = steps6800+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("sandy").innerText = step7600+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("ssandy").innerText = steps7600+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("amber").innerText = step6400+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("samber").innerText = steps6400+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("bodymeg").innerText = step7400+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("sbodymeg").innerText = steps7400+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("meg").innerText = step4600+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("starmeg").innerText = stepmeg+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("surge").innerText = step6000+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("ssurge").innerText = steps6000+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("cheser").innerText = step7400+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("scheser").innerText = steps7400+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("cordelious").innerText = step6400+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("scordelious").innerText = steps6400+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("kit").innerText = step6000+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";
    document.getElementById("skit").innerText = steps6000+"+("+X+"×"+urtnum+")+("+Y+"×"+gjenum+")";

}
}

