helperIstructionsITA = `
  <p class="helper-title">Risoluzione Problemi:</p>
  <small>
    Nel caso riscontrassi lentezza o blocchi nel caricamento di immagini, controlla la tua
    connessione, se è
    ok prova a riavviare l'app.
    Se il problema persiste segnalalo
    <a href="mailto:lucarhcp88@hotmail.it">all'email</a> in fondo a questa pagina.
  </small>
  <p class="helper-title" :class="christmasTheme ? 'christmas-red' : ''">Istruzioni:</p>
  <ul class="helper-list">
    <li>
      <i class="far fa-paper-plane btn btn-info helper-icon"></i>
      serve per aggiungere alla lista roba da comprare.
    </li>
    <li>
      Con <i class="fas fa-pencil-alt btn-primary rounded-circle btn-sm helper-icon"></i>
      potrai modificare un nome e salvare le modifiche cliccando
      <i class="far fa-save btn btn-success rounded-circle btn-sm helper-icon"></i>.
    </li>
    <li>
      Con <i class="fas fa-trash-alt btn-primary rounded-circle btn-sm helper-icon"></i>
      eliminerai roba dalla lista.
    </li>
    <li>
      <span style="border: none;" class="custom-show-listbtn helper-icon pl-2 pr-2">+</span> serve per
      visualizzare
      l'indice delle
      categorie selezionabili.
    </li>
    <li>
      Per scegliere una categoria basta scriverla (o cliccarci sopra) e cliccare
      <i class="far fa-paper-plane btn btn-info helper-icon"></i>. Ti apparirà
      <span class="category" :class="{'retro-category' : retroTheme === true}">evidenziata</span>
      nella lista. <br />Una volta creata la categoria, basterà cliccare sul nome di essa, e
      verrà
      evidenziata <span class="selected">così </span>, li sotto aggiungerai roba che
      scriverai. Per
      annullare l'operazione basta cliccare su qualsiasi categoria nel
      <span class="category" :class="{'retro-category' : retroTheme === true}">riquadro
        verde</span> già
      esistente.
    </li>
    <li>
      Puoi aggiungere tutte le categorie cliccando su <button class="insert-all-btn" :class="{ 
                'light-btn': lightTheme,
                'dark-btn': darkTheme,
                'minimal-btn': minimalTheme,
                'retro-insert-all-btn': retroTheme,
                'summer-btn': summerTheme,
                'winter-btn': winterTheme,
              }">
              <span v-if="langIta">Inserisci tutte</span>
              <span v-else>Insert all</span>
            </button>
    </li>
    <li>
       Puoi eliminare solo le categorie rimaste vuote cliccando su: <button class="insert-all-btn" :class="{ 
                'light-btn': lightTheme,
                'dark-btn': darkTheme,
                'minimal-btn': minimalTheme,
                'retro-insert-all-btn': retroTheme,
                'summer-btn': summerTheme,
                'winter-btn': winterTheme,
              }">
              <span v-if="langIta">Rimuovi le vuote</span>
              <span v-else>Remove only empty</span>
            </button>
    </li>
    <li>
      Cliccando su <button class="btn custom-show-listbtn helper-icon">
        <img src="./img/drag-and-drop.webp" alt="move" />
      </button> potrai trascinare gli elementi e spostarli dove
      vuoi.
    </li>
    <li>
      Se clicchi su <i class="fas fa-cart-arrow-down"></i> puoi selezionare più elementi da eliminare,
      nel caso volessi
      eliminarne più di uno ma non tutti. Ti apparirà, in basso a sinistra della lista, questo cestino =>
      <button class="text-danger border-danger rounded">
        <i class="fas fa-trash-alt"></i>
      </button>
      ed eliminerai solamente gli elementi selezionati che avranno il carrello rosso => <i class="fas fa-cart-arrow-down selected-for-delete"></i>.
    </li>
    <li>
      <i class="far fa-copy btn btn-outline-success helper-icon"></i> serve per copiare la
      lista e
      incollarla dove vuoi.
    </li>
    <li>
      Puoi "bloccare" un prodotto cliccandoci sopra, e ti verrà evidenziato
      <span class="active">così</span>.
      Non potrà essere eliminato. Potrebbe tornarti utile, ad esempio, quando non lo trovi
      al supermercato e
      non vuoi eliminarlo dalla lista.
    </li>
    <li>
      Se clicchi su <span class="delete-all-description">
        cancella tutto <i class="fas fa-skull-crossbones"></i></span>
      ti apparirà un riquadro di conferma per l'eliminazione di
      <u>TUTTA</u> la lista.
    </li>
  </ul>
`;

helperIstructionsENG = `
  <p class="helper-title">Troubleshooting:</p>
  <small>
    If you experience slowness or blocks in loading images, check your connection, if it's ok try restarting
    the app. If the problem
    persists, report it <a href="mailto:lucarhcp88@hotmail.it">to the email</a> at the bottom of this
    page.</small>
  <p class="helper-title" :class="christmasTheme ? 'christmas-red' : ''">Instructions:</p>
  <ul class="helper-list">
    <li>
      <i class="far fa-paper-plane btn btn-info helper-icon"> </i> is used to add stuff to buy list.
    </li>
    <li>
      With <i class="fas fa-pencil-alt btn-primary rounded-circle btn-sm helper-icon"></i>
      you can change a name and save the changes by clicking
      <i class="far fa-save btn btn-success rounded-circle btn-sm helper-icon"></i>.
    </li>
    <li>
      With <i class="fas fa-trash-alt btn-primary rounded-circle btn-sm helper-icon"> </i>
      you will remove stuff from the list.
    </li>
    <li>
      <span style="border: none;" class="custom-show-listbtn helper-icon pl-2 pr-2"> + </span> is used to display the
      index of
      selectable categories.
    </li>
    <li>
      To choose a category just write it (or click on it) and click
      <i class="far fa-paper-plane btn btn-info helper-icon"> </i>. You will see
      <span class="category" :class="{'retro-category' : retroTheme === true}"> highlighted </span>
      in the list. <br />
      Once the category has been created, just click on its name, and
      <span class="selected"> will be highlighted as well </span>, underneath you will add stuff you write.
      To cancel the operation just click on any category in the existing
      <span class="category" :class="{'retro-category' : retroTheme === true}"> green box </span>.
    </li>
    <li>
      You can add all the categories by clicking on <button class="insert-all-btn" :class="{ 
                'light-btn': lightTheme,
                'dark-btn': darkTheme,
                'minimal-btn': minimalTheme,
                'retro-insert-all-btn': retroTheme,
                'summer-btn': summerTheme,
                'winter-btn': winterTheme,
              }">
              <span v-if="langIta">Inserisci tutte</span>
              <span v-else>Insert all</span>
            </button>
    </li>
    <li>
       You can delete only the categories left empty by clicking su: <button class="insert-all-btn" :class="{ 
                'light-btn': lightTheme,
                'dark-btn': darkTheme,
                'minimal-btn': minimalTheme,
                'retro-insert-all-btn': retroTheme,
                'summer-btn': summerTheme,
                'winter-btn': winterTheme,
              }">
              <span v-if="langIta">Rimuovi le vuote</span>
              <span v-else>Remove only empty</span>
            </button>
    </li>
    <li>
      By clicking on 
      <button class="btn custom-show-listbtn helper-icon">
        <img src="./img/drag-and-drop.webp" alt="move" />
      </button> you can drag the elements and move them wherever you want.
    </li>
    <li>
      If you click on <i class="fas fa-cart-arrow-down"></i> you can select multiple items to delete,
      in case you want
      delete more than one but not all. This basket will appear at the bottom left of the list => 
      <button class="text-danger border-danger rounded">
        <i class="fas fa-trash-alt"></i>
      </button>
      and you will only delete the selected items that will have the red cart => <i class="fas fa-cart-arrow-down selected-for-delete"></i>.
    </li>
    <li>
      <i class="far fa-copy btn btn-outline-success helper-icon"> </i>
      is used to copy the list and paste it wherever you want.
    </li>
    <li>
      You can "block" a product by clicking on it, and
      <span class="active"> will be highlighted as well </span>. It cannot be eliminated.
      It might come in handy, for example,
      when you can't find it at the supermarket and don't want to remove it from the list.
    </li>
    <li>
      If you click on
      <span class="delete-all-description"> delete all <i class="fas fa-skull-crossbones"> </i> </span>
      you will see a confirmation box for the 'delete
      <u> ALL </u> the list.
    </li>
`;
