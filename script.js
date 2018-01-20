document.addEventListener("DOMContentLoaded", function(){
    var memeForm = document.getElementById("meme-form");
    var listGallery = document.querySelector(".gallery");

memeForm.addEventListener("submit", function(event){
     event.preventDefault();

// creating the li element

    var memeLi = document.createElement('li');
    memeLi.classList.add("meme-img");



    
// creating the img-url element 
    var topText = document.getElementById("text-top");
    var urlInput = document.getElementById('uploaded-img').value,
    src =  urlInput,
    img = document.createElement('img');
    img.src = src;

// creating the top-text element
    var topTextDiv = document.createElement('div');
    topTextDiv.classList.add("text", "top");
    topTextDiv.innerText = document.getElementById("text-top").value;

// creating the bottom-text element
    var bottomTextDiv = document.createElement('div');
    bottomTextDiv.classList.add("text", "bottom");
    bottomTextDiv.innerText = document.getElementById("text-bottom").value;

// creating the close button element
    var removeDiv = document.createElement('div');
    removeDiv.classList.add("red-cross");
    removeDiv.innerText = "X";
    removeDiv.style.color = "red";
    

// appending all elements to UL
    listGallery.appendChild(memeLi);
    memeLi.appendChild(img);
    memeLi.appendChild(topTextDiv);
    memeLi.appendChild(bottomTextDiv);
    memeLi.appendChild(removeDiv);


// Reseting form right after!
memeForm.reset();


});


// Removes whole li element! Ousite event from main Submit

function remove(event){
  event.target.parentNode.remove();
}


listGallery.addEventListener('click', remove, false);

});