import { Fontisto } from "@expo/vector-icons";
import { Center, Text, Icon } from "native-base";

import { useAuth } from "../hooks/useAuth";
import { Button } from "../components/Button";

import Logo from "../assets/logo.svg";

export function SignIn() {
  const { singIn } = useAuth();

  return (
    <Center flex={1} bgColor="gray.900" p={7}>
      <Logo width={212} height={40} />

      <Button
        type="SECONDARY"
        title="SIGN IN WITH GOOGLE"
        leftIcon={<Icon as={Fontisto} name="google" color="white" size="md" />}
        mt={12}
        onPress={singIn}
      />

      <Text color="white" textAlign="center" mt={6}>
        We do not use any information other than{"\n"}
        your e-mail address to create your account
      </Text>
    </Center>
  );
}
