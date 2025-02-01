import { ThemeProvider } from "@/components/theme-provider";
import { Layout } from "./Layout";
import { ProjectList } from "./ProjectList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Contacts } from "./Contacts";
import { Suspense } from "react";
import { ProjectPage } from "./Project";

function App() {
  const intro =
    "Hello, I am Yadu, a recent computer engineering graduate based in Toronto. Here are some projects I have worked on and are currently working on. Feel free to reach out to me about anything you would like to share.";
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Layout>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <p>{intro}</p>
                    <ProjectList />
                    <Contacts />
                  </>
                }
              />
              <Route path="/project/:projectId" element={<ProjectPage />} />
              <Route path="*" element={<h2>Error 404 Not Found</h2>} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
