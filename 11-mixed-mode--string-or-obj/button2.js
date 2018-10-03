import {buttonSize, boxShadow} from './mixins.js'
import {textColor, backgroundColor} from './variables.js'
import css from './css.js'

const classes = css({
  cssInJsBtn: `
    color: white;
    background: green;
    padding: 10px 13px;
    font-size: 1.2rem;
    border-radius: 7px;
    -moz-box-shadow: 0px 4px 5px #666,2px 6px 10px #999;
    -webkit-box-shadow: 0px 4px 5px #666, 2px 6px 10px #999;
    box-shadow: 0px 4px 5px #666, 2px 6px 10px #999;
  `
})

console.log(classes.cssInJsBtn) // 'cssInJsBtn-1'

const btn2 = document.createElement('button');
btn2.className =  classes.cssInJsBtn
btn2.innerHTML =  'button2' + classes.cssInJsBtn

export default btn2;
