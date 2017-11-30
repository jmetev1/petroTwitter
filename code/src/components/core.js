angular.module('appWrapper')
.component('core', {
  template: `
  <div class="col-xs-8 video-list-entry-title">
    <a ui-sref="core.app" ui-sref-active="active">
      Home
    </a>
  </div>
  <ui-view></ui-view>`,
  bindings: {
    posts: '=',
    users: '='
  }
})