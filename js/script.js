// 实时更新时间
function showTime() {
  const now = new Date();
  document.getElementById("time").innerText = now.toLocaleString();
}
setInterval(showTime, 1000);
showTime();

// 点击切换文字
let flag = true;
function changeText() {
  const dom = document.getElementById("tip");
  if (flag) {
    dom.innerText = "JS生效啦!这个页面包含 HTML + CSS + JavaScript";
  } else {
    dom.innerText = "点击下面按钮,试试JS交互效果";
  }
  flag = !flag;
}
