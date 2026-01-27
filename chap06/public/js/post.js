// post.js
// http://localhost:3001/index
// http://localhost:3001/posts
fetch("products")
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
    data.forEach((elem) => {
      const str = `<tr>
          <td>${elem.productId}</td>
          <td>${elem.productName}</td>
          <td>${elem.price}</td>
          <td><img width="120px" src="img/${elem.imageName}"></td>
        </tr>`;
      document.getElementById("list").insertAdjacentHTML("beforeend", str);
    });
  })
  .catch((err) => console.log(err));

// 비동기 => 동기 방식 코드.
// POST, PUT, DELETE
// 등록.
async function addProduct() {
  const data = await fetch("products", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      productId: 4,
      productName: "무선 키보드",
      price: 299000,
      seller: "키보드세상",
      imageName: "keyboard.png",
    }),
  });
  const result = await data.json();
  console.log(result);
}
addProduct();

async function reviewInfo(productId) {
  const data = await fetch("productReviews?productId=" + productId);
  const result = await data.json();
  console.log(result);
}
// reviewInfo(1);
