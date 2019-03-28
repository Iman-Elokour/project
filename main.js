//make recipe function
function makeRecipe(){   
	var recipe = {
		name: "",
		ingredients : [],
		directions : [],
		addDirections: function(directions){
			recipe.directions.push(directions);
		},
		addIngredients: function(item, amount){
			var temOb = {};
			temOb["item"] = item;
			temOb["amount"] = amount;
			recipe.ingredients.push(temOb);
		},
		addName: function(name){
			recipe.name = name;
		}
	}
	return recipe;
}


//creating the recipes
//recipe 1
var  RedCurryChicken = makeRecipe();
RedCurryChicken.addDirections("In a medium-size pot, add the chicken breast, water, sake, sliced ginger, and scallions\n,and bring to a boil over high heat.\nOnce the water is boiling,\n flip the chicken breast over and put the lid on top \n of the pot. Turn off the heat and leave the pot sit at room temperature \nfor 30 minutes. Chill in the fridge.\nIn a small bowl, combine all the sauce ingredients and mix well.\nOn a plate, arrange the sliced tomatoes, julienned cucumbers, and sliced chicken breast.\nTop with cilantro and drizzle with sauce.")
RedCurryChicken.addIngredients(["chicken","ginger","scallions"," salt","bell pepper","sake"],["1" ,"2 slices","2","2 teaspoons","1 cup"]);
RedCurryChicken.addName("Red Curry Chicken") ;
//recipe 2
var spaghetti = makeRecipe();
spaghetti.addDirections("In a medium-size pot, add the chicken breast, water, sake, sliced ginger, and scallions\n,and bring to a boil over high heat.\nOnce the water is boiling,\n flip the chicken breast over and put the lid on top \n of the pot. Turn off the heat and leave the pot sit at room temperature \nfor 30 minutes. Chill in the fridge.\nIn a small bowl, combine all the sauce ingredients and mix well.\nOn a plate, arrange the sliced tomatoes, julienned cucumbers, and sliced chicken breast.\nTop with cilantro and drizzle with sauce.")
spaghetti.addIngredients(["beef","onion","tomato","garlic","salt"],["1" ,"2 slices","2","2 cups","1 cup"]);
spaghetti.addName("spaghetti");
//recipe 3
var chickenPotPie = makeRecipe();
chickenPotPie.addDirections("Combine ground beef, onion, garlic, and green pepper in a large\nsaucepan. Cook and stir until meat is brown and vegetables are tender.\n Drain grease.\n Stir diced tomatoes, tomato sauce, and tomato paste into the pan. Season</br> with oregano, basil, salt, and pepper. Simmer spaghetti sauce for \n 1 hour, stirring occasionally.\nPress one pie pastry into the bottom of a deep-dish pie pan. Pour the broth mixture into the pie pastry. Top with remaining pastry and press edges together to form a seal. Cut several slits into the top pastry. Place pie plate on a baking sheet.</br>Bake in preheated oven until the crust is golden brown, about 30 minutes. Let pie cool and filling thicken at room temperature for 15 to 20 minutes before cutting.")
chickenPotPie.addIngredients(["chicken","potato","salt","pepper","carrot","onion"],["1/3 cup","1/3 can","1/2 spoon","1/3 spoon","1/2 can","1/3 cup"]);
chickenPotPie.addName("Chicken Pot Pie");


//recipes array
var recipeNames = [RedCurryChicken, spaghetti, chickenPotPie];


//function of finding the matching recipe
var count = 0;
function findRecipe(recipeNames,arr){
	result = "";
	//looping through recipe array of objects
	for(var i = 0; i < recipeNames.length; i++){ 
		//reset count for each recipe
		count = 0;
		//getting the array of items
		var items = recipeNames[i].ingredients[0].item;
		//looping through the user's ingredients
			for (var j = 0; j < arr.length; j++){
				//matching the items and incrementing count for each match
				if(items.indexOf(arr[j]) !== -1){
					count = count + 1;
			  }
		  }
		  //stop condition 
			if(count >= 3){
				result = recipeNames[i];
				break;
			}

	}
	//returning the name
	return result;
}


//looping through checkboxes and pushing the user items and return the alert of the recipe
$(document).ready(function() {
	//the search button action
	$("button").click(function(){
		//creating the user's ingredients array
    var arr =[];
    //looping the checkboxes
    $.each($("input[class='food']:checked"), function(){
    //pushing the user's ingredients           
    	arr.push($(this).val());
    });
    //calling the function to access the name of the matching recipe and storing it in match
    var match = findRecipe(recipeNames,arr).name;
    //going to the matching recipe's page
    if(match === "spaghetti"){
      alert("Yaaaay!! we have a match ... \nyour match is " + match + "\npress recipe button to go to the recipe!!");
      $("#recipe").wrapInner('<a href="file:///Users/rbk-27/Desktop/project/recipe1.html"/>');
    }
    else if(match === "Red Curry Chicken"){
      alert("Yaaaay!! we have a match ... \nyour match is " + match + "\npress recipe button to go to the recipe!!");
      $("#recipe").wrapInner('<a href="file:///Users/rbk-27/Desktop/project/recipe2.html"/>');
    }
    else if(match === "Chicken Pot Pie"){
      alert("Yaaaay!! we have a match ... \nyour match is " + match + "\npress recipe button to go to the recipe!!");
      $("#recipe").wrapInner('<a href="file:///Users/rbk-27/Desktop/project/recipe3.html"/>');
    }
    else{
      alert("Sorry!! There is no match :'( ");
    }
  });

})



