
function checkMobile(){
    // This script is for the hamburger menu 
    let details = navigator.userAgent.toLowerCase();       
    /* Creating a regular expression
    containing some mobile devices keywords
    to search it in details string*/
    let regexp = /android|mobile|iphone|kindle|ipad|webOS|ipad|ipod/i;
    
    let isMobile = regexp.test(details);
    if (isMobile) {
        let collapsibles = document.getElementsByClassName('collapsible');
        let contents = document.getElementsByClassName('content');

        for(let i = 0; i < collapsibles.length; i++){
            collapsibles[i].classList.toggle('mobile-disabled');
        }

        for(let i = 0; i < contents.length; i++){
            contents[i].classList.toggle('mobile-disabled');
        }
    }
}