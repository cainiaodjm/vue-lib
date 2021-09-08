import { addClass, removeClass } from '../utils/dom';
class Transition{
    beforeEnter(el){
        addClass(el,'collapse-transition')
        if(!el.dataset) el.dataset = {}
        el.dataset.oldPaddingTop = el.style.paddingTop
        el.dataset.oldPaddingBottom = el.style.paddingBottom
        el.style.height = '0';
        el.style.paddingTop = 0;
        el.style.paddingBottom = 0;
    }
    afterLeave(el){
        removeClass(el, 'collapse-transition');
        el.style.height = '';
        el.style.overflow = el.dataset.oldOverflow;
        el.style.paddingTop = el.dataset.oldPaddingTop;
        el.style.paddingBottom = el.dataset.oldPaddingBottom;
    }
}
export default {
    name:'ElCollapseTransition',
    functional:true,
    render(h,{children}){
        const data = {
            on:new Transition()

        }
        //返回一个transition组件
        return h('transition',data,children)
    }
}