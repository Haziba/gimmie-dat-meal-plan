$(function(){
  var week = [
   { day: "Monday" },
   { day: "Tuesday" },
   { day: "Wednesday" },
   { day: "Thursday" },
   { day: "Friday" },
   { day: "Saturday" },
   { day: "Sunday" }
  ];

  var mealArray = [];
  var ingredients = {};
  
  for(var meal in meals){
    meals[meal].name = meal;

    mealArray.push(meals[meal]);
  }

  for(var i = 0; i < week.length; i++){
    week[i].meal = mealArray[Math.floor(Math.random() * mealArray.length)];

    $("#week").append($("<tr/>")
          .append($("<td/>")
            .text(week[i].day))
          .append($("<td/>")
            .text(week[i].meal.name)));

    for(var j = 0; j < week[i].meal.ingredients.length; j++){
      var ingredient = week[i].meal.ingredients[j];
      if(!ingredients[ingredient.type]){
        ingredients[ingredient.type] = 0;
      }
      ingredients[ingredient.type] += ingredient.quantity:
    }
  }
  
  console.log(week);
});
