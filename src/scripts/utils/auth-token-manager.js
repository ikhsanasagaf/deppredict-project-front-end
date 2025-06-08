const AuthTokenManager = {
  putAccessToken(token) {
    localStorage.setItem('accessToken', token);
  },

  getAccessToken() {
    return localStorage.getItem('accessToken');
  },

  deleteAccessToken() {
    localStorage.removeItem('accessToken');
  },
};

export default AuthTokenManager;