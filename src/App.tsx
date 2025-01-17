import { ThemeProvider } from "@/components/theme-provider";
import { Layout } from "./Layout";
import { Projects } from "./Projects";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MdxRenderer } from "./mdx/MdxRenderer";
import { Contacts } from "./Contacts";

function App() {
  const intro =
    "Hello, I am Yadu, a recent computer engineering graduate based in Toronto. Here are some projects I have worked on and are currently working on. Feel free to reach out to me about anything you would like to share.";
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Layout>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <p>{intro}</p>
                  <Projects />
                  <Contacts />
                </>
              }
            />
            <Route path="/project/:id" element={<MdxRenderer />} />
            <Route path="*" element={<h2>Error 404 Not Found</h2>} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
