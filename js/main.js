// Variables and constants
// Buttons + -, input and button 'Add to cart'
let inputNumberArt = document.querySelector(".section-information__number");
const btnMinus = document.querySelector(".section-information__minus");
const btnPlus = document.querySelector(".section-information__plus");
const btnAddCart = document.querySelector(".section-information__button");
// Shopping cart
let shoppingCartNumber = document.querySelector(
  ".section-right__purchase--number"
);
let shoppingCartBtn = document.querySelector(".section-right__purchase");
let shoppingCartPoster = document.querySelector(".modal-both-ways-cart");
let shoppingCartPosterEmpty = document.querySelector(
  ".modal-both-ways-cart-empty"
);
let shoppingCartPosterInside = document.querySelector(
  ".modal-both-ways-cart__phrases"
);
let shoppingCartPosterDelete = document.querySelector(
  ".modal-both-ways-cart__delete"
);
let removebutton = document.querySelector(".modal-both-ways-cart__button");

// Hamburguer menu, etc..
const hamburgerMenu = document.querySelector(".section-left__icon-menu");
const menuMobil = document.querySelector(".modal-mobile-menu");
const closeMobil = document.querySelector(".modal-mobile-menu__nav img");
// Mobil carrousel
const previousBtnCarrousel = document.querySelector(
  ".section-carrousel__previous"
);
const nextBtnCarrousel = document.querySelector(".section-carrousel__next");
let imageCarrousel = document.querySelector(".section-carrousel__image");
// Desktop carrousel
const carrouselDesktop = document.querySelector(".modal-desktop-carrousel");
const previousBtnDesktopCarrousel = document.querySelector(
  ".modal-desktop-carrousel-section-carrousel__previous"
);
const nextBtnDesktopCarrousel = document.querySelector(
  ".modal-desktop-carrousel-section-carrousel__next"
);
let imageDesktopCarrousel = document.querySelector(
  ".modal-desktop-carrousel-section-carrousel__image"
);
let closeDesktopCarrousel = document.querySelector(
  ".modal-desktop-carrousel-section-carrousel__close"
);
// thumbnails
const containerThumbnailsDesktop = document.querySelectorAll(
  ".section-carrousel__thumbnails"
);
// Desktop thumbnails
const thumbnail1 = document.getElementById("1");
const thumbnail2 = document.getElementById("2");
const thumbnail3 = document.getElementById("3");
const thumbnail4 = document.getElementById("4");
// thumbnails bis
const containerThumbnails = document.querySelectorAll(
  ".modal-desktop-carrousel-section-carrousel__thumbnails"
);
// Carrousel thumbnails
const thumbnail1bis = document.getElementById("5");
const thumbnail2bis = document.getElementById("6");
const thumbnail3bis = document.getElementById("7");
const thumbnail4bis = document.getElementById("8");

let currentNumber = 0;
let previusNumber = 0;
let containerArrayThumbs = [...containerThumbnails];

let containerArrayThumbsDesktop = [...containerThumbnailsDesktop];

// Event '-'
btnMinus.addEventListener("click", () => {
  currentNumber--;
  if (currentNumber < 0) {
    currentNumber = 0;
  }
  inputNumberArt.value = currentNumber;
});

// Event '+'
btnPlus.addEventListener("click", () => {
  currentNumber++;
  inputNumberArt.value = currentNumber;
});

// Event 'Add to cart'
btnAddCart.addEventListener("click", () => {
  previusNumber += parseInt(currentNumber);
  shoppingCartNumber.style.display = "block";
  shoppingCartNumber.innerHTML = previusNumber;
  shoppingCartPosterInternal();
  deletingCart();
});

// Event 'shopping cart'
shoppingCartBtn.addEventListener("click", () => {
  if (previusNumber > 0) {
    shoppingCartPosterInternal();
  } else {
    console.log("deleted");
    deletedCart();
  }
});

// Event 'hamburger menu'
hamburgerMenu.addEventListener("click", () => {
  document.body.style.overflow = "hidden";
  menuMobil.style.display = "block";
});

// Event 'X'
closeMobil.addEventListener("click", () => {
  document.body.style.overflow = "auto";
  menuMobil.style.display = "none";
});

// Event 'image mobile carrousel'
imageCarrousel.addEventListener("click", () => {
  window.scrollTo(0, 0);
  carrouselDesktop.style.visibility = "visible";
  document.body.style.overflow = "hidden";
  next(imageDesktopCarrousel);
});

let num = 0;

// Event 'previous mobile carrousel'
previousBtnCarrousel.addEventListener("click", () => {
  previous(imageCarrousel);
});

// Event 'next mobile carrousel'
nextBtnCarrousel.addEventListener("click", () => {
  next(imageCarrousel);
});

// Event 'previous desktop carrousel'
previousBtnDesktopCarrousel.addEventListener("click", () => {
  previous(imageDesktopCarrousel);
});

// Event 'next desktop carrousel'
nextBtnDesktopCarrousel.addEventListener("click", () => {
  next(imageDesktopCarrousel);
});

// Event 'X desktop carrousel'
closeDesktopCarrousel.addEventListener("click", () => {
  carrouselDesktop.style.visibility = "hidden";
  document.body.style.overflow = "auto";
});

// Event '1 desktop thumbnail'
thumbnail1.addEventListener("click", () => {
  applyThumbnailPoster(1, imageCarrousel);
  drawBorder(containerArrayThumbsDesktop[0], 0);
});

// Event '2 desktop thumbnail'
thumbnail2.addEventListener("click", () => {
  applyThumbnailPoster(2, imageCarrousel);
  drawBorder(containerArrayThumbsDesktop[0], 1);
});

// Event '3 desktop thumbnail'
thumbnail3.addEventListener("click", () => {
  applyThumbnailPoster(3, imageCarrousel);
  drawBorder(containerArrayThumbsDesktop[0], 2);
});

// Event '4 desktop thumbnail'
thumbnail4.addEventListener("click", () => {
  applyThumbnailPoster(4, imageCarrousel);
  drawBorder(containerArrayThumbsDesktop[0], 3);
});

// Event '1 carrousel thumbnails'
thumbnail1bis.addEventListener("click", () => {
  applyThumbnailPoster(1, imageDesktopCarrousel);
  drawBorder(containerArrayThumbs[0], 0);
});

// Event '2 carrousel thumbnails'
thumbnail2bis.addEventListener("click", () => {
  applyThumbnailPoster(2, imageDesktopCarrousel);
  drawBorder(containerArrayThumbs[0], 1);
});

// Event '3 carrousel thumbnails'
thumbnail3bis.addEventListener("click", () => {
  applyThumbnailPoster(3, imageDesktopCarrousel);
  drawBorder(containerArrayThumbs[0], 2);
});

// Event '4 carrousel thumbnails'
thumbnail4bis.addEventListener("click", () => {
  applyThumbnailPoster(4, imageDesktopCarrousel);
  drawBorder(containerArrayThumbs[0], 3);
});

function shoppingCartPosterInternal() {
  shoppingCartPosterInside.innerHTML = `
  <p>Fall Limited Edition Sneaker</p>
  <p>$125.000 x ${previusNumber} <span>$${125.0 * previusNumber}</span></p>
  `;
  shoppingCartPoster.style.display = "block";
  shoppingCartPoster.classList.toggle("display-block");
}

function delete_border_thumbnails(container) {
  for (let i = 0; i < 4; i++) {
    container.children[i].style.border = "";
  }
}

function previous(container) {
  num--;
  let slide;

  if (num > 0) {
    slide = `../images/image-product-${num}.jpg`;
    container.innerHTML = `<img style="width:100%" src="${slide}" />`;
    // Chage border thumbnail
    drawBorder(containerArrayThumbs[0], num - 1);
  } else {
    num = 5;
  }
}

function next(container) {
  num++;
  let slide;

  if (num < 5) {
    slide = `../images/image-product-${num}.jpg`;
    container.innerHTML = `<img style="width:100%" src="${slide}" />`;
    // Chage border thumbnail
    drawBorder(containerArrayThumbs[0], num - 1);
  } else {
    num = 0;
  }
}

function applyThumbnailPoster(num = 1, container) {
  slide = `../images/image-product-${num}.jpg`;
  container.innerHTML = `<img style="width:100%" src="${slide}" />`;
}

function deletingCart() {
  // click delete of inside poster
  shoppingCartPosterDelete.addEventListener("click", () => {
    shoppingCartPoster.style.display = "none";
    deletedCart();
    console.log("pulsa");
  });
}

function deletedCart() {
  currentNumber = 0;
  previusNumber = 0;
  inputNumberArt.value = currentNumber;
  shoppingCartNumber.innerHTML = previusNumber;
  shoppingCartPosterEmpty.classList.toggle("display-block");
}

function drawBorder(container, index) {
  delete_border_thumbnails(container);
  container.children[index].style.border = "4px solid hsl(26, 100%, 55%)";
}
