var expect = chai.expect;

describe('video list entry', function() {
  // 1. Load the module
  beforeEach(module('video-player'));
  beforeEach(module('templates'));

  var catScope, jsScope, catElement, jsElement;
  // 2. Inject $rootScope and $compile
  beforeEach(inject(function($rootScope, $compile) {
    // 3. Set up the scope with test data

    catScope = $rootScope.$new();
    catScope.video = fakeVideoData[0];

    jsScope = $rootScope.$new();
    jsScope.video = moreFakeVideoData[0];

    // 4. Create an element
    catElement = angular.element('<video-list-entry video="video"></video-list-entry>');
    jsElement = angular.element('<video-list-entry video="video"></video-list-entry>');

    // 5. Compile that element with your scope
    catElement = $compile(catElement)(catScope);
    jsElement = $compile(jsElement)(jsScope);
    // 6. Run the digest cycle to ACTUALLY compile the element
    $rootScope.$digest();
  }));

  it('should correctly set video property on isolate scope', function() {
    expect(catElement.isolateScope().ctrl.video.snippet.title).to.equal(fakeVideoData[0].snippet.title);
    expect(jsElement.isolateScope().ctrl.video.snippet.title).to.equal(moreFakeVideoData[0].snippet.title);
    
    expect(catElement.isolateScope().ctrl.video.snippet.description).to.equal(fakeVideoData[0].snippet.description);
    expect(jsElement.isolateScope().ctrl.video.snippet.description).to.equal(moreFakeVideoData[0].snippet.description);

    expect(catElement.isolateScope().ctrl.video.snippet.thumbnails.default.url).to.equal(fakeVideoData[0].snippet.thumbnails.default.url);
    expect(jsElement.isolateScope().ctrl.video.snippet.thumbnails.default.url).to.equal(moreFakeVideoData[0].snippet.thumbnails.default.url);
  });

  it('should dynamically display the video title', function() {
    // Testing both cat element and js video element
    expect(catElement.text()).to.contain(fakeVideoData[0].snippet.title);
    expect(jsElement.text()).to.contain(moreFakeVideoData[0].snippet.title);
  });

  it('should dynamically display the video description', function() {
    // Testing both cat element and js video element
    expect(catElement.text()).to.contain(fakeVideoData[0].snippet.description);
    expect(jsElement.text()).to.contain(moreFakeVideoData[0].snippet.description);
  });

  it('should dynamically display the video thumbnail', function() {
    // Testing both cat element and js video element
    expect(catElement.find('img').first().attr('src')).to.contain(fakeVideoData[0].snippet.thumbnails.default.url);
    expect(jsElement.find('img').first().attr('src')).to.contain(moreFakeVideoData[0].snippet.thumbnails.default.url);
  });


});