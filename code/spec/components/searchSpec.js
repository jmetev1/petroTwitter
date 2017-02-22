var expect = chai.expect;

describe('search', function() {
  var videoPlayerDirectiveSpy, videoListDirectiveSpy, searchDirectiveSpy, element;
  
  beforeEach(module('video-player'));
  
  beforeEach(module('templates'));
  beforeEach(inject(function($rootScope, $compile) {
    var scope = $rootScope.$new();

    scope.service = function() { };
    scope.result = function() { };

    element = angular.element('<search data-service="service" data-result="result"></search>');
    element = $compile(element)(scope);

    $rootScope.$digest();
  }));

  it('should have a function named service on isolate scope', function() {
    expect(element.isolateScope().ctrl.service).to.exist;
    expect(element.isolateScope().ctrl.service).to.be.a('function');
  });

  it('should have a function named result on isolate scope', function() {
    expect(element.isolateScope().ctrl.result).to.exist;
    expect(element.isolateScope().ctrl.result).to.be.a('function');
  });

  //TODO:
  // describe - when rendering live data from youtube
  //   should update the list when search button is clicked
  
});