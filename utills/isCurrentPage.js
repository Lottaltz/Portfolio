//get all of link in nav bar
document.querySelectorAll('.nav-link').forEach(link => {
    if(link.href === window.location.href){
        link.setAttribute('aria-current', 'page')
    }
})