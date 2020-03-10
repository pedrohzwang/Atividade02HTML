var range = document.querySelector("#frequencia");
var value = document.querySelector("span");

range.addEventListener("#frequencia", function(){
    value.innerHTML = this.value;
})