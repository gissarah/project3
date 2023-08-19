$(function()
{
    $('[data-toggle="tooltip"]').tooltip( )
});

// ////////////////////////////////////////////////

// ///////////  cards thanks  ////////////////////

let img=document.querySelectorAll(".card-img")
let p=document.querySelectorAll("  .thanks .items .par")

img.forEach(function(items){
items.onclick=function (){

    for(let i =0; i<p.length ;i++){
        
        if( p[i].style.display=="block"){
            p[i].style.display="none";

        } else{
            p[i].style.display="block";
        }
        
    }
}
})

// ******************************************************************************//