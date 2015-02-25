animalList.controller('AdoptedCtrl', function AdoptedCtrl($scope, AnimalsFactory) {
  $scope.animals = AnimalsFactory.animals;
  $scope.addAnimalToAdoptedList = function(animal) {
    animal.adopted = true;
  };
})
