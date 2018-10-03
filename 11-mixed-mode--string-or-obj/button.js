import {buttonSize, boxShadow} from './mixins.js'
import {textColor, backgroundColor} from './variables.js'
import css from './css.js'

const classes = css({
  cssInJsBtn: {
    color: textColor,
    background: 'red',
    ...buttonSize(),
    ...boxShadow('0px 4px 5px #666', '2px 6px 10px #999')
  }
})

console.log(classes.cssInJsBtn) // 'cssInJsBtn-0

const btn = document.createElement('button');
btn.className =  classes.cssInJsBtn
btn.innerHTML =  'button1' + classes.cssInJsBtn

export default btn;
