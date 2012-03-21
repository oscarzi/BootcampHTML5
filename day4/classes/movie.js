

var Movie = function(myTitle){ 

    var title = myTitle;
    this.suscriptores = [];
    this.getTitle = function(){return title}
    this.setTitle = function(title){title = title} 
} 

 
 /**
 * Nuestro suscriptor
 */
function Observador(name) {
    this.name = name;
}
 
Observador.prototype.ver = function(pelicula, state) {
    if(state == 'play')
        console.log(this.name + " comenzó a ver " + pelicula);
    else
        console.log(this.name + " dejó de ver " + pelicula);
}
 
var uno = new Observador("nombre apellido1");
var dos = new Observador("nombre apellido2");
/**
 * Play a una pelicula
 */
Movie.prototype.play = function() {
    for(var i = 0, l = this.suscriptores.length; i < l; i++) {
        this.suscriptores[i].ver(this.getTitle(),'play');
    }
}
/**
 * Stop a una pelicula
 */
Movie.prototype.stop = function() {
    for(var i = 0, l = this.suscriptores.length; i < l; i++) {
        this.suscriptores[i].ver(this.getTitle(),'stop');
    }
} 
/**
 * Suscribe un observador a la pelicula
 */
Movie.prototype.suscribir = function(observador) {
    this.suscriptores.push(observador);
}
 
var MovieTerminator = new Movie('terminator');
 
// Suscribimos los observadores
MovieTerminator.suscribir(uno);
MovieTerminator.suscribir(dos);
 
MovieTerminator.play();
// nombre apellido1 comenzó terminator
MovieTerminator.stop();
// nombre apellido1 dejó de ver terminator
var MovirHarry = new Movie('harry');
// Suscribimos los observadores a la nueva pelicula
MovirHarry.suscribir(uno);
MovirHarry.suscribir(dos); 
// nueva tirada
MovirHarry.play();
MovirHarry.stop();

//************* extends from Movie ****************

DownloadableMovie.prototype = new Movie();
DownloadableMovie.prototype.constructor=DownloadableMovie;

function DownloadableMovie(myTitle){ 
    this.setTitle(myTitle);
}

DownloadableMovie.prototype.download = function() {
    console.log("Downloading movie: " + this.getTitle());
}

var MovieTerminator1 = new DownloadableMovie('terminator1');


// Suscribimos los observadores
MovieTerminator1.suscribir(uno);
MovieTerminator1.suscribir(dos);
 
MovieTerminator1.download();
 
MovieTerminator1.play('terminator');
MovieTerminator1.stop('terminator');


///****** Social Mixin

	 
	// Mixin
	var Mixin = function(){};
	Mixin.prototype = {
	  share: function(friendName){
	    console.log('Sharing '+this.getTitle()+' with '+friendName);
	  },
	  like: function(){
	    console.log('I like!' + +this.getTitle());
	  }
	};
	 

	// Augment existing 'class' with a method from another
	function augment( receivingClass, givingClass ) {
	  // only provide certain methods
	  if ( arguments[2] ) {
	    for (var i=2, len=arguments.length; i<len; i++) {
	      receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
	    }
	  }
//	  // provide all methods
//	  else {
//	    for ( var methodName in givingClass.prototype ) {
//	      /* check to make sure the receiving class doesn't
//	         have a method of the same name as the one currently
//	         being processed */
//	      if ( !receivingClass.prototype[methodName] ) {
//	        receivingClass.prototype[methodName] = givingClass.prototype[methodName];
//	      }
//	    }
//	  }
	}
	 	 
	
	augment( Movie, Mixin,'share','like' );
//        
//        Movie.prototype['share'] = Mixin.prototype['share'];
//        Movie.prototype['like'] = Mixin.prototype['like'];
//	 
        
        var ironman2 = new Movie("Iron Man 2");
        ironman2.share("V. Rivas");
        
	 
