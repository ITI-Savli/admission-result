function searchResult(){

alert("સદર પરિણામમાં ફેરફાર હોઈ શકે છે. તેથી તેની ખરાઈ આઈ. ટી. આઈ. ખાતે અવશ્ય કરવી.");

let appNo=document.getElementById("appNo").value;

fetch("https://script.google.com/macros/s/AKfycbzpMD7iFAFz2S1QcL8U0SJPu8i38bwaRZDnggqCpdumOSMLICkqrvsj0GKvyAa2dijA/exec?appNo="+encodeURIComponent(appNo))

.then(response=>response.json())

.then(data=>{

if(data.found){

document.getElementById("result").innerHTML=`

<h2>Admission Result</h2>

<p><b>Registraion No.:</b> ${data.application}</p>

<p><b>Name:</b> ${data.name}</p>

<p><b>Date of Birth:</b> ${data.dob}</p>

<p><b>Gender:</b> ${data.gender}</p>

<p><b>Caste:</b> ${data.caste}</p>

<p><b>Trade:</b> ${data.trade}</p>

<p><b>ITI:</b> ${data.iti}</p>

<p><b>Category:</b> ${data.category}</p>

<p><b>Rank:</b> ${data.rank}</p>

<p><b>Caste Rank:</b> ${data.casterank}</p>

`;

}

else{

document.getElementById("result").innerHTML="<h3>No Record Found</h3>";

}

});

}
