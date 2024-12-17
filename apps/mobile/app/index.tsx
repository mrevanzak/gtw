import { HomeScreen } from "@gtw/app/features/home/screen";
import { Stack } from "expo-router";

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "Home",
        }}
      />
      <HomeScreen />
    </>
  );
}
