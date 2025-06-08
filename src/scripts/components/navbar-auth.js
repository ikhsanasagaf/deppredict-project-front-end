const NavbarAuth = {
  createLoginButtonTemplate() {
    return `
      <a href="#/login" class="btn btn-success btn-sm fw-bold" id="loginButton">
        <i class="fa-solid fa-right-to-bracket me-2"></i>Login
      </a>
    `;
  },

  createLogoutButtonTemplate() {
    return `
      <button type="button" class="btn btn-outline-danger btn-sm fw-bold" id="logoutButton">
        <i class="fa-solid fa-right-from-bracket me-2"></i>Logout
      </button>
    `;
  },
};

export default NavbarAuth;