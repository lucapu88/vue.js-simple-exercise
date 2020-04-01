
var app = new Vue({
  el: "#app",
  data: {
    newTodo:'', //elemento che scriviamo noi e andrà a riempire l'array
    todos: [] //array vuoto che conterrà gli elementi che noi digitiamo
  },
  methods: {
    addTodo() { //funzione applicata al click del button
      this.todos.push(this.newTodo); //dentro l'array (todos) va ad aggiungere quel singolo elemento che noi scriviamo (newTodo)
    }
  }
});
