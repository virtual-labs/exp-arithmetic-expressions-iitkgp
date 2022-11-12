/*-Lab:exp_7_Part1_Addersubtractor
	File name: exp7p1.html
    Author:Sukriti Dhang*/

var dec_valueA=0,dec_valueB=0;
var tabrowindex = 1;
var arr = [];
var table;
var Ainp3=0, Ainp2=0, Ainp1=0, Ainp0=0; 
var Binp3=0, Binp2=0, Binp1=0, Binp0=0;
var c4=0;
var s3, s2, s1, s0;

function ledchng(){

    var image1 = document.getElementById('b1');		/*	A1  */
    var image2 = document.getElementById('b2');		/*	B1  */
    var image3 = document.getElementById('b3');		/*	VCC  */
    var image4 = document.getElementById('b4');		/*	B2  */
    var image5 = document.getElementById('b5'); 	/*  A1 */
    var image6 = document.getElementById('b6'); 	/*  A3 */
    var image7 = document.getElementById('b7'); 	/*  B4 */
    var image8 = document.getElementById('b8'); 	/*	C0  */
    var image9 = document.getElementById('b9');  	/*  GND */
    var image10 = document.getElementById('b10');   /*  B0 */
    var image11 = document.getElementById('b11');	/*	A0  */
   

/*validation of vcc and gnd */


    if(image3.src.match("on") && image9.src.match("on")){
        document.getElementById("msg").innerHTML = 'Please connect GND properly (Make GND to LOW) ';
        document.getElementById("showalt").style.visibility = 'visible';
		document.getElementById("msg").style.color="red";
    }
    
      else  if(image9.src.match("off") && image3.src.match("on") ){
            document.getElementById("msg").innerHTML = 'VCC and GND are properly connected';
            document.getElementById("showalt").style.visibility = 'visible';
			document.getElementById("msg").style.color="green";
        }
       
        else if(image3.src.match("on") ){
            document.getElementById("msg").innerHTML = 'VCC and GND are properly connected';
            document.getElementById("showalt").style.visibility = 'visible';
			document.getElementById("msg").style.color="green";
        }
		else if(image3.src.match("off") ){
            document.getElementById("msg").innerHTML = 'Please connect VCC  properly';
            document.getElementById("showalt").style.visibility = 'visible';
			document.getElementById("msg").style.color="red";
        }
        else if(image9.src.match("on") ){
            document.getElementById("msg").innerHTML = 'Please connect GND properly (Make GND to LOW) ';
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
	
	/* 4 bit adder A3A2A1A0 */
	if(image6.src.match("off")&&image5.src.match("off")&&image1.src.match("off")&&image11.src.match("off"))
	{
		document.getElementById("binaryinpA").value = '0000';//0
		binarytodecimal_A();
		decA_add_decB();
		}
		if(image6.src.match("off")&&image5.src.match("off")&&image1.src.match("off")&&image11.src.match("on"))
	{
		document.getElementById("binaryinpA").value = '0001';//1
		binarytodecimal_A();
		decA_add_decB();
		}
		if(image6.src.match("off")&&image5.src.match("off")&&image1.src.match("on")&&image11.src.match("off"))
	{
		document.getElementById("binaryinpA").value = '0010';//2
		binarytodecimal_A();
		decA_add_decB();
		}
		if(image6.src.match("off")&&image5.src.match("off")&&image1.src.match("on")&&image11.src.match("on"))
	{
		document.getElementById("binaryinpA").value = '0011';//3
		binarytodecimal_A();
		decA_add_decB();
		}
		if(image6.src.match("off")&&image5.src.match("on")&&image1.src.match("off")&&image11.src.match("off"))
	{
		document.getElementById("binaryinpA").value = '0100';//4
		binarytodecimal_A();
		decA_add_decB();
		}
		if(image6.src.match("off")&&image5.src.match("on")&&image1.src.match("off")&&image11.src.match("on"))
	{
		document.getElementById("binaryinpA").value = '0101';//5
		binarytodecimal_A();
		decA_add_decB();
		}
		if(image6.src.match("off")&&image5.src.match("on")&&image1.src.match("on")&&image11.src.match("off"))
	{
		document.getElementById("binaryinpA").value = '0110';//6
		binarytodecimal_A();
		decA_add_decB();
		}
		if(image6.src.match("off")&&image5.src.match("on")&&image1.src.match("on")&&image11.src.match("on"))
	{
		document.getElementById("binaryinpA").value = '0111';//7
		binarytodecimal_A();
		decA_add_decB();
		}
		if(image6.src.match("on")&&image5.src.match("off")&&image1.src.match("off")&&image11.src.match("off"))
	{
		document.getElementById("binaryinpA").value = '1000';//8
		binarytodecimal_A();
		decA_add_decB();
		}
		if(image6.src.match("on")&&image5.src.match("off")&&image1.src.match("off")&&image11.src.match("on"))
	{
		document.getElementById("binaryinpA").value = '1001';//9
		binarytodecimal_A();
		decA_add_decB();
		}
		if(image6.src.match("on")&&image5.src.match("off")&&image1.src.match("on")&&image11.src.match("off"))
	{
		document.getElementById("binaryinpA").value = '1010';//10
		binarytodecimal_A();
		decA_add_decB();
		}
		if(image6.src.match("on")&&image5.src.match("off")&&image1.src.match("on")&&image11.src.match("on"))
	{
		document.getElementById("binaryinpA").value = '1011';//11
		binarytodecimal_A();
		decA_add_decB();
		}
		if(image6.src.match("on")&&image5.src.match("on")&&image1.src.match("off")&&image11.src.match("off"))
	{
		document.getElementById("binaryinpA").value = '1100';//12
		binarytodecimal_A();
		decA_add_decB();
		}
		if(image6.src.match("on")&&image5.src.match("on")&&image1.src.match("off")&&image11.src.match("on"))
	{
		document.getElementById("binaryinpA").value = '1101';//13
		binarytodecimal_A();
		decA_add_decB();
		}
		if(image6.src.match("on")&&image5.src.match("on")&&image1.src.match("on")&&image11.src.match("off"))
	{
		document.getElementById("binaryinpA").value = '1110';//14
		binarytodecimal_A();
		decA_add_decB();
		}
		if(image6.src.match("on")&&image5.src.match("on")&&image1.src.match("on")&&image11.src.match("on"))
	{
		document.getElementById("binaryinpA").value = '1111';//15
		binarytodecimal_A();
		decA_add_decB();
		}
		
		/* 4 bit adder B3B2B1B0 */
	if(image7.src.match("off")&&image4.src.match("off")&&image2.src.match("off")&&image10.src.match("off"))
	{
		document.getElementById("binaryinpB").value = '0000';//0
		binarytodecimal_B();
		decA_add_decB();
		}
		if(image7.src.match("off")&&image4.src.match("off")&&image2.src.match("off")&&image10.src.match("on"))
	{
		document.getElementById("binaryinpB").value = '0001';//1
		binarytodecimal_B();
		decA_add_decB();
		}
		if(image7.src.match("off")&&image4.src.match("off")&&image2.src.match("on")&&image10.src.match("off"))
	{
		document.getElementById("binaryinpB").value = '0010';//2
		binarytodecimal_B();
		decA_add_decB();
		}
		if(image7.src.match("off")&&image4.src.match("off")&&image2.src.match("on")&&image10.src.match("on"))
	{
		document.getElementById("binaryinpB").value = '0011';//3
		binarytodecimal_B();
		decA_add_decB();
		}
		if(image7.src.match("off")&&image4.src.match("on")&&image2.src.match("off")&&image10.src.match("off"))
	{
		document.getElementById("binaryinpB").value = '0100';//4
		binarytodecimal_B();
		decA_add_decB();
		}
		if(image7.src.match("off")&&image4.src.match("on")&&image2.src.match("off")&&image10.src.match("on"))
	{
		document.getElementById("binaryinpB").value = '0101';//5
		binarytodecimal_B();
		decA_add_decB();
		}
		if(image7.src.match("off")&&image4.src.match("on")&&image2.src.match("on")&&image10.src.match("off"))
	{
		document.getElementById("binaryinpB").value = '0110';//6
		binarytodecimal_B();
		decA_add_decB();
		}
		if(image7.src.match("off")&&image4.src.match("on")&&image2.src.match("on")&&image10.src.match("on"))
	{
		document.getElementById("binaryinpB").value = '0111';//7
		binarytodecimal_B();
		decA_add_decB();
		}
		if(image7.src.match("on")&&image4.src.match("off")&&image2.src.match("off")&&image10.src.match("off"))
	{
		document.getElementById("binaryinpB").value = '1000';//8
		binarytodecimal_B();
		decA_add_decB();
		}
		if(image7.src.match("on")&&image4.src.match("off")&&image2.src.match("off")&&image10.src.match("on"))
	{
		document.getElementById("binaryinpB").value = '1001';//9
		binarytodecimal_B();
		decA_add_decB();
		}
		if(image7.src.match("on")&&image4.src.match("off")&&image2.src.match("on")&&image10.src.match("off"))
	{
		document.getElementById("binaryinpB").value = '1010';//10
		binarytodecimal_B();
		decA_add_decB();
		}
		if(image7.src.match("on")&&image4.src.match("off")&&image2.src.match("on")&&image10.src.match("on"))
	{
		document.getElementById("binaryinpB").value = '1011';//11
		binarytodecimal_B();
		decA_add_decB();
		}
		if(image7.src.match("on")&&image4.src.match("on")&&image2.src.match("off")&&image10.src.match("off"))
	{
		document.getElementById("binaryinpB").value = '1100';//12
		binarytodecimal_B();
		decA_add_decB();
		}
		if(image7.src.match("on")&&image4.src.match("on")&&image2.src.match("off")&&image10.src.match("on"))
	{
		document.getElementById("binaryinpB").value = '1101';//13
		binarytodecimal_B();
		decA_add_decB();
		}
		if(image7.src.match("on")&&image4.src.match("on")&&image2.src.match("on")&&image10.src.match("off"))
	{
		document.getElementById("binaryinpB").value = '1110';//14
		binarytodecimal_B();
		decA_add_decB();
		}
		if(image7.src.match("on")&&image4.src.match("on")&&image2.src.match("on")&&image10.src.match("on"))
	{
		document.getElementById("binaryinpB").value = '1111';//15
		binarytodecimal_B();
		decA_add_decB();
		}
}


/*switch on off*/

function a1() {
    var image = document.getElementById('b1');	

    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b1r').style.display="none";
    document.getElementById('b1g').style.display="block";

   // var a1=1;	
    } 
else
{
    image.src = "off.png";
    document.getElementById('b1r').style.display="block";
    document.getElementById('b1g').style.display="none";
   // var a1=0;
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
    //var i1='1'	;	
    } 
else
{
    image.src = "off.png";
    document.getElementById('b2r').style.display="block";
    document.getElementById('b2g').style.display="none";
    //var i1='0';
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
    //var i1='1'	;	
    } 
else
{
    image.src = "off.png";
    document.getElementById('b3r').style.display="block";
    document.getElementById('b3g').style.display="none";
    //var i1='0';
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
    //var i1='1'	;	
    } 
else
{
    image.src = "off.png";
    document.getElementById('b4r').style.display="block";
    document.getElementById('b4g').style.display="none";
    //var i1='0';
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
    //var i1='1'	;	
    } 
else
{
    image.src = "off.png";
    document.getElementById('b5r').style.display="block";
    document.getElementById('b5g').style.display="none";
    //var i1='0';
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
    //ar i1='1'	;	
    } 
else
{
    image.src = "off.png";
    document.getElementById('b6r').style.display="block";
    document.getElementById('b6g').style.display="none";
    //var i1='0';
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
    //var i1='1'	;	
    } 
else
{
    image.src = "off.png";
    document.getElementById('b7r').style.display="block";
    document.getElementById('b7g').style.display="none";
    //var i1='0';
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
    //var i1='1'	;	
    } 
else
{
    image.src = "off.png";
    document.getElementById('b8r').style.display="block";
    document.getElementById('b8g').style.display="none";
    //var i1='0';
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
    //var i1='1'	;	
    } 
else
{
    image.src = "off.png";
    document.getElementById('b9r').style.display="block";
    document.getElementById('b9g').style.display="none";
    //var i1='0';
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
    //var i1='1'	;	
    } 
else
{
    image.src = "off.png";
    document.getElementById('b10r').style.display="block";
    document.getElementById('b10g').style.display="none";
    //var i1='0';
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
    //var i1='1'	;	
    } 
else
{
    image.src = "off.png";
    document.getElementById('b11r').style.display="block";
    document.getElementById('b11g').style.display="none";
    //var i1='0';
    }
    ledchng();
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
/*	var binarya= bstrA.split("");

	 Ainp3=binarya[0];
	 Ainp2=binarya[1];
	 Ainp1=binarya[2];
	 Ainp0=binarya[3];*/
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
	/*var binaryb= bstrB.split("");

	 Binp3=binaryb[0];
	 Binp2=binaryb[1];
	 Binp1=binaryb[2];
	 Binp0=binaryb[3];*/
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
		 for(i=0;i<5;i++)
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
		 c4=binaryStr2[0];
		 s3=binaryStr2[1];
		 s2=binaryStr2[2];
		 s1=binaryStr2[3];
		 s0=binaryStr2[4];
		
		if(c4==1 && s3==0){
		
			document.getElementById("s3c4offon").src="s3c4_on.png";
			document.getElementById("s3c4offon").style.visibility = 'visible';
		}
		else
			{document.getElementById("s3c4offon").src="s3c4_on.png";
			document.getElementById("s3c4offon").style.visibility = 'hidden';
		}
		if(s3==1&&c4==0){
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
		if(c4==1 && s3==1){
			document.getElementById("s3c4onon").src="s3c4.png";
			document.getElementById("s3c4onon").style.visibility = 'visible';
		}
		else{
			document.getElementById("s3c4onon").src="s3c4.png";
			document.getElementById("s3c4onon").style.visibility = 'hidden';
		}
		
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
   arr[4]=inputb[0];
   arr[5]=inputb[1];
   arr[6]=inputb[2];
   arr[7]=inputb[3];
   arr[8]=outputsum[0];
   arr[9]=outputsum[1];
   arr[10]=outputsum[2];
   arr[11]=outputsum[3];
   arr[12]=outputsum[4];


	
	table = document.getElementById("mytable");
        
        var row = table.insertRow(++tabrowindex); // Row increment
        for (var q = 0; q < 13; q++) {

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
