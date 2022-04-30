/**
 * 
 */

function getDetails(){
	jQuery.ajax({
        url: "http://localhost:8080/book_service/rest/books/" + $("#id").val(),
        type: "GET",
        contentType: "application/json",  
        dataType:'json',
        success: function(data, textStatus, errorThrown) {
            //here is your json.
              // process it
        	  $("#title").text(data.title);
        	  $("#price").text(data.price);

        },
        error : function(jqXHR, textStatus, errorThrown) {
        		$("#title").text("Sorry! Book not found!");
        		$("#price").text("");
        },
        timeout: 120000,
    });
};

function addDetails(){
	console.log('addWine');
    $.ajax({
        type: 'POST',
        contentType: 'application/json',
        url: "http://localhost:8080/book_service/rest/books/",
        dataType: "json",
        data: formToJSON(),
        success: function(data, textStatus, jqXHR){
            alert('Book added successfully');
        },
        error: function(jqXHR, textStatus, errorThrown){
            alert('addbook error: ' + textStatus);
        }
    });
};

function removeDetails(){
	jQuery.ajax({
        url: "http://localhost:8080/book_service/rest/books/" + $("#remove_id").val(),
        type: "DELETE",
        contentType: "application/json",  
        dataType:'json',
        success: function(data, textStatus, errorThrown) {
            alert('Book removed successfully');
        },
        error : function(jqXHR, textStatus, errorThrown) {
        		alert('addbook error: ' + textStatus);
        },
        timeout: 120000,
    });
};


function formToJSON() {
    return JSON.stringify({
         "id" : parseInt($('#add_id').val()),
        "title": $('#add_title').val(),
        "price": parseFloat($('#add_price').val())
        });
}