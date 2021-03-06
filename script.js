function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }
  var a_link = document.querySelectorAll(".a-link");
  // Handle mouse over/out event on links
  a_link.forEach(e => e.addEventListener('mouseenter', handleMouseEnter));
  a_link.forEach(e => e.addEventListener('mouseleave', handleMouseLeave));
  window.addEventListener('mousemove', handleMouseMove);
  // Move the cursor in dom/window
  function handleMouseMove(event) {
    console.log(event);
    var top = event.pageY - (cursor.clientHeight / 2);
    var left = event.pageX - (cursor.clientWidth / 2);
    cursor.style.top = top + 'px';
    cursor.style.left = left + 'px';
  }
  // event: mouse enter on link
  function handleMouseEnter() {
    cursor.classList.add('hovered');
  }
  // event: mouse leave on link
  function handleMouseLeave() {
    cursor.classList.remove('hovered');
  }
  
// SMOOTH SCROLLING SECTIONS
$('a[href*=#]:not([href=#])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
      || location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
         if (target.length) {
           $('html,body').animate({
               scrollTop: target.offset().top
          }, 1000);
          return false;
      }
  }
});