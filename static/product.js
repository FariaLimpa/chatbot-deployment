const products = [
  {
    id: 1,
    name: "Organic Aloe Vera",
    description: "A soothing plant known for its medicinal properties.",
    price: 12.99,
    image_url:
      "https://hips.hearstapps.com/hmg-prod/images/sansevieria-royalty-free-image-1642793822.jpg",
    category: "Medicinal Plants",
  },
  {
    id: 2,
    name: "Organic Basil",
    description: "A fragrant herb perfect for cooking and garnishing.",
    price: 5.99,
    image_url:
      "https://www.thespruce.com/thmb/JToiCM2g8ssRFBOyIvvB_G5pMDY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/snake-plant-care-overview-1902772-04-d3990a1d0e1d4202a824e929abb12fc1-349b52d646f04f31962707a703b94298.jpeg",
    category: "Herbs",
  },
  {
    id: 3,
    name: "Organic Lavender",
    description: "A calming plant with beautiful purple flowers.",
    price: 8.99,
    image_url:
      "https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill_Small-Snake-Zeylanica_Small_Isabella_Indigo_Variant.jpg?v=1707431717",
    category: "Aromatic Plants",
  },
  {
    id: 4,
    name: "Organic Mint",
    description: "A refreshing herb used in a variety of dishes and drinks.",
    price: 4.99,
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlYfiMaCLfKNxDCWWBNnmc7rq7Z5AhnrT7Ky8gk2rTsFeUbrnlmMhLQyuZSiiJO755Yo4&usqp=CAU",
    category: "Herbs",
  },
  {
    id: 5,
    name: "Organic Rosemary",
    description: "A fragrant herb ideal for cooking and aromatherapy.",
    price: 6.99,
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-JS-7QylYX6TRmqtF62LHn6oG6Vv3CoxTRk-GPr6ru9LhrCGa4_TWnmSYvFlN_8YFOGQ&usqp=CAU",
    category: "Herbs",
  },
  {
    id: 6,
    name: "Organic Thyme",
    description: "A versatile herb with a strong aroma, perfect for cooking.",
    price: 5.49,
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQea4ltzRtixgN7aE6SHCaluDe9UvdmKjUUc-t0KELuU0YL069Dp8yf1EcmT3BCDlWwpzA&usqp=CAU",
    category: "Herbs",
  },
  {
    id: 7,
    name: "Organic Oregano",
    description: "A popular herb used in many cuisines for its bold flavor.",
    price: 5.99,
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQea4ltzRtixgN7aE6SHCaluDe9UvdmKjUUc-t0KELuU0YL069Dp8yf1EcmT3BCDlWwpzA&usqp=CAU",
    category: "Herbs",
  },
  {
    id: 8,
    name: "Organic Chamomile",
    description: "A gentle herb known for its calming effects.",
    price: 7.99,
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROoxMDsq-5mfXCfZn64aBBZC2SDGKVskGrqMlGrBpvnDyQ5NHdoq54lrZ39E85SZ8CP70&usqp=CAU",
    category: "Medicinal Plants",
  },
  {
    id: 9,
    name: "Organic Sage",
    description: "A savory herb often used in cooking and medicinal teas.",
    price: 5.49,
    image_url:
      "https://hortology.co.uk/cdn/shop/files/Ficus-elastica-Melany-Rubber-Plant-14x45cm-Hadleigh-Plant-Pot-White-20x17.5cm_52335388-022e-4750-9c9f-54efbba9ea0a_1200x.jpg?v=1715183642",
    category: "Herbs",
  },
  {
    id: 10,
    name: "Organic Parsley",
    description: "A fresh herb used as a garnish and flavor enhancer.",
    price: 3.99,
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRReyUIidlASZY1ahFUI2KTz_ZNiBIuucza8PTTaEk08p-Ofb2xeBUYfVDxLjrwY0sEasw&usqp=CAU",
    category: "Herbs",
  },
  {
    id: 11,
    name: "Organic Dill",
    description: "A fragrant herb often used in pickling and cooking.",
    price: 4.99,
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5np5ZGKPjMcNZuYSt-vUw5wLfzOJvjc7JXgjvXtUBrFE4K6ZwS-psqHJMNW1nSW2xE3E&usqp=CAU",
    category: "Herbs",
  },
  {
    id: 12,
    name: "Organic Cilantro",
    description: "A fresh herb commonly used in Latin and Asian cuisines.",
    price: 3.99,
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXGEaBSAx6949MCdq5o4CFuqeadWqRFfMnnME-grrQaRrlIYWyAWpvhhqlt27dt9VPyzM&usqp=CAU",
    category: "Herbs",
  },
  {
    id: 13,
    name: "Organic Lemongrass",
    description: "A fragrant grass used in teas, soups, and curries.",
    price: 6.99,
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKv0TWiCS3gGhrFn1lhqkuKOtkuDgIF3pz99OjVBu_sGZ7WwBVEWxG7s3nnbA5Ahtth8c&usqp=CAU",
    category: "Aromatic Plants",
  },
  {
    id: 14,
    name: "Organic Peppermint",
    description: "A cooling herb used in teas and as a flavoring.",
    price: 4.99,
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqlGGTnmJQhRXOjefRuAcagfuAdQTgD9jx8tGs5KksuQ&s",
    category: "Herbs",
  },
  {
    id: 15,
    name: "Organic Stevia",
    description: "A natural sweetener used as a sugar substitute.",
    price: 7.49,
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcqS9jLRRfd4k1FQf22XkP0-1zY4k7h0XarSYTbF8_PZKheZSaQ-DY0udQG4RuSqzWv60&usqp=CAU",
    category: "Herbs",
  },
  {
    id: 16,
    name: "Organic Eucalyptus",
    description: "A medicinal plant known for its aromatic leaves.",
    price: 9.99,
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2581lkw_aJevR8Vz7piBBo00NmChGqWPUJm59kO96sqyR-1x0KvTfdoISucHNcudSrEI&usqp=CAU",
    category: "Medicinal Plants",
  },
  {
    id: 17,
    name: "Organic Lemon Balm",
    description: "A calming herb with a lemony aroma.",
    price: 6.49,
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2EzmvSkkoIxpYg8fhq8B_rGLhI_xwJQ87K5s0nZhMf2m-4NW9sR3sZl34eg87DNsQ9_s&usqp=CAU",
    category: "Medicinal Plants",
  },
  {
    id: 18,
    name: "Organic Marjoram",
    description: "A sweet, aromatic herb often used in Mediterranean cooking.",
    price: 5.99,
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVmikqsFysfDa-OdQX7mGO9ELWXmVXOLlHaTT9DBMxW62TkA3NfRb6lqS0cUme_dXVrSA&usqp=CAU",
    category: "Herbs",
  },
  {
    id: 19,
    name: "Organic Tarragon",
    description: "A unique herb with a slightly licorice flavor.",
    price: 7.99,
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxPU2buZ1fcjzUnXrq1mjh9u4UIBNRIroyfVYOmuFRpDRnLalxub9z8omj1eQB8qtmxU4&usqp=CAU",
    category: "Herbs",
  },
  {
    id: 20,
    name: "Organic Bay Leaves",
    description: "A flavorful leaf often used in soups and stews.",
    price: 3.49,
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2581lkw_aJevR8Vz7piBBo00NmChGqWPUJm59kO96sqyR-1x0KvTfdoISucHNcudSrEI&usqp=CAU",
    category: "Herbs",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("product-container");

  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.className =
      "bg-white rounded-lg shadow-md p-4 flex flex-col items-center";

    productElement.innerHTML = `
      <img src="${product.image_url}" alt="${
      product.name
    }" class="w-48 h-48 object-cover rounded-t-lg">
      <div class="product-details mt-4 text-center">
        <h1 class="text-xl font-bold">${product.name}</h1>
        <p class="mt-2 text-gray-600">${product.description}</p>
        <p class="price text-red-500 text-xl font-semibold mt-4 mb-4">$${product.price.toFixed(
          2
        )}</p>
        <a href="#" class="buy-button bg-green-500 text-white  py-2 px-4 rounded-full mt-4 hover:bg-green-600 ">Buy Now</a>
      </div>
    `;

    container.appendChild(productElement);
  });
});
