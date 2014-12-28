//casper.options.viewportSize = {width: 1600, height: 600};
//casper.options.stepTimeout = 20000;
//casper.options.waitTimeout = 10000;
//casper.options.timeout = 60000;

// some start values
var url = casper.cli.get("url");
if (!/\/$/.test(url)) {
    // We haven't trailing slash: add it
    url = url + '/';
}

casper.test.begin('CRITICAL::CASE-NOFAIL::Login and mediapool', 2, function suite(test) {
  casper.echo ("START-TIME: " + Date.now())

  casper.start(url, function() {
    test.assertTitle('Google', 'STEP1::Verify title is "Google"');
    this.fill('form[action="/search"]', { q: 'cheeseeee' }, true);
    });
  casper.then(function() {
    this.echo ("STEP1: " + Date.now())
  });
  casper.then(function() {
    test.assertMatch(this.getTitle(), /cheeseeee/i, 'STEP2::Verify title contains "cheeseeee"');
  });
  casper.then(function() {
    this.echo ("STEP2: " + Date.now())
  });
  casper.userAgent('Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; en-GB)');
  casper.run(function() {
    test.done();
  });
});
