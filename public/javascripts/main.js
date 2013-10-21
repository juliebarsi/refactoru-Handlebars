$(document).ready(function() {
	// var source = $("#entry-template").html();
	// console.log(source);
	// var template = Handlebars.compile(source);
	// console.log(template);
	// var context = {title: "My New Post", body: "This is my first post!"}
	// var html    = template(context);
	// console.log(html);
	// var context2 = {title: "Julie", body: "This is my second post!"}
	// var html2    = template(context2);
	// console.log(html2);
	// $("#results").append(html)
	// $("#results").append(html2)

var source   = $("#search-results-template").html();
    var searchTemplate = Handlebars.compile(source);
    $results = $('#results')//

    $('#textInput').on('keyup', function(e){
            if(e.keyCode === 13){
            	console.log("Enter was pressed")
                    // do something
                    var val = $(this).val()
                    $.get('/search', {searchTerm : val}, function(data){
                            console.log(data)
                            $results.html(searchTemplate({text : data}))
                    });
            }
    });
	
});

