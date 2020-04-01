
var app = new Vue({
  el: "#app",
  data: {
    newTodo:'', //elemento che scriviamo noi e andrà a riempire l'array
    todos: [] //array vuoto che conterrà gli elementi che noi digitiamo
  },
  methods: {
    addTodo() { //funzione applicata al click del button
      this.todos.push(this.newTodo); //dentro l'array (todos) va ad aggiungere quel singolo elemento che noi scriviamo (newTodo)
      this.newTodo = ''; //resetto l'input
    },
    removeTodo(index, todo) { //funzione applicata al click sull'icona della spazzatura
       this.todos.splice(index, 1); //elimina l'elemento cliccato perchè gli abbiamo dato index 1 (splice elmina elementi dall'index in poi, index compreso, quindi in questo caso elimina se stesso)
    }
  }
});
