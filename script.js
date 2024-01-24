let btn = document.querySelector("#btn");
btn.addEventListener("click",btnClick);
btn.classList.add("btn");

function btnClick()
{ 
    if(btn.innerText=="Dark Mode")
    {
        btn.innerText="Light Mode";
        btn.classList.add("lightbtn")
        document.body.classList.add("body")
        
    }
    else
    {
        btn.innerText="Dark Mode";
        btn.classList.remove("lightbtn")
        document.body.classList.remove("body")
    }
}