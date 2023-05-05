
import { singToken, verifyToken } from "../../utils/jwt.util";

const secret = process.env.JWT_SECRET;
const tokenExpire = process.env.TOKEN_EXPIRE;

describe("JWT functions", () => {
  test("signs a JWT", async () => {
    const id = "64543d9d48953a825dcbf0ee";
    const rol = "Editor";
    const token = await singToken(id, rol);
    const decoded = verifyToken(token);
    expect(decoded.id).toBe(id);
    expect(decoded.rol).toBe(rol);
  });

  test("verifies a JWT", async() => {
    const id = "64543d9d48953a825dcbf0ee";
    const rol = "Editor";
    const token = await singToken(id, rol);
    const verified = verifyToken(token);
    expect(verified.id).toBe(id);
    expect(verified.rol).toBe(rol);
  });
});
