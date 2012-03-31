$(document).ready(function(){
    if(window.location.href.indexOf('?googlesearch=') >=0){
        $('#searchModal').modal('show');
    }
   $('.dropdown-toggle').dropdown();
   $('#searchModal').modal({
    'keyboard': false,
    'backdrop': 'static',
    'show': false
    });
   $('#google-search-btn').bind('click', function(){
    console.log(window.content.location.href);
    href = window.content.location.href + '/?googlesearch=' + document.searchform.googlesearch.value;
    window.content.location.href = href;
   });
   
   $('#search-query').keydown(function(event) {
    if(event.keyCode == 13) {
            $('#searchModal').modal('toggle');
            console.log($('#searchModal').html());
    }
    });
});