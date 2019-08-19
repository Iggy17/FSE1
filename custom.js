$(function)() {
var brandOptions;
    $.getJSON('my_sneakers.json', function(result){
        $.each(result, function(i,brand){
            //<option value ='brand'>Brand</option>
            brandOptions +="'option value'"
            +brand.Brand+
            "'>'"
            +brand.Style+
            "</options>";
            $('#brand').html(brandOptions);
            
        });
    });    

}