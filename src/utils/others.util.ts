export function isEmail(email: string): boolean {
  const emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(email);
}


console.log(isEmail('test@example.com.'));