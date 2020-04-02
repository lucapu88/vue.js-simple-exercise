
const app = new Vue({
  el: '#app',
  data: {
    todos: [], //array vuoto che conterrà gli elementi che noi digitiamo
    newTodo: null //elemento che scriviamo noi e andrà a riempire l'array
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
    addTodo() { //funzione applicata al click del button
      if (!this.newTodo) {
        return;
      }

      this.todos.push(this.newTodo); //dentro l'array (todos) va ad aggiungere quel singolo elemento che noi scriviamo (newTodo)
      this.newTodo = ''; //resetto l'input
      this.saveTodos(); //salvo il tutto
    },
    removeTodo(x) {
      this.todos.splice(x, 1); //elimina l'elemento cliccato perchè gli abbiamo dato index 1 (splice elmina elementi dall'index in poi, index compreso, quindi in questo caso elimina se stesso)
      this.saveTodos(); //salvo il tutto
    },
    saveTodos() {
      const parsed = JSON.stringify(this.todos);
      localStorage.setItem('todos', parsed);
    }
  }
});
