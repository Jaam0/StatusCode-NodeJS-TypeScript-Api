import bs from "bcryptjs";

const encrypt = async (password: string) => bs.hash(password, 10);

const verified = async (password: string, hash: string) =>
  bs.compare(password, hash);

export { encrypt, verified };
