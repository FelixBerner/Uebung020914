function MainController($scope) {
	//Personenliste erstellen
  $scope.persons = [];

  $scope.addPerson = function() {
  	//Daten in die Liste eintragen
    $scope.persons.push({vorName: $scope.newVName, nachName: $scope.newNName, gebDatum: $scope.newGebDat});
    //Eingabefelder zurücksetzen
    $scope.newVName = '';
    $scope.newNName = '';
    $scope.newGebDat = '';
  }
}