class UserModel {
    static login(username, password) {
      // Implement your login logic here
      return new Promise((resolve, reject) => {
        // Simulating async login request
        setTimeout(() => {
          if (username === 'admin' && password === 'admin') {
            resolve({ username: 'admin' });
          } else {
            reject(new Error('Invalid credentials'));
          }
        }, 1000);
      });
    }
  }
  
  export default UserModel;
  