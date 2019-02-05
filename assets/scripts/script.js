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
(function () {
  var main = document.querySelectorAll('.menu__list .list__item a');
  for(var i = 0; i<main.length; i++){
    var all = main[i];
    all.addEventListener('click', function (e) {
      var remove = document.querySelector('.list__active')
      remove.classList.remove('list__active')
      e.currentTarget.classList.add('list__active')
    })
  }
})();

