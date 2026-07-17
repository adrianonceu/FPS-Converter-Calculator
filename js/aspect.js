document.getElementById("aspectContainer").innerHTML = `

<div class="card">

<h2>Aspect Ratio Calculator</h2>

<br>

<label>Width</label>

<input id="width" type="number" value="3840">

<br><br>

<label>Height</label>

<input id="height" type="number" value="2160">

<br><br>

<div class="result" id="aspectResult">

16 : 9

</div>

</div>

`;

function gcd(a,b){

    return b==0 ? a : gcd(b,a%b);

}

function updateAspect(){

    let w=parseInt(document.getElementById("width").value);

    let h=parseInt(document.getElementById("height").value);

    let g=gcd(w,h);

    document.getElementById("aspectResult").innerHTML=
        (w/g)+" : "+(h/g);

}

document
.getElementById("width")
.addEventListener("input",updateAspect);

document
.getElementById("height")
.addEventListener("input",updateAspect);

updateAspect();
