var app = new Vue({
  el: "#app",

  data: {
    things: [
      "Colazione carboidrati",
      "Allenamento",
      "Colazione proteine",
      "Teoria Boolean",
      "Pranzo",
      "Passeggiata con Edoardo",
      "Pratica Boolean",
      "Cena",
      "Dormire",
    ],
    newThing: "",
    //lastRemoved: null,
  }, // chiusura data

  methods: {
    adder: function () {
      this.things.push(this.newThing);
    },
    remover(index) {
      this.things.splice(index, 1);
      //this.lastRemoved = this.things.splice(index, 1);
      //console.log(this.lastRemoved);
    },
    /*undo() {
      this.things.push(this.lastRemoved);
    }*/
  }, // chiusura methods
  
}); // chiusura vue
Vue.config.devtools = true;
