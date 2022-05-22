

let arr = document.querySelectorAll("ul li");
let pic = document.getElementById("myimg");
let cap = document.getElementById("txt");
let curInd = 0;

console.log(cap.value);

cap.value = arr[0].innerText;

cap.addEventListener('change', (e) => {

    arr[curInd].textContent = e.target.value;
    
});



function change_image(arr, i)
{
    arr[i].style.backgroundColor = 'orange';
    arr[i].style.color = 'white';
    arr[i].style.borderRadius = '1vw';
    let val = arr[i].className;
    
    cap.value = arr[i].innerText;

    if(val == "item-1")
        pic.src = "https://images.unsplash.com/photo-1561948955-570b270e7c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80";
    else if(val == "item-2")
       pic.src = "https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80";
    else if(val == "item-3")
       pic.src = "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80";
    else if(val == "item-4")
       pic.src = "https://images.unsplash.com/photo-1623206837956-07dab21608f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80";
    else if(val == "item-5")
       pic.src = "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80";


    for(let j = 0; j < arr.length; j++)
        if(j !== i)
        {
            arr[j].style.color = 'black';
            arr[j].style.backgroundColor = 'white';
        }
 

}




for(let i = 0; i < arr.length; i++)
{
 
    arr[i].addEventListener("click", function(e){
         
         curInd = i;
         change_image(arr, i);
    });


}



document.onkeydown = checkKey;

function checkKey(e){

    if(e.keyCode == '38')
    {   
        curInd = (curInd - 1 + 5) % 5;
        change_image(arr, curInd);
    }
     else if(e.keyCode == '40')
     {
         curInd = (curInd + 1) % 5;
         change_image(arr, curInd);
     }
      
}


