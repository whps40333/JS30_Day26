const triggers = document.querySelectorAll(".cool > li");
// const triggers = document.querySelectorAll('.cool > li');
// arrow container
const background = document.querySelector(".dropdownBackground");
// const background = document.querySelector('.dropdownBackground');
// 取得指向框的位置
const backgroundCoords = background.getBoundingClientRect();
// const backgroundCoords = background.getBoundingClientRect();

/**
 * 移動到元素上的觸發事件
 */
function handleEnter() {
  this.classList.add("trigger-enter");
  // this.classList.add('trigger-enter');
  background.classList.add("open");
  // background.classList.add('open');

  // 取得下拉選單內容 DOM
  const dropdown = this.querySelector(".dropdown");
  // const dropdown = this.querySelector('.dropdown');
  // 取得位置資料
  const dropCoords = dropdown.getBoundingClientRect();
  // const dropCoords = dropdown.getBoundingClientRect();

  // 設定指向框大小為下拉選單大小
  background.style.width = `${dropCoords.width}px`;
  background.style.height = `${dropCoords.height}px`;
  // background.style.width = `${dropCoords.width}px`;
  // background.style.height = `${dropCoords.height}px`;
  // 使用 setProperty
  // background.style.setProperty('width', `${dropCoords.width}px`);
  // background.style.setProperty('height', `${dropCoords.height}px`);

  // 移動指向框
  background.style.transform = `translate(${
    dropCoords.left - backgroundCoords.left
  }px,${dropCoords.top - backgroundCoords.top}px)`;
  // background.style.transform = `translate(${dropCoords.left - backgroundCoords.left}px,${dropCoords.top - backgroundCoords.top}px)`;
  // 使用 setProperty
  // background.style.setProperty('transform', `translate(${dropCoords.left - backgroundCoords.left}px,${dropCoords.top - backgroundCoords.top}px)`);
  // 調整內容最後顯示
  this.classList.add("trigger-enter-active");
  // this.classList.add('trigger-enter-active');
}

/**
 * 離開元素的觸發事件
 */
function handleLeave() {
  this.classList.remove("trigger-enter", "trigger-enter-active");
  background.classList.remove("open");
}

// function handleLeave(){
//     this.classList.remove('trigger-enter','trigger-enter-active');
//     background.classList.remove('open');
// }

// 移動到元素上的觸發事件
triggers.forEach((trigger) =>
  trigger.addEventListener("mouseenter", handleEnter)
);
// triggers.forEach(trigger => trigger.addEventListener('mouseEnter',handleEnter))
// 離開元素的觸發事件
triggers.forEach((trigger) =>
  trigger.addEventListener("mouseleave", handleLeave)
);
// triggers.forEach(trigger => trigger.addEventListener('mouseleave',handleLeave))
