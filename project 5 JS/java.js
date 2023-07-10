let f = document.getElementById("s3");
let g1 = document.getElementById("s2");
f.addEventListener("click" , function()
{
  if(g1.value!="")
  {
    let r = document.createElement("div");
    r.classList.add("pop1");
    r.classList.add("pop11");
    r.innerHTML = `${g1.value}`;
    
    let dobut = document.createElement("button");
    dobut.classList.add("pop2");
    r.classList.add("pop11");
    dobut.innerHTML = "Done";
    r.appendChild(dobut);
  
    dobut.addEventListener("click" , function()
    {
      dobut.parentElement.style.textDecoration = "line-through";
    });
     
    let del = document.createElement("button");
    del.classList.add("pop2");
    del.classList.add("pop3");
    del.innerHTML = "Delete";
    r.appendChild(del);
  
    del.addEventListener("click" , function()
    {
      del.parentElement.remove();
    });
    document.body.appendChild(r);
    g1.value = "";
  }
  else{
    alert("enter to do list");
  }
  
});