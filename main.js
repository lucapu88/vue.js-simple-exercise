const app = new Vue({
  /*Tutto quello che ho scritto qui sotto e nell'html andava fatto meglio, ovvero spezzettato in componenti vari e ordinati.
    Mi scuso in anticipo ma sono stato obbligato ad inserire tutto in un file per poterlo far funzionare con github pages.*/
  el: '#app',
  data: {
    todos: [], //conterrà gli elementi che noi digitiamo
    list: [{}], //lista da condividere che conterrà gli stessi elementi che noi digitiamo
    newTodo: null, //elemento che scriviamo noi e andrà a riempire l'array
    visible: true, //serve per la visibilità del contenitore dell'alert
    placeholder: 'Write what to buy',
    defaultPlaceholderText: 'Write what to buy', //per evitare di andarlo a cercare nel codice
    categoryList: false,
    helper: null,
    christmasTheme: false,
    copyList: {
      text: 'List copied to clipboard',
      visible: false,
    },
    categoryClass: false,
    categoryEmoji: '',
    categories: [],
    engCategories: [
      { name: 'vegetables', emojy: String.fromCodePoint(0x1f966) },
      { name: 'meat', emojy: String.fromCodePoint(0x1f969) },
      { name: 'fish', emojy: String.fromCodePoint(0x1f99e) },
      { name: 'fruit', emojy: String.fromCodePoint(0x1f353) },
      { name: 'sweets', emojy: String.fromCodePoint(0x1f382) },
      { name: 'dairy products', emojy: String.fromCodePoint(0x1f95b) },
      { name: 'starchy', emojy: String.fromCodePoint(0x1f35e) },
      { name: 'drinks', emojy: String.fromCodePoint(0x1f37a) },
      { name: 'hygiene', emojy: String.fromCodePoint(0x1f9fb) },
      { name: 'medications', emojy: String.fromCodePoint(0x1f48a) },
      { name: 'stationery', emojy: String.fromCodePoint(0x1f4da) },
      { name: 'other', emojy: String.fromCodePoint(0x1f4b8) },
    ],
    itaCategories: [
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
      { name: 'cancelleria', emojy: String.fromCodePoint(0x1f4da) },
      { name: 'altro', emojy: String.fromCodePoint(0x1f4b8) },
    ],
    addTodoInCategory: { condition: false, id: null },
    langIta: null, //se è false è impostato su inglese
    canDeleteText: 'OFF',
    canDelete: false,
    confirmText: 'Are you sure you want to delete:',
    buttonBackToTop: false,
    lightTheme: true,
    darkTheme: false,
    minimalTheme: false,
    retroTheme: false,
    summerTheme: false,
    winterTheme: false,
    themeName: 'light',
  },
  created() {
    this.categories = this.engCategories; //setto le categorie di default
    //setto le impostazioni scelte dall'utente sulla conferma di cancellazione
    const canDelete = window.localStorage.getItem('canDelete');
    this.canDelete = canDelete === 'true';
    this.canDelete ? (this.canDeleteText = 'ON') : this.canDeleteText;

    //setto la lingua in base a quella scelta dall'utente nel suo locale
    const langIta = window.localStorage.getItem('langIta');
    this.langIta = langIta === 'true';
    if (this.langIta) {
      this.placeholder = 'Scrivi cosa comprare';
      this.defaultPlaceholderText = 'Scrivi cosa comprare';
      this.categories = this.itaCategories;
      this.copyList.text = 'Lista copiata negli appunti';
      this.confirmText = 'Sei sicuro di voler eliminare:';
    } else {
      this.defaultPlaceholderText;
      this.categories = this.engCategories;
      this.copyList.text;
      this.confirmText;
    }

    //imposto il tema in base a quello scelto dall'utente

    const lightThemeSelected = window.localStorage.getItem('lightTheme');
    this.lightTheme = lightThemeSelected === 'true';
    if (this.lightTheme) {
      this.themeName = this.langIta ? 'Chiaro' : 'Light';
      document.body.style.backgroundImage = "url('img/foglio_righe.webp')";
    }

    const darkThemeSelected = window.localStorage.getItem('darkTheme');
    this.darkTheme = darkThemeSelected === 'true';
    if (this.darkTheme) {
      this.themeName = this.langIta ? 'Scuro' : 'Dark';
      document.body.style.backgroundImage = 'none';
      document.body.style.backgroundColor = '#333333';
      document.body.style.color = '#FFFFFF';
      document.body.style.height = '100vh';
      document.body.style.border = '10px solid #d17e47';
    }

    const minimalThemeSelected = window.localStorage.getItem('minimalTheme');
    this.minimalTheme = minimalThemeSelected === 'true';
    if (this.minimalTheme) {
      this.themeName = 'Minimal';
      document.body.style.backgroundImage = 'none';
      document.body.style.backgroundColor = '#A5BECC';
      document.body.style.color = '#7C3E66';
      document.body.style.fontFamily = '"Cabin", sans-serif';
    }

    const retroThemeSelected = window.localStorage.getItem('retroTheme');
    this.retroTheme = retroThemeSelected === 'true';
    if (this.retroTheme) {
      this.themeName = 'Dos';
      document.body.style.backgroundImage = 'none';
      document.body.style.backgroundColor = '#090A0C';
      document.body.style.color = '#FFFFFF';
      document.body.style.fontFamily = '"DotGothic16", sans-serif';
    }

    const summerThemeSelected = window.localStorage.getItem('summerTheme');
    this.summerTheme = summerThemeSelected === 'true';
    if (this.summerTheme) {
      this.themeName = this.langIta ? 'Estate' : 'Summer';
      document.body.style.backgroundImage = "url('img/mare.webp')";
      document.body.style.backgroundRepeat = 'no-repeat';
      document.body.style.backgroundColor = '#EFCB8F';
      document.getElementById('helper-description-container').style.background =
        'rgb(188,242,221)';
      document.getElementById('helper-description-container').style.background =
        'linear-gradient(168deg, rgba(188,242,221,1) 0%, rgba(129,215,235,1) 47%, rgba(46,152,242,1) 100%)';
      document.getElementById('helper-description').style.filter =
        'drop-shadow(2px 4px 6px black)';
      document.querySelector('.confirm').style.backgroundImage = 'none';
    }

    const winterThemeSelected = window.localStorage.getItem('winterTheme');
    this.winterTheme = winterThemeSelected === 'true';
    if (this.winterTheme) {
      this.themeName = this.langIta ? 'Inverno' : 'Winter';
      document.body.style.backgroundImage = "url('img/montagne.webp')";
      document.body.style.backgroundRepeat = 'no-repeat';
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundColor = '#232F34';
      document.body.style.color = '#FFFFFF';
      document.getElementById(
        'helper-description-container'
      ).style.backgroundImage = "url('img/inverno.webp')";
      document.getElementById(
        'helper-description-container'
      ).style.backgroundSize = 'cover';
      document.getElementById('todo').style.filter =
        'drop-shadow(2px 4px 6px black)';
      document.getElementById('helper-description').style.filter =
        'drop-shadow(2px 4px 6px black)';
      document.querySelector('.confirm').style.backgroundImage = 'none';
      document.querySelector('.confirm').style.filter =
        'drop-shadow(2px 4px 6px black)';
    }

    this.merryChristmasTheme();
  },
  mounted() {
    //console.clear();

    if (
      window.localStorage.getItem('todos') &&
      window.localStorage.getItem('list')
    ) {
      //se si deve prendere un oggetto da salvare in locale
      try {
        this.todos = JSON.parse(window.localStorage.getItem('todos')); //prova a trasformare l'array in un oggetto javascript
        this.list = JSON.parse(window.localStorage.getItem('list')); //prova a trasformare l'array in un oggetto javascript
      } catch (e) {
        window.localStorage.removeItem('todos'); //se viene trovato un errore, rimuovi l'oggetto (o meglio, non salvare niente)
        window.localStorage.removeItem('list'); //se viene trovato un errore, rimuovi l'oggetto (o meglio, non salvare niente)
      }
    }
    if (!this.addTodoInCategory.condition) {
      this.todos.map((t) => (t.isSelected = false));
    }
  },
  updated() {
    this.toggleButtonBackToTop();
  },
  methods: {
    merryChristmasTheme() {
      //solo per tutto il mese di natale ci saranno immagini natalizie
      const today = new Date();
      const currentMonth = today.getMonth() + 1;
      const currentDay = today.getDate();
      if (currentDay <= 31 && currentMonth === 12) {
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
      this.removeSelectedCategoryToAddItem();
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
        if (this.newTodo.toLowerCase().trim() === category.name) {
          this.categoryClass = true;
          this.categoryEmoji = category.emojy;
        }
      });

      let todoForList = this.categoryClass
        ? this.newTodo.toUpperCase().trim() + ':' //se è un nome di categoria, nella lista va inserito maiuscolo con i 2 punti
        : '- ' + this.newTodo.trim().toLowerCase();
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
      this.categoryList = false;
      this.saveTodos();
      this.toggleButtonBackToTop();
    },
    removeTodo(x, todo) {
      this.removeSelectedCategoryToAddItem();
      //se ho impostato la conferma all'eliminazione apro un alert prima di eliminare altrimenti elimino direttamente
      if (this.canDelete) {
        const text = `${this.confirmText} ${todo.name.toUpperCase()}?`;
        if (confirm(text)) {
          this.confirmedRemoveTodo(x, todo);
        }
      } else {
        this.confirmedRemoveTodo(x, todo);
      }

      this.toggleButtonBackToTop();
    },
    confirmedRemoveTodo(x, todo) {
      this.todos.splice(x, 1);
      this.list.splice(x, 1);
      this.saveTodos();

      navigator.vibrate(220);
    },
    toggleButtonBackToTop() {
      //mostro o nascondo, in base alla lunghezza del display, il pulsante che porta in cima alla lista
      const list = document.getElementById('todo-list');
      const container = document.getElementById('container-list');

      list.offsetHeight > container.offsetHeight
        ? (this.buttonBackToTop = true)
        : (this.buttonBackToTop = false);
    },
    scrollTop() {
      document.getElementById('container-list').scrollTo(0, 0);
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
      window.localStorage.setItem('todos', parsedTodos);
      window.localStorage.setItem('list', parsedList);
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
      this.buttonBackToTop = false;
    },
    copy(list) {
      const arrayNoCommas = ['', ...list].join(' ');
      console.log(arrayNoCommas);
      this.categoryList = false;
      navigator.clipboard.writeText(arrayNoCommas); //copio negli appunti una lista della spesa per poterla condividere
      document.addEventListener('copy', function (e) {
        //copio negli appunti anche qui per sistemare su android (quello di sopra non funziona)
        e.clipboardData.setData('text/plain', arrayNoCommas);
        e.preventDefault();
      });
      document.execCommand('copy'); //riprovo/ricopio negli appunti anche qui per sistemare su android (per essere sicuri)
      this.copyList.visible = true;
      setTimeout(() => (this.copyList.visible = false), 3500); //cambio il testo del pulsante copia
      navigator.vibrate(400);
    },
    showCategoryList() {
      this.categoryList = !this.categoryList;
    },
    showHelper() {
      this.helper = !this.helper;
      if (this.helper) {
        window.scrollTo(0, 0);
        document.documentElement.style.overflow = 'hidden';
      } else {
        document.getElementById('helper-description').scrollTo(0, 0);
        document.documentElement.style.overflow = 'auto';
      }
    },
    selectCategoryToAddItem(index, todo) {
      //solo se è nella lista categorie faccio tutto
      if (todo.class) {
        const allCategories = [...this.engCategories, ...this.itaCategories];

        this.todos.map((t) => (t.isSelected = false)); //azzero tutto
        allCategories.forEach((category) => {
          if (todo.name.toLowerCase() === category.name) {
            //se il nome è uguale alla categoria, permetto il toggle per la classe e salvo l'index
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
                (this.langIta ? 'Aggiungi in ' : 'Add in ') +
                todo.emojy +
                todo.name.toUpperCase();
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
    },
    removeSelectedCategoryToAddItem() {
      //serve per togliere la selezione di una categoria aggiunta (quando clicchi su un nome evidenziato verde e diventa blu)
      this.todos.map((t) => (t.isSelected = false));
      this.placeholder = this.defaultPlaceholderText;
      this.addTodoInCategory.condition = false;
    },
    setEnglish() {
      this.langIta = false;
      this.placeholder = 'Write what to buy';
      this.defaultPlaceholderText = 'Write what to buy';
      this.categories = this.engCategories;
      this.copyList.text = 'List copied to clipboard';
      window.localStorage.setItem('langIta', false);
      location.reload(); //lo faccio solo perchè mi obbligano ad inserire librerie del c---- per la privacy policy che mi buggano il codice.
    },
    setItaliano() {
      this.langIta = true;
      this.placeholder = 'Scrivi cosa comprare';
      this.defaultPlaceholderText = 'Scrivi cosa comprare';
      this.categories = this.itaCategories;
      this.copyList.text = 'Lista copiata negli appunti';
      window.localStorage.setItem('langIta', true);
      location.reload(); //lo faccio solo perchè mi obbligano ad inserire librerie del c---- per la privacy policy e mi buggano il codice.
    },
    toggleDeleteConfirm() {
      this.canDelete = !this.canDelete;
      if (this.canDelete) {
        this.canDeleteText = 'ON';
        window.localStorage.setItem('canDelete', true);
      } else {
        this.canDeleteText = 'OFF';
        window.localStorage.setItem('canDelete', false);
      }
    },
    selectLightTheme() {
      this.darkTheme = false;
      window.localStorage.setItem('darkTheme', false);
      this.minimalTheme = false;
      window.localStorage.setItem('minimalTheme', false);
      this.retroTheme = false;
      window.localStorage.setItem('retroTheme', false);
      this.summerTheme = false;
      window.localStorage.setItem('summerTheme', false);
      this.winterTheme = false;
      window.localStorage.setItem('winterTheme', false);

      this.lightTheme = true;
      window.localStorage.setItem('lightTheme', true);

      location.reload();
    },
    selectDarkTheme() {
      this.lightTheme = false;
      window.localStorage.setItem('lightTheme', false);
      this.minimalTheme = false;
      window.localStorage.setItem('minimalTheme', false);
      this.retroTheme = false;
      window.localStorage.setItem('retroTheme', false);
      this.summerTheme = false;
      window.localStorage.setItem('summerTheme', false);
      this.winterTheme = false;
      window.localStorage.setItem('winterTheme', false);

      this.darkTheme = true;
      window.localStorage.setItem('darkTheme', true);

      location.reload();
    },
    selectMinimalTheme() {
      this.lightTheme = false;
      window.localStorage.setItem('lightTheme', false);
      this.darkTheme = false;
      window.localStorage.setItem('darkTheme', false);
      this.retroTheme = false;
      window.localStorage.setItem('retroTheme', false);
      this.summerTheme = false;
      window.localStorage.setItem('summerTheme', false);
      this.winterTheme = false;
      window.localStorage.setItem('winterTheme', false);

      this.minimalTheme = true;
      window.localStorage.setItem('minimalTheme', true);

      location.reload();
    },
    selectRetroTheme() {
      this.lightTheme = false;
      window.localStorage.setItem('lightTheme', false);
      this.darkTheme = false;
      window.localStorage.setItem('darkTheme', false);
      this.minimalTheme = false;
      window.localStorage.setItem('minimalTheme', false);
      this.summerTheme = false;
      window.localStorage.setItem('summerTheme', false);
      this.winterTheme = false;
      window.localStorage.setItem('winterTheme', false);

      this.retroTheme = true;
      window.localStorage.setItem('retroTheme', true);

      location.reload();
    },
    selectSummerTheme() {
      this.lightTheme = false;
      window.localStorage.setItem('lightTheme', false);
      this.darkTheme = false;
      window.localStorage.setItem('darkTheme', false);
      this.minimalTheme = false;
      window.localStorage.setItem('minimalTheme', false);
      this.retroTheme = false;
      window.localStorage.setItem('retroTheme', false);
      this.winterTheme = false;
      window.localStorage.setItem('winterTheme', false);

      this.summerTheme = true;
      window.localStorage.setItem('summerTheme', true);

      location.reload();
    },
    selectWinterTheme() {
      this.lightTheme = false;
      window.localStorage.setItem('lightTheme', false);
      this.darkTheme = false;
      window.localStorage.setItem('darkTheme', false);
      this.minimalTheme = false;
      window.localStorage.setItem('minimalTheme', false);
      this.retroTheme = false;
      window.localStorage.setItem('retroTheme', false);
      this.summerTheme = false;
      window.localStorage.setItem('summerTheme', false);

      this.winterTheme = true;
      window.localStorage.setItem('winterTheme', true);

      location.reload();
    },
  },
});
