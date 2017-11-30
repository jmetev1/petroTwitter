angular.module('appWrapper').component('editField', {
  templateUrl: 'src/templates/editField.html', 
  controller: editableFieldController,
  require: {
    userViewCtrl: '^userView'
  },
  bindings: {
    field: '<',
    value: '=',
  }
});

function editableFieldController() {
  const vm = this;
  vm.editMode = false;
  vm.handleModeChange = () => {
    if (vm.editMode) {
      vm.userViewCtrl.edit(vm.field, vm.value, () => 
        vm.editMode = !vm.editMode)
    } else {
      vm.editMode = !vm.editMode
    }
  }
} 
