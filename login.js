// login.js
const users = [
  { username: "admin", password: "admin123", role: "admin" },
  { username: "user1", password: "user123", role: "user" },
  { username: "user2", password: "user456", role: "user" },
];

function login(username, password) {
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    alert(`Login successful! Welcome ${user.username} (${user.role})`);
    if (user.role === "admin") {
      window.location.href = "admin.html";
    } else {
      window.location.href = "index.html";
    }
  } else {
    alert("Invalid credentials. Please try again.");
  }
}

