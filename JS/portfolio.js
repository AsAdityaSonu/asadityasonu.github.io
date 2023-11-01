// ----------------------------------------------------------------
// Theme Change 
var theme_icon = document.getElementById('theme');
var bg_img = document.getElementById('bg-img');

theme_icon.onclick = function () {
    document.body.classList.toggle('light-theme');

    if (document.body.classList.contains('light-theme')){
        theme_icon.src="ICON/night-mode.png";
        // bg_img.src="Images/BG_dark.jpg";

    }else{
        theme_icon.src="ICON/day-mode.png";
        // bg_img.src="Images/BG_white.jpg";
    }
}

// ----------------------------------------------------------------
// on clicking Aditya
var Aditya = document.getElementById('aditya');
Aditya.onclick = function(){
    alert("You will be redirected to my Linkedin Account");
}

// ----------------------------------------------------------------