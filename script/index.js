// 读取本地登录信息
const user = getLoginUser();
if (user) {
  document.getElementById("userTip").innerText =
    `您好，${user.username}！已登录`;
  // 显示退出登录按钮
  document.getElementById("logoutBtn").style.display = "inline-block";
}
