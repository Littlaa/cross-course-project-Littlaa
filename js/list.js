const baseUrl =
  "https://littlaa.one/rainydays/wp-json/wc/store/products?consumer_key=ck_f439517697d4080770ef3129d79e40541faa4ef&consumer_secret=cs_9f4811b94a92e24c9e6064f6d9fc886425585fdf";

const resultsContainer = document.querySelector(".results");

async function getProducts(url) {
  try {
    const response = await fetch(url);
    const products = await response.json();
    console.log(products);

    resultsContainer.innerHTML = "";

    for (let i = 0; i < products.length; i++) {
      resultsContainer.innerHTML += `<a href="specific.html?jacketId=${products[i].id}">
                                    <img src="${products[i].images[0].src}">
                                    <h2>${products[i].name}</h2>
                                    <p>${products[i].prices.price}$</p>
                                    </a>`;
    }
  } catch (error) {
    console.log(error);
  }
}

getProducts(baseUrl);
