$(document).ready(onReady);

function onReady() {
    console.log('on ready');

   $('h1').css("color", "red");

   $('body').append(`
   <h2>
   Jquery can do a lot of things!
   </h2>`)

}

