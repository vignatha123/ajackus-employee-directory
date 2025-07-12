<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Employee Dashboard</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>Employee Directory</h1>
    <input type="text" id="searchInput" placeholder="Search by name or email">
    <button onclick="location.href='form.html'">Add Employee</button>
  </header>

  <div class="filters">
    <select id="filterDepartment">
      <option value="">All Departments</option>
    </select>
    <select id="filterRole">
      <option value="">All Roles</option>
    </select>
    <select id="sortBy">
      <option value="firstName">Sort by First Name</option>
      <option value="department">Sort by Department</option>
    </select>
    <select id="itemsPerPage">
      <option value="10">10 per page</option>
      <option value="25">25 per page</option>
      <option value="50">50 per page</option>
    </select>
  </div>

  <div id="employeeList" class="grid"></div>
  <div id="pagination"></div>

  <script src="data.js"></script>
  <script src="script.js"></script>
</body>
</html>
