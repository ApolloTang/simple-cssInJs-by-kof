import {buttonSize, boxShadow} from './mixins.js'
import {textColor, backgroundColor} from './variables.js'
import css from './css.js'

const classes = css({
  cssInJsBtn: {
    color: textColor,
    background: backgroundColor,
    ...buttonSize(),
    ...boxShadow('0px 4px 5px #666', '2px 6px 10px #999')
  }
})

console.log(classes.cssInJsBtn) // 'cssInJsBtn-1'

const btn2 = document.createElement('button');
btn2.className =  classes.cssInJsBtn
btn2.innerHTML =  'CSSinJS button2' + classes.cssInJsBtn

export default btn2;
