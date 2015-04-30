# jQuery Typewriter 
jQuery plugin created typewriter effect

#How to use

###Step 1: Link required files
```html
<!-- jQuery library (served from Google) -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<!-- jquery Typewriter Javascript file -->
<script src="js/jquery.typewriter.min.js"></script>
```

###Step 2: Create HTML markup
```html
<h1 id="header">Lorem ipsum dolor sit amet, consectetur adipisicing elit!</h1>
```

###Step 3: Call the Typewriter
```javascript
$(document).ready(function(){
  $('#header').typewriter({speed:50});
});
```