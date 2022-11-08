import { Text } from "native-base";

export function EmptyRakingList() {
  return (
    <Text color="white" fontSize="sm" textAlign="center">
      The ranking for this pool has not been formed yet, {"\n"}
      wait for the results.
    </Text>
  );
}
