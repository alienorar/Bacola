import React from 'react';

const categories = [
  {
    title: 'Fruit & Vegetables',
    items: [
      'Fresh Vegetables',
      'Herbs & Seasonings',
      'Fresh Fruits',
      'Cuts & Sprouts',
      'Exotic Fruits & Veggies',
      'Packaged Produce',
      'Party Trays'
    ]
  },
  {
    title: 'Breakfast & Dairy',
    items: [
      'Milk & Flavored Milk',
      'Butter and Margarine',
      'Cheese',
      'Egg Substitutes',
      'Honey',
      'Marmalades',
      'Sour Cream and Dips',
      'Yogurt'
    ]
  },
  {
    title: 'Meat & Seafood',
    items: [
      'Breakfast Sausage',
      'Dinner Sausage',
      'Beef',
      'Chicken',
      'Sliced Deli Meat',
      'Shrimp',
      'Wild Caught Fillets',
      'Crab and Shellfish',
      'Farm Raised Fillets'
    ]
  },
  {
    title: 'Beverages',
    items: [
      'Water',
      'Sparkling Water',
      'Soda & Pop',
      'Coffee',
      'Milk & Plant-Based Milk',
      'Tea & Kombucha',
      'Drink Boxes & Pouches',
      'Craft Beer',
      'Wine'
    ]
  },
  {
    title: 'Breads & Bakery',
    items: [
      'Milk & Flavored Milk',
      'Butter and Margarine',
      'Cheese',
      'Egg Substitutes',
      'Honey',
      'Marmalades',
      'Sour Cream and Dips',
      'Yogurt'
    ]
  }
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 p-6 ">
      <div className="bg-blue-600 text-white p-6 text-center ">
        <p>Subscribe to our Newsletter & Get $20 discount for your first order</p>
        <form className="mt-4 flex justify-center">
          <input
            type="email"
            placeholder="Enter your email address"
            className="p-2 mr-2 rounded"
          />
          <button type="submit" className="p-2 bg-blue-800 rounded">
            Subscribe
          </button>
        </form>
        <p className="mt-2">Get E-mail updates about our latest shop and special offers.</p>
      </div>

      <div className="flex flex-wrap justify-around py-6 container">
        <div className="text-center w-full md:w-auto mb-4">
          <p>Everyday fresh products</p>
        </div>
        <div className="text-center w-full md:w-auto mb-4">
          <p>Free delivery for order over $70</p>
        </div>
        <div className="text-center w-full md:w-auto mb-4">
          <p>Daily Mega Discounts</p>
        </div>
        <div className="text-center w-full md:w-auto mb-4">
          <p>Best price on the market</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {categories.map((category) => (
          <div key={category.title}>
            <h3 className="font-semibold">{category.title}</h3>
            <ul className="list-none pl-0">
              {category.items.map((item) => (
                <li key={item} className='text-gray-500'>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
