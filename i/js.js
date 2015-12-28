// JavaScript for writemyessayz.github.io
$(document).ready(function() {
$(".orderbutton").attr("href", 'h'+'tt'+'ps'+':'+'/'+'/write'+'my'+'essay'+'z.c'+'om'+'/man'+'age/or'+'de'+'r');
$("#myaccount").attr("href", 'h'+'tt'+'ps'+':'+'/'+'/write'+'my'+'essay'+'z.c'+'om'+'/man'+'age/lo'+'g'+'in');
$(".ab").attr("href", 'h'+'tt'+'p'+':'+'/'+'/write'+'my'+'essay'+'z.c'+'om'+'/abo'+'u'+'t.html');
$(".co").attr("href", 'h'+'tt'+'p'+':'+'/'+'/write'+'my'+'essay'+'z.c'+'om'+'/con'+'tac'+'ts.html#content');
$(".fq").attr("href", 'h'+'tt'+'p'+':'+'/'+'/write'+'my'+'essay'+'z.c'+'om'+'/f'+'a'+'q.html#content');
$(".pr").attr("href", 'h'+'tt'+'p'+':'+'/'+'/write'+'my'+'essay'+'z.c'+'om'+'/pr'+'ic'+'es.html#content');
$(".tm").attr("href", 'h'+'tt'+'p'+':'+'/'+'/write'+'my'+'essay'+'z.c'+'om/tes'+'timo'+'nia'+'ls.html#content');

$(".bannerorder").click(function() { 
window.location = 'http'+'://wr'+'itemy'+'essayz.github.io/man'+'age/order';
});

$("#bookmark").click(function(e){
e.preventDefault();
var bookmarkUrl = 'http://writemyessayz.github.io/';
var bookmarkTitle = 'writemyessayz.github.io';
if (window.sidebar) { 
window.sidebar.addPanel(bookmarkTitle, bookmarkUrl,"");
} else if( window.external || document.all) { 
window.external.AddFavorite( bookmarkUrl, bookmarkTitle);
} else if(window.opera) { 
$("a#bookmark").attr("href",bookmarkUrl);
$("a#bookmark").attr("title",bookmarkTitle);
$("a#bookmark").attr("rel","sidebar");
} else { 
alert('Sorry! Your browser is not supported :(');
return false;
}
});

});