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
    lastRemoved: "",
  }, // chiusura data

  methods: {
    adder() {
      if (!this.things.includes(this.newThing)) {
        this.things.push(this.newThing);
      } else {
        alert("Already on your list.");
      }
    },
    remover(index) {
      this.lastRemoved = this.things.splice(index, 1);
      this.lastRemoved = this.lastRemoved[0];
      console.log(this.lastRemoved);
    },
    undo() {
      if (!this.things.includes(this.lastRemoved)) {
        this.things.push(this.lastRemoved);
      } else {
        alert('You can Undo only once.');
      }
    },
  }, // chiusura methods
}); // chiusura vue
Vue.config.devtools = true;
