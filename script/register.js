const regForm = document.getElementById("regForm");
const msg = document.getElementById("msg");
regForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const pwd = document.getElementById("pwd").value.trim();
  const pwd2 = document.getElementById("pwd2").value.trim();
  let userList = JSON.parse(localStorage.getItem("userList") || "[]");

  if (!username || !pwd || !pwd2) {
    msg.style.color = "red";
    msg.innerText = "所有输入项不能为空";
    return;
  }
  if (pwd !== pwd2) {
    msg.style.color = "red";
    msg.innerText = "两次密码不一致";
    return;
  }
  // 判断用户名是否已存在
  const hasUser = userList.some((item) => item.username === username);
  if (hasUser) {
    msg.style.color = "red";
    msg.innerText = "用户名已被占用";
    return;
  }
  userList.push({ username, password: pwd });
  localStorage.setItem("userList", JSON.stringify(userList));
  msg.style.color = "green";
  msg.innerText = "注册成功，跳转登录页...";
  setTimeout(() => {
    location.href = "login.html";
  }, 800);
});
