import Content from "./Components/Content/Content";
import ContentFooter from "./Components/ContentFooter/ContentFooter";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <section className="todoapp">
        <Header />
        <Content />
        <ContentFooter />
      </section>
      <Footer />
    </>
  );
}

export default App;
