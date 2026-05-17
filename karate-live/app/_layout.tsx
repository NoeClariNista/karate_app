/*import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Inicio" }} />
      <Stack.Screen name="admin" options={{ title: "Admin" }} />
      <Stack.Screen name="evento" options={{ title: "Eventos" }} />
      <Stack.Screen name="scanner" options={{ title: "Scanner" }} />
    </Stack>
  );
}

/*import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="admin" />
      <Stack.Screen name="evento" />
      <Stack.Screen name="scanner" />
    </Stack>
  );
}*/

import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Inicio" }} />
      <Stack.Screen name="event" options={{ title: "Eventos" }} />
      <Stack.Screen name="admin" options={{ title: "Admin" }} />
      <Stack.Screen name="scanner" options={{ title: "Scanner" }} />
    </Stack>
  );
}