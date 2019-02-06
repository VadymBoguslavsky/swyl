(function () {
  var main = document.querySelector('.user-report');
    main.addEventListener('click', function () {
      var lol = document.querySelector('.user-hidden');
      if(lol.style.display==='none'){
        lol.style.display="flex"
      } else{
        lol.style.display = "none"
      }
    })
})();
(function () {
  var main = document.querySelectorAll('.menu-list .menu-list__item a');
  for(var i = 0; i<main.length; i++){
    var all = main[i];
    all.addEventListener('click', function (e) {
      var remove = document.querySelector('.menu-list__active')
      remove.classList.remove('menu-list__active')
      e.currentTarget.classList.add('menu-list__active')
    })
  }
})();

