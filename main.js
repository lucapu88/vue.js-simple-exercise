
const app = new Vue({
  el: '#app',
  data: {
    todos: [{

    }], //array di oggetti vuoto che conterrà gli elementi che noi digitiamo
    newTodo: null, //elemento che scriviamo noi e andrà a riempire l'array
    visible: true, //serve per la visibilità del contenitore dell'alert
    
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
    myFilter(n) { //al click setta la proprietà del singolo todo isActive
      this.todos[n].isActive = !this.todos[n].isActive; //la proprietà è di default false, quindi al click, il todo passa da isActive =false a =true e viceversa
      this.saveTodos(); //salvo il tutto
    },
    toggleHidden(n){ //al click rende visibile o invisibile un elemento
      this.todos[n].isHidden = !this.todos[n].isHidden;
    },
    addTodo() { //funzione applicata al click del button
      if (!this.newTodo) { //solo se scrivo qualcosa lo aggiunge
        return;
      }
      this.todos.push({ name: this.newTodo, isHidden: true, isActive: false }); //dentro l'array (todos) va ad aggiungere quel singolo elemento che noi scriviamo (newTodo) e gli setta come proprietà isHidden true (che sarebbe visibile in realtà), e isActive false (così inizialmente non ha classe active)
      this.newTodo = ''; //resetto l'input
      this.saveTodos(); //salvo il tutto
    },
    removeTodo(x) {
      this.todos.splice(x, 1); //elimina l'elemento cliccato perchè gli abbiamo dato come index 1 (splice elmina elementi dall'index in poi, index compreso, quindi in questo caso elimina se stesso)
      this.saveTodos(); //salvo il tutto
    },
    modifyTodo(x, y) { //prendo in pasto x=index e y=todo
      // console.log(x, y);
      this.todos.splice(x, 1); //elimino il todo preso in pasto
      this.todos.splice(x, 0, y); //aggiungo un nuovo todo passandogli lo stesso index
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
