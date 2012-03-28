
//*****	MOVIE MODEL *****//

var Movie = Backbone.Model.extend({
	defaults: function(){
		return { title: "undefined" };
	},

	initialize: function(){
		if( !this.get("title") ){
			this.set({"title": this.defaults.title});
		}
	},

	clear: function(){
		this.destroy();
	}
});

//***** MOVIE COLLECTION *****//

var MovieList = Backbone.Collection.extend({ model: Movie })


//*****	MOVIE VIEW *****//

MovieView = Backbone.View.extend({

	tagName: "li",

	events:{
		'click .bdel': 'remove',
		'click .bedit' : 'edit',
		'keypress #editMovie': 'editOnEnter'
	},

	initialize: function(){
		this.model.bind('change', this.render,this);
		_.bindAll(this,'render','remove','unrender','edit','editOnEnter');
		this.model.bind('remove',this.unrender,this);
	},

	render: function(){
		var bDel= "<span><input type='button' value='Delete' class='bdel'></input></span>";
		var bEdit= "<span><input type='button' value='Edit' class='bedit'></input></span>";
		var myTitle= this.model.get("title");
		this.$el.html(myTitle + "<br>" + bEdit + "<br>" + bDel );
		return this;
	},

	 unrender: function(){
     	$(this.el).remove();
    },
	remove: function(){
      	this.model.destroy();
    },	
    edit: function(){
    	this.$el.html("<input type='text' id='editMovie'></input>");
    	$("#editMovie").focus();
    },
    editOnEnter: function(e){
    	if (e.keyCode != 13) return; 
      	if (!$("#editMovie").val()) return; 
      	var newValue=$("#editMovie").val();
      	this.model.set({ title: newValue });
    }
});


//***** APPLICATION VIEW *****//


var myMoviesList= new MovieList;


MyAppView = Backbone.View.extend({

	events: { "click .addMyMovies": "addMyMovies"
  	},

	initialize: function(){ myMoviesList.bind('add',this.addMovie);
                                this.collection=myMoviesList;
	},
    
        addMovie: function(mov){ var view= new MovieView({model: mov});
                               $("#myList").append(view.render().el);
        },
        
        addMyMovies: function(){ var harry1 = new Movie( { title: 'harry1' });
                                 var harry2 = new Movie( { title: 'harry2' });
                                 var harry3 = new Movie( { title: 'harry3' });
                                 this.collection.add(harry1); 
                                 this.collection.add(harry2);
                                 this.collection.add(harry3);
        }
});

var appl = new MyAppView({ el : $("#myMovies")});

var moviesList= new MovieList;

AppView = Backbone.View.extend({

	events: { "keypress #addMovie":  "createOnEnter"
  	},

	initialize: function(){ moviesList.bind('add',this.addMovie);
                                this.collection=moviesList;
	},
        
	createOnEnter: function(e){ if (e.keyCode != 13) return;
                                    var myMovie= new Movie;
                                    myMovie.set({ title: $("#addMovie").val() });
                                    this.collection.add(myMovie); 
                                    $("#addMovie").val('');
        },
        
        addMovie: function(mov){ var view= new MovieView({model: mov});
                               $("#tuList").append(view.render().el);
        }
});

var app = new AppView({ el : $("#yourMovies")});


//var movieListView = new MovieListView();
//
//var harry1 = new Movie( { title: 'harry1' });
//var harry2 = new Movie( { title: 'harry2' });
//var harry3 = new Movie( { title: 'harry3' });
//
//movieListView.addNewMovie(harry1);


