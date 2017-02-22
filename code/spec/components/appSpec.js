var expect = chai.expect;

describe('app', function() {
  // 1. Load the module
  var videoPlayerDirectiveSpy, videoListDirectiveSpy, searchDirectiveSpy, element;
  
  beforeEach(module('video-player', function($provide) {
    videoPlayerDirectiveSpy = sinon.stub().returns({});
    videoListDirectiveSpy = sinon.stub().returns({});
    searchDirectiveSpy = sinon.stub().returns({});

    // mocking the directives so we can see if they were used within app
    $provide.factory('videoPlayerDirective', videoPlayerDirectiveSpy);
    $provide.factory('videoListDirective', videoListDirectiveSpy);
    $provide.factory('searchDirective', searchDirectiveSpy);
  }));
  
  beforeEach(module('templates'));
  beforeEach(inject(function($rootScope, $compile, youTube) {
    var scope = $rootScope.$new();

    // We're stubbing out the youTube search function so it doesn't 
    // make an ajax request
    youTube.search = function(str, callback) {
      callback(fakeVideoData);
    };

    element = angular.element('<app></app>');
    element = $compile(element)(scope);

    $rootScope.$digest();
  }));

  it('should have a function named selectVideo on isolate scope', function() {
    expect(element.isolateScope().ctrl.selectVideo).to.exist;
    expect(element.isolateScope().ctrl.selectVideo).to.be.a('function');
  });

  it('should have a function named searchResults on isolate scope', function() {
    expect(element.isolateScope().ctrl.searchResults).to.exist;
    expect(element.isolateScope().ctrl.searchResults).to.be.a('function');
  });

  it('should have a currentVideo property on isolateScope', function() {
    expect(element.isolateScope().ctrl.currentVideo).to.exist;
    expect(element.isolateScope().ctrl.currentVideo).to.be.a('object');
  });

  it('should have a videos property on isolateScope', function() {
    expect(element.isolateScope().ctrl.videos).to.exist;
    expect(element.isolateScope().ctrl.videos).to.be.a('array');
  });

  it('should render a video player element, a search element, and a video list element', function() {
    expect(videoPlayerDirectiveSpy.callCount).to.equal(1);
    expect(videoListDirectiveSpy.callCount).to.equal(1);
    expect(searchDirectiveSpy.callCount).to.equal(1);
  });

  //TODO:
  // should update the video player when a video entry\'s title is clicked
  // describe - when rendering live data from youtube
  //   should call `searchYouTube` when app is initialized
  //   should load live data when app is initialized
  
});