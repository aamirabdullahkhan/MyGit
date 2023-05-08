// Initialize expenses array from localStorage
let expenses = JSON.parse(localStorage.getItem("expenses")) ;

// Select DOM elements
const amountInput = document.getElementById("amount");
const descriptionInput = document.getElementById("description");
const categoryInput = document.getElementById("category");
const addExpenseBtn = document.getElementById("addExpenseBtn");
const expenseList = document.getElementById("expenseList");

// Function to render expense list
const renderExpenseList = () => {
  expenseList.innerHTML = "";
  expenses.forEach((expense, index) => {
    const tr = document.createElement("tr");

    // Amount cell
    const amountTd = document.createElement("td");
    amountTd.innerText = expense.amount;
    tr.appendChild(amountTd);

    // Description cell
    const descriptionTd = document.createElement("td");
    descriptionTd.innerText = expense.description;
    tr.appendChild(descriptionTd);

    // Category cell
    const categoryTd = document.createElement("td");
    categoryTd.innerText = expense.category;
    tr.appendChild(categoryTd);

    // Edit button cell
    const editTd = document.createElement("td");
    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.classList.add("btn", "btn-primary", "mr-2");
    editBtn.addEventListener("click", () => {
      editExpense(index);
    });
    editTd.appendChild(editBtn);
    tr.appendChild(editTd);

    // Delete button cell
    const deleteTd = document.createElement("td");
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("btn", "btn-danger");
    deleteBtn.addEventListener("click", () => {
      deleteExpense(index);
    });
    deleteTd.appendChild(deleteBtn);
    tr.appendChild(deleteTd);

    expenseList.appendChild(tr);
  });
};

// Function to add expense
const addExpense = () => {
  const amount = amountInput.value;
  const description = descriptionInput.value;
  const category = categoryInput.value;

  if (!amount || !description || !category) {
    alert("Please enter all fields");
    return;
  }

  const expense = { amount, description, category };
  expenses.push(expense);
  localStorage.setItem("expenses", JSON.stringify(expenses));
  renderExpenseList();
  amountInput.value = "";
  descriptionInput.value = "";
  categoryInput.value = "";
};

// Function to edit expense
const editExpense = (index) => {
  const expense = expenses[index];
  amountInput.value = expense.amount;
  descriptionInput.value = expense.description;
  categoryInput.value = expense.category;
  expenses.splice(index, 1);
  localStorage.setItem("expenses", JSON.stringify(expenses));
  renderExpenseList();
};

// Function to delete expense
const deleteExpense = (index) => {
  expenses.splice(index, 1);
  localStorage.setItem("expenses", JSON.stringify(expenses));
  renderExpenseList();
};

// Event listener for add expense button
addExpenseBtn.addEventListener("click", addExpense);

// Render expense list on page load
renderExpenseList();
