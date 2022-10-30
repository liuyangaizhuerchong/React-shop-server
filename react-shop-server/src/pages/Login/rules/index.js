const userName = [
  {
    required: true,
    message: "请输入您的用户名",
  },
  {
    pattern: "^[A-Za-z0-9-_]+$",
    message: "输入字符必须是英文、数字、下划线",
  },
  {
    min: 4,
    message: "输入字符不能低于4位",
  },
  {
    max: 12,
    message: "输入字符不能超过12位",
  },
];
const password = [
  {
    required: true,
    message: "请输入您的密码",
  },
];

export { password, userName };
