<?php 
    $title = "HTML5 Practice";
    $subtitle = "Day 4";
?>
<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title><?php echo "$title: $subtitle"; ?></title>
        <script src="modules/require.js"></script>
        <script src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
        <script> require(["modules/Movie", "modules/Director"], 
                function(Movie,Director) {
                    var movie = new Movie ("Terminator");
                    var director = new Director("James Cameron");
                    movie.setDirector(director);
                    console.log("Movie: "+ movie.getTitle());
                    console.log("Director: "+ director.getName());
                    movie.play();
          
                });
        </script>
    </head>
    <body>
        <header>
            <h1><?php echo "<span class='title'>$title</span>: <span class='subtitle'>$subtitle</span>"; ?></h1>
        </header>

        <!-- add your content here -->
        <h3>-- Enjoy! --</h3>
        
        <footer>
            <div><?php echo $title; ?> v1.0</div>
            <div>@author Alberto Miranda <a href="mailto:alberto@nextive.com">&lt;alberto@nextive.com&gt;</a></div>
            <div>@author Esteban Abait <a href="mailto:esteban.abait@nextive.com">&lt;esteban.abait@nextive.com&gt;</a></div>
        </footer>
    </body>
</html>