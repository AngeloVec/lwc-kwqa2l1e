import { LightningElement, api } from 'lwc';
export default class App extends LightningElement {
   @api message;
   name = 'Electra X4';
   description = 'A sweet bike built for comfort.';
   category = 'Mountain';
   material = 'Steel';
   price = '$2,700';
   pictureUrl = 'https://s3-us-west-1.amazonaws.com/sfdc-demo/ebikes/electrax4.jpg';
   ready = false;
   connectedCallback() {
       setTimeout(() => {
           this.ready = true;
       }, 3000);
   }
}/*Lavorare con JavaScript
 Ecco dove fai accadere le cose.  Come hai visto finora, i metodi JavaScript definiscono cosa fare con input, dati, eventi, modifiche allo stato e altro per far funzionare il tuo componente.
 Il file JavaScript per un componente Web Lightning deve includere almeno questo codice, dove MyComponent è il nome assegnato alla classe del componente. 
 L'istruzione export definisce una classe che estende la classe LightningElement.  Come best practice, il nome della classe di solito corrisponde al nome del file della classe JavaScript, ma non è un requisito.
 
Il modulo LWC
 Lightning Web Components utilizza i moduli (i moduli integrati sono stati introdotti in ECMAScript 6) per raggruppare le funzionalità di base e renderle accessibili a JavaScript nel file del componente.  Il modulo principale per i componenti Web Lightning è lwc.
 Iniziare il modulo con l'istruzione import e specificare la funzionalità del modulo utilizzato dal componente.
 L'istruzione import indica che JavaScript utilizza la funzionalità LightningElement dal modulo lwc.

LightningElement è la classe base per i componenti Web Lightning, che ci consente di utilizzare connectedCallback().

 Il metodo connectedCallback() è uno dei nostri hook del ciclo di vita.  Imparerai di più sugli hook del ciclo di vita nella sezione successiva.  Per ora, sappi che il metodo viene attivato quando un componente viene inserito nel modello a oggetti del documento (DOM).  In questo caso, avvia il timer.

 Lifecycle Hooks 


Lightning Web Components fornisce metodi che consentono di "collegare" il codice a eventi critici nel ciclo di vita di un componente.  Questi eventi includono quando un componente è:



     Creato

     Aggiunto al DOM

     Resi nel browser

     Incontrare errori

     Rimosso dal DOM



Inoltre, nota che abbiamo usato la parola chiave this.  L'utilizzo delle parole chiave dovrebbe essere familiare se hai scritto JavaScript e si comporta proprio come in altri ambienti.  La parola chiave this in JavaScript si riferisce al livello più alto del contesto corrente.  Qui, il contesto è questa classe.  Il metodo connectedCallback() assegna il valore per la variabile ready di livello superiore.  È un ottimo esempio di come Lightning Web Components ti consente di portare le funzionalità JavaScript nel tuo sviluppo.  È possibile trovare un collegamento a buone informazioni su questo nella sezione Risorse.



 Ci stiamo muovendo velocemente e sei stato in grado di provare alcune cose.  Nella prossima unità, facciamo un passo indietro e parliamo di più dell'ambiente in cui vivono i componenti.

Decoratori



 I decoratori vengono spesso utilizzati in JavaScript per modificare il comportamento di una proprietà o di una funzione.



 Per utilizzare un decoratore, importalo dal modulo lwc e posizionalo prima della proprietà o della funzione.

Puoi importare più decoratori, ma una singola proprietà o funzione può avere un solo decoratore.  Ad esempio, una proprietà non può avere decoratori @api e @wire.



 Esempi di decoratori di componenti Web Lightning includono:

 


*/