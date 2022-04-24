const detailContainer = document.querySelector(".results_details");

const queryString = document.location.search;
const parameter = new URLSearchParams(queryString);
const jacketId = parameter.get("jacketId");

const baseUrl = `https://littlaa.one/rainydays/wp-json/wc/store/products/${jacketId}?consumer_key=ck_f439517697d4080770ef3129d79e40541faa4ef&consumer_secret=cs_9f4811b94a92e24c9e6064f6d9fc886425585fdf`;

console.log(baseUrl);

async function callDetails(url) {
  try {
    const response = await fetch(url);
    const details = await response.json();

    detailContainer.innerHTML = "";

    detailContainer.innerHTML += `<h1>${details.name}</h1>
                                <div>
                                <img src="${details.images[0].src}"> 
                                ${details.description}
                                </div>`;
  } catch (error) {
    console.log(error);
    detailContainer.innerHTML = displayError("Something went wrong while calling the API");
  }
}

callDetails(baseUrl);
