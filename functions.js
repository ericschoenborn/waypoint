function HouseKeeping(){
	Shop();
	//element.offsetLeft - element.scrollLeft + element.clientLeft
	var thing=document.getElementById("stage");
	var left=thing.offsetLeft-thing.scrollLeft+thing.clientLeft-4;
	var top=thing.offsetTop-thing.scrollTop+thing.clientTop-4;
	
	document.getElementById("helper").style.left=left;
	document.getElementById("helper").style.top=top;
	document.getElementById("buttonSinker").style.bottom=0;
	document.getElementById("buttonSinker").style.left=0;
	document.getElementById("skip").style.marginRight=475;
	document.getElementById("helper").style.backgroundImage="url('help0.png')";
}
function TotorialImage(e){
	//document.getElementById("helper").hidden=false;
	document.getElementById("helper").hidden=true
	if(totorial==false){		
		document.getElementById("stage").style.backgroundImage =null;
		document.getElementById("topRight").hidden =true;
		document.getElementById("bottomRight").hidden=true;
	}
	else{
		if(e<4){	
			if(e==1){e="url('help1.1.png')";}
			if(e==2){e="url('help2.1.png')";}
			if(e==3){e="url('help3.1.png')";}
			document.getElementById("stage").style.backgroundImage = e;
		}
		if(e==4){
			document.getElementById("stage").style.backgroundImage ="";
			document.getElementById("topRight").hidden =false;
			document.getElementById("bottomRight").hidden=false;

		}
	}
	//document.getElementById("continue").onclick=function(){document.getElementById("helper").hidden=true}
}
var VImproved=["",0];
var placement=0;
var totorial=true;
var placer=1;
var totalPoints=0;
var doubleCheck="";
var skillNum=undefined;
var SkillMastery=["","","",""];
var selected=[["","","",""],["1","2","3","4","5"],["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""]]
var choices=[];

function test(e,f,g){
	var com ="";
	var nxt ="";
	var stuff=document.getElementsByName(e);
	var i=0;
	while( i<stuff.length){
		nxt = stuff[i].id.substr(stuff[i].id.length - 1);
		com = document.getElementById("block"+f).innerHTML;
		if(parseInt(nxt)<=parseInt(com)&& g!=1) {
			 
			document.getElementById(stuff[i].id).bgColor="PaleGreen";
		}
		if(parseInt(nxt)==parseInt(com)+1 && g!=1) {
			document.getElementById(stuff[i].id).bgColor="yellow";
		}
		if(parseInt(nxt)==parseInt(com)+2 && g!=1) {
			document.getElementById(stuff[i].id).bgColor="tomato";
		}
		if(parseInt(nxt)==parseInt(com)+3 && g!=1) {
			document.getElementById(stuff[i].id).bgColor="DarkGray";
		}
		if(parseInt(nxt)==parseInt(com)+4 && g!=1) {
			document.getElementById(stuff[i].id).bgColor="DimGray";
		}
		if(g==1)
		{
			document.getElementById(stuff[i].id).bgColor="white";
		}
		i=i+1;
	}
	i=0;
}
function backgroundColor(e)
{
	if(e==1){
		test('phys','1'); test('cunn','2'); test('ess','3');
		
			var i=0;
	while(i<SkillMastery.length){
		if(SkillMastery[i]!=""){
			var e=1;
			while(e<6){
				document.getElementById(SkillMastery[i]+e).bgColor="PaleGreen";
				e=e+1;
			}
			e=0;
		}
		i=i+1;
	}
	}
	if(e==2){
		test('phys','1',1); test('cunn','1',1); test('ess','1',1);
	}
}
function forward(x,y,z){
	var skip=false;
	if(x==0){
		if(y==0 && document.getElementById("block5").innerHTML<4 ||z==true){
			document.getElementById("PN").innerHTML="Player Name: " +document.getElementById("PName").value;
			document.getElementById("CN").innerHTML="Character Name: " +document.getElementById("CName").value;
			document.getElementById("ED").innerHTML="Event Date: " +document.getElementById("EDate").value;
		}
		if(y==0&&document.getElementById("block5").innerHTML>4 && z!=true){
			skip=true;
			skillSelect("veteran",0);
		}
		if(y==1){
			if(document.getElementById("block4").innerHTML!='0'){
				
				alert('You must use all points.');
				skip=true;
			}
			else{
				document.getElementById("Phys").innerHTML=document.getElementById("block1").innerHTML;
				document.getElementById("Cunn").innerHTML=document.getElementById("block2").innerHTML;
				document.getElementById("Esse").innerHTML=document.getElementById("block3").innerHTML;				
				DistributePoints();
				test('phys','1'); test('cunn','2'); test('ess','3');
				skip=false;
			}
		}
		if(y==2){
			if(document.getElementById("shopPoints").innerHTML!='0'){
				alert('You must use all points.');
				skip=true;
			}
			else{
				skip=false;
			}
		}
		if(skip==false){
			if(document.getElementById("step1").hidden!=true){
				placer=2;
				if(totorial==true){TotorialImage(2);}	
					document.getElementById("block1").style.borderColor="gray";
						document.getElementById("block2").style.borderColor="gray";
							document.getElementById("block3").style.borderColor="gray";
				if(selected[0][VImproved[1]]!="Improved1" && VImproved[0]!=""){alert('hi');document.getElementById(VImproved[0]).innerHTML=parseInt(document.getElementById(VImproved[0]).innerHTML)-1;VImproved[0]="";}
				if(VImproved[0]!=""){document.getElementById(VImproved[0]).style.borderColor="green";}
				document.getElementById("step1").hidden=true;
				document.getElementById("step2").hidden=false;
				document.getElementById("step3").hidden=true;
				document.getElementById("step4").hidden=true;
					document.getElementById("step3Points").hidden=true;
				levelTracker(document.getElementById("block5").innerHTML);	
			}
			else if(document.getElementById("step2").hidden!=true){
				placer=3;
				if(totorial==true){TotorialImage(3);}	
				document.getElementById("step1").hidden=true;
				document.getElementById("step2").hidden=true;
				document.getElementById("step3").hidden=false;
				document.getElementById("step4").hidden=true;
					document.getElementById("step3Points").hidden=true;
				document.getElementById("block6").innerHTML=totalPoints;
				Recount('phys',1);Recount('ess',3);Recount('cunn',2);
			}
			else if(document.getElementById("step3").hidden!=true){
				placer=4;
				if(totorial==true){TotorialImage(4);}
				document.getElementById("step1").hidden=true;
				document.getElementById("step2").hidden=true;
				document.getElementById("step3").hidden=true;
				document.getElementById("step4").hidden=false;
					document.getElementById("step3Points").hidden=false;
			}
		}
	}
	if(x==1 && y!=2){

		if(document.getElementById("step4").hidden!=true){
			placer=3;
			if(totorial==true){TotorialImage(3);}
			document.getElementById("step1").hidden=true;
			document.getElementById("step2").hidden=true;
			document.getElementById("step3").hidden=false;
			document.getElementById("step4").hidden=true;
				document.getElementById("step3Points").hidden=true;
		}
		else if(document.getElementById("step3").hidden!=true){
			placer=2;
			if(totorial==true){TotorialImage(2);}	
			document.getElementById("step1").hidden=true;
			document.getElementById("step2").hidden=false;
			document.getElementById("step3").hidden=true;
			document.getElementById("step4").hidden=true;
				document.getElementById("step3Points").hidden=true;
		}
		else if(document.getElementById("step2").hidden!=true){
			placer=1;
			if(totorial==true){TotorialImage(1);}	
			document.getElementById("step1").hidden=false;
			document.getElementById("step2").hidden=true;
			document.getElementById("step3").hidden=true;
			document.getElementById("step4").hidden=true;
				document.getElementById("step3Points").hidden=true;
		}
		else if(document.getElementById("step1").hidden!=true){	
				totorial=false
				TotorialImage();
				document.getElementById("controlVisable").hidden=true;
				document.getElementById("skillSelect").hidden=false;
				document.getElementById("leaving").hidden=false;
				document.getElementById("step1").hidden=true;
		}
	}
}
function skillSelect(e,ArrN,ArrN2){
	if(doubleCheck=="x" || ArrN==0){
		placement=ArrN2;
		document.getElementById("skillSelect").hidden=false;
		if(e=="veteran"){
			document.getElementById("step1").hidden=true;
			document.getElementById("controlVisable").hidden=true;
			var i=0;
			while(i<4){
				selected[0][i]="";
				i=i+1;
			}
			if(VImproved[0]!=""){document.getElementById(VImproved[0]).innerHTML=parseInt(document.getElementById(VImproved[0]).innerHTML)-1;}
			VImproved[0]="";
			var level = parseInt(document.getElementById("block5").innerHTML);
			if(level==20){level=4;}
			if(level>14){level=3;}
			if(level>9){level=2;}
			if(level>4){level=1;}
			document.getElementById("total").innerHTML=level;
		}
		document.getElementById("step4").hidden=true;
		document.getElementById("controlVisable").hidden=true;
		document.getElementById(e).hidden=false;
		if(e=="VorpalStrike" || e=="CrushingBlow"){
			if(ArrN2==4){
				document.getElementById(e+2).hidden=false;
			}
			else{
				document.getElementById(e+1).hidden=false;
			}
		}
		borderVisable("hidden",e,ArrN);
		borderVisable("border",e,ArrN);
	}
	if(doubleCheck=="s"){
		if(e=="VorpalStrike" || e=="CrushingBlow"){
			selected[ArrN][ArrN2]=ArrN2 +1;
		}
		else{
			selected[ArrN][ArrN2]="-none-";
		}
		document.getElementById(e+"Placer"+ArrN2).innerHTML=selected[ArrN][ArrN2];

	}
}
function buttonManage(set,id,name,step){
	step=placement;
	document.getElementById(name+"OK").hidden=false;
	borderVisable("border",name);	
	document.getElementById(id).style.borderColor="red";
	
	if(set==0 ||name=="VeteranImproved"){
		step=parseInt(document.getElementById("total").innerHTML)-1;
		if(name=="VeteranImproved"){
			id=id.substr(1,7);
			VImproved[0]=id;
			VImproved[1]=step;
		}
	}

	selected[set][step]=id;
	if(name=="fightingStyle" || name=="weaponFo"){
		document.getElementById(name+"Placer"+step).innerHTML=id.substr(2,id.length-2);
	}
	if(name=="VorpalStrike" || name=="CrushingBlow"){
		document.getElementById(name+"Placer"+step).innerHTML=id.substr(2,id.length-3);
	}
	else{
		document.getElementById(name+"Placer"+step).innerHTML=id.substr(0,id.length-1);
	}
	if(id=="Improved1"){
		document.getElementById("veteran").hidden=true;
		document.getElementById("VeteranImproved").hidden=false;
	}

}
function borderVisable(set,skill,ArrN){
	var Button=document.getElementsByName(skill);
	var n=0;
	while(n<Button.length){
		if(set=="hidden"){
			var limit=parseInt(Button[n].id.substr(Button[n].id.length-1));
			var i=0;
			var count=0;
			while(i<selected[ArrN].length){
				if(Button[n].id==selected[ArrN][i]){
					count=count+1;
				}
				i=i+1;
			}
			
			if(count==limit && count!=0){
				document.getElementById(Button[n].id).hidden=true;
			}
			else{
				document.getElementById(Button[n].id).hidden=false;
			}
		}
		if(set=="border"){
			document.getElementById(Button[n].id).style.borderColor="gray";
		}
		n=n+1;
	}
}
function decitionHelp(e){
	if(e==0){
		var valueHolder=parseInt(document.getElementById("total").innerHTML)-1;
		document.getElementById("total").innerHTML=valueHolder
		if(valueHolder==0){
			document.getElementById("skillSelect").hidden=true;
			document.getElementById("veteran").hidden=true;
			document.getElementById("step1").hidden=false;
			document.getElementById("controlVisable").hidden=false;
			forward(0,0,true);
		}
		borderVisable("hidden","veteran",0);
		borderVisable("border","veteran");
	}

	else{

		document.getElementById(e).hidden=true;
		document.getElementById(e+"OK").hidden=true;
		if(e=="VeteranImproved"){
			document.getElementById(VImproved[0]).innerHTML=parseInt(document.getElementById(VImproved[0]).innerHTML)+1;
			document.getElementById("veteran").hidden=false;
		}
		else{
		if(e=="VorpalStrike" || e=="CrushingBlow"){
			document.getElementById(e+"2").hidden=true;
			document.getElementById(e+"1").hidden=true;
		}	
		document.getElementById("skillSelect").hidden=true;
		document.getElementById("step4").hidden=false;
		document.getElementById("controlVisable").hidden=false;
		}
	}
}
function Shop(){
	
	var list = document.getElementsByName("shop");
	var n=0;
	while(n<list.length){
		document.getElementById(list[n].id).onclick=function(){
															
															var title=this.id.substr(0,this.id.length-1);
															
															var value=parseInt(document.getElementById(title+"V").innerHTML);
															var coin=parseInt(document.getElementById("shopPoints").innerHTML);
															if(this.id.substr(this.id.length-1)=="M" && document.getElementById(title).innerHTML!=0){
																document.getElementById(title).innerHTML=document.getElementById(title).innerHTML-1;
																document.getElementById("shopPoints").innerHTML=parseInt(document.getElementById("shopPoints").innerHTML)+value;
															}
															if(this.id.substr(this.id.length-1)=="P"){
																if(coin-value>-1){
																	document.getElementById(title).innerHTML=parseInt(document.getElementById(title).innerHTML)+1;
																	document.getElementById("shopPoints").innerHTML=parseInt(document.getElementById("shopPoints").innerHTML)-value;	
																}
															}
															
															shopPlacement(title);
			
															}
			n=n+1												
	}
}
function shopPlacement(e){
	if(e=="skyPillar"){
		document.getElementById(e+"Final").innerHTML=parseInt(document.getElementById(e).innerHTML)*3;
	}
	else if(e=="sComponent"){
		document.getElementById(e+"Final").innerHTML=parseInt(document.getElementById(e).innerHTML)*2;
	}
	else{
		document.getElementById(e+"Final").innerHTML=document.getElementById(e).innerHTML;
	}
}
function levelTracker(x){
	x=parseInt(x)-1;
	
	var e=18;
	while(e>=0){
		document.getElementById("lvl"+e).bgColor="white";
		document.getElementById("pnts"+e).bgColor="white";
		e=e-1;
	}
	
	document.getElementById("lvl"+x).bgColor="yellow";
	document.getElementById("pnts"+x).bgColor="yellow";
	totalPoints=0;
	var i=0;
	while(i<4){
		if(selected[0][i]=="Learning0"){
			totalPoints=totalPoints+2;
		}
		i=i+1
	}
	
	while(x>=0){
		totalPoints=totalPoints+parseInt(document.getElementById("pnts"+x).innerHTML);
		x=x-1;
	}
}
function grid(e,f,g,event,extra){	
var check=true;
	if(event.button==0){
		if(document.getElementById(e+f).innerHTML == "x"){doubleCheck=""}
		if(document.getElementById(e+f).innerHTML == "" || document.getElementById(e+f).innerHTML == "s"){

			if(f==1 || document.getElementById(e+(f-1)).innerHTML == "x" || document.getElementById(e+(f-1)).innerHTML == "s"){
				if(extra!=undefined){check=PrerequCheck(extra);}
				if(check==true){		
					if(document.getElementById(e+f).innerHTML == "s"){PCE(7,1);}
					var s1 = parseInt(document.getElementById("block"+g).innerHTML);
					var s2= parseInt(f-s1);
					if(s2<0){s2=0;}
					var s3= parseInt(Math.pow(2,s2));
					var s4= parseInt(-1*s3);
					if(e==SkillMastery[0]||e==SkillMastery[1]||e==SkillMastery[2]||e==SkillMastery[3]){s4=-1;}
					var skip=PCE(6,s4);
					if(skip==true){
						document.getElementById(e+f).innerHTML = "x";
						doubleCheck="x";
					}
				}
			}
			else{doubleCheck="nan";}
		}
		else if(f==5 ||document.getElementById(e+(f+1)).innerHTML == ""){
				if(document.getElementById(e+f).innerHTML != "s"){
					if(extra!=undefined){check=PrerequCheck(extra);}
						if(check==true){
							document.getElementById(e+f).innerHTML = "";
							var s1 = parseInt(document.getElementById("block"+g).innerHTML);
							var s2= parseInt(f-s1);
							if(s2<0){s2=0;}
							var s3= parseInt(Math.pow(2,s2));
							if(e==SkillMastery[0]||e==SkillMastery[1]||e==SkillMastery[2]||e==SkillMastery[3]){s3=1;}
							PCE(6,s3);
						}
				}
			doubleCheck="s";
		}
	}
	if(event.button==2){
		doubleCheck="";
		if(document.getElementById(e+f).innerHTML == "" || document.getElementById(e+f).innerHTML == "x"){
			
			if(f==1 || document.getElementById(e+(f-1)).innerHTML == "x"|| document.getElementById(e+(f-1)).innerHTML == "s"){
				if(extra!=undefined){check=PrerequCheck(extra);}
					if(check==true){
						if(document.getElementById(e+f).innerHTML == "x" && document.getElementById("block7").innerHTML!="0"){
							document.getElementById(e+f).innerHTML = "";
							var s1 = parseInt(document.getElementById("block"+g).innerHTML);
							var s2= parseInt(f-s1);
							if(s2<0){s2=0;}
							var s3= parseInt(Math.pow(2,s2));
							if(e==SkillMastery[0]||e==SkillMastery[1]||e==SkillMastery[2]||e==SkillMastery[3]){s3=1}
							PCE(6,s3);
						}
						var skip=PCE(7,-1);
						if(skip==true){
							document.getElementById(e+f).innerHTML = "s";
							doubleCheck="s";
						}
				}
			}
		else{doubleCheck="";}
		
		}
		else if(f==5 ||document.getElementById(e+(f+1)).innerHTML == ""){
			if(document.getElementById(e+f).innerHTML != "x"){
				if(extra!=undefined){check=PrerequCheck(extra);}
				if(check==true){
					document.getElementById(e+f).innerHTML = "s";
					PCE(7,1);
				}
			}
		}

	}
	DistributePoints();
}
function PCE(e,f){
	var spot=document.getElementById("block"+e).innerHTML;
	var pnt=document.getElementById("block"+"4").innerHTML;
	if(e>5 && parseInt(spot)+parseInt(f) > -1){
		document.getElementById("block"+e).innerHTML = (parseInt(document.getElementById("block"+e).innerHTML)+parseInt(f));
		return true;
	}
	else if(e==5 && parseInt(spot)+parseInt(f)!=0 && parseInt(spot)+parseInt(f)<21){
		
		document.getElementById("block"+e).innerHTML = (parseInt(document.getElementById("block"+e).innerHTML)+parseInt(f));
		if(document.getElementById("block"+e).innerHTML<20){selected[0][3]="-none-";document.getElementById("veteranPlacer3").innerHTML="-none-"; if(VImproved[1]==3){VImproved[0]="";}}
		if(document.getElementById("block"+e).innerHTML<15){selected[0][2]="-none-";document.getElementById("veteranPlacer2").innerHTML="-none-";}
		if(document.getElementById("block"+e).innerHTML<10){selected[0][1]="-none-";document.getElementById("veteranPlacer1").innerHTML="-none-";}
		if(document.getElementById("block"+e).innerHTML<5){selected[0][0]="-none-";document.getElementById("veteranPlacer0").innerHTML="-none-";}
	}
	else if(e<4){
		if(VImproved[0]!=""){document.getElementById(VImproved[0]).innerHTML=parseInt(document.getElementById(VImproved[0]).innerHTML)-1;spot=spot-1;}
		if(parseInt(spot)+parseInt(f)!=0 && parseInt(pnt)+parseInt(-f)!=-1){
			document.getElementById("block"+e).innerHTML = (parseInt(document.getElementById("block"+e).innerHTML)+parseInt(f));
			document.getElementById("block"+"4").innerHTML= (parseInt(document.getElementById("block"+"4").innerHTML)+parseInt(-f));
		}
		if(VImproved[0]!=""){document.getElementById(VImproved[0]).innerHTML=parseInt(document.getElementById(VImproved[0]).innerHTML)+1;}
		document.getElementById("block7").innerHTML = (parseInt(document.getElementById("block2").innerHTML)*2);
	}
	else{
		return false;
	}
}
function PrerequCheck(e){

	if(e.substr(e.length-1)==0){
		var i=1;
		while(i<4){
			var check=document.getElementById(e.substr(0,e.length-1)+i).innerHTML
			if(check!=="x"){i=5;}
			i=i+1;
		}
		if(i==6){return false}
		else{return true}
	}
	if(e.substr(e.length-1)==1){
		var check=document.getElementById(e).innerHTML
		if(check=="x"||check=="s"){return false}
		else{return true}
	}
}
function DistributePoints(){
	var HealthCounter =['Hlth1','Hlth2','Hlth3','Hlth4','Hlth5']
	var APCounter=['CApt1','CApt2','CApt3','PhysApt1','PhysApt2','PhysApt3','EApt1','EApt2','EApt3']
	var CRCounter=['CRef1','CRef2','CRef3','CRef4','ICR5']
	var i=0;
	document.getElementById("LP").innerHTML=document.getElementById("block1").innerHTML;
	document.getElementById("Ss").innerHTML = (parseInt(document.getElementById("block2").innerHTML)*2);
	document.getElementById("AP").innerHTML=document.getElementById("block3").innerHTML;
	document.getElementById("TCR").innerHTML=0;
	
	while(i<HealthCounter.length){
		if(document.getElementById(HealthCounter[i]).innerHTML=="x"){
			if(i<3){document.getElementById("LP").innerHTML= parseInt(document.getElementById("LP").innerHTML)+1;}
			else{document.getElementById("LP").innerHTML= parseInt(document.getElementById("LP").innerHTML)+2;}
		}	
		i=i+1;
	}
	i=0;
	while(i<4){
		if(selected[0][i]=="Hardened0"){
			document.getElementById("LP").innerHTML= parseInt(document.getElementById("LP").innerHTML)+2;
		}
		if(selected[0][i]=="Focused0"){
			document.getElementById("AP").innerHTML= parseInt(document.getElementById("AP").innerHTML)+2;
		}
		i=i+1
	}
	document.getElementById("TLP").innerHTML=document.getElementById("LP").innerHTML
	i=0;
	while(i<APCounter.length){
		if(document.getElementById(APCounter[i]).innerHTML=="x"){
			if(i<8){document.getElementById("AP").innerHTML= parseInt(document.getElementById("AP").innerHTML)+1;}
			else{document.getElementById("AP").innerHTML= parseInt(document.getElementById("AP").innerHTML)+2;}
		}
		i=i+1;
	}
	i=0;
	while(i<CRCounter.length){
		if(document.getElementById(CRCounter[i]).innerHTML=="x"){
			if(i<3){document.getElementById("TCR").innerHTML= parseInt(document.getElementById("TCR").innerHTML)+1;}
			if(i==3){document.getElementById("TCR").innerHTML= parseInt(document.getElementById("TCR").innerHTML)+2;}
			if(i==4){
				if(document.getElementById("TAr").innerHTML="0"){document.getElementById("TCR").innerHTML= parseInt(document.getElementById("TCR").innerHTML)*3;}
				else{document.getElementById("TCR").innerHTML= parseInt(document.getElementById("TCR").innerHTML)*2;}
			}
		}
		i=i+1;
	}
	document.getElementById("T").innerHTML = (parseInt(document.getElementById("TLP").innerHTML)+parseInt(document.getElementById("TAr").innerHTML)+parseInt(document.getElementById("TCR").innerHTML));
	i=0;
}
function MessageHandeler(name){
	document.getElementById("selectEnter").hidden=true;
	skillNum=parseInt(name.substr(name.length-1))-1;
	var m=0;
	while(m<choices.length){
		document.getElementById(choices[m].id).bgColor="white";
		m=m+1;
	}
	if(doubleCheck=="x"){
		choices=document.getElementsByName('choice');
		n=0;
		while(n<choices.length){
			document.getElementById(choices[n].id).onclick = function(){
																			if(document.getElementById(this.id).style.color!="white"){
																				document.getElementById("selectEnter").hidden=false;
																				var m=0;
																				while(m<choices.length){
																					document.getElementById(choices[m].id).bgColor="white";
																					m=m+1;
																				}
																				SkillMastery[skillNum]=this.id.substr(0,this.id.length-1);
																				var lable=document.getElementById(this.id).innerHTML.replace("Improved", "I");
																				lable=lable.replace("Combat Reflexes","CR");
																				document.getElementById("choicePlacer"+skillNum).innerHTML=lable;
																				document.getElementById(this.id).bgColor="yellow";
																			}
																		}
			n=n+1;
			}



		if(doubleCheck=="x"){
			n=0;
			while(n<SkillMastery.length){
				if(SkillMastery[n]!=""){
					document.getElementById(SkillMastery[n]+0).style.color="white";
					
				}
				n=n+1;
			}
			document.getElementById("floater").hidden=false;
		}
	}
	if(doubleCheck=="s"){
		document.getElementById(SkillMastery[skillNum]+0).style.color="black";
		SkillMastery[skillNum]="";
		alert(SkillMastery[0]+" - "+SkillMastery[1]+" - "+SkillMastery[2]+" - "+SkillMastery[3]);
		if(document.getElementById("color").checked==true){
			backgroundColor(1);
		}
		document.getElementById("block6").innerHTML=totalPoints;
		Recount('phys',1);Recount('ess',3);Recount('cunn',2);
	}
}
function ArrayHandler(){
	document.getElementById("block6").innerHTML=totalPoints;
	Recount('phys',1);Recount('ess',3);Recount('cunn',2);
	document.getElementById("floater").hidden=true;
	//alert(SkillMastery[0]+" - "+SkillMastery[1]+" - "+SkillMastery[2]+" - "+SkillMastery[3]);
	if(document.getElementById("color").checked==true){
		backgroundColor(1);
	}
}
function Helper(e){
	if(e==0){
		document.getElementById("skillSelect").hidden=true;
		document.getElementById("leaving").hidden=true;
		document.getElementById("step1").hidden=false;
		document.getElementById("controlVisable").hidden=false;
		totorial=true;
		TotorialImage(placer);
	}
	if(e==1){
		totorial=false;
		TotorialImage();		
		document.getElementById("skillSelect").hidden=false;
		document.getElementById("Help").hidden=false;
		document.getElementById("step"+placer).hidden=true;
		document.getElementById("controlVisable").hidden=true;
	}
	if(e==2){
		TotorialImage(placer);		
		document.getElementById("skillSelect").hidden=true;
		document.getElementById("Help").hidden=true;
		document.getElementById("step"+placer).hidden=false;
		document.getElementById("controlVisable").hidden=false;
	}
	if(e=="t"){totorial=true;TotorialImage(placer)}
	
}
function Recount(e,f){
	var list=document.getElementsByName(e);
	var i=0;
	while( i<list.length){
		var g=list[i].id.substr(0,list[i].id.length-1);
		if(document.getElementById(list[i].id).innerHTML=="x"){
					
			var s1 = parseInt(document.getElementById("block"+f).innerHTML);
			var s2= parseInt(list[i].id.substr(list[i].id.length-1))-s1;
			if(s2<0){s2=0;}
			var s3= parseInt(Math.pow(2,s2));
			var s4= parseInt(-1*s3);
			if(g==SkillMastery[0]||g==SkillMastery[1]||g==SkillMastery[2]||g==SkillMastery[3]){s4=-1;}
			var skip=PCE(6,s4);
			if(skip==false){document.getElementById(list[i].id).innerHTML="";}
		}
		if(document.getElementById(list[i].id).innerHTML=="s"){
			var s1 = parseInt(document.getElementById("block"+f).innerHTML);
			var s2= parseInt(list[i].id.substr(list[i].id.length-1))-s1;
			if(s2<0){s2=0;}
			var s3= parseInt(Math.pow(2,s2));
			if(g==SkillMastery[0]||g==SkillMastery[1]||g==SkillMastery[2]||g==SkillMastery[3]){s3=1;}
			var s4= parseInt(-1*s3);
			var skip=PCE(6,s4);
			if(skip==false){document.getElementById(list[i].id).innerHTML=""; document.getElementById("block7").innerHTML=parseInt(document.getElementById("block7").innerHTML)+1}
			else{document.getElementById("block6").innerHTML=parseInt(document.getElementById("block6").innerHTML)+s3;}
		}
		i=i+1;
	}
}
function save(){
	var textToWrite = document.getElementById("body").innerHTML;
	var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
	var fileNameToSaveAs = document.getElementById("CName").value;

	var downloadLink = document.createElement("a");
	downloadLink.download = fileNameToSaveAs;
	downloadLink.innerHTML = "Download File";
	if (window.webkitURL != null)
	{
		// Chrome allows the link to be clicked
		// without actually adding it to the DOM.
		downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
	}
	else
	{
		// Firefox requires the link to be added to the DOM
		// before it can be clicked.
		downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
		downloadLink.onclick = destroyClickedElement;
		downloadLink.style.display = "none";
		document.body.appendChild(downloadLink);
	}

	downloadLink.click();
}

function destroyClickedElement(event)
{
	document.body.removeChild(event.target);
}

function load()
{
	document.getElementById("load").bgColor="green"
	document.getElementById("fileToLoad").hidden=false;
	var fileToLoad = document.getElementById("fileToLoad").files[0];

	var fileReader = new FileReader();
	fileReader.onload = function(fileLoadedEvent) 
	{
		alert("load");
		var textFromFileLoaded = fileLoadedEvent.target.result;
		document.getElementById("body").innerHTML = textFromFileLoaded;
	}
	fileReader.readAsText(fileToLoad, "UTF-8");
}
