var page = require('webpage').create();

var jqueryUrl = 'http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js';
//var websiteUrl = 'http://forty7.guru/fun/gol3d/gol';
var websiteUrl = 'http://forty7.guru/fun/gol3d/index.html';
//var websiteUrl = 'http://forty7.guru';


page.open(websiteUrl, function(status) {
   if(status === "success")
      console.log('good status:' + status);
   else {
      console.log('bad status: ' + status);
      phantom.exit();
   }

   //page.injectJs(jqueryUrl, function () { });
   var max = 10;
   for (i = 0; i < max; i++) {
      page.injectJs(jqueryUrl, function () {
         var code = page.evaluate(function() {
            $("#step").click(); return 0;
         });
         page.render('example' + i + '.png');
      });
   }
   phantom.exit();
});

page.onConsoleMessage = function(msg) {
       console.log(msg);
};

//'http://example.com';
//var websiteUrl = 'http://forty7.guru/index.html';

/*function withJquery($) {
   page.evaluate(function () {
      var i = 0;
      var max = 10;
      for (i = 0; i < max; i++) {
         page.render('example' + i + '.png');
         $("#button").click();
      }
      //var title = document.title;
      console.log(title);
   });
}*/

