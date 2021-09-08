function broadcast(componentName,eventName,params){
    console.log(this)
    console.log(componentName,eventName,params)
}
export default {
    methods:{
        broadcast(){
            broadcast.call(this)
        },
        dispatch(componentName,eventName,params){
            // console.log(componentName,eventName,params)
            var parent = this.$parent || this.$root
            var name = parent.$options.componentName
            while(parent && (!name || name !== componentName)){
                parent = parent.$parent
                if(parent){
                    name = parent.$options.componentName
                }
            }
            if(parent){
                console.log([eventName].concat(params))
                parent.$emit.apply(parent,[eventName].concat(params))
            }
        }
    }
}