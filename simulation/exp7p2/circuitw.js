/*-Lab:exp_7_Part2_Addersubtractor
	File name: circuitw.js
    Author:Sukriti Dhang*/

var dec_valueA=0,dec_valueB=0;
var tabrowindex = 1;
var arr = [];
var table;
var Ainp7=0, Ainp6=0, Ainp5=0, Ainp4=0, Ainp3=0, Ainp2=0, Ainp1=0, Ainp0=0; 
var Binp7=0, Binp6=0, Binp5=0, Binp4=0, Binp3=0, Binp2=0, Binp1=0, Binp0=0;
var c4=0;
var s3, s2, s1, s0;

function ledchng(){

    var image1 = document.getElementById('b1');		/*	A1  */
    var image2 = document.getElementById('b2');		/*	B1  */
    var image3 = document.getElementById('b3');		/*	VCC  */
    var image4 = document.getElementById('b4');		/*	B2  */
    var image5 = document.getElementById('b5'); 	/*  A2 */
    var image6 = document.getElementById('b6'); 	/*  A3 */
    var image7 = document.getElementById('b7'); 	/*  B3 */
    var image8 = document.getElementById('b8'); 	/*	C0  */
    var image9 = document.getElementById('b9');  	/*  GND */
    var image10 = document.getElementById('b10');   /*  B0 */
    var image11 = document.getElementById('b11');	/*	A0  */
	
    var image12 = document.getElementById('b12');	/*	A1  */ /* A5 */
    var image13 = document.getElementById('b13');	/*	B1 */  /* B5*/
    var image14 = document.getElementById('b14');	/*	VCC  */
    var image15 = document.getElementById('b15'); 	/*  B2 */   /* B6 */
    var image16 = document.getElementById('b16'); 	/*  A2 */   /* A6 */
    var image17 = document.getElementById('b17'); 	/*  A3 */	/* A7 */
    var image18 = document.getElementById('b18'); 	/*	B3  */	/* B7 */
    var image19 = document.getElementById('b19');  	/*  C0 */
    var image20 = document.getElementById('b20');   /* GND */
    var image21 = document.getElementById('b21');	/*	B0  */ /* B4 */
	var image22 = document.getElementById('b22');	/*	A0  */ /* A4 */
   

/*validation of vcc and gnd */


    
       
if(image3.src.match("on") && image9.src.match("off") && image20.src.match("off") && image14.src.match("on") ){
	document.getElementById("msg").innerHTML = 'VCC and GND are properly connected';
	document.getElementById("showalt").style.visibility = 'visible';
    document.getElementById("msg").style.color="green";
}
/*else if(image3.src.match("on")  && image14.src.match("on") ){
	document.getElementById("msg").innerHTML = 'VCC and GND are properly connected';
	document.getElementById("showalt").style.visibility = 'visible';
   
}*/
       else if(image9.src.match("on") ){
            document.getElementById("msg").innerHTML = 'Please connect GND properly (Make GND to LOW for 1st circuit) ';
        document.getElementById("showalt").style.visibility = 'visible';
        document.getElementById("msg").style.color="red";
       
        }
		else if(image20.src.match("on") ){
            document.getElementById("msg").innerHTML = 'Please connect GND properly (Make GND to LOW for 2nd circuit) ';
        document.getElementById("showalt").style.visibility = 'visible';
        document.getElementById("msg").style.color="red";
        }
		else if(image9.src.match("on") && image20.src.match("on")){
            document.getElementById("msg").innerHTML = 'Please connect GND properly (Make GND to LOW) ';
        document.getElementById("showalt").style.visibility = 'visible';
        document.getElementById("msg").style.color="red";
        }
		
		else if(image3.src.match("on") && image9.src.match("on") && image14.src.match("on") && image20.src.match("on")){
			document.getElementById("msg").innerHTML = 'Please connect GND properly (Make GND to LOW) ';
			document.getElementById("showalt").style.visibility = 'visible';
            document.getElementById("msg").style.color="red";
		   
		}
		else if(image3.src.match("on") && image9.src.match("on") && image14.src.match("on") && image20.src.match("off")){
			document.getElementById("msg").innerHTML = 'Please connect GND properly (Make GND to LOW for 1st circuit) ';
			document.getElementById("showalt").style.visibility = 'visible';
            document.getElementById("msg").style.color="red";
		   
		}
		else if(image3.src.match("on") && image9.src.match("off") && image14.src.match("on") && image20.src.match("on")){
			document.getElementById("msg").innerHTML = 'Please connect GND properly (Make GND to LOW for 2nd circuit) ';
			document.getElementById("showalt").style.visibility = 'visible';
            document.getElementById("msg").style.color="red";
		   
		}
	 
		else  if(image3.src.match("on") && image9.src.match("off") && image20.src.match("off") && image14.src.match("off") ){
            document.getElementById("msg").innerHTML = 'Please connect VCC properly (Make VCC to HIGH for 2nd circuit)';
            document.getElementById("showalt").style.visibility = 'visible';
            document.getElementById("msg").style.color="red";
           
        }
		else  if(image3.src.match("off") && image9.src.match("off") && image20.src.match("off") && image14.src.match("on") ){
            document.getElementById("msg").innerHTML = 'Please connect VCC properly (Make VCC to HIGH for 1nd circuit)';
            document.getElementById("showalt").style.visibility = 'visible';
            document.getElementById("msg").style.color="red";
           
        }

	
        else{
           
            document.getElementById("showalt").style.visibility = 'hidden';
             }
  
  
  
  if(image3.src.match("on"))
	{
		document.getElementById("s0on").src="s0.png";
		document.getElementById("s0on").style.visibility = 'hidden';
		document.getElementById("s1on").src="s1.png";
		document.getElementById("s1on").style.visibility = 'hidden';
        document.getElementById("s2on").src="s2.png";
		document.getElementById("s2on").style.visibility = 'hidden';
		document.getElementById("s3on").src="s3.png";
		document.getElementById("s3on").style.visibility = 'hidden';
		document.getElementById("s3c4onon").src="s3c4.png";
		document.getElementById("s3c4onon").style.visibility = 'hidden';
		document.getElementById("s3c4offon").src="s3c4_on.png";
		document.getElementById("s3c4offon").style.visibility = 'hidden';
	}
	
	generate8bitbinary();
    decA_add_decB();
} /*ledchng ends here*/


/*switch on off*/

function a1() {
    var image = document.getElementById('b1');	

    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b1r').style.display="none";
    document.getElementById('b1g').style.display="block";

    Ainp5=1;	
    } 
else
{
    image.src = "off.png";
    document.getElementById('b1r').style.display="block";
    document.getElementById('b1g').style.display="none";
     Ainp5=0;
    }
ledchng();
}
function a2() {
    var image = document.getElementById('b2');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b2r').style.display="none";
    document.getElementById('b2g').style.display="block";
    Binp5=1;	
    } 
else
{
    image.src = "off.png";
    document.getElementById('b2r').style.display="block";
    document.getElementById('b2g').style.display="none";
    Binp5=0;
    }
    ledchng();
}
function a3() {
    var image = document.getElementById('b3');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b3r').style.display="none";
    document.getElementById('b3g').style.display="block";
   	
    } 
else
{
    image.src = "off.png";
    document.getElementById('b3r').style.display="block";
    document.getElementById('b3g').style.display="none";
   
    }
    ledchng();
}
function a4() {
    var image = document.getElementById('b4');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b4r').style.display="none";
    document.getElementById('b4g').style.display="block";
    Binp6=1;	
    } 
else
{
    image.src = "off.png";
    document.getElementById('b4r').style.display="block";
    document.getElementById('b4g').style.display="none";
    Binp6=0;
    }
    ledchng();
}

function a5() {
    var image = document.getElementById('b5');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b5r').style.display="none";
    document.getElementById('b5g').style.display="block";
    Ainp6=1;
    } 
else
{
    image.src = "off.png";
    document.getElementById('b5r').style.display="block";
    document.getElementById('b5g').style.display="none";
    Ainp6=0;
    }
    ledchng();
}
function a6() {
    var image = document.getElementById('b6');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b6r').style.display="none";
    document.getElementById('b6g').style.display="block";
    Ainp7=1;	
    } 
else
{
    image.src = "off.png";
    document.getElementById('b6r').style.display="block";
    document.getElementById('b6g').style.display="none";
    Ainp7=0;
    }
    ledchng();
}
function a7() {
    var image = document.getElementById('b7');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b7r').style.display="none";
    document.getElementById('b7g').style.display="block";
    Binp7=1;	
    } 
else
{
    image.src = "off.png";
    document.getElementById('b7r').style.display="block";
    document.getElementById('b7g').style.display="none";
    Binp7=0;
    }
    ledchng();
}
function a8() {
    var image = document.getElementById('b8');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b8r').style.display="none";
    document.getElementById('b8g').style.display="block";
  	
    } 
else
{
    image.src = "off.png";
    document.getElementById('b8r').style.display="block";
    document.getElementById('b8g').style.display="none";
  
    }
    ledchng();
}
function a9() {
    var image = document.getElementById('b9');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b9r').style.display="none";
    document.getElementById('b9g').style.display="block";
   
    } 
else
{
    image.src = "off.png";
    document.getElementById('b9r').style.display="block";
    document.getElementById('b9g').style.display="none";
   
    }
    ledchng();
}
function a10() {
    var image = document.getElementById('b10');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b10r').style.display="none";
    document.getElementById('b10g').style.display="block";
    Binp4=1;	
    } 
else
{
    image.src = "off.png";
    document.getElementById('b10r').style.display="block";
    document.getElementById('b10g').style.display="none";
    Binp4=0;
    }
    ledchng();
}
function a11() {
    var image = document.getElementById('b11');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b11r').style.display="none";
    document.getElementById('b11g').style.display="block";
    Ainp4=1;	
    } 
else
{
    image.src = "off.png";
    document.getElementById('b11r').style.display="block";
    document.getElementById('b11g').style.display="none";
    Ainp4=0;
    }
    ledchng();
}
function a12() {
    var image = document.getElementById('b12');	

    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b12r').style.display="none";
    document.getElementById('b12g').style.display="block";

    Ainp1=1;
    } 
else
{
    image.src = "off.png";
    document.getElementById('b12r').style.display="block";
    document.getElementById('b12g').style.display="none";
    Ainp1=0;
    }
ledchng();
}
function a13() {
    var image = document.getElementById('b13');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b13r').style.display="none";
    document.getElementById('b13g').style.display="block";
    Binp1=1;	
    } 
else
{
    image.src = "off.png";
    document.getElementById('b13r').style.display="block";
    document.getElementById('b13g').style.display="none";
    Binp1=0;
    }
    ledchng();
}

function a14() {
    var image = document.getElementById('b14');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b14r').style.display="none";
    document.getElementById('b14g').style.display="block";
   
    } 
else
{
    image.src = "off.png";
    document.getElementById('b14r').style.display="block";
    document.getElementById('b14g').style.display="none";
  
    }
    ledchng();
}

function a15() {
    var image = document.getElementById('b15');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b15r').style.display="none";
    document.getElementById('b15g').style.display="block";
    Binp2=1;	
    } 
else
{
    image.src = "off.png";
    document.getElementById('b15r').style.display="block";
    document.getElementById('b15g').style.display="none";
    Binp2=0;
    }
    ledchng();
}
function a16() {
    var image = document.getElementById('b16');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b16r').style.display="none";
    document.getElementById('b16g').style.display="block";
    Ainp2=1;	
    } 
else
{
    image.src = "off.png";
    document.getElementById('b16r').style.display="block";
    document.getElementById('b16g').style.display="none";
    Ainp2=0;
    }
    ledchng();
}
function a17() {
    var image = document.getElementById('b17');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b17r').style.display="none";
    document.getElementById('b17g').style.display="block";
    Ainp3=1;	
    } 
else
{
    image.src = "off.png";
    document.getElementById('b17r').style.display="block";
    document.getElementById('b17g').style.display="none";
    Ainp3=0;
    }
    ledchng();
}
function a18() {
    var image = document.getElementById('b18');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b18r').style.display="none";
    document.getElementById('b18g').style.display="block";
    Binp3=1;	
    } 
else
{
    image.src = "off.png";
    document.getElementById('b18r').style.display="block";
    document.getElementById('b18g').style.display="none";
    Binp3=0;
    }
    ledchng();
}
function a19() {
    var image = document.getElementById('b19');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b19r').style.display="none";
    document.getElementById('b19g').style.display="block";
    	
    } 
else
{
    image.src = "off.png";
    document.getElementById('b19r').style.display="block";
    document.getElementById('b19g').style.display="none";
  
    }
    ledchng();
}
function a20() {
    var image = document.getElementById('b20');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b20r').style.display="none";
    document.getElementById('b20g').style.display="block";
   	
    } 
else
{
    image.src = "off.png";
    document.getElementById('b20r').style.display="block";
    document.getElementById('b20g').style.display="none";
   
    }
    ledchng();
}
function a21() {
    var image = document.getElementById('b21');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b21r').style.display="none";
    document.getElementById('b21g').style.display="block";
    Binp0=1;	
    } 
else
{
    image.src = "off.png";
    document.getElementById('b21r').style.display="block";
    document.getElementById('b21g').style.display="none";
    Binp0=0;
    }
    ledchng();
}
function a22() {
    var image = document.getElementById('b22');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b22r').style.display="none";
    document.getElementById('b22g').style.display="block";
    Ainp0=1;
    } 
else
{
    image.src = "off.png";
    document.getElementById('b22r').style.display="block";
    document.getElementById('b22g').style.display="none";
    Ainp0=0;
    }
    ledchng();
}

/*generate 8bit input A combination*/
function generate8bitbinary(){
    var A=[];
    var B=[];
     A.push(Ainp7,Ainp6,Ainp5,Ainp4,Ainp3,Ainp2,Ainp1,Ainp0);
     B.push(Binp7,Binp6,Binp5,Binp4,Binp3,Binp2,Binp1,Binp0);
     var binpA= A.join("");
     var binpB= B.join("");
     document.getElementById("binaryinpA").value=binpA;
     document.getElementById("binaryinpB").value=binpB;
     binarytodecimal_A();
     binarytodecimal_B();
}

/* binary to decimal conversion*/

function binarytodecimal_A(){
	var bstrA=document.getElementById("binaryinpA").value;
	function bin_to_dec(bstrA) { 
    return parseInt((bstrA + '')
	.replace(/[^01]/gi, ''), 2);	
	}
	dec_valueA=bin_to_dec(bstrA);
	//alert(dec_valueA);
	//document.getElementById("decimalinp").value=dec_value;
}

function binarytodecimal_B(){
	var bstrB=document.getElementById("binaryinpB").value;
	function bin_to_dec(bstrB) { 
    return parseInt((bstrB + '')
	.replace(/[^01]/gi, ''), 2);	
	}
	dec_valueB=bin_to_dec(bstrB);
	//alert(dec_valueB);
	//document.getElementById("decimalinp").value=dec_value;
}

function decA_add_decB(){
	dec_sum=dec_valueA + dec_valueB;
	//alert(dec_sum);
	convertToBinary(dec_sum);
}

// program to convert decimal to binary
function convertToBinary(dec_sum) {
  /*  let bin = 0;
    let rem, i = 1, step = 1;
    while (dec_sum != 0) {
        rem = dec_sum % 2;
        console.log(
            `Step ${step++}: ${dec_sum}/2, Remainder = ${rem}, Quotient = ${parseInt(dec_sum/2)}`
        );
        dec_sum = parseInt(dec_sum / 2);
        bin = bin + rem * i;
        i = i * 10;
    }
	document.getElementById("binaryinpS").value=bin;
    console.log(`Binary: ${bin}`);*/
	
		 var binary = "";
		 for(i=0;i<9;i++)
		 { 
		  var remainder = dec_sum % 2;
			 
			 if(remainder == 0)
			 { 
			     binary = binary + "0";
				 
		     }
			 else 
			 {
			     binary = binary + "1";
				 
			 }
			
			dec_sum = Math.trunc(dec_sum/2);
		 }
		
		var binaryStr1 = binary.split("");
		var binaryStr2 = binaryStr1.reverse();
		var binaryStrFinal = binaryStr2.join("");
	    // alert(binaryStr2);
		
		document.getElementById("binaryinpS").value = binaryStrFinal;

		 c8=binaryStr2[0];
		 s7=binaryStr2[1];
		 s6=binaryStr2[2];
		 s5=binaryStr2[3];
		 s4=binaryStr2[4];        
		 s3=binaryStr2[5];
		 s2=binaryStr2[6];
		 s1=binaryStr2[7];
		 s0=binaryStr2[8];
		
		
    
        if(c8==1 && s7==0){
		
			document.getElementById("s7c8offon").src="s7c8_on.png";
			document.getElementById("s7c8offon").style.visibility = 'visible';
		}
		else
			{document.getElementById("s7c8offon").src="s7c8_on.png";
			document.getElementById("s7c8offon").style.visibility = 'hidden';
		}
		if(s7==1&&c8==0){
			document.getElementById("s7on").src="s7.png";
			document.getElementById("s7on").style.visibility = 'visible';
		}
		else{
			document.getElementById("s7on").src="s7.png";
			document.getElementById("s7on").style.visibility = 'hidden';
		}
        if(s6==1){
			document.getElementById("s6on").src="s6.png";
			document.getElementById("s6on").style.visibility = 'visible';
		}
		else{
			document.getElementById("s6on").src="s6.png";
			document.getElementById("s6on").style.visibility = 'hidden';
		}
        if(s5==1){
			document.getElementById("s5on").src="s5.png";
			document.getElementById("s5on").style.visibility = 'visible';
		}
		else{
			document.getElementById("s5on").src="s5.png";
			document.getElementById("s5on").style.visibility = 'hidden';
		}
        if(s4==1){
			document.getElementById("s4on").src="s4.png";
			document.getElementById("s4on").style.visibility = 'visible';
		}
		else{
			document.getElementById("s4on").src="s4.png";
			document.getElementById("s4on").style.visibility = 'hidden';
		}
        if(s3==1){
			document.getElementById("s3on").src="s3.png";
			document.getElementById("s3on").style.visibility = 'visible';
		}
		else{
			document.getElementById("s3on").src="s3.png";
			document.getElementById("s3on").style.visibility = 'hidden';
		}
		if(s2==1){
			document.getElementById("s2on").src="s2.png";
			document.getElementById("s2on").style.visibility = 'visible';
		}
		else{
			document.getElementById("s2on").src="s2.png";
			document.getElementById("s2on").style.visibility = 'hidden';
		}
		if(s1==1){
			document.getElementById("s1on").src="s1.png";
			document.getElementById("s1on").style.visibility = 'visible';
		}
		else{
			document.getElementById("s1on").src="s1.png";
			document.getElementById("s1on").style.visibility = 'hidden';
		}
		if(s0==1){
			document.getElementById("s0on").src="s0.png";
			document.getElementById("s0on").style.visibility = 'visible';
		}
		else{
			document.getElementById("s0on").src="s0.png";
			document.getElementById("s0on").style.visibility = 'hidden';
		}
		if(c8==1 && s7==1){
			document.getElementById("s7c8onon").src="s7c8.png";
			document.getElementById("s7c8onon").style.visibility = 'visible';
		}
		else{
			document.getElementById("s7c8onon").src="s7c8.png";
			document.getElementById("s7c8onon").style.visibility = 'hidden';
		}
	//	addtotable();
}

function addtotable(){
	//arr[0] = tabrowindex + 1;
    inputa = document.getElementById("binaryinpA").value.split("");
    inputb = document.getElementById("binaryinpB").value.split("");
    outputsum = document.getElementById("binaryinpS").value.split("");

   arr[0]=inputa[0];
   arr[1]=inputa[1];
   arr[2]=inputa[2];
   arr[3]=inputa[3];
   arr[4]=inputa[4];
   arr[5]=inputa[5];
   arr[6]=inputa[6];
   arr[7]=inputa[7];
   arr[8]=inputb[0];
   arr[9]=inputb[1];
   arr[10]=inputb[2];
   arr[11]=inputb[3];
   arr[12]=inputb[4];
   arr[13]=inputb[5];
   arr[14]=inputb[6];
   arr[15]=inputb[7];

   arr[16]=outputsum[0];
   arr[17]=outputsum[1];
   arr[18]=outputsum[2];
   arr[19]=outputsum[3];
   arr[20]=outputsum[4];
   arr[21]=outputsum[5];
   arr[22]=outputsum[6];
   arr[23]=outputsum[7];
   arr[24]=outputsum[8];
   


	
	table = document.getElementById("mytable");
        
        var row = table.insertRow(++tabrowindex); // Row increment
        for (var q = 0; q < 25; q++) {

            var cell = row.insertCell(q);
            cell.innerHTML = arr[q];

        }

/*for(r=0;r<13;r++)
		clmns = table.rows[tabrowindex].cells[r];
		vlt = clmns.innerHTML;

		if (clmns == arr[r]) {
			
			document.getElementById("msg").innerHTML = "Change the input combination";
		
		}*/
	
}
