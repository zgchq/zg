// 公共工具脚本，所有页面都可以引入
/**
 * 退出登录
 * 清除本地登录凭证，跳转首页
 */
function logout() {
  localStorage.removeItem("loginUser");
  alert("已退出登录");
  location.href = "index.html";
}

// 获取当前登录用户
function getLoginUser() {
  const userStr = localStorage.getItem("loginUser");
  if (userStr) {
    return JSON.parse(userStr);
  }
  return null;
}
