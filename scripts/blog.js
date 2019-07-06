//const head = '<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"><div id="header" class="container"><a class="navbar-brand" href="index.html">The Wiz</a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarResponsive"><ul class="navbar-nav ml-auto"><li class="nav-item"><a class="nav-link link" href="UsefulResources.html">Useful Resources</a></li><li class="nav-item"><a class="nav-link link" href="UsefulBooks.html">Reference Books</a></li><li class="nav-item"><a class="nav-link link" href="UsefulResearchPapers.html">Research Papers</a></li></ul></div></div></nav><div class="container"><div class="row"><div class="col-lg-2"></div><div class="col-lg-8"><div class="container"><div class="row"><div class="col-12">';
const head = '<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"><div id="header" class="container"><img src="img/thewiz.png" class="image-anchor" onclick="window.location = \'index.html\'" width="15%" ><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarResponsive"><ul class="navbar-nav ml-auto"><li class="nav-item"><a class="nav-link link" href="UsefulResources.html">Resources</a></li><li class="nav-item"><a class="nav-link link" href="UsefulBooks.html">Books</a></li><li class="nav-item"><a class="nav-link link" href="UsefulResearchPapers.html">Research</a></li></ul></div></div></nav><div class="container"><div class="row">&nbsp;</div><div class="row">&nbsp;</div><div class="row"><div class="col-lg-2"></div><div class="col-lg-8"><div class="container"><div class="row"><div class="col-12"></div></div><div class="row"><div class="col-12">';
const tail = '<gcse:search></gcse:search></div></div></div></div></div></div><div></div><footer class="py-5"><div class="container"><p class="m-0 text-center text-muted">Copyright &copy; Vikas K. Solegaonkar 2019</p></div></footer>';
var body = $("#body").html();
$("#body").html(head + body + tail);

$('pre code').each(function (i, block) {
    hljs.highlightBlock(block);
});

(function () {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = 'https://www.googletagmanager.com/gtag/js?id=UA-115049689-5';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
})();

(function () {
    var cx = '001416028576861424674:idwrcpies6m';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
})();

(function () {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = 'scripts/consent.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
})();

window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'UA-115049689-5');

function BlogTrail(name) {
    console.log("Name: " + name);
    this.indexFileName = name + ".txt";
    console.log("Index File: " + this.indexFileName);
    this.htmlList = [];
    this.lastIndex = 0;

    this.loadList = function() {
        console.log("Index File: " + this.indexFileName);
        $.get(trail.indexFileName, function(html, status) {
            html.split("\n").forEach(element => {
                trail.htmlList.push(element);
            });
            trail.showMore();
        });
    };

    this.showBlogInfo = function(url) {
        console.log("URL" + url);
        $.get(url.trim(), function (html, status) {
            var title = html.match(/<title>(.*?)<\/title>/)[1];
            var intro = html.split("p>")[1].substr(0,205);
			
            intro = intro.substr(0, Math.min(intro.length, intro.lastIndexOf(" ")));
            var div = document.createElement("div");
            div.innerHTML = "<hr/><h3><a href='" + url + "'>" + title + "</a></h3><p>" + intro + " . . .</p>";
            $("#blog").append(div);
        });
    }

    this.showMore = function() {
        for (i = 0; i< 5 && this.lastIndex < this.htmlList.length; i++) {
            this.showBlogInfo(this.htmlList[this.lastIndex++]);
        }
    }
}

var initTrail = function(name) {
    trail = new BlogTrail(name);
    trail.loadList();
    return trail;
}


