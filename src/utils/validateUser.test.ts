import { describe, it, expect } from "vitest";
import { validateUser } from "./utils";

describe("validateUser", () => {
  it("should return an error if the username contains invalid characters", () => {
    const result = validateUser("123franco ", "123franco");
    expect(result).toEqual({
      username: "El usuario debe ser en minúsculas y sin caracteres especiales",
    });
  });

  it("should return an error if the username is empty", () => {
    const result = validateUser("", "123");
    expect(result).toEqual({
      username: "El usuario debe ser en minúsculas y sin caracteres especiales",
    });
  });

  it("should return an error if the password is incorrect", () => {
    const result = validateUser("franco", "123franco ");
    expect(result).toEqual({ password: "Contraseña incorrecta" });
  });

  it("should return an error if the password is incorrect", () => {
    const result = validateUser("franco", "123Fran");
    expect(result).toEqual({ password: "Contraseña incorrecta" });
  });

  it("should return true if the username and password are valid", () => {
    const result = validateUser("franco", "123Franco");
    expect(result).toBe(true);
  });

  it("should return an error if the username contains uppercase letters", () => {
    const result = validateUser("Franco", "123Franco");
    expect(result).toEqual({
      username: "El usuario debe ser en minúsculas y sin caracteres especiales",
    });
  });

  it("should correctly validate a boundary valid username", () => {
    const result = validateUser("abc", "123Abc");
    expect(result).toBe(true);
  });

  it("should return an error if the username contains spaces", () => {
    const result = validateUser(" franco ", "123Franco");
    expect(result).toEqual({
      username: "El usuario debe ser en minúsculas y sin caracteres especiales",
    });
  });
});
