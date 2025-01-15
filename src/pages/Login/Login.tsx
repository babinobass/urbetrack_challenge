import React, { useState } from "react";
import { validateUser } from "../../utils/utils";
import useAuthStore from "../../hooks/useAuthStore";
import { IUserLogin, IError } from "../../types/types";
import { useNavigate, Navigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Text,
  TextField,
  Section,
} from "@radix-ui/themes";
import {
  PersonIcon,
  LockClosedIcon,
  EyeOpenIcon,
  EyeClosedIcon,
} from "@radix-ui/react-icons";

import "./styles.css";

const initialState = {
  user: "",
  password: "",
};

const Login = () => {
  const [username, setUsername] = useState<IUserLogin>(initialState);
  const [seePassword, setSeePassword] = useState<boolean>(false);
  const [error, setError] = useState<IError>();
  const { login, user } = useAuthStore.getState();
  const navigate = useNavigate();

  const handleUser = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setUsername({
      ...username,
      [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement)
        .value,
    });
  };

  const authenticateUser = () => {
    setError({});
    const isValid = validateUser(username.user, username.password);
    if (typeof isValid === "object") {
      setError(isValid);
      return;
    }
    if (typeof isValid === "boolean" && isValid) {
      login(username.user);
      navigate("/home");
    }
  };

  if (user) {
    return <Navigate to="/home" />;
  }
  return (
    <Section aria-label="Pantalla de inicio de sesión" className="login_page">
      <Card className="login_page__card shadow-card" size="4">
        <Heading align="center" as="h1" size="8" trim="start" mb="5">
          login
        </Heading>
        <Box mb="5">
          <Flex mb="1">
            <Text
              mb="1"
              as="label"
              htmlFor="user-field"
              size="2"
              weight="medium"
            >
              usuario
            </Text>
          </Flex>
          <TextField.Root
            size="3"
            className="login_page__input"
            placeholder="usuario"
            id="user-field"
            name="user"
            value={username.user}
            onChange={handleUser}
          >
            <TextField.Slot>
              <PersonIcon height="16" width="16" />
            </TextField.Slot>
          </TextField.Root>
          {error && error?.username && (
            <Text className="font-medium	text-red-500 text-sm">
              {error?.username}
            </Text>
          )}
        </Box>
        <Box mb="5" position="relative">
          <Flex align="baseline" justify="between" mb="1">
            <Text
              mb="1"
              as="label"
              size="2"
              weight="medium"
              htmlFor="password-field"
            >
              contraseña
            </Text>
          </Flex>
          <TextField.Root
            size="3"
            className="login_page__input"
            placeholder="contraseña"
            id="password-field"
            hidden={true}
            type={seePassword ? "text" : "password"}
            name="password"
            value={username.password}
            onChange={handleUser}
          >
            <TextField.Slot>
              <LockClosedIcon height="16" width="16" />
            </TextField.Slot>
            <TextField.Slot>
              {seePassword ? (
                <EyeOpenIcon
                  onClick={() => setSeePassword(!seePassword)}
                  height="16"
                  width="16"
                />
              ) : (
                <EyeClosedIcon
                  onClick={() => setSeePassword(!seePassword)}
                  height="16"
                  width="16"
                />
              )}
            </TextField.Slot>
          </TextField.Root>
          {error && error?.password && (
            <Text className="font-medium	text-red-500 text-sm">
              {error?.password}
            </Text>
          )}
        </Box>
        <Flex mt="6" justify="center" gap="3">
          <Button
            onClick={authenticateUser}
            color="purple"
            className="btn_full"
          >
            login
          </Button>
        </Flex>
      </Card>
    </Section>
  );
};
export default Login;
