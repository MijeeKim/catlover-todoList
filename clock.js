const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

const dateContainer = document.querySelector(".js-date"),
  dateTitle = dateContainer.querySelector("h2");

const date = new Date();
function getTime() {
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function getDate() {
  const days = date.getDate();
  const months = date.getMonth() + 1;
  const years = date.getFullYear();
  dateTitle.innerText = `${years}년  ${
    months < 10 ? `0${months}` : months
  }월 ${days}일`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
  getDate();
}

init();