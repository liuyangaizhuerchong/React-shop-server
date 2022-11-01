const user_name = [
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
const pass_word = [
  {
    required: true,
    message: "请输入您的密码",
  },
  {
    max: 12,
    message: "输入字符不能超过12位",
  },
  {
    min: 4,
    message: "输入字符不能低于4位",
  },
  ({ getFieldValue }) => ({
    validator(_, value) {
      // console.log(value, getFieldValue);
      if (!value || getFieldValue("password") === value) {
        return Promise.resolve();
      }
      return Promise.reject(new Error("密码错误，请重新输入！"));
    },
  }),
];

export { pass_word, user_name };
