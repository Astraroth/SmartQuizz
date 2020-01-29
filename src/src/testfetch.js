function doGetTEXT(){

	var url = "http://10.8.94.137:8000/api/Question/";

	var aPromise = fetch(url);

	aPromise
		.then(function(response){
			console.log("OK !");
			return.response.json();
		})
		.then(function(data) {
			console.log(data);
		})
		.catch(function(error){
			console.log("Error");
			console.log(error);
		});
}