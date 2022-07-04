//PRVI ZADATAK
const broj = prompt ("unesite broj")
const prviZadatak=  function ()
{
    if(broj === " "){
        return console.log(broj*broj)
    } else {
        return console.log("greska")
    };
};

const CART_DATA = [
    {
      id: 1,
      name: "Hawai Shirt",
      price: 30,
      amount: 2,
      categorty: "summer",
      rating: 4.5,
    },
    {
      id: 3,
      name: "Adidas Slippers",
      price: 35,
      amount: 1,
      categorty: "summer",
      rating: 4.5,
    },
    {
      id: 6,
      name: "White T-Shirt",
      price: 15,
      amount: 4,
      categorty: "summer",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Summer hat",
      price: 7.5,
      amount: 3,
      categorty: "summer",
      rating: 40,
    },
  ];

const drugiZadatak = (arr)=> {
    const len =  arr.length;
    constshippingCost =360;
    const namePrice = arr.map((value)=> {
        return `You got ${len} in cart, shipping cost is ${shippingCost}, your total is ${sum}`
      console.log(drugiZadatak(CART_DATA));

    })
}

//TRECI ZADATAK

const treciZadatak= async() => {
    const data=await fetch("https://reqres.in/api/users");
    const product =await data.json();
    return product;
}

treciZadatak().then ((res  ) => console.log (res.data));