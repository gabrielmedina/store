// scrollbar width checker

const scrollbarWidth = window.innerWidth - document.documentElement.offsetWidth
const body = document.querySelector('body')

body.style = `--scrollbar-width: ${scrollbarWidth}px`
