import Navigation from "./src/Navigation";
import { ThreadsProvider } from "./src/Store/ThreadsContext";
import * as NavigationBar from "expo-navigation-bar";

export default function App() {
  NavigationBar.setBackgroundColorAsync("white");
  return (
    <ThreadsProvider>
      <Navigation />
    </ThreadsProvider>
  );
}
