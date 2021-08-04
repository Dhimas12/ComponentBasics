Vue.component('hijo',{
    props:['lista'],
    data: function (){
        return{
            search: null,
           cars:[
               {id:1 , brand:'mercedes benz', model:'r-class', age: 2010},
               {id:2 , brand:'jeep ', model:'cherokee', age: 2015},
               {id:3 , brand:'jeep ', model:'sahara', age: 2018},
               {id:4 , brand:'audi ', model:'a5', age: 2009},
               {id:5 , brand:'honda', model:'accord', age: 2016}
           ]
        }
    },
    mounted(){
        this.$emit('car', this.cars)
    },
    template: //html
    `
    <div>
   
    </div>
    `
})