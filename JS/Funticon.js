let Banner = ["/IMG/Pic/Pic_iPhone_Nav.jpeg", "/IMG/Pic/Pic_PhuKien_Nav.png", "/IMG/Pic/Pic_Mac_Nav.jpeg"];

let index = 0;
function Truoc(){
    index = (index == 0) ? Banner.length-1 : index -1;
    document.getElementById("MainPicBanner").src = Banner[index];
}

function Tiep(){
    index++;
    if(index >= Banner.length) index = 0;
    document.getElementById("MainPicBanner").src = Banner[index];
}

