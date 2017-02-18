function clan_selected(clan){
    var titans_content = document.getElementById("titans-content");
    var vulcans_content = document.getElementById("vulcans-content");
    if(clan=='titans'){
        titans_content.className='clan-selected';
    }
    else if(clan=="vulcans"){
        vulcans_content.className='clan-selected';        
    }
}