const pizzas = [
  {
    "name": "Margherita",
    "variants": [
      "Small", "Medium", "Large"
    ],
    price: [
      {
        small: 11,
        medium: 15,
        large: 20,
      },

    ],
    "category": "Vegetarian",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Hor3UbZlulj6suKrzKpvhAJJfKBpEtsU2w&usqp=CAU",
    "description": "A classic pizza with tomato sauce, mozzarella cheese, and fresh basil."
  },
  {
    "name": "Pepperoni",
    "variants": [
      "Small", "Medium", "Large"
    ],
    price: [
      {
        small: 18,
        medium: 22,
        large: 36,
      },

    ],
    "category": "Meat",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Hor3UbZlulj6suKrzKpvhAJJfKBpEtsU2w&usqp=CAU",
    "description": "A classic pizza with tomato sauce, mozzarella cheese, and spicy pepperoni slices."
  },
  {
    "name": "Mushroom",
    "variants": [
      "Small", "Medium", "Large"
    ],
    price: [
      {
        small: 18,
        medium: 22,
        large: 36,
      },

    ],
    "category": "Vegetarian",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Hor3UbZlulj6suKrzKpvhAJJfKBpEtsU2w&usqp=CAU",
    "description": "A delicious pizza with tomato sauce, mozzarella cheese, and sliced mushrooms."
  },
  {
    "name": "Hawaiian",
    "variants": [
      "Small", "Medium", "Large"
    ],
    price: [
      {
        small: 8,
        medium: 12,
        large: 16,
      },

    ],
    "category": "Meat",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Hor3UbZlulj6suKrzKpvhAJJfKBpEtsU2w&usqp=CAU",
    "description": "A popular pizza with tomato sauce, mozzarella cheese, ham, and pineapple chunks."
  },
  {
    "name": "Supreme",
    "variants": [
      "Small", "Medium", "Large"
    ],
    price: [
      {
        small: 7,
        medium: 12,
        large: 15,
      },

    ],
    "category": "Meat",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Hor3UbZlulj6suKrzKpvhAJJfKBpEtsU2w&usqp=CAU",
    "description": "A loaded pizza with tomato sauce, mozzarella cheese, pepperoni, sausage, onions, bell peppers, and mushrooms."
  },
  {
    "name": "Barbecue Chicken",
    "variants": [
      "Small", "Medium", "Large"
    ],
    price: [
      {
        small: 8.99,
        medium: 12,
        large: 16,
      },

    ],
    "category": "Chicken",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Hor3UbZlulj6suKrzKpvhAJJfKBpEtsU2w&usqp=CAU",
    "description": "A tasty pizza with barbecue sauce, mozzarella cheese, grilled chicken, and red onions."
  },
  {
    "name": "Veggie",
    "variants": [
      "Small", "Medium", "Large"
    ],
    price: [
      {
        small: 10,
        medium: 15,
        large: 22,
      },

    ],
    "category": "Vegetarian",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Hor3UbZlulj6suKrzKpvhAJJfKBpEtsU2w&usqp=CAU",
    "description": "A veggie-packed pizza with tomato sauce, mozzarella cheese, onions, bell peppers, mushrooms, and olives."
  },
  {
    "name": "Meat Lover's",
    "variants": [
      "Small", "Medium", "Large"
    ],
    price: [
      {
        small: 9.99,
        medium: 14,
        large: 20,
      },

    ],
    "category": "Meat",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Hor3UbZlulj6suKrzKpvhAJJfKBpEtsU2w&usqp=CAU",
    "description": "A meaty pizza with tomato sauce, mozzarella cheese, pepperoni, sausage, bacon, and ham."
  },
  {
    "name": "Mushroom and Truffle",
    "variants": [
      "Small", "Medium", "Large"
    ],
    price: [
      {
        small: 11,
        medium: 15,
        large: 18,
      },

    ],
    "category": "Vegetarian",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Hor3UbZlulj6suKrzKpvhAJJfKBpEtsU2w&usqp=CAU",
    "description": "A rich pizza with tomato sauce, mozzarella cheese, mushrooms, truffle oil, and arugula."
  },
  {
    "name": "BBQ Pork",
    "variants": [
      "Small", "Medium", "Large"
    ],
    price: [
      {
        small: 7,
        medium: 9,
        large: 15,
      },

    ],
    "category": "Meat",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Hor3UbZlulj6suKrzKpvhAJJfKBpEtsU2w&usqp=CAU",
    "description": "A tasty pizza with barbecue sauce, mozzarella cheese, pulled pork, and red onions."
  },
  {
    "name": "Spinach and Feta",
    "variants": [
      "Small", "Medium", "Large"
    ],
    price: [
      {
        small: 3,
        medium: 10,
        large: 12,
      },

    ],
    "category": "Vegetarian",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Hor3UbZlulj6suKrzKpvhAJJfKBpEtsU2w&usqp=CAU",
    "description": "A healthy pizza with tomato sauce, mozzarella cheese, spinach, and crumbled feta cheese."
  },
  {
    "name": "Veggie Delight",
    "variants": [
      "Small", "Medium", "Large"
    ],
    price: [
      {
        small: 9,
        medium: 12,
        large: 15,
      },

    ],
    "category": "Vegetarian",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Hor3UbZlulj6suKrzKpvhAJJfKBpEtsU2w&usqp=CAU",
    "description": "A delicious pizza with tomato sauce, mozzarella cheese, green peppers, red onions, mushrooms, and black olives."
  },
  {
    "name": "Chicken Alfredo",
    "variants": [
      "Small", "Medium", "Large"
    ],
    price: [
      {
        small: 11,
        medium: 14,
        large: 19,
      },

    ],
    "category": "Meat",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Hor3UbZlulj6suKrzKpvhAJJfKBpEtsU2w&usqp=CAU",
    "description": "A creamy pizza with alfredo sauce, mozzarella cheese, grilled chicken, and bacon bits."
  },
  {
    "name": "Four Cheese",
    "variants": [
      "Small", "Medium", "Large"
    ],
    price: [
      {
        small: 10,
        medium: 13,
        large: 16,
      },

    ],
    "category": "Vegetarian",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Hor3UbZlulj6suKrzKpvhAJJfKBpEtsU2w&usqp=CAU",
    "description": "A cheesy pizza with tomato sauce, mozzarella cheese, provolone cheese, fontina cheese, and parmesan cheese."
  },
  {
    "name": "Hawaiian",
    "variants": [
      "Small", "Medium", "Large"
    ],
    price: [
      {
        small: 9,
        medium: 12,
        large: 15,
      },

    ],
    "category": "Meat",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Hor3UbZlulj6suKrzKpvhAJJfKBpEtsU2w&usqp=CAU",
    "description": "A sweet and savory pizza with tomato sauce, mozzarella cheese, ham, and pineapple chunks."
  },
  {
    "name": "Meat Lover's",
    "variants": [
      "Small", "Medium", "Large"
    ],
    price: [
      {
        small: 12,
        medium: 16.,
        large: 20,
      },

    ],
    "category": "Meat",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Hor3UbZlulj6suKrzKpvhAJJfKBpEtsU2w&usqp=CAU",
    "description": "A hearty pizza with tomato sauce, mozzarella cheese, pepperoni, sausage, bacon, and ground beef."
  }
]

export default pizzas;