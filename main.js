
const app = new Vue({
  el: '#app',
  data: {
    todos: [{

    }], //array di oggetti vuoto che conterrà gli elementi che noi digitiamo
    newTodo: null, //elemento che scriviamo noi e andrà a riempire l'array
    visible: true, //serve per la visibilità del contenitore dell'alert
  },
  mounted() {
    if (localStorage.getItem('todos')) { //se si deve prendere un oggetto da salvare in locale
      try {
        this.todos = JSON.parse(localStorage.getItem('todos')); //prova a trasformare l'array in un oggetto javascript
      } catch(e) {
        localStorage.removeItem('todos'); //se viene trovato un errore, rimuovi l'oggetto (o meglio, non salvare niente)
      }
    }
  },
  methods: {
    myFilter(n) { //al click setta la proprietà del singolo todo isActive (evidenzia rosso l'elemento cliccato)
      this.todos[n].isActive = !this.todos[n].isActive; //la proprietà è di default false, quindi al click, il todo passa da isActive =false a =true e viceversa
      this.todos[n].isDisabled = !this.todos[n].isDisabled; //disabilito i pulsanti
      this.saveTodos(); //salvo il tutto
    }, //PS.: questa funzione è ripetuta uguale qui sotto, potevo farne una che passasse le proprietà "isActive" e "isHidden" come parametri insieme ad "n", ma la differenza sta nel fatto che con "myFilter" voglio salvare il tutto così che al refresh della pagina non si azzera niente, mentre con "toggleHidden" non voglio salvare nulla, anzi deve azzerarsi al refresh.
    toggleHidden(n){ //al click rende visibile o invisibile un elemento (il riquadro del cancella)
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
