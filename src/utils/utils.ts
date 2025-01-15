export const loginUser = (userId: string) => {
  localStorage.setItem("activeUser", JSON.stringify(userId));
};

export const logoutUser = () => {
  localStorage.removeItem("activeUser");
};

export const validateUser = (username: string, password: string) => {
  const usernameRegex = /^[a-z]+$/; // Solo letras minúsculas permitidas
  if (!usernameRegex.test(username) || username.trim() === "") {
    return {
      username: "El usuario debe ser en minúsculas y sin caracteres especiales",
    };
  }
  const expectedPassword = `123${
    username.charAt(0).toUpperCase() + username.slice(1)
  }`;
  if (password !== expectedPassword) {
    return { password: "Contraseña incorrecta" };
  }
  return true;
};

export const downloadImage = (imageUrl: string, fileName: string) => {
  const link = document.createElement("a");
  link.href = imageUrl;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
