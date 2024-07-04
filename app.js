let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    topping: ["chocolate", "peanuts"]
  };
  let order = (Fruit_name, call_production) => {
    setTimeout(() => {
      console.log(`${stocks.Fruits[Fruit_name]} was selected`);
      call_production(Fruit_name);
    }, 2000);
  };
  let production = (Fruit_name) => {
    setTimeout(() => {
      console.log("Production has Started");
      setTimeout(() => {
        console.log(`The fruit ${stocks.Fruits[Fruit_name]} has been chooped`);
  
        setTimeout(() => {
          console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
  
          setTimeout(() => {
            console.log("The machine has been started");
  
            setTimeout(() => {
              console.log(`Ice-cream was placed on the ${stocks.holder[0]}`);
  
              setTimeout(() => {
                console.log(`${stocks.topping[0]} was added as topping`);
  
                setTimeout(() => {
                  console.log("Served Ice-cream");
                }, 2000);
              }, 3000);
            }, 2000);
          }, 1000);
        }, 1000);
      }, 2000);
    }, 0o0);
  };
  order(0, production);
  