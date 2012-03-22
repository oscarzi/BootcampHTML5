/* 
 * Director Module
 */
define( function() {
    function Director ( myName ){
        var name = myName;
        this.getName = function(){return name;}
        this.setName = function(myName){name = myName;}
    }
    return (Director);
    }   
);