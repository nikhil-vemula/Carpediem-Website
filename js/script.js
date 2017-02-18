function clan_selected(clan){
    var titans_content = document.getElementById("titans-content");
    var vulcans_content = document.getElementById("vulcans-content");
    var cys = document.getElementById("cys");
    cys.style.display="none";
    if(clan=='titans'){
        titans_content.className='clan-selected';
    }
    else if(clan=="vulcans"){
        vulcans_content.className='clan-selected';        
    }
}