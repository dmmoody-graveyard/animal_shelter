animalList.factory('AnimalsFactory', function AnimalsFactory() {
  var factory = {};
  factory.animals = [];

  factory.addAnimal = function() {
    var animal = { name: factory.animalName, type: factory.animalType, adopted: false};
    factory.animals.push(animal);
    factory.animalName = null;
    factory.animalType = null;
  };
  return factory;
});
