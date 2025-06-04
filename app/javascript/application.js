// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
document.addEventListener("DOMContentLoaded", function () {
  const list = document.getElementById("category-list");
  const subItems = Array.from(list.querySelectorAll(".subcategory-item"));
  const subcategoryItems = document.querySelectorAll(".subcategory-item");
  let scrollTimeout;
  let currentIndex = 0;

  const CENTER_OFFSET = list.clientHeight / 2;

  function getClosestItemToCenter() {
    const listRect = list.getBoundingClientRect();
    const centerY = listRect.top + CENTER_OFFSET;

    let closest = null;
    let closestDistance = Infinity;

    subItems.forEach(item => {
      const itemRect = item.getBoundingClientRect();
      const itemCenter = itemRect.top + itemRect.height / 2;
      const distance = Math.abs(centerY - itemCenter);
      if (distance < closestDistance) {
        closest = item;
        closestDistance = distance;
      }
    });

    return closest;
  }

  function highlightCenterItem() {
    subItems.forEach(item => item.classList.remove("center-highlight"));
    const centerItem = getClosestItemToCenter();
    if (centerItem) {
      centerItem.classList.add("center-highlight");
    }
  }

  function snapToCenterSmoothly() {
    const item = getClosestItemToCenter();
    if (item) {
      const listRect = list.getBoundingClientRect();
      const itemRect = item.getBoundingClientRect();
      const itemCenter = itemRect.top + itemRect.height / 2;
      const listCenter = listRect.top + CENTER_OFFSET;
      const offset = itemCenter - listCenter;

      // Only scroll if misaligned enough
      if (Math.abs(offset) > 1) {
        list.scrollBy({ top: offset, behavior: 'smooth' });
      }
    }
  }

  list.addEventListener("scroll", () => {
    highlightCenterItem();

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      snapToCenterSmoothly();
    }, 30); // You can lower to 80ms for even snappier feel
  });

  highlightCenterItem();

  const button = document.getElementById("select_index");
  const slider = document.getElementById("control-container");
  const select_page = document.getElementById("select_page");
  const rangeInput = document.getElementById("rangeInput");

  button.addEventListener("click", function () {
    select_page.style.display = "none";
    slider.style.display = "flex";
  });

  slider.addEventListener("mouseup", function () {
    slider.style.display = "none";
    select_page.style.display = "flex";
    showSlide(rangeInput.value - 1);
    document.getElementById("select_index").innerText = rangeInput.value;
  });

  const slides = document.querySelector('.slides');
  const totalSlides = document.querySelectorAll('.slide').length;

  document.getElementById('next').addEventListener("click", () => {
    if (currentIndex < totalSlides - 1) showSlide(currentIndex + 1);
    document.getElementById("select_index").innerText = currentIndex + 1;
    rangeInput.value = currentIndex + 1;
  });

  document.getElementById('prev').addEventListener("click", () => {
    if (currentIndex > 0) {showSlide(currentIndex - 1);
    document.getElementById("select_index").innerText = currentIndex + 1;}
    rangeInput.value = currentIndex + 1;

  });

  subcategoryItems.forEach(item => {
    item.addEventListener("click", (e) => {

      if (item.classList.contains("center-highlight")) {
        const index = parseInt(item.dataset.slideIndex, 10);
        showSlide(index);
        document.getElementById("select_index").innerText = index + 1;
        rangeInput.value = currentIndex + 1;
        e.preventDefault();
        window.open(`/category/${item.dataset.name}`, '_blank');
      } else {
        console.log("Subcategory not active");
      }
    });
  });

  function showSlide(index) {
    slides.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;
  }
});