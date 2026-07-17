document.getElementById("fpsContainer").innerHTML = `

<div class="card">

<h2>FPS Converter</h2>

<br>

<label>Source FPS</label>

<select id="sourceFPS">

<option>23.976</option>
<option>24</option>
<option selected>25</option>
<option>29.97</option>
<option>30</option>
<option>50</option>
<option>59.94</option>
<option>60</option>

</select>

<br><br>

<label>Target FPS</label>

<select id="targetFPS">

<option selected>23.976</option>
<option>24</option>
<option>25</option>
<option>29.97</option>
<option>30</option>
<option>50</option>
<option>59.94</option>
<option>60</option>

</select>

<div class="result" id="speedResult">

95.904%

</div>

</div>

`;

function updateFPS(){

    let s=parseFloat(document.getElementById("sourceFPS").value);

    let t=parseFloat(document.getElementById("targetFPS").value);

    let speed=(t/s)*100;

    document.getElementById("speedResult").innerHTML=
        speed.toFixed(3)+"%";

}

document
.getElementById("sourceFPS")
.addEventListener("change",updateFPS);

document
.getElementById("targetFPS")
.addEventListener("change",updateFPS);

updateFPS();
