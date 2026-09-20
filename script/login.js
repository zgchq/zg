const form = document.getElementById("loginForm");
const msg = document.getElementById("msg");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const pwd = document.getElementById("pwd").value.trim();
  const userList = JSON.parse(localStorage.getItem("userList") || "[]");
  const findUser = userList.find(
    (item) => item.username === username && item.password === pwd,
  );
  if (!username || !pwd) {
    msg.style.color = "red";
    msg.innerText = "用户名和密码不能为空";
    return;
  }
  if (findUser) {
    localStorage.setItem("loginUser", JSON.stringify(findUser));
    msg.style.color = "green";
    msg.innerText = "登录成功，正在跳转首页...";
    setTimeout(() => {
      location.href = "index.html";
    }, 800);
  } else {
    msg.style.color = "red";
    msg.innerText = "账号或密码错误";
  }
});
