const app = new Vue({
	/*Tutto quello che ho scritto qui sotto e nell'html andava fatto meglio, ovvero diviso in componenti vari e ordinati.
    Mi scuso in anticipo ma sono stato obbligato ad inserire tutto in un file per poterlo far funzionare con github pages.*/
	el: "#app",
	data: {
		todos: [], //conterrà gli elementi che noi digitiamo
		newTodo: null, //elemento che scriviamo noi e andrà a riempire l'array
		visible: true, //serve per la visibilità del contenitore dell'alert
		categoryList: false,
		helper: null,
		christmasTheme: false,
		placeholder: "Write here what to buy",
		defaultPlaceholderText: "Write here what to buy",
		copyList: {
			text: "List copied to clipboard",
			visible: false,
		},
		share: {
			text: "Link copied to clipboard, paste it with whoever you want.",
			visible: false,
		},
		confirmText: "Are you sure you want to delete:",
		selectedTodosConfirmText:
			"Are you sure you want to delete the selected items",
		canDeleteText: "OFF",
		themeName: "light",
		settingsTextTitle: "Settings",
		safeModeText: {
			title: "Safe delete mode",
			description:
				"it will ask you to confirm the deletion for each single product on the list",
			function: "Click to activate/deactivate",
		},
		chosenThemeText: "Chosen theme",
		changeThemeText: "Change theme",
		emailReportText: "For any report you can contact me",
		shareText: "Share",
		categoryClass: false,
		categoryEmoji: "",
		categories: [],
		engCategories: [
			{ name: "vegetables", emojy: String.fromCodePoint(0x1f966) },
			{ name: "meat", emojy: String.fromCodePoint(0x1f969) },
			{ name: "fish", emojy: String.fromCodePoint(0x1f99e) },
			{ name: "fruit", emojy: String.fromCodePoint(0x1f353) },
			{ name: "sweets", emojy: String.fromCodePoint(0x1f382) },
			{ name: "dairy products", emojy: String.fromCodePoint(0x1f95b) },
			{ name: "starchy", emojy: String.fromCodePoint(0x1f35e) },
			{ name: "drinks", emojy: String.fromCodePoint(0x1f37a) },
			{ name: "hygiene", emojy: String.fromCodePoint(0x1f9fb) },
			{ name: "medications", emojy: String.fromCodePoint(0x1f48a) },
			{ name: "stationery", emojy: String.fromCodePoint(0x1f4da) },
			{ name: "other", emojy: String.fromCodePoint(0x1f4b8) },
		],
		itaCategories: [
			{ name: "verdura", emojy: String.fromCodePoint(0x1f966) },
			{ name: "carne", emojy: String.fromCodePoint(0x1f969) },
			{ name: "pesce", emojy: String.fromCodePoint(0x1f99e) },
			{ name: "frutta", emojy: String.fromCodePoint(0x1f353) },
			{ name: "dolci", emojy: String.fromCodePoint(0x1f382) },
			{ name: "latticini", emojy: String.fromCodePoint(0x1f95b) },
			{ name: "farinacei", emojy: String.fromCodePoint(0x1f35e) },
			{ name: "bevande", emojy: String.fromCodePoint(0x1f37a) },
			{ name: "igiene", emojy: String.fromCodePoint(0x1f9fb) },
			{ name: "farmaci", emojy: String.fromCodePoint(0x1f48a) },
			{ name: "cancelleria", emojy: String.fromCodePoint(0x1f4da) },
			{ name: "altro", emojy: String.fromCodePoint(0x1f4b8) },
		],
		addTodoInCategory: { condition: false, id: null },
		langIta: null, //se è false è impostato su inglese
		canDelete: false,
		buttonBackToTop: false,
		lightTheme: true,
		darkTheme: false,
		minimalTheme: false,
		retroTheme: false,
		summerTheme: false,
		winterTheme: false,
		canDeleteMultipleTodo: false,
		isDraggable: false,
		needDragNDropBtn: false,
		openVideoTutorial: false,
		openNewFeaturesVideo: false,
		privacyPolicy: false,
	},
	created() {
		this.categories = this.engCategories; //setto le categorie di default
		//setto le impostazioni scelte dall'utente sulla conferma di cancellazione
		const canDelete = window.localStorage.getItem("canDelete");
		this.canDelete = canDelete === "true";
		this.canDelete ? (this.canDeleteText = "ON") : this.canDeleteText;

		//setto la lingua in base a quella scelta dall'utente nel suo locale
		const langIta = window.localStorage.getItem("langIta");
		this.langIta = langIta === "true";
		if (this.langIta) {
			this.placeholder = "Scrivi qui cosa comprare";
			this.defaultPlaceholderText = "Scrivi qui cosa comprare";
			this.categories = this.itaCategories;
			this.copyList.text = "Lista copiata negli appunti";
			this.share.text = "Link copiato negli appunti, incollalo con chi vuoi.";
			this.confirmText = "Sei sicuro di voler eliminare:";
			this.selectedTodosConfirmText =
				"Sei sicuro di voler eliminare gli elementi selezionati";
			this.settingsTextTitle = "Impostazioni";
			this.safeModeText.title = "Modalità eliminazione sicura";
			this.safeModeText.description =
				"ti chiederà conferma di eliminazione per ogni singolo prodotto della lista";
			this.safeModeText.function = "Clicca per attivare/disattivare";
			this.chosenThemeText = "Tema impostato";
			this.changeThemeText = "Cambia tema";
			this.shareText = "Condividi";
			document.getElementById("helper-istructions").innerHTML =
				window.helperIstructionsITA; //questa è cacca, vue scrive direttamente il dom quindi normalmente ci sarebbe stato un componente apposito ma io devo usare github pages e schiantare tutto in un file. Normalmente su vue, lo so, non si fa!
			this.emailReportText = "Per qualsiasi segnalazione puoi contattarmi";
		} else {
			this.categories = this.engCategories;
			document.getElementById("helper-istructions").innerHTML =
				window.helperIstructionsENG;
		}

		this.merryChristmasTheme(); //se è natale metto gli addobbi e buon natale!

		//imposto il tema in base a quello scelto dall'utente
		const lightThemeSelected = window.localStorage.getItem("lightTheme");
		this.lightTheme = lightThemeSelected === "true";
		if (this.lightTheme) {
			this.changeThemeStyle("Light", "url('img/foglio_righe.webp')");
		}

		const darkThemeSelected = window.localStorage.getItem("darkTheme");
		this.darkTheme = darkThemeSelected === "true";
		if (this.darkTheme) {
			this.changeThemeStyle("Dark", "none", "#333333", "#FFFFFF");
			document.body.style.height = "100vh";
			document.body.style.border = "10px solid #d17e47";
		}

		const minimalThemeSelected = window.localStorage.getItem("minimalTheme");
		this.minimalTheme = minimalThemeSelected === "true";
		if (this.minimalTheme) {
			this.changeThemeStyle(
				"Minimal",
				"none",
				"#A5BECC",
				"#7C3E66",
				'"Cabin", sans-serif',
			);
		}

		const retroThemeSelected = window.localStorage.getItem("retroTheme");
		this.retroTheme = retroThemeSelected === "true";
		if (this.retroTheme) {
			this.changeThemeStyle(
				"Dos",
				"none",
				"#090A0C",
				"#FFFFFF",
				'"DotGothic16", sans-serif',
			);
		}

		const summerThemeSelected = window.localStorage.getItem("summerTheme");
		this.summerTheme = summerThemeSelected === "true";
		if (this.summerTheme) {
			this.changeThemeStyle("Summer", "url('img/mare.webp')", "#EFCB8F");
			document.body.style.backgroundRepeat = "no-repeat";
			document.getElementById("helper-description").style.backgroundImage =
				"none";
			document.getElementById("helper-description-container").style.background =
				"rgb(188,242,221)";
			document.getElementById("helper-description-container").style.background =
				"linear-gradient(168deg, rgba(188,242,221,1) 0%, rgba(129,215,235,1) 47%, rgba(46,152,242,1) 100%)";
			document.getElementById("helper-description").style.filter =
				"drop-shadow(2px 4px 6px black)";
			document.querySelector(".confirm").style.backgroundImage = "none";
		}

		const winterThemeSelected = window.localStorage.getItem("winterTheme");
		this.winterTheme = winterThemeSelected === "true";
		if (this.winterTheme) {
			document.body.style.backgroundRepeat = "no-repeat";
			document.body.style.backgroundSize = "cover";
			this.changeThemeStyle(
				"Winter",
				"url('img/montagne.webp')",
				"#232F34",
				"#FFFFFF",
			);
			document.getElementById(
				"helper-description-container",
			).style.backgroundImage = "url('img/inverno.webp')";
			document.getElementById(
				"helper-description-container",
			).style.backgroundSize = "cover";
			document.getElementById("todo").style.filter =
				"drop-shadow(2px 4px 6px black)";
			document.getElementById("helper-description").style.filter =
				"drop-shadow(2px 4px 6px black)";
			document.querySelector(".confirm").style.backgroundImage = "none";
			document.querySelector(".confirm").style.filter =
				"drop-shadow(2px 4px 6px black)";
		}
	},
	mounted() {
		if (window.localStorage.getItem("todos")) {
			//se si deve prendere un oggetto da salvare in locale
			try {
				this.todos = JSON.parse(window.localStorage.getItem("todos")); //prova a trasformare l'array in un oggetto javascript
			} catch (e) {
				window.localStorage.removeItem("todos"); //se viene trovato un errore, rimuovi l'oggetto (o meglio, non salvare niente)
			}
		}
		if (!this.addTodoInCategory.condition) {
			this.todos.map((t) => (t.isSelected = false));
		}
		this.changeTotoAdded(this.todos);
	},
	updated() {
		this.toggleButtonBackToTop();
		this.toggleButtonDeleteSelectedTodo();
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
				this.todos[n].multipleDelete = false;
				this.todos[n].isActive = !this.todos[n].isActive;
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
			this.addTodo();
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

			const todoObject = {
				name: this.newTodo.trim(),
				isHidden: true,
				isActive: false,
				isSelected: false,
				class: this.categoryClass,
				emojy: this.categoryEmoji,
				multipleDelete: false,
				todoAdded: true,
			};

			!this.addTodoInCategory.condition
				? this.todos.push(todoObject)
				: this.todos.splice(this.addTodoInCategory.id + 1, 0, todoObject);

			this.scrollToBottom();

			setTimeout(() => {
				//faccio questo per crearmi un'animazione visibile per un lasso di tempo appena si aggiunge un todo
				this.changeTotoAdded(this.todos);
			}, 1500);

			this.newTodo = "";
			this.categoryClass = false;
			this.categoryEmoji = "";
			this.categoryList = false;
			this.isDraggable = false;
			this.saveTodos();
			this.toggleButtonBackToTop();
			this.toggleButtonDeleteSelectedTodo();
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
			this.toggleButtonDeleteSelectedTodo();
		},
		confirmedRemoveTodo(x, todo) {
			this.todos.splice(x, 1);
			this.saveTodos();

			navigator.vibrate(220);
		},
		changeTotoAdded(arr) {
			arr.forEach(function (item) {
				if (item.todoAdded === true) {
					item.todoAdded = false;
				}
			});
		},
		toggleButtonBackToTop() {
			//mostro o nascondo, in base alla lunghezza del display, il pulsante che porta in cima alla lista
			const list = document.getElementById("todo-list");
			const container = document.getElementById("container-list");

			list.offsetHeight > container.offsetHeight
				? (this.buttonBackToTop = true)
				: (this.buttonBackToTop = false);
		},
		scrollTop() {
			document.getElementById("container-list").scrollTo(0, 0);
		},
		scrollToBottom() {
			/*se è visibile il pulsante che scrolla verso l'alto e se non è stata selezionata nessuna categoria, 
				si suppone che l'elemento aggiunto sia in fondo alla lista e quindi scrollo direttamente verso il fondo per farlo notare*/
			const todoSelected = this.todos.find((t) => t.isSelected === true);
			if (this.buttonBackToTop && !todoSelected) {
				document
					.getElementById("container-list")
					.scrollTo(0, document.body.scrollHeight);
			}
		},
		modifyTodo(x, y, todo) {
			this.todos.splice(x, 1);
			this.todos.splice(x, 0, y);
			this.saveTodos();
		},
		saveTodos() {
			const parsedTodos = JSON.stringify(this.todos);
			window.localStorage.setItem("todos", parsedTodos);
		},
		removeAllTodo(x) {
			this.todos.splice(x);
			this.categoryList = false;
			this.isDraggable = false;
			this.saveTodos();
			// this.helper = false;
			this.categoryList = false;
			this.placeholder = this.defaultPlaceholderText;
			navigator.vibrate(1000);
			this.buttonBackToTop = false;
		},
		copy() {
			const myList = this.todos.map((todo) =>
				todo.class ? `${todo.name.toUpperCase()}:\n` : `-${todo.name}\n`,
			);
			const arrayNoCommas = myList.join(" ");

			this.categoryList = false;
			navigator.clipboard.writeText(arrayNoCommas); //copio negli appunti una lista della spesa per poterla condividere
			document.addEventListener("copy", function (e) {
				//copio negli appunti anche qui per sistemare su android (quello di sopra non funziona)
				e.clipboardData.setData("text/plain", arrayNoCommas);
				e.preventDefault();
			});
			document.execCommand("copy"); //riprovo/ricopio negli appunti anche qui per sistemare su android (per essere sicuri)
			this.copyList.visible = true;
			setTimeout(() => (this.copyList.visible = false), 3000); //cambio il testo del pulsante copia
			navigator.vibrate(400);
		},
		shareLink() {
			const playStoreUrl =
				"https://play.google.com/store/apps/details?id=io.kodular.caputoluca88.Shopping_List";
			navigator.clipboard.writeText(playStoreUrl);
			document.addEventListener("copy", function (e) {
				//copio negli appunti anche qui per sistemare su android (quello di sopra non funziona)
				e.clipboardData.setData("text/plain", playStoreUrl);
				e.preventDefault();
			});
			document.execCommand("copy");
			this.share.visible = true;
			setTimeout(() => (this.share.visible = false), 5000);
		},
		showCategoryList() {
			this.removeSelectedCategoryToAddItem();
			this.categoryList = !this.categoryList;
			this.isDraggable = false;
		},
		showHelper() {
			this.helper = !this.helper;
			if (this.helper) {
				window.scrollTo(0, 0);
				document.documentElement.style.overflow = "hidden";
			} else {
				document.getElementById("helper-description").scrollTo(0, 0);
				document.documentElement.style.overflow = "auto";
				this.openVideoTutorial = false;
				this.openNewFeaturesVideo = false;
			}
		},
		selectTodoForDelete(index) {
			this.todos[index].isActive = false;
			this.todos[index].isDisabled = false;
			this.todos[index].multipleDelete = !this.todos[index].multipleDelete;
			this.toggleButtonDeleteSelectedTodo();
			this.saveTodos();
		},
		toggleButtonDeleteSelectedTodo() {
			this.todos.some((el) => el.multipleDelete)
				? (this.canDeleteMultipleTodo = true)
				: (this.canDeleteMultipleTodo = false);
		},
		deleteSelectedTodos() {
			const confirmText = `${this.selectedTodosConfirmText}?`;
			if (confirm(confirmText)) {
				this.todos = this.todos.filter((todo) => !todo.multipleDelete);
				this.isDraggable = false;
				this.saveTodos();
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
								(this.langIta ? "Aggiungi in " : "Add in ") +
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
			this.placeholder = "Write what to buy";
			this.defaultPlaceholderText = "Write what to buy";
			this.categories = this.engCategories;
			this.copyList.text = "List copied to clipboard";
			this.share.text =
				"Link copied to clipboard, paste it with whoever you want.";
			window.localStorage.setItem("langIta", false);
			location.reload(); //lo faccio solo perchè mi obbligano ad inserire librerie del c---- per la privacy policy che mi buggano il codice.
		},
		setItaliano() {
			this.langIta = true;
			this.placeholder = "Scrivi qui cosa comprare";
			this.defaultPlaceholderText = "Scrivi qui cosa comprare";
			this.categories = this.itaCategories;
			this.copyList.text = "Lista copiata negli appunti";
			this.share.text = "Link copiato negli appunti, incollalo con chi vuoi.";
			window.localStorage.setItem("langIta", true);
			location.reload(); //lo faccio solo perchè mi obbligano ad inserire librerie del c---- per la privacy policy e mi buggano il codice.
		},
		toggleDeleteConfirm() {
			this.canDelete = !this.canDelete;
			if (this.canDelete) {
				this.canDeleteText = "ON";
				window.localStorage.setItem("canDelete", true);
			} else {
				this.canDeleteText = "OFF";
				window.localStorage.setItem("canDelete", false);
			}
		},
		changeTheme(theme) {
			this.resetAllThemes();

			switch (theme) {
				case "light":
					this.lightTheme = true;
					window.localStorage.setItem("lightTheme", true);
					this.loadingTheme("light");
					break;
				case "dark":
					this.darkTheme = true;
					window.localStorage.setItem("darkTheme", true);
					this.loadingTheme("dark");
					break;
				case "minimal":
					this.minimalTheme = true;
					window.localStorage.setItem("minimalTheme", true);
					this.loadingTheme("minimal");
					break;
				case "retro":
					this.retroTheme = true;
					window.localStorage.setItem("retroTheme", true);
					this.loadingTheme("retro");
					break;
				case "summer":
					this.summerTheme = true;
					window.localStorage.setItem("summerTheme", true);
					this.loadingTheme("summer");
					break;
				case "winter":
					this.winterTheme = true;
					window.localStorage.setItem("winterTheme", true);
					this.loadingTheme("winter");
					break;

				default:
					this.lightTheme = true;
					window.localStorage.setItem("lightTheme", true);
					break;
			}
		},
		loadingTheme(theme) {
			document.getElementById("helper-description-container").style.display =
				"none";
			document.getElementById("loading-themes-container").style.display =
				"block";
			switch (theme) {
				case "light":
					document.getElementById(
						"loading-themes-container",
					).style.backgroundColor = "white";
					break;
				case "dark":
					document.getElementById(
						"loading-themes-container",
					).style.backgroundColor = "#333333";
					break;
				case "minimal":
					document.getElementById(
						"loading-themes-container",
					).style.backgroundColor = "#a5becc";
					break;
				case "retro":
					document.getElementById(
						"loading-themes-container",
					).style.backgroundColor = "black";
					break;
				case "summer":
					document.getElementById(
						"loading-themes-container",
					).style.backgroundColor = "#12a1df";
					break;
				case "winter":
					document.getElementById(
						"loading-themes-container",
					).style.backgroundColor = "#1A3159";
					break;
			}

			setTimeout(() => {
				location.reload();
			}, 700);
		},
		resetAllThemes() {
			this.lightTheme = false;
			window.localStorage.setItem("lightTheme", false);
			this.darkTheme = false;
			window.localStorage.setItem("darkTheme", false);
			this.minimalTheme = false;
			window.localStorage.setItem("minimalTheme", false);
			this.retroTheme = false;
			window.localStorage.setItem("retroTheme", false);
			this.summerTheme = false;
			window.localStorage.setItem("summerTheme", false);
			this.winterTheme = false;
			window.localStorage.setItem("winterTheme", false);
		},
		changeThemeStyle(
			themeName,
			backgroundImage,
			backgroundColor,
			color,
			fontFamily,
		) {
			this.themeName = themeName;
			document.body.style.backgroundImage = backgroundImage;
			document.body.style.backgroundColor = backgroundColor;
			if (color) {
				document.body.style.color = color;
			}
			if (fontFamily) {
				document.body.style.fontFamily = fontFamily;
			}
		},
		toggleDragDrop() {
			this.isDraggable = !this.isDraggable;
			this.categoryList = false;
			this.removeSelectedCategoryToAddItem();
		},
		getAndroidVersion(ua) {
			//questo metodo è inutilizzato ma lo tengo poichè potrebbe servirmi in futuro se risolvono il problema con la libreria "draggabble".
			//Ho aperto una segnalazione qui: https://github.com/SortableJS/Vue.Draggable/issues/1178
			ua = (ua || navigator.userAgent).toLowerCase();
			var match = ua.match(/android\s([0-9\.]*)/i);
			const intVersion = match ? parseInt(match[1]) : 12;
			intVersion <= 11
				? (this.needDragNDropBtn = true)
				: (this.isDraggable = true);
		},
		togglePrivacyPolicy() {
			this.privacyPolicy = !this.privacyPolicy;
		},
	},
});
