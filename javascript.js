var outdoorPics = document.getElementById("numberofoutdoorpics");
var totalOutdoorPics = document.getElementById("outdoorshoottotal");
var totalStudioPics = document.getElementById("studioshoottotal");
var totalOutdoorPicsNumber = document.getElementById("numberofoutdoorpics");
var hideParaText = document.getElementById("dresslimit");


function validateTotalCost(){

	if (outdoorPics.value == "1" || outdoorPics.value == "2" || outdoorPics.value == "3" || outdoorPics.value == "4" || outdoorPics.value == "5" || outdoorPics.value == "6" || outdoorPics.value == "7" || outdoorPics.value == "8" || outdoorPics.value == "9")  
   	{
   		
   		alert("You cannot select less than 10 pictures in this package");
   	
   	}
   	
   	return false;

}

function validateTotalAmount(){
var totalOutdoorPicsPrice = Math.floor(outdoorPics.value * 20);
totalOutdoorPics.style.color = "black";
totalOutdoorPics.innerHTML = `<strong> ${totalOutdoorPicsPrice} </strong>`;

var totalStudioPicsPrice = Math.floor(outdoorPics.value * 10);
totalOutdoorPics.style.color = "black";
totalStudioPics.innerHTML = `<strong> ${totalStudioPicsPrice} </strong>`;



console.log(totalOutdoorPics);
console.log(totalStudioPics);


if (outdoorPics.value == "1" || outdoorPics.value == "2" || outdoorPics.value == "3" || outdoorPics.value == "4" || outdoorPics.value == "5" || outdoorPics.value == "6" || outdoorPics.value == "7" || outdoorPics.value == "8" || outdoorPics.value == "9" || outdoorPics.value == "10" || outdoorPics.value == "11" || outdoorPics.value == "12" || outdoorPics.value == "13" || outdoorPics.value == "14" || outdoorPics.value == "15")  
   	{
   		
   		
   		hideParaText.style.display = "block";
   		
   	}
   	else{
   		hideParaText.style.display = "none";
   	}


    if (outdoorPics.value < "1")  
   	{
   		alert("The value cannot be a negative number..");

   		return false;
   	}




   	if (outdoorPics.value == "16" || outdoorPics.value == "17" || outdoorPics.value == "18" || outdoorPics.value == "19" )  
   	{
   		
   		
   		hideParaText.style.display = "block";
   		hideParaText.style.backgroundColor = "green";
   		hideParaText.innerHTML = "Maximum dress change is 4";
   		
   	}
   	

   	
return false;
}





function validateTotalCost(){

	if (outdoorPics.value == "1" || outdoorPics.value == "2" || outdoorPics.value == "3" || outdoorPics.value == "4" || outdoorPics.value == "5" || outdoorPics.value == "6" || outdoorPics.value == "7" || outdoorPics.value == "8" || outdoorPics.value == "9")  
   	{
   		
   		alert("You cannot select less than 10 pictures in this package");
   	
   	}
   	
   	return false;

}


function printPage() {
	window.print()
}

