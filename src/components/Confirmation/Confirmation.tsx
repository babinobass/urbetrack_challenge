import { FC } from "react";
import { Button, Flex, Heading } from "@radix-ui/themes";
import { IConfirmation } from "../../types/types";

const Confirmation: FC<IConfirmation> = ({ text, yes, no }) => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      gap="2rem"
      className="w-full h-full absolute top-0 left-0 bg-white bg-opacity-90"
    >
      <Heading size="5" align="center" as="h3">
        {text}
      </Heading>
      <Flex className="w-full" align="center" justify="center" gap="2rem">
        <Button size="3" color="purple" onClick={yes}>
          Si
        </Button>
        <Button size="3" color="purple" variant="outline" onClick={no}>
          No
        </Button>
      </Flex>
    </Flex>
  );
};

export default Confirmation;
