var ptag = document.querySelector("#pid");
entag = document.querySelector("#etag");
var currentTask = document.querySelector(".del");
function add() {
  if (entag.value.length == 0) {
    alert("Please enter a task");
  } else {
    let txt = entag.value;
    ptag.innerHTML += `<ul class="list-group">  
                        <li class="list-group-item text-primary d-flex justify-content-between">
                        ${txt} <a>
                        <i class='fa-solid fa-trash text-danger fa-2x' onclick="dele()"></i>
                        </a> 
                        </li>                          
                          <br />
                        </div>
                        `;
    entag.value = "";
  }
}
//
function dele() {
  this.parentNode.remove(ptag);
}
