
const categories = [
  { id: 0, name: "All Vehicles" },
  { id: 1, name: "Sedan" },
  { id: 2, name: "SUV" },
  { id: 3, name: "Cabriolet" },
  { id: 4, name: "Pickup" },
  { id: 5, name: "Minivan" },

];

const carsData = [
  {
    categoryId: 1,
    cars: [
      { id: 101, name: "Mercedes Sedan", pricePerDay: 45, type: "Automatic", fuel: "Petrol", airCondition: true, image: "images/sedan.jpg" },
      { id: 102, name: "Toyota Sedan", pricePerDay: 35, type: "Manual", fuel: "Hybrid", airCondition: true, image: "images/Toyota Sedan.jpg" },
      { id: 103, name: "BMW M5", pricePerDay: 55, type: "Automatic", fuel: "Petrol", airCondition: true, image: "images/BMW M5.jpg" }
    ]
  },
  {
    categoryId: 2,
    cars: [
      { id: 201, name: "Porsche SUV", pricePerDay: 50, type: "Automatic", fuel: "Diesel", airCondition: true, image: "images/imagePorsche SUV.jpeg" },
     
    ]
  },
  {
    categoryId: 3,
    cars: [
     
      { id: 302, name: "BMW Cabriolet", pricePerDay: 70, type: "Automatic", fuel: "Petrol", airCondition: true, image: "images/BMW Cabriolet.jpeg" }
    ]
  },
  {
    categoryId: 4,
    cars: [
      { id: 401, name: "Hilux Pickup", pricePerDay: 50, type: "Manual", fuel: "Diesel", airCondition: true, image: "images/Hilux Pickup.jpg" },
      { id: 402, name: "Ford Ranger", pricePerDay: 55, type: "Automatic", fuel: "Diesel", airCondition: true, image: "images/Ford Ranger.jpg" }
    ]
  },
  {
    categoryId: 5,
    cars: [
      { id: 501, name: "Mercedes V-Class", pricePerDay: 80, type: "Automatic", fuel: "Diesel", airCondition: true, image: "images/Mercedes V-Class.jpg" },
      { id: 502, name: "Toyota Sienna", pricePerDay: 60, type: "Automatic", fuel: "Hybrid", airCondition: true, image: "images/Toyota Sienna.jpeg" }
    ]
  },

];


const categoryContainer = document.getElementById("category-buttons");
const carContainer = document.getElementById("car-container");


// Create Category Buttons

categories.forEach(cat => {
  const btn = document.createElement("button");
  btn.textContent = cat.name;
  btn.className = `category-btn border px-5 py-2 rounded-full text-gray-700 hover:text-white hover:bg-fuchsia-700 border-fuchsia-700 transition ${cat.id === 0 ? "bg-fuchsia-700 text-white" : ""}`;
  
  btn.addEventListener("click", () => {
    document.querySelectorAll(".category-btn").forEach(b => b.classList.remove("bg-fuchsia-700", "text-white"));
    btn.classList.add("bg-fuchsia-700", "text-white");
    showCars(cat.id);
  });

  categoryContainer.appendChild(btn);
});


const showCars = (categoryId = 0) => {
  carContainer.innerHTML = "";

  // collect all cars from all categories
  const allCars = carsData.flatMap(cat => cat.cars);

  // filter by category (if categoryId === 0 → show all)
  const filteredCars = categoryId
    ? allCars.filter(car => carsData.find(c => c.categoryId === categoryId)?.cars.includes(car))
    : allCars;

  // render cards
  carContainer.innerHTML = filteredCars.map(car => `
    <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1 p-5">
      <img src="${car.image}" alt="${car.name}" class="w-full h-56 object-cover rounded-xl mb-5">
      <div class="text-center">
        <h3 class="font-bold text-2xl text-gray-800">${car.name}</h3>
        <p class="text-gray-500 mb-1">${car.type} • ${car.fuel}</p>
        <p class="text-fuchsia-700 font-bold text-xl mb-3">$${car.pricePerDay} <span class="text-gray-500 text-sm">/day</span></p>
        <p class="text-gray-600 text-sm mb-3">${car.airCondition ? "❄️ Air Conditioned" : "🚫 No AC"}</p>
        <button class="bg-fuchsia-700 text-white py-2 px-6 rounded-lg hover:bg-fuchsia-800 transition">
          View Details
        </button>
      </div>
    </div>
  `).join("");

  // add view all button
  carContainer.innerHTML += `
    <div class="text-center col-span-full mt-10">
      <button class="text-fuchsia-700 border-2 border-fuchsia-700 py-3 px-8 rounded-full text-lg font-semibold hover:bg-fuchsia-700 hover:text-white transition">
        View All →
      </button>
    </div>
  `;
};

// Default load all cars

showCars();
