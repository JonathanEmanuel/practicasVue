Vue.component('fila',{
    props:{
        nombre: String,
        apellido: String,
        email: String,
        color: String
    },
    template: `
        <tr v-bind:class="color">
            <td v-text="nombre"></td>
            <td v-text="apellido"></td>
            <td v-text="email"></td>
        </tr>
    `
})
const app = new Vue({
    el:'#app',
    data: {

    }
})