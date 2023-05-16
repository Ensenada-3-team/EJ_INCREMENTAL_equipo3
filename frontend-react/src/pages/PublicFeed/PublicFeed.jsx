import { Navbar } from "../../components/Navbar/Navbar";
import InterestsSection from "../../components/InterestsSection/InterestSection";
import { AllPostsList } from "../../components/AllPostsList/AllPostsList";

function PublicFeed() {
    
      return (
            <>
                  <Navbar />
                  <main className="container">
                        <div className="row justify-content-center p-0">
                              <InterestsSection />

                              <AllPostsList />

                        </div>
                  </main>
            </>
      )
            
}

export default PublicFeed