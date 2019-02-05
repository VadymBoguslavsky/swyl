(function () {
  var main = document.querySelector('.user__report');
    main.addEventListener('click', function () {
      var lol = document.querySelector('.user__hidden');
      if(lol.style.display==='none'){
        lol.style.display="flex"
      } else{
        lol.style.display = "none"
      }
    })
})();