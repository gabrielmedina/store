// scrollbar width checker

(function() {
  const scrollbarWidth = window.innerWidth - document.documentElement.offsetWidth

  document.body.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`)
})();


