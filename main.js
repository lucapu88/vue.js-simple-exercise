
const app = new Vue({
  el: '#app',
  data: {
    todos: [], //array vuoto che conterrà gli elementi che noi digitiamo
    newTodo: null, //elemento che scriviamo noi e andrà a riempire l'array
    isHidden: true
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
      if (!this.newTodo) { //solo se scrivo qualcosa lo aggiunge
        return;
      }

      this.todos.push(this.newTodo); //dentro l'array (todos) va ad aggiungere quel singolo elemento che noi scriviamo (newTodo)
      this.newTodo = ''; //resetto l'input
      this.saveTodos(); //salvo il tutto
    },
    removeTodo(x) {
      this.todos.splice(x, 1); //elimina l'elemento cliccato perchè gli abbiamo dato come index 1 (splice elmina elementi dall'index in poi, index compreso, quindi in questo caso elimina se stesso)
      this.saveTodos(); //salvo il tutto
    },
    modifyTodo(x) {
      this.todos.push(x);
      this.saveTodos(); //salvo il tutto
    },
    saveTodos() { //per salvare elementi
      const parsed = JSON.stringify(this.todos); //in una costante racchiudo il todo trasformato in stringa per poter inviare i dati
      localStorage.setItem('todos', parsed); //imposto il valore in locale passandogli l'array e l'array trasformato in stringa
    },
    removeAllTodo(x) {
      this.todos.splice(x); //elimina tutta la lista 
      this.saveTodos(); //salvo il tutto
    },
  }
});
