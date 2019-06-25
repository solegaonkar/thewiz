(function() {var cx = '001416028576861424674:j9osquukerm';var gcse = document.createElement('script');gcse.type = 'text/javascript';gcse.async = true;gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(gcse, s);})();

var showList = ['.ai-blog', '.cloud-blog', '.code-blog', '.architecture-blog'];
var blogList = ['.ai-blog', '.cloud-blog', '.code-blog', '.architecture-blog'];
function refreshBlogList() {for (i = 0; i<blogList.length; i++) {$(blogList[i]).hide();}for (i = 0; i<showList.length; i++) {$(showList[i]).show();}}
function hideBlogs(c){for (i = showList.length; i>=0; i--) {if (showList[i]==c) {showList.splice(i, 1);}}refreshBlogList()}
function showBlogs(c) {showList[showList.length] = c;refreshBlogList();}

$(".show-ai-blog").change(function(){$(this).prop('checked') ? showBlogs(".ai-blog") : hideBlogs(".ai-blog");});
$(".show-cloud-blog").change(function(){$(this).prop('checked') ? showBlogs(".cloud-blog") : hideBlogs(".cloud-blog");});
$(".show-code-blog").change(function(){$(this).prop('checked') ? showBlogs(".code-blog") : hideBlogs(".code-blog");});
$(".show-architecture-blog").change(function(){$(this).prop('checked') ? showBlogs(".architecture-blog") : hideBlogs(".architecture-blog");});

const head = '<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"><div id="header" class="container"><a class="navbar-brand" href="index.html">The Wiz</a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarResponsive"><ul class="navbar-nav ml-auto"><li class="nav-item"><a class="nav-link link" href="UsefulResources.html">Useful Resources</a></li><li class="nav-item"><a class="nav-link link" href="UsefulBooks.html">Reference Books</a></li><li class="nav-item"><a class="nav-link link" href="UsefulResearchPapers.html">Research Papers</a></li></ul></div></div></nav><div class="container"><div class="row"><div class="col-lg-2"></div><div class="col-lg-8"><div class="container"><div class="row"><div class="col-12">';
const tail = '<gcse:search></gcse:search></div></div></div></div></div></div><div></div><footer class="py-5"><div class="container"><p class="m-0 text-center text-muted">Copyright &copy; Vikas K. Solegaonkar 2019</p></div></footer>';
var body = $("#body").html();
$("#body").html(head + body + tail);

$('pre code').each(function (i, block) {
    hljs.highlightBlock(block);
});