helperIstructionsITA = `
  <p class="helper-title">Risoluzione Problemi:</p>
  <small>
    Nel caso riscontrassi lentezza o blocchi nel caricamento di immagini, controlla la tua
    connessione, se è ok prova a riavviare l'app.
    Se il problema persiste segnalalo all'email nella sezione contatti.
  </small>
  <p class="helper-title" :class="christmasTheme ? 'christmas-red' : ''">Istruzioni:</p>
  <ul class="helper-list">
    <div class="list-title" :class="{'list-title-color': lightTheme || winterTheme, 'list-title-summer': summerTheme}" @click="showListIstructions('addEditDelete')">
      Aggiungere, Modificare, Eliminare. 
      <img class="arrow" :class="{
                  'arrow-selected': this.addEditDelete,
                  'arrow-deselected': !this.addEditDelete}" src="./img/arrow-down.webp" alt="arrow" />
    </div>
    <li v-if="addEditDelete">
      <i class="far fa-paper-plane btn btn-info helper-icon"></i>
      serve per aggiungere alla lista roba da comprare.
    </li>
    <li v-if="addEditDelete">
      Con <i class="fas fa-pencil-alt btn-primary rounded-circle btn-sm helper-icon"
       :class="{'minimal-helper-btn':minimalTheme, 'retro-btn-button': retroTheme}"></i>
      potrai modificare un nome e salvare le modifiche cliccando
      <i class="far fa-save btn btn-success rounded-circle btn-sm helper-icon"
       :class="{'minimal-helper-btn':minimalTheme, 'retro-btn-button': retroTheme}"></i>.
    </li>
    <li v-if="addEditDelete">
      Con <i class="fas fa-trash-alt btn-primary rounded-circle btn-sm helper-icon"
       :class="{'minimal-helper-btn':minimalTheme, 'retro-btn-button': retroTheme}"></i>
      eliminerai roba dalla lista.
    </li>
    <div class="list-title" :class="{'list-title-color': lightTheme || winterTheme, 'list-title-summer': summerTheme}" @click="showListIstructions('categoriesInfo')">
      Categorie. 
      <img class="arrow" :class="{
                  'arrow-selected': this.categoriesInfo,
                  'arrow-deselected': !this.categoriesInfo}" src="./img/arrow-down.webp" alt="arrow" />
    </div>
    <li v-if="categoriesInfo">
      Per aggiungere una categoria basta scriverla e cliccare su <i class="far fa-paper-plane btn btn-info helper-icon"></i> oppure sceglierla nel riquadro cliccando <span style="border: none;" class="custom-show-listbtn helper-icon pl-2 pr-2"
       :class="{'minimal-helper-btn':minimalTheme, 'retro-teme-btns': retroTheme}">+</span>. 
       Ti apparirà <span class="category p-1" :class="{'category-retro' : retroTheme, 'category-minimal': minimalTheme}"> Così </span> e cliccando sul nome si <span class="selected">evidenzierà</span>, così potrai aggiungerci roba al suo interno. Una volta finito basta ricliccare sul nome o su qualsiasi altro nome di altre categorie.
    </li>
    <li v-if="categoriesInfo">
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
    <li v-if="categoriesInfo">
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
    <div class="list-title" :class="{'list-title-color': lightTheme || winterTheme, 'list-title-summer': summerTheme}" @click="showListIstructions('dragNdrop')">
      Trascina e sposta elementi. 
      <img class="arrow" :class="{
                  'arrow-selected': this.dragNdrop,
                  'arrow-deselected': !this.dragNdrop}" src="./img/arrow-down.webp" alt="arrow" />
    </div>
    <li v-if="dragNdrop">
      Cliccando su <button class="btn custom-show-listbtn" :class="{
                'minimal-helper-btn': minimalTheme, 
                'retro-teme-btns': retroTheme,
              }" >
        <img src="./img/drag-and-drop.webp" alt="move" />
      </button> potrai trascinare gli elementi e spostarli dove vuoi.
    </li>
    <div class="list-title" :class="{'list-title-color': lightTheme || winterTheme, 'list-title-summer': summerTheme}" @click="showListIstructions('selectAndDelete')">
      Seleziona ed elimina più elementi. 
      <img class="arrow" :class="{
                  'arrow-selected': this.selectAndDelete,
                  'arrow-deselected': !this.selectAndDelete}" src="./img/arrow-down.webp" alt="arrow" />
    </div>
    <li v-if="selectAndDelete">
      Puoi eliminare più prodotti insieme cliccando su <i class="fas fa-cart-arrow-down"></i>. Così li smarchi e poi a fine spesa cliccado sul <button class="text-danger border-danger rounded">
          <i class="fas fa-trash-alt"></i>
        </button> in basso verranno eliminati solo quelli che hai smarcato.
    </li>
    <div class="list-title" :class="{'list-title-color': lightTheme || winterTheme, 'list-title-summer': summerTheme}" @click="showListIstructions('copyHighlights')">
      Copia lista, Evidenzia elementi. 
      <img class="arrow" :class="{
                  'arrow-selected': this.copyHighlights,
                  'arrow-deselected': !this.copyHighlights}" src="./img/arrow-down.webp" alt="arrow" />
    </div>
    <li v-if="copyHighlights">
      <i class="far fa-copy btn btn-outline-success helper-icon"></i> serve per copiare la
      lista e
      incollarla dove vuoi.
    </li>
    <li v-if="copyHighlights">
      Puoi rendere "importante" un prodotto cliccando sul nome e verrà <span class="active">evidenziato</span>, così non potrà essere eliminato o modificato.
    </li>
    <div class="list-title" :class="{'list-title-color': lightTheme || winterTheme, 'list-title-summer': summerTheme}" @click="showListIstructions('deleteAllInfo')">
      Elimina tutto. 
      <img class="arrow" :class="{
                  'arrow-selected': this.deleteAllInfo,
                  'arrow-deselected': !this.deleteAllInfo}" src="./img/arrow-down.webp" alt="arrow" />
    </div>
    <li v-if="deleteAllInfo">
      Se clicchi su <span class="delete-all-description">
        cancella tutto <i class="fas fa-skull-crossbones"></i></span>
      ti apparirà un riquadro di conferma per l'eliminazione di
      <u>TUTTA</u> la lista.
    </li>
    <div class="list-title" :class="{'list-title-color': lightTheme || winterTheme, 'list-title-summer': summerTheme}" @click="showListIstructions('tutorial')">
      Video tutorial.
      <img class="arrow" :class="{
      'arrow-selected': this.tutorial,
      'arrow-deselected': !this.tutorial}" src="./img/arrow-down.webp" alt="arrow" />
    </div>
    <video v-if="tutorial" :class="{'video': !retroTheme}" width="98%" height="500"
      poster="./img/favicon.png" controls>
        <source src="./video/ITA.mp4" type="video/mp4" />
        Il tuo device non supporta i video tag. Guardalo su youtube
        <a href="https://www.youtube.com/watch?v=VSO1k1CUrBY" target="_blank">cliccando qui</a>
    </video>
    <div class="list-title" :class="{'list-title-color': lightTheme || winterTheme, 'list-title-summer': summerTheme}" 
      @click="showListIstructions('support')">
      Contatti.
      <img class="arrow" :class="{
      'arrow-selected': this.support,
      'arrow-deselected': !this.support}" src="./img/arrow-down.webp" alt="arrow" />
    </div>
    <li v-if="support">Per qualsiasi segnalazione puoi contattarmi: <a href="mailto:lucarhcp88@hotmail.it">lucarhcp88@hotmail.it</a></li>
  </ul>
`;

helperIstructionsENG = `
  <p class="helper-title">Troubleshooting:</p>
  <small>
    If you experience slowness or blocks in loading images, check your connection, if it's ok try restarting
    the app. 
    If the problem persists, report it to the e-mail in the support section.
  </small>
  <p class="helper-title" :class="christmasTheme ? 'christmas-red' : ''">Instructions:</p>
  <ul class="helper-list">
   <div class="list-title" :class="{'list-title-color': lightTheme || winterTheme, 'list-title-summer': summerTheme}" @click="showListIstructions('addEditDelete')">
      Add, Edit, Delete. 
      <img class="arrow" :class="{
                  'arrow-selected': this.addEditDelete,
                  'arrow-deselected': !this.addEditDelete}" src="./img/arrow-down.webp" alt="arrow" />
    </div>
    <li v-if="addEditDelete">
      <i class="far fa-paper-plane btn btn-info helper-icon"> </i> is used to add stuff to buy list.
    </li>
    <li v-if="addEditDelete">
      With <i class="fas fa-pencil-alt btn-primary rounded-circle btn-sm helper-icon" 
      :class="{'minimal-helper-btn':minimalTheme, 'retro-btn-button': retroTheme}"></i>
      you can change a name and save the changes by clicking
      <i class="far fa-save btn btn-success rounded-circle btn-sm helper-icon" 
      :class="{'minimal-helper-btn':minimalTheme, 'retro-btn-button': retroTheme}"></i>.
    </li>
    <li v-if="addEditDelete">
      With <i class="fas fa-trash-alt btn-primary rounded-circle btn-sm helper-icon" 
      :class="{'minimal-helper-btn':minimalTheme, 'retro-btn-button': retroTheme}"> </i>
      you will remove stuff from the list.
    </li>
    <div class="list-title" :class="{'list-title-color': lightTheme || winterTheme, 'list-title-summer': summerTheme}" @click="showListIstructions('categoriesInfo')">
      Categories. 
      <img class="arrow" :class="{
                  'arrow-selected': this.categoriesInfo,
                  'arrow-deselected': !this.categoriesInfo}" src="./img/arrow-down.webp" alt="arrow" />
    </div>
    <li v-if="categoriesInfo">
      To add a category just type it in and click <i class="far fa-paper-plane btn btn-info helper-icon"> </i> or choose it in the box by clicking <span style="border: none;" class="custom-show-listbtn helper-icon pl-2 pr-2" 
      :class="{'minimal-helper-btn':minimalTheme, 'retro-teme-btns': retroTheme}"> + </span>. It will appear <span class="category p-1" :class="{'category-retro' : retroTheme, 'category-minimal': minimalTheme}"> to you like </span> and clicking on the name will <span class="selected">highlight it</span>. So you can add stuff into it. When you are done just click back on the name or any other category names.
    </li>
    <li v-if="categoriesInfo">
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
    <li v-if="categoriesInfo">
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
    <div class="list-title" :class="{'list-title-color': lightTheme || winterTheme, 'list-title-summer': summerTheme}" @click="showListIstructions('dragNdrop')">
      Drag and Drop. 
      <img class="arrow" :class="{
                  'arrow-selected': this.dragNdrop,
                  'arrow-deselected': !this.dragNdrop}" src="./img/arrow-down.webp" alt="arrow" />
    </div>
    <li v-if="dragNdrop">
      By clicking on 
      <button class="btn custom-show-listbtn" :class="{
                'minimal-helper-btn': minimalTheme, 
                'retro-teme-btns': retroTheme,
              }" >
        <img src="./img/drag-and-drop.webp" alt="move" />
      </button> you can drag the elements and move them wherever you want.
    </li>
    <div class="list-title" :class="{'list-title-color': lightTheme || winterTheme, 'list-title-summer': summerTheme}" @click="showListIstructions('selectAndDelete')">
      Select and delete multiple items. 
      <img class="arrow" :class="{
                  'arrow-selected': this.selectAndDelete,
                  'arrow-deselected': !this.selectAndDelete}" src="./img/arrow-down.webp" alt="arrow" />
    </div>
    <li v-if="selectAndDelete">
      You can delete multiple products together by clicking on <i class="fas fa-cart-arrow-down"></i>. So you mark them and then at the end of shopping by clicking on <button class="text-danger border-danger rounded">
        <i class="fas fa-trash-alt"></i>
      </button> at the bottom only the ones you marked will be deleted.
    </li>
    <div class="list-title" :class="{'list-title-color': lightTheme || winterTheme, 'list-title-summer': summerTheme}" @click="showListIstructions('copyHighlights')">
      Copy list, Highlight items. 
      <img class="arrow" :class="{
                  'arrow-selected': this.copyHighlights,
                  'arrow-deselected': !this.copyHighlights}" src="./img/arrow-down.webp" alt="arrow" />
    </div>
    <li v-if="copyHighlights">
      <i class="far fa-copy btn btn-outline-success helper-icon"> </i>
      is used to copy the list and paste it wherever you want.
    </li>
    <li v-if="copyHighlights">
      You can make a product "important" by clicking on the name and it will be <span class="active">highlighted</span>, so it cannot be deleted or edited.
    </li>
    <div class="list-title" :class="{'list-title-color': lightTheme || winterTheme, 'list-title-summer': summerTheme}" @click="showListIstructions('deleteAllInfo')">
      Delete all. 
      <img class="arrow" :class="{
                  'arrow-selected': this.deleteAllInfo,
                  'arrow-deselected': !this.deleteAllInfo}" src="./img/arrow-down.webp" alt="arrow" />
    </div>
    <li v-if="deleteAllInfo">
      If you click on
      <span class="delete-all-description"> delete all <i class="fas fa-skull-crossbones"> </i> </span>
      you will see a confirmation box for the 'delete
      <u> ALL </u> the list.
    </li>
     <div class="list-title" :class="{'list-title-color': lightTheme || winterTheme, 'list-title-summer': summerTheme}" @click="showListIstructions('tutorial')">
        Video tutorial.
        <img class="arrow" :class="{
        'arrow-selected': this.tutorial,
        'arrow-deselected': !this.tutorial}" src="./img/arrow-down.webp" alt="arrow" />
      </div>
      <video v-if="tutorial" :class="{'video': !retroTheme}" width="98%" height="500"
        poster="./img/favicon.png" controls>
          <source src="./video/ENG.mp4" type="video/mp4" />
          Your device does not support the video tag. Watch on youtube
          <a href="https://www.youtube.com/watch?v=H1E9ynY9f9w" target="_blank">by clicking here</a>
      </video>
      <div class="list-title" :class="{'list-title-color': lightTheme || winterTheme, 'list-title-summer': summerTheme}" 
        @click="showListIstructions('support')">
        Support.
        <img class="arrow" :class="{
        'arrow-selected': this.support,
        'arrow-deselected': !this.support}" src="./img/arrow-down.webp" alt="arrow" />
      </div>
      <li v-if="support">For any report you can contact me: <a href="mailto:lucarhcp88@hotmail.it">lucarhcp88@hotmail.it</a></li>
  </ul>
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