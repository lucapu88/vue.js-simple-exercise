//
// var app = new Vue({
//   el: "#app",
//   data: {
//     newTodo:'', //elemento che scriviamo noi e andrà a riempire l'array
//     todos: [] //array vuoto che conterrà gli elementi che noi digitiamo
//   },
//   methods: {
//     addTodo() { //funzione applicata al click del button
//       // var thisTodo = localStorage.getItem(this.newTodo);
//       this.todos.push(this.newTodo); //dentro l'array (todos) va ad aggiungere quel singolo elemento che noi scriviamo (newTodo)
//       this.newTodo = ''; //resetto l'input
//       localStorage.setItem(this.todos, JSON.stringify(todos));
//     },
//     removeTodo(index, todo) { //funzione applicata al click sull'icona della spazzatura
//        this.todos.splice(index, 1); //elimina l'elemento cliccato perchè gli abbiamo dato index 1 (splice elmina elementi dall'index in poi, index compreso, quindi in questo caso elimina se stesso)
//     }
//   }
// });
const app = new Vue({
  el: '#app',
  data: {
    todos: [],
    newTodo: null
  },
  mounted() {
    if (localStorage.getItem('todos')) {
      try {
        this.todos = JSON.parse(localStorage.getItem('todos'));
      } catch(e) {
        localStorage.removeItem('todos');
      }
    }
  },
  methods: {
    addTodo() {
      // ensure they actually typed something
      if (!this.newTodo) {
        return;
      }

      this.todos.push(this.newTodo);
      this.newTodo = '';
      this.saveTodos();
    },
    removeTodo(x) {
      this.todos.splice(x, 1);
      this.saveTodos();
    },
    saveTodos() {
      const parsed = JSON.stringify(this.todos);
      localStorage.setItem('todos', parsed);
    }
  }
});
