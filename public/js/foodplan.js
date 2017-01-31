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
  
  for(var meal in meals){
    meals[meal].name = meal;

    mealArray.push(meals[meal]);
  }

  for(var i = 0; i < week.length; i++){
    week[i].meal = mealArray[Math.floor(Math.random() * mealArray.length)];
  }

  console.log(week);
});
