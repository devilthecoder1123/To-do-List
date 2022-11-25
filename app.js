const item=document.querySelector("#item");
const todobox=document.querySelector("#todobox");
item.addEventListener("keyup", 
function (event){
    
    if(event.key== "Enter"){
        addToDo(this.value);
        this.value="";
    }
}
)
const addToDo=(item)=>{
    const listItem=document.createElement("li");
    listItem.innerHTML=`
    ${item}
    <i class="fa fa-close" style="font-size:16px"></i>
    `;
    listItem.addEventListener("click",
    function(){
        this.classList.toggle("done");
    }
    )
    listItem.querySelector("i").addEventListener(
        "click",
        function() {
            listItem.remove()
        }
    )
    todobox.appendChild(listItem);
}