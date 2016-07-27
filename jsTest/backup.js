<body>
<button id="createTable">createTable</button>
<input type="number" id="rowNums" name="rowNums"/>

<script type="text/javascript">
function dropTable(){
var tb = document.getElementsByTagName("table")[0];
if(tb){
tb.parentNode.removeChild(tb);
}
}
function deleteRows(){
var tr = this.parentNode.parentNode;
tr.parentNode.removeChild(tr);
}

function createTable(){
dropTable();
var table = document.createElement("table");
var rowNums = document.getElementById("rowNums").value;

for(var i = 0;i<rowNums ; i++){
var tr = document.createElement("tr");
var td1 = document.createElement("td");
var td2 = document.createElement("td");
var td3 = document.createElement("td");
td1.innerHTML=i+"";
td2.innerHTML="Knife"+i;
var btn = document.createElement("button");
btn.innerHTML="delete";
btn.onclick=deleteRows;
td3.appendChild(btn);
tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);
table.appendChild(tr);
}
document.body.appendChild(table);
}
window.onload=function(){
var ct=document.getElementById("createTable");
ct.onclick = createTable;
}
</script>
</body>
</html>