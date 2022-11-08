import { useState } from "react";
import { Heading, Text, VStack, useToast } from "native-base";

import { api } from "../services/api";

import Logo from "../assets/logo.svg";
import { Button } from "../components/Button";

import { Header } from "../components/Header";
import { Input } from "../components/Input";

export function NewPool() {
  const [title, setTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();

  async function handlePoolCreate() {
    if (!title.trim()) {
      return toast.show({
        title: "Informer um nome para o seu bolão",
        placement: "top",
        bgColor: "red.500",
      });
    }

    try {
      setIsLoading(true);

      await api.post("/pools", { title: title.toUpperCase() });

      toast.show({
        title: "Bolão criado com sucesso!",
        placement: "top",
        bgColor: "green.500",
      });

      setTitle("");
    } catch (error) {
      console.log(error);
      toast.show({
        title: "Não foi possível criar o bolão",
        placement: "top",
        bgColor: "red.500",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <VStack flex={1} bg="gray.900">
      <Header title="Create new pool" />

      <VStack mt={8} mx={5} alignItems="center">
        <Logo />

        <Heading
          fontFamily="heading"
          color="white"
          fontSize="xl"
          my={8}
          textAlign="center"
        >
          Create your own pool{"\n"}and share it with friends!
        </Heading>

        <Input
          mb={2}
          placeholder="What is your pool name?"
          onChangeText={setTitle}
          value={title}
        />

        <Button
          title="CREATE NEW POOL"
          onPress={handlePoolCreate}
          isLoading={isLoading}
        />

        <Text color="gray.200" fontSize="sm" textAlign="center" px={10} mt={4}>
          After creating your pool, you will receive a unique code that you can
          use to invite other people.
        </Text>
      </VStack>
    </VStack>
  );
}
