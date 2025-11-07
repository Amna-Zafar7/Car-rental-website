const cars = [
  {
    name: "Mercedes",
    type: "Sedan",
    price: 25,
    image: "images/benz.jpg",
    features: ["Automatic", "PB 95", "Air Conditioner"]
  },
  {
    name: "Mercedes",
    type: "Sport",
    price: 50,
    image: "images/benz.jpg",
    features: ["Automatic", "PB 95", "Air Conditioner"]
  },
  {
    name: "Mercedes",
    type: "Sedan",
    price: 45,
    image: "images/benz.jpg",
    features: ["Automatic", "PB 95", "Air Conditioner"]
  },
  {
    name: "Porsche",
    type: "SUV",
    price: 40,
    image: "images/Porsche.jpeg",
    features: ["Automatic", "PB 95", "Air Conditioner"]
  },
  {
    name: "Toyota",
    type: "Sedan",
    price: 35,
    image: "images/toyo.jpeg",
    features: ["Automatic", "PB 95", "Air Conditioner"]
  },
  {
    name: "Porsche",
    type: "SUV",
    price: 50,
    image: "images/Porsche.jpeg",
    features: ["Automatic", "PB 95", "Air Conditioner"]
  }
];
const container = document.getElementById("car-container");

cars.forEach(car => {
  container.innerHTML += `
    <div class="bg-white shadow-md rounded-xl p-5 text-center hover:shadow-lg transition">
      <img src="${car.image}" alt="${car.name}" class="w-full h-40 object-contain mb-4">
      <h3 class="font-semibold text-lg">${car.name}</h3>
      <p class="text-gray-500">${car.type}</p>
      <p class="text-purple-600 font-bold mt-2">$${car.price} <span class="text-gray-500 text-sm">/ day</span></p>
      <div class="flex justify-center gap-3 text-sm text-gray-500 mt-2">
        ${car.features.map(f => `<span>${f}</span>`).join(" • ")}
      </div>
      <button class="mt-4 bg-fuchsia-700 text-white py-2 px-5 rounded-lg hover:bg-purple-700">View Details</button>
    </div>
  `;
});
