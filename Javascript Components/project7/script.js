const img = document.querySelector(".photo");
const title = document.querySelector(".item-title");
const price = document.querySelector(".price");
const text = document.querySelector(".desc");
const card = document.querySelector(".section-center");
const menu = [
  {
    id: 1,
    title: "chocolate cake",
    catagory: "breakfast",
    price: 15.99,
    img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ullam cupiditate omnis incidunt, rem eius",
  },
  {
    id: 2,
    title: "Buttermilk Pancakes",
    catagory: "lunch",
    price: 17.99,
    img: "https://images.unsplash.com/photo-1528207776546-365bb710ee93",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ullam cupiditate omnis incidunt, rem eius.",
  },
  {
    id: 3,
    title: "peporeni pizza",
    catagory: "fastfood",
    price: 19.99,
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ex deserunt minima, laudantium reprehenderit ipsam.",
  },
  {
    id: 4,
    title: "Yogurt Parfait",
    catagory: "lunch",
    price: 14.99,
    img: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ex deserunt minima, laudantium reprehenderit ipsam.",
  },
  {
    id: 5,
    title: "Ice Cream Sundae",
    catagory: "breakfast",
    price: 18.99,
    img: "https://images.unsplash.com/photo-1551024506-0bccd828d307",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ex deserunt minima, laudantium reprehenderit ipsam.",
  },
  {
    id: 6,
    title: "frenze fries",
    catagory: "fastfood",
    price: 16.99,
    img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ex deserunt minima, laudantium reprehenderit ipsam.",
  },
  {
    id: 7,
    title: "cheseburger",
    catagory: "fastfood",
    price: 17.99,
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ex deserunt minima, laudantium reprehenderit ipsam.",
  },
  {
    id: 8,
    title: "Red Velvet Cupcakes",
    catagory: "breakfast",
    price: 19.99,
    img: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ex deserunt minima, laudantium reprehenderit ipsam.",
  },
  {
    id: 9,
    title: "Glazed Donuts",
    catagory: "breakfast",
    price: 20.99,
    img: "https://images.unsplash.com/photo-1551024601-bec78aea704b",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ex deserunt minima, laudantium reprehenderit ipsam.",
  },
  {
    id: 10,
    title: "Apple Pie",
    catagory: "breakfast",
    price: 25.99,
    img: "https://images.unsplash.com/photo-1562007908-859b4ba9a1a2",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ex deserunt minima, laudantium reprehenderit ipsam.",
  },
  {
    id: 11,
    title: "Avocado Toast",
    catagory: "breakfast",
    price: 12.99,
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ex deserunt minima, laudantium reprehenderit ipsam.",
  },
  {
    id: 12,
    title: "Caesar Salad",
    catagory: "lunch",
    price: 14.99,
    img: "https://images.unsplash.com/photo-1546793665-c74683f339c1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ex deserunt minima, laudantium reprehenderit ipsam.",
  },
  {
    id: 13,
    title: "Chicken Wings",
    catagory: "fastfood",
    price: 18.99,
    img: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ex deserunt minima, laudantium reprehenderit ipsam.",
  },
  {
    id: 14,
    title: "Beef Steak",
    catagory: "dinner",
    price: 29.99,
    img: "https://images.unsplash.com/photo-1600891964092-4316c288032e",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ex deserunt minima, laudantium reprehenderit ipsam.",
  },
  {
    id: 15,
    title: "Vegetable Stir Fry",
    catagory: "dinner",
    price: 16.99,
    img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ex deserunt minima, laudantium reprehenderit ipsam.",
  },
  {
    id: 16,
    title: "Sushi Platter",
    catagory: "dinner",
    price: 24.99,
    img: "https://images.unsplash.com/photo-1611143669185-af224c5e3252",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ex deserunt minima, laudantium reprehenderit ipsam.",
  },
  {
    id: 17,
    title: "Mushroom Risotto",
    catagory: "lunch",
    price: 19.99,
    img: "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ex deserunt minima, laudantium reprehenderit ipsam.",
  },
  {
    id: 18,
    title: "Chocolate Milkshake",
    catagory: "drinks",
    price: 8.99,
    img: "https://c7.alamy.com/comp/BTRYM3/chocolate-and-strawberry-milkshakes-BTRYM3.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ex deserunt minima, laudantium reprehenderit ipsam.",
  },
  {
    id: 19,
    title: "Iced Coffee",
    catagory: "drinks",
    price: 5.99,
    img: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ex deserunt minima, laudantium reprehenderit ipsam.",
  },
  {
    id: 20,
    title: "Fruit Smoothie",
    catagory: "drinks",
    price: 7.99,
    img: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ex deserunt minima, laudantium reprehenderit ipsam.",
  }
];

window.addEventListener("DOMContentLoaded", () => {
  displayMenuItems(menu);
});
function displayMenuItems(menuItems) {
  let displaymenu = menuItems
    .map((item) => {
      return ` <article class="menu-item">
      <div class="image-wraper"><img src="${item.img}" alt="${item.title}" class="photo"></div>
      <div class="item-info">
      <header>
        <h4 class="item-title">${item.title}</h4>
        <h4 class="price">$${item.price}</h4>
      </header>
      <p class="desc">${item.desc}</p>
      </div>
      <button class="order">Order Now</button>
      </article>   `;
    })
    .join("");
  //  console.log(displaymenu)
  card.innerHTML = displaymenu;
}
//filter variable
const filterBtns = document.querySelectorAll(".btns"); // Corrected selector
const itemsWraper = document.querySelector(".section-center"); // Corrected selector
filterBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const catagory = e.currentTarget.dataset.id;
    const menuCatagory = menu.filter((menuItem) => { // Corrected variable name
      if (menuItem.catagory === catagory) {
        return menuItem;
      }
    });
    if (catagory === "all") {
      displayMenuItems(menu);
    } else {
      displayMenuItems(menuCatagory);
    }
  });
});