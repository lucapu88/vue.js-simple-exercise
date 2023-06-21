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
    <li v-if="support">Seguici sui social: <a href="https://www.facebook.com/profile.php?id=100080626866860" target="_blank">
        <img src="img/facebook.webp" alt="social_facebook" class="social">
    </a></li>
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
      <li v-if="support">Follow us on social media: <a href="https://www.facebook.com/profile.php?id=100080626866860" target="_blank">
        <img src="img/facebook.webp" alt="social_facebook" class="social">
    </a></li>
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

privacyPolicyComplete = `
Privacy Policy for Shopping List

From: https://www.privacypolicygenerator.info/live.php?token=XdQQ3qcxNezVaYoGNfhFaO3myEgLXuNt

</br>
</br>

At Shopping List, accessible from https://lucapu88.github.io/vue.js-simple-exercise/, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Shopping List and how we use it.

If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.

This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Shopping List. This policy is not applicable to any information collected offline or via channels other than this website.
Consent

By using our website, you hereby consent to our Privacy Policy and agree to its terms.
Information we collect

The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.

If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.

When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.
How we use your information

We use the information we collect in various ways, including to:

    Provide, operate, and maintain our website
    Improve, personalize, and expand our website
    Understand and analyze how you use our website
    Develop new products, services, features, and functionality
    Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes
    Send you emails
    Find and prevent fraud

Log Files

Shopping List follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
Advertising Partners Privacy Policies

You may consult this list to find the Privacy Policy for each of the advertising partners of Shopping List.

Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Shopping List, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.

Note that Shopping List has no access to or control over these cookies that are used by third-party advertisers.
Third Party Privacy Policies

Shopping List's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.

You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.
CCPA Privacy Rights (Do Not Sell My Personal Information)

Under the CCPA, among other rights, California consumers have the right to:

Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.

Request that a business delete any personal data about the consumer that a business has collected.

Request that a business that sells a consumer's personal data, not sell the consumer's personal data.

If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
GDPR Data Protection Rights

We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:

The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.

The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.

The right to erasure – You have the right to request that we erase your personal data, under certain conditions.

The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.

The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.

The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.

If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
Children's Information

Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.

Shopping List does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
Changes to This Privacy Policy

We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.

Our Privacy Policy was created with the help of the Privacy Policy Generator.
Contact Us

If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.

Generated using Privacy Policy Generator
`;