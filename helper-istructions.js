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
      Con <i class="fas fa-pencil-alt btn-primary rounded-circle btn-sm helper-icon"
       :class="{'minimal-helper-btn':minimalTheme, 'retro-btn-button': retroTheme}"></i>
      potrai modificare un nome e salvare le modifiche cliccando
      <i class="far fa-save btn btn-success rounded-circle btn-sm helper-icon"
       :class="{'minimal-helper-btn':minimalTheme, 'retro-btn-button': retroTheme}"></i>.
    </li>
    <li>
      Con <i class="fas fa-trash-alt btn-primary rounded-circle btn-sm helper-icon"
       :class="{'minimal-helper-btn':minimalTheme, 'retro-btn-button': retroTheme}"></i>
      eliminerai roba dalla lista.
    </li>
    <li>
      Per aggiungere una categoria basta scriverla e cliccare su <i class="far fa-paper-plane btn btn-info helper-icon"></i> oppure sceglierla nel riquadro cliccando <span style="border: none;" class="custom-show-listbtn helper-icon pl-2 pr-2"
       :class="{'minimal-helper-btn':minimalTheme, 'retro-teme-btns': retroTheme}">+</span>. 
       Ti apparirà <span class="category p-1" :class="{'category-retro' : retroTheme, 'category-minimal': minimalTheme}"> Così </span> e cliccando sul nome si <span class="selected">evidenzierà</span>, così potrai aggiungerci roba al suo interno. Una volta finito basta ricliccare sul nome o su qualsiasi altro nome di altre categorie.
    </li>
    <li>
      Puoi aggiungere tutte le categorie cliccando su <button :class="{ 
                'light-btn': lightTheme,
                'dark-btn': darkTheme,
                'minimal-helper-btn': minimalTheme,
                'retro-insert-all-btn': retroTheme,
                'summer-btn': summerTheme,
                'winter-btn': winterTheme,
              }">
              <span v-if="langIta">Inserisci tutte</span>
              <span v-else>Insert all</span>
            </button>.
    </li>
    <li>
       Puoi eliminare solo le categorie rimaste vuote cliccando su <button :class="{ 
                'light-btn': lightTheme,
                'dark-btn': darkTheme,
                'minimal-helper-btn': minimalTheme,
                'retro-insert-all-btn': retroTheme,
                'summer-btn': summerTheme,
                'winter-btn': winterTheme,
              }">
              <span v-if="langIta">Rimuovi vuote</span>
              <span v-else>Remove only empty</span>
            </button>.
    </li>
    <li>
      Cliccando su <button class="btn custom-show-listbtn" :class="{
                'minimal-helper-btn': minimalTheme, 
                'retro-teme-btns': retroTheme,
              }" >
        <img src="./img/drag-and-drop.webp" alt="move" />
      </button> potrai trascinare gli elementi e spostarli dove
      vuoi.
    </li>
    <li>
      Puoi eliminare più prodotti insieme cliccando su <i class="fas fa-cart-arrow-down"></i>. Così li smarchi e poi a fine spesa cliccado sul <button class="text-danger border-danger rounded">
          <i class="fas fa-trash-alt"></i>
        </button> in basso verranno eliminati solo quelli che hai smarcato.
    </li>
    <li>
      <i class="far fa-copy btn btn-outline-success helper-icon"></i> serve per copiare la
      lista e
      incollarla dove vuoi.
    </li>
    <li>
      Puoi rendere "importante" un prodotto cliccando sul nome e verrà <span class="active">evidenziato</span>, così non potrà essere eliminato o modificato.
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
      With <i class="fas fa-pencil-alt btn-primary rounded-circle btn-sm helper-icon" 
      :class="{'minimal-helper-btn':minimalTheme, 'retro-btn-button': retroTheme}"></i>
      you can change a name and save the changes by clicking
      <i class="far fa-save btn btn-success rounded-circle btn-sm helper-icon" 
      :class="{'minimal-helper-btn':minimalTheme, 'retro-btn-button': retroTheme}"></i>.
    </li>
    <li>
      With <i class="fas fa-trash-alt btn-primary rounded-circle btn-sm helper-icon" 
      :class="{'minimal-helper-btn':minimalTheme, 'retro-btn-button': retroTheme}"> </i>
      you will remove stuff from the list.
    </li>
    <li>
      To add a category just type it in and click <i class="far fa-paper-plane btn btn-info helper-icon"> </i> or choose it in the box by clicking <span style="border: none;" class="custom-show-listbtn helper-icon pl-2 pr-2" 
      :class="{'minimal-helper-btn':minimalTheme, 'retro-teme-btns': retroTheme}"> + </span>. It will appear <span class="category p-1" :class="{'category-retro' : retroTheme, 'category-minimal': minimalTheme}"> to you like </span> and clicking on the name will <span class="selected">highlight it</span>. So you can add stuff into it. When you are done just click back on the name or any other category names.
    </li>
    <li>
      You can add all the categories by clicking on <button :class="{ 
                'light-btn': lightTheme,
                'dark-btn': darkTheme,
                'minimal-helper-btn': minimalTheme,
                'retro-insert-all-btn': retroTheme,
                'summer-btn': summerTheme,
                'winter-btn': winterTheme,
              }">
              <span v-if="langIta">Inserisci tutte</span>
              <span v-else>Insert all</span>
            </button>.
    </li>
    <li>
       You can delete only the categories left empty by clicking on <button :class="{ 
                'light-btn': lightTheme,
                'dark-btn': darkTheme,
                'minimal-helper-btn': minimalTheme,
                'retro-insert-all-btn': retroTheme,
                'summer-btn': summerTheme,
                'winter-btn': winterTheme,
              }">
              <span v-if="langIta">Rimuovi le vuote</span>
              <span v-else>Remove only empty</span>
            </button>.
    </li>
    <li>
      By clicking on 
      <button class="btn custom-show-listbtn" :class="{
                'minimal-helper-btn': minimalTheme, 
                'retro-teme-btns': retroTheme,
              }" >
        <img src="./img/drag-and-drop.webp" alt="move" />
      </button> you can drag the elements and move them wherever you want.
    </li>
    <li>
      You can delete multiple products together by clicking on <i class="fas fa-cart-arrow-down"></i>. So you mark them and then at the end of shopping by clicking on <button class="text-danger border-danger rounded">
        <i class="fas fa-trash-alt"></i>
      </button> at the bottom only the ones you marked will be deleted.
    </li>
    <li>
      <i class="far fa-copy btn btn-outline-success helper-icon"> </i>
      is used to copy the list and paste it wherever you want.
    </li>
    <li>
      You can make a product "important" by clicking on the name and it will be <span class="active">highlighted</span>, so it cannot be deleted or edited.
    </li>
    <li>
      If you click on
      <span class="delete-all-description"> delete all <i class="fas fa-skull-crossbones"> </i> </span>
      you will see a confirmation box for the 'delete
      <u> ALL </u> the list.
    </li>
`;

helperAlertITA = `
  <span style="color: red;">IMPORTANTE:</span> Questa è una web app convertita in app per smartphone, ed è
  sempre manutenuta, quindi non fare caso alla data dell'ultimo aggiornamento che appare nello store.
  Quello è solo il giorno in cui l'ho pubblicata.
  La data reale dell'ultimo aggiornamento è: <span style="color: green;">{{dateLastUpdate}}</span>
`;

helperAlertENG = `
  <span style="color: red;">IMPORTANT:</span> This is a web app converted to an android app, and is always
  maintained, so don't pay attention to the date of the last update that appears in the store. That is
  just the day I published it.
  The actual date of the last update is: <span style="color: green;">{{dateLastUpdate}}</span>
`;