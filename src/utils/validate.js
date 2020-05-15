export default ({ isAuth, values, errors }) => {
  const rules = {
    email: (value) => {
      if (!value) {
        errors.email = "Введите email";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        errors.email = "Некорректный email";
      }
    },
    password: (value) => {
      if (!value) {
        errors.password = "Введите пароль";
      } else if (!/(?=.*[0-9])/i.test(value)) {
        errors.password = isAuth
          ? "Неверный пароль"
          : "Пароль должен содержать цифры";
      }
    },
  };

  Object.keys(values).forEach((key) => rules[key] && rules[key](values[key]));

  return;
};
