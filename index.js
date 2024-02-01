const hamburger = document.querySelector('.hamburger');
const linkDiv = document.querySelector('.mylinks');
const link = document.querySelector('.closelink');

hamburger.addEventListener('click', function(){
    linkDiv.style.display = 'flex'

})

link.addEventListener('click', function(){
    linkDiv.style.display = 'flex'
    alert('working')
})
