Vue.component('lista',{
    data: function (){
        return{
           count:0,
           search: null,
           people:[
               {id:1, name:'Wilson', city:"Santiago"},
               {id:2, name:'Eli', city:"Santiago"},
               {id:3, name:'Juan', city:"Puerto Plata"},
               {id:4, name:'Pedro', city:"Santo Domingo"},
               {id:5, name:'Dhimas', city:"Santo Domingo"}
           ],
           cars:[]
        }
    },
    computed:{
        searchByName(){
            return this.people.filter(item => item.name.includes(this.search))
        }
    },
    template: //html
    `
    <div>
    <h3>search people by name</h3>
    <input type="text" placeholder="search by city" v-model="search">
    <ul>
         <li v-for="item in searchByName">
             {{item.name}}
         </li>
    </ul>
    <hr>
    <h3>Lista de personas</h3>
    <ul>
         <li v-for="item in people">
            Nombre:  <b>{{item.name}}</b> Ciudad:  <b>{{item.city}} </b>
         </li>
    </ul>

    <h2>Componente hijo</h2>
    <h3>Lista de  car</h3>
    <ul>
         <li v-for=" car in  cars">
            Marcas:  <b>{{ car.brand}}</b> modelos:  <b>{{car.model}} </b>
         </li>
    </ul>

    <hijo @car="cars=$event"></hijo>

    </div>
    `
 });

 