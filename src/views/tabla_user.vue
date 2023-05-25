<template>
<head>
  <title>Lista de Usuarios</title>
</head>
<body>
  <h1>Lista de Usuarios</h1>
  <table id="user-table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Nombre</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody id="user-table-body">
      <!-- Aquí se añadirán las filas de usuarios -->
    </tbody>
  </table>

</body>
</template>

<script>
document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.getElementById('user-table-body');
  
    fetch('consulta.js') // Cambia "get_users.php" por el nombre de tu archivo PHP
      .then(response => response.json())
      .then(users => {
        users.forEach(user => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.nombre}</td>
            <td>${user.email}</td>
          `;
          tableBody.appendChild(row);
        });
      })
      .catch(error => {
        console.error('Error al obtener los usuarios:', error);
      });
  });
</script>

