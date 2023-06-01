import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";
function Layout({ children }) {
      
      return(
            <>
                  <Navbar />
                  <main className="container-fluid">
                        <div className="row justify-content-around p-0 ">
                             { children }
                        </div>
                  </main>
                  <Footer />
            </>

      )
}

export default Layout