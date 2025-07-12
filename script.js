let currentPage = 1;
let itemsPerPage = 10;

function renderEmployees() {
  const container = document.getElementById("employeeList");
  const search = document.getElementById("searchInput").value.toLowerCase();
  const deptFilter = document.getElementById("filterDepartment").value;
  const roleFilter = document.getElementById("filterRole").value;
  const sortKey = document.getElementById("sortBy").value;

  let filtered = employees.filter(emp =>
    (emp.firstName + emp.lastName + emp.email).toLowerCase().includes(search) &&
    (deptFilter === "" || emp.department === deptFilter) &&
    (roleFilter === "" || emp.role === roleFilter)
  );

  filtered.sort((a, b) => a[sortKey].localeCompare(b[sortKey]));

  itemsPerPage = parseInt(document.getElementById("itemsPerPage").value);
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  container.innerHTML = "";
  paginated.forEach(emp => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <p><strong>${emp.firstName} ${emp.lastName}</strong></p>
      <p>${emp.email}</p>
      <p>${emp.department}</p>
      <p>${emp.role}</p>
      <button onclick="editEmployee(${emp.id})">Edit</button>
      <button onclick="deleteEmployee(${emp.id})">Delete</button>
    `;
    container.appendChild(div);
  });

  renderPagination(totalPages);
}

function renderPagination(totalPages) {
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";
  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.innerText = i;
    btn.onclick = () => {
      currentPage = i;
      renderEmployees();
    };
    if (i === currentPage) btn.disabled = true;
    pagination.appendChild(btn);
  }
}

function editEmployee(id) {
  alert("Edit logic can be implemented here.");
}

function deleteEmployee(id) {
  const
