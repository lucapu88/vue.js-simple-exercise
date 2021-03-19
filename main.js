const app = new Vue({
  el: '#app',
  data: {
    todos: [{}], //array di oggetti vuoto che conterrà gli elementi che noi digitiamo
    list: [{}], //lista da condividere che conterrà gli stessi elementi che noi digitiamo
    newTodo: null, //elemento che scriviamo noi e andrà a riempire l'array
    visible: true, //serve per la visibilità del contenitore dell'alert
    categoryList: false,
    copyList: {
      text: 'Lista copiata negli appunti',
      visible: false,
    }, //testo del pulsante copia
    categoryClass: false, //imposto la classe alla categoria
    categoryEmoji: '',
    categories: [
      { name: 'verdura', emojy: String.fromCodePoint(0x1f966) },
      { name: 'carne', emojy: String.fromCodePoint(0x1f969) },
      { name: 'pesce', emojy: String.fromCodePoint(0x1f991) },
      { name: 'frutta', emojy: String.fromCodePoint(0x1f353) },
      { name: 'latticini', emojy: String.fromCodePoint(0x1f95b) },
      { name: 'bevande', emojy: String.fromCodePoint(0x1f37a) },
      { name: 'igiene', emojy: String.fromCodePoint(0x1f9fb) },
      { name: 'altro', emojy: String.fromCodePoint(0x1f4b8) },
    ],
    addTodoInCategory: { condition: false, id: null },
  },
  mounted() {
    if (localStorage.getItem('todos') && localStorage.getItem('list')) {
      //se si deve prendere un oggetto da salvare in locale
      try {
        this.todos = JSON.parse(localStorage.getItem('todos')); //prova a trasformare l'array in un oggetto javascript
        this.list = JSON.parse(localStorage.getItem('list')); //prova a trasformare l'array in un oggetto javascript
      } catch (e) {
        localStorage.removeItem('todos'); //se viene trovato un errore, rimuovi l'oggetto (o meglio, non salvare niente)
        localStorage.removeItem('list'); //se viene trovato un errore, rimuovi l'oggetto (o meglio, non salvare niente)
      }
    }
    if (!this.addTodoInCategory.condition) {
      this.todos.map((t) => (t.isSelected = false));
    }
  },
  methods: {
    myFilter(n) {
      if (!this.todos[n].class) {
        //al click setta la proprietà del singolo todo isActive (evidenzia rosso l'elemento cliccato)
        this.todos[n].isActive = !this.todos[n].isActive; //la proprietà è di default false, quindi al click, il todo passa da isActive =false a =true e viceversa
        this.todos[n].isDisabled = !this.todos[n].isDisabled; //disabilito i pulsanti
        this.saveTodos(); //salvo il tutto
      }
    }, //PS.: questa funzione è ripetuta uguale qui sotto, potevo farne una che passasse le proprietà "isActive" e "isHidden" come parametri insieme ad "n", ma la differenza sta nel fatto che con "myFilter" voglio salvare il tutto così che al refresh della pagina non si azzera niente, mentre con "toggleHidden" non voglio salvare nulla, anzi deve azzerarsi al refresh.
    toggleHidden(n) {
      //al click rende visibile o invisibile un elemento (il riquadro del cancella)
      this.todos[n].isHidden = !this.todos[n].isHidden;
    },
    addTodo() {
      //funzione applicata al click del button
      if (!this.newTodo) {
        //solo se scrivo qualcosa lo aggiunge
        return;
      }

      this.categories.forEach((category) => {
        if (this.newTodo.toLowerCase().trim() == category.name) {
          this.categoryClass = true;
          this.categoryEmoji = category.emojy;
        }
      });

      let todoForList = this.categoryClass
        ? this.newTodo.toUpperCase().trim() + ':'
        : this.newTodo.trim(); //se è un nome di categoria, nella lista va inserito maiuscolo con i :
      const todoObject = {
        name: this.newTodo.trim(),
        isHidden: true,
        isActive: false,
        isSelected: false,
        class: this.categoryClass,
        emojy: this.categoryEmoji,
      };

      if (!this.addTodoInCategory.condition) {
        this.todos.push(todoObject);
        this.list.push(todoForList + '\n');
      } else {
        this.todos.splice(this.addTodoInCategory.id + 1, 0, todoObject);
        this.list.splice(this.addTodoInCategory.id + 1, 0, todoForList + '\n');
      }

      this.newTodo = ''; //resetto l'input
      this.categoryClass = false;
      this.categoryEmoji = '';
      this.saveTodos(); //salvo il tutto
    },
    removeTodo(x) {
      this.todos.splice(x, 1); //elimina l'elemento cliccato perchè gli abbiamo dato come index 1 (splice elmina elementi dall'index in poi, index compreso, quindi in questo caso elimina se stesso)
      this.list.splice(x, 1); //faccio la stessa cosa della riga qui sopra, ma per la lista
      this.saveTodos(); //salvo il tutto
    },
    modifyTodo(x, y, todo) {
      //prendo in pasto x=index e y=todo
      // console.log(x, y);
      this.todos.splice(x, 1); //elimino da todos il todo preso in pasto
      this.todos.splice(x, 0, y); //aggiungo un nuovo todo passandogli lo stesso index
      this.list.splice(x, 1); //elimino da list il todo preso in pasto
      this.list.splice(x, 0, todo + '\n'); //aggiungo in list il nuovo todo
      this.saveTodos(); //salvo il tutto
    },
    saveTodos() {
      //per salvare elementi
      const parsedTodos = JSON.stringify(this.todos); //TODOS: in una costante racchiudo il todo trasformato in stringa per poter inviare i dati
      const parsedList = JSON.stringify(this.list); //LIST: in una costante racchiudo il todo trasformato in stringa per poter inviare i dati
      localStorage.setItem('todos', parsedTodos); //TODOS: imposto il valore in locale passandogli l'array e l'array trasformato in stringa
      localStorage.setItem('list', parsedList); //LIST: imposto il valore in locale passandogli l'array e l'array trasformato in stringa
    },
    removeAllTodo(x) {
      this.todos.splice(x); //elimina tutta la lista
      this.list.splice(x); //faccio la stessa cosa della riga qui sopra, ma per la lista
      this.categoryList = false;
      this.saveTodos(); //salvo il tutto
    },
    copy(list) {
      const arrayNoCommas = ['', ...list].join('- ');
      navigator.clipboard.writeText(arrayNoCommas); //copio negli appunti una lista della spesa per poterla condividere
      this.copyList.visible = true;
      setTimeout(() => (this.copyList.visible = false), 4500); //cambio il testo del pulsante copia
    },
    showList() {
      this.categoryList = !this.categoryList;
    },
    selectCategoryToAddItem(index, todo) {
      if (todo.class) {
        //solo se è nella lista categorie faccio tutto
        this.todos.map((t) => (t.isSelected = false)); //azzero tutto
        this.categories.forEach((category) => {
          if (todo.name.toLowerCase() == category.name) {
            //se il nome è uguale alla categoria
            //permetto il toggle per la classe e salvo l'index
            this.addTodoInCategory.condition = !this.addTodoInCategory
              .condition;
            this.addTodoInCategory.id = index;
          }

          this.addTodoInCategory.condition
            ? (todo.isSelected = true)
            : (todo.isSelected = false);
        });
        this.saveTodos();
      }
      //tutto ciò si poteva fare molto meglio senza ripetere roba, scrivendo meno codice ecc....lo so!!! ma per il momento non ho tempo e mi serve codice funzionante
    },
  },
});
