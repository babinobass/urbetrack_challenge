import { FC, useEffect } from "react";
import { Box, Flex, Text } from "@radix-ui/themes";
import { loginUser } from "../../utils/utils";
import { useState } from "react";
import useAuthStore from "../../hooks/useAuthStore";

interface toast {
  text: string;
}

//Con tiempo se podria extender el componente para que reciba otras respuestas
export const Toast: FC<toast> = ({ text }) => {
  return (
    <Box
      className="fixed bottom-8 right-8 min-w-52 max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-neutral-800 dark:border-neutral-700"
      role="alert"
      tabIndex={-1}
      aria-labelledby={text}
    >
      <Flex className="flex p-4">
        <Box className="shrink-0">
          <svg
            className="shrink-0 size-4 text-teal-500 mt-0.5"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
          </svg>
        </Box>
        <div className="ms-3">
          <Text className="text-sm text-gray-700 dark:text-neutral-400">
            {text}
          </Text>
        </div>
      </Flex>
    </Box>
  );
};

export const LoginSuccessful = () => {
  const userActive = localStorage.getItem("activeUser");
  const { user } = useAuthStore.getState();

  const [loginSuccessful, setLoginSuccessful] = useState<string | null>(
    userActive
  );

  useEffect(() => {
    if (!loginSuccessful && user) {
      setTimeout(() => {
        loginUser(user);
        setLoginSuccessful(user);
      }, 5000);
    }
  }, []);
  return (
    <>{!loginSuccessful ? <Toast text="Inicio de sesión exitoso" /> : null}</>
  );
};
