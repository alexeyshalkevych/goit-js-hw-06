"use strict";

import users from "./users.js";

// Получить общую сумму баланса (поле balance) всех пользователей.

const calculateTotalBalance = users =>
  users.reduce((total, user) => total + user.balance, 0);
// твой код

console.log(calculateTotalBalance(users)); // 20916
