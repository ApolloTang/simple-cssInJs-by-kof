let counter = 0
console.log('value of counter on load:', counter)
// this is a closure

export default styles => {
  console.log('value of counter in css():', counter)

  const classes = {}
  let cssString = ''
  for (const name in styles) {
    classes[name] = name + '-' + counter++
    const selector = '.' + classes[name]
    cssString += selector + ' {' // .cssInJsBtn-0 {
    for (const property in styles[name]) {
      // color: white;
      cssString += property + ': ' + styles[name][property] + ';'
    }
    cssString += '}'
  }

  // Render styles.
  document.head.appendChild(
    document.createElement('style')
  ).textContent = cssString

  return classes
}
