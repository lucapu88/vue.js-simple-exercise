const app = new Vue({
  el: '#app',
  data: {
    todos: [], //conterrà gli elementi che noi digitiamo
    list: [{}], //lista da condividere che conterrà gli stessi elementi che noi digitiamo
    newTodo: null, //elemento che scriviamo noi e andrà a riempire l'array
    visible: true, //serve per la visibilità del contenitore dell'alert
    placeholder: 'Scrivi cosa comprare',
    defaultPlaceholderText: 'Scrivi cosa comprare', //per evitare di andarlo a cercare nel codice
    categoryList: false,
    helper: null,
    christmasTheme: false,
    copyList: {
      text: 'Lista copiata negli appunti',
      visible: false,
    },
    categoryClass: false,
    categoryEmoji: '',
    categories: [
      { name: 'verdura', emojy: String.fromCodePoint(0x1f966) },
      { name: 'carne', emojy: String.fromCodePoint(0x1f969) },
      { name: 'pesce', emojy: String.fromCodePoint(0x1f99e) },
      { name: 'frutta', emojy: String.fromCodePoint(0x1f353) },
      { name: 'dolci', emojy: String.fromCodePoint(0x1f382) },
      { name: 'latticini', emojy: String.fromCodePoint(0x1f95b) },
      { name: 'farinacei', emojy: String.fromCodePoint(0x1f35e) },
      { name: 'bevande', emojy: String.fromCodePoint(0x1f37a) },
      { name: 'igiene', emojy: String.fromCodePoint(0x1f9fb) },
      { name: 'farmaci', emojy: String.fromCodePoint(0x1f48a) },
      { name: 'altro', emojy: String.fromCodePoint(0x1f4b8) },
    ],
    addTodoInCategory: { condition: false, id: null },
  },
  created() {
    this.merryChristmasTheme();
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
    merryChristmasTheme() {
      //solo per tutto il mese di natale ci saranno immagini natalizie
      const today = new Date();
      const currentMonth = today.getMonth() + 1;
      const currentDay = today.getDate();
      if (currentDay <= 31 && currentMonth === 7) {
        this.christmasTheme = true;
      }
    },

    myFilter(n) {
      if (!this.todos[n].class) {
        //al click setta la proprietà del singolo todo isActive (evidenzia rosso l'elemento cliccato)
        this.todos[n].isActive = !this.todos[n].isActive; //la proprietà è di default false, quindi al click, il todo passa da isActive =false a =true e viceversa
        this.todos[n].isDisabled = !this.todos[n].isDisabled; //disabilito i pulsanti
        this.saveTodos();
      }
    }, //PS.: questa funzione è ripetuta uguale qui sotto, potevo farne una che passasse le proprietà "isActive" e "isHidden" come parametri insieme ad "n", ma la differenza sta nel fatto che con "myFilter" voglio salvare il tutto così che al refresh della pagina non si azzera niente, mentre con "toggleHidden" non voglio salvare nulla, anzi deve azzerarsi al refresh.
    toggleHidden(n) {
      //al click rende visibile o invisibile un elemento (il riquadro del cancella)
      this.todos[n].isHidden = !this.todos[n].isHidden;
    },
    selectCategoryName(categoryName) {
      this.newTodo = categoryName;
    },
    addTodo() {
      if (!this.newTodo) {
        //solo se scrivo qualcosa lo aggiunge
        return;
      }

      this.categories.forEach((category) => {
        //se scrivo un nome che è presente nella lista di categorie, creo una categoria evidenziata
        if (this.newTodo.toLowerCase().trim() == category.name) {
          this.categoryClass = true;
          this.categoryEmoji = category.emojy;
        }
      });

      let todoForList = this.categoryClass
        ? this.newTodo.toUpperCase().trim() + ':'
        : this.newTodo.trim(); //se è un nome di categoria, nella lista va inserito maiuscolo con i 2 punti
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

      this.newTodo = '';
      this.categoryClass = false;
      this.categoryEmoji = '';
      this.saveTodos();
    },
    removeTodo(x) {
      this.todos.splice(x, 1);
      this.list.splice(x, 1);
      this.saveTodos();
      navigator.vibrate(220);
    },
    modifyTodo(x, y, todo) {
      this.todos.splice(x, 1);
      this.todos.splice(x, 0, y);
      this.list.splice(x, 1);
      this.list.splice(x, 0, todo + '\n');
      this.saveTodos();
    },
    saveTodos() {
      const parsedTodos = JSON.stringify(this.todos);
      const parsedList = JSON.stringify(this.list);
      localStorage.setItem('todos', parsedTodos);
      localStorage.setItem('list', parsedList);
    },
    removeAllTodo(x) {
      this.todos.splice(x);
      this.list.splice(x);
      this.categoryList = false;
      this.saveTodos();
      // this.helper = false;
      this.categoryList = false;
      this.placeholder = this.defaultPlaceholderText;
      navigator.vibrate(1000);
    },
    copy(list) {
      const arrayNoCommas = ['', ...list].join('- ');
      navigator.clipboard.writeText(arrayNoCommas); //copio negli appunti una lista della spesa per poterla condividere
      this.copyList.visible = true;
      setTimeout(() => (this.copyList.visible = false), 4500); //cambio il testo del pulsante copia
      navigator.vibrate(400);
    },
    showList() {
      this.categoryList = !this.categoryList;
    },
    showHelper() {
      this.helper = !this.helper;
      if (this.helper) {
        window.scrollTo(0, 0);
        document.documentElement.style.overflow = 'hidden';
      } else {
        document.getElementById('helper-description').scrollTo(0, 0); //Sbagliatissimo farlo in vue! lo so volevo vedere se eravate attenti! :P
        document.documentElement.style.overflow = 'auto';
      }
    },
    selectCategoryToAddItem(index, todo) {
      //solo se è nella lista categorie faccio tutto
      if (todo.class) {
        this.todos.map((t) => (t.isSelected = false)); //azzero tutto
        this.categories.forEach((category) => {
          if (todo.name.toLowerCase() == category.name) {
            //se il nome è uguale alla categoria
            //permetto il toggle per la classe e salvo l'index
            this.addTodoInCategory.condition =
              !this.addTodoInCategory.condition;
            this.addTodoInCategory.id = index;

            if (this.addTodoInCategory.condition) {
              //se clicco su una categoria ed è evidenziata il focus va sull'input
              this.$nextTick(function () {
                this.$refs.myInput.focus();
              });
              //do indicazioni nel placeholder
              this.placeholder =
                'Aggiungi in ' + todo.emojy + todo.name.toUpperCase();
            } else {
              this.placeholder = this.defaultPlaceholderText;
            }
          }

          this.addTodoInCategory.condition
            ? (todo.isSelected = true)
            : (todo.isSelected = false);
        });
        this.saveTodos();
      }
      //tutto ciò si poteva fare molto meglio senza ripetere roba, facendo fare alle funzioni una cosa sola, scrivendo meno codice ecc....lo so!!! ma per il momento non ho tempo e mi serve codice funzionante
    },
  },
});
