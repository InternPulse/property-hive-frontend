function generateRandomString(length) {
    return Math.random().toString(36).substring(2, 2 + length);
  }
  
export const randomString = generateRandomString(10);