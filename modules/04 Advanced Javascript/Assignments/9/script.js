if(localStorage.hasOwnProperty('selectedID')){
    var id = localStorage.getItem("selectedID");
    var selected = document.getElementById(id);
    showThisImg(selected);
}
function showThisImg(element){
    var currentShown = document.getElementById("current-shown");
    var selected = document.getElementsByClassName("selected");
    currentShown.src=element.src;
    selected[0].classList.toggle("selected");
    element.setAttribute("class", "img selected");
    element.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
    localStorage.setItem("selectedID",element.id);
}
function moveLeft(){
    var selectedID = document.getElementsByClassName("selected")[0].id;
    var index = selectedID.replace("img","");
    index = Number(index);
    var images = document.getElementsByClassName("img");
    var newSelectedElement;
    if(index===0){
        newSelectedElement=document.getElementById("img"+(images.length-1))
    }
    else{
        newSelectedElement=document.getElementById("img"+(index-1));
    }
    showThisImg(newSelectedElement);
}
function moveRight(){
    var selectedID = document.getElementsByClassName("selected")[0].id;
    var index = selectedID.replace("img","");
    index = Number(index);
    var images = document.getElementsByClassName("img");
    var newSelectedElement;
    if(index===images.length-1){
        newSelectedElement=document.getElementById("img0")
    }
    else{
        newSelectedElement=document.getElementById("img"+(index+1));
    }
    showThisImg(newSelectedElement);
}
function scrollRight1(element){
    var lowerGallery = document.getElementById("lower-gallery");
    lowerGallery.scrollLeft += 4;
    scrolling = window.setTimeout(function() {
        scrollRight1();
    }, 10);
}
function scrollLeft1(element){
    var lowerGallery = document.getElementById("lower-gallery");
    lowerGallery.scrollLeft -= 4;
    scrolling = window.setTimeout(function() {
        scrollLeft1();
    }, 10);
}
function stop_scroll(){
    window.clearTimeout(scrolling);
}
function loadImages(){
    fetch("https://picsum.photos/list")
    .then(function(data){
            data.json().then(
                function(json){
                    for(var key in json){
                        renderImages(json[key].id);
                    }
                }
            )
        }
    )
}
function renderImages(images){
    console.log(images);
}


loadImages();