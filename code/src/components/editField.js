angular.module('app').component('editField', {
  templateUrl: 'src/templates/editField.html', 
  controller: EditableFieldController,
  bindings: {
    // fieldValue: '<',
    // fieldType: '@?',
    // onUpdate: '&'
    user: '='
  }
});

function EditableFieldController() {
}
