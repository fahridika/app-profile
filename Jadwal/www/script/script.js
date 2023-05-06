// Image hero akan berubah ketika di klik
let imagehero = document.querySelector("#imagehero");
imagehero.addEventListener("click", function (event) {
  imagehero.setAttribute("src", "assets/image/slide2.jpg");
});

let imageGaleri1 = document.querySelector("#imageGaleri1");
imageGaleri1.addEventListener("click", function (event) {
  let caption1 = document.querySelector("#caption1");
  caption1.innerHTML =
    "<figcaption>Aduh senangnya bisa liat beatrixku winstreak</figcaption>";
});

let imageGaleri2 = document.querySelector("#imageGaleri2");
imageGaleri2.addEventListener("click", function (event) {
  let caption2 = document.querySelector("#caption2");
  caption2.innerHTML =
    "<figcaption>Kubisa pamer beatrix ketemen mwehehehe</figcaption>";
});

let imageGaleri3 = document.querySelector("#imageGaleri3");
imageGaleri3.addEventListener("click", function (event) {
  let caption3 = document.querySelector("#caption3");
  caption3.innerHTML =
    "<figcaption>Btw pesanan sangat fast 3 hari selesai, dah glory aja wwkwkwk</figcaption>";
});

let imageGaleri4 = document.querySelector("#imageGaleri4");
imageGaleri4.addEventListener("click", function (event) {
  let caption4 = document.querySelector("#caption4");
  caption4.innerHTML =
    "<figcaption>Jadi ganteng banget akunku kaya aku heheh</figcaption>";
});

let imageGaleri5 = document.querySelector("#imageGaleri5");
imageGaleri5.addEventListener("click", function (event) {
  let caption5 = document.querySelector("#caption5");
  caption5.innerHTML =
    "<figcaption>Makasih sudah bikin Kaguraku MVP</figcaption>";
});

let imageGaleri6 = document.querySelector("#imageGaleri6");
imageGaleri6.addEventListener("click", function (event) {
  let caption6 = document.querySelector("#caption6");
  caption6.innerHTML =
    "<figcaption>WRku naik heheh dari 52% jadi 61,4%</figcaption>";
});

let imageGaleri7 = document.querySelector("#imageGaleri7");
imageGaleri7.addEventListener("click", function (event) {
  let caption7 = document.querySelector("#caption7");
  caption7.innerHTML = "<figcaption>Jazakallah khoir</figcaption>";
});

let imageGaleri8 = document.querySelector("#imageGaleri8");
imageGaleri8.addEventListener("click", function (event) {
  let caption8 = document.querySelector("#caption8");
  caption8.innerHTML =
    "<figcaption>Sudah selesai min, terimakasih Jawhead dan rafaelaku dah wangy.</figcaption>";
});
