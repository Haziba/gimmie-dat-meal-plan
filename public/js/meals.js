var meals = {
  Curry: {
    difficulty: difficulty.MEDIUM,
    time: time.LONG,

    ingredients: [{ 
      type: ingredients.CURRY_SAUCE,
      quantity: 1,
    },{
      type: ingredients.FROZEN_ONIONS,
      quantity: 0.33
    },{
      type: ingredients.FROZEN_PEPPERS,
      quantity: 0.33
    },{
      type: ingredients.PANEER,
      quantity: 1
    },{
      type: ingredients.NAAN,
      quantity: 1
    },{
      type: ingredients.RICE,
      quantity: 0.2,
      optional: true
    },{
      type: ingredients.COURGETTE,
      quantity: 0.5,
      optional: true
    }]
  },

  Pasta: {
    difficulty: difficulty.EASY,
    time: time.MEDIUM,

    ingredients: [{
      type: ingredients.PASTA_SAUCE,
      quantity: 0.5
    },{
      type: ingredients.FROZEN_ONIONS,
      quantity: 0.33
    },{
      type: ingredients.FROZEN_PEPPERS,
      quantity: 0.33
    },{
      type: ingredients.PASTA,
      quantity: 0.2
    },{
      type: ingredients.OLIVES,
      quantity: 0.1
    },{
      type: ingredients.CHEDDAR,
      quantity: 0.2
    }]
  }
};
