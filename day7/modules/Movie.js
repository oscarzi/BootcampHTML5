/* 
 * Movie Module
 */
define( ["./Director"], function() {
    function Movie (myTitle){
        var title = myTitle;
        var director;
        
        this.getTitle = function (){return title;}
        this.setTitle = function (myTitle){title = myTitle;}

        this.play = function (){
            console.log(" Play movie " + this.getTitle() + " with " + this.getDirector().getName() + " director");
        }
        
        this.getDirector = function(){return director;}
        this.setDirector = function(myDirector){director = myDirector;}
        
    }
    return (Movie);
    }
);