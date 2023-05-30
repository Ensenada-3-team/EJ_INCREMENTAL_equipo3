import { Navbar } from "../../components/Navbar/Navbar";
import InterestsSection from "../../components/InterestsSection/InterestsSection";
import FeedRequestsSection from "../../components/FeedRequestsSection/FeedRequestsSection";
import { AllPostsList } from "../../components/AllPostsList/AllPostsList";

function PublicFeed() {
    
      return (
            <>
                  <Navbar />
                  <main className="container-fluid">
                        <div className="row justify-content-around p-0">
                              <InterestsSection />

                              <AllPostsList />
                              <FeedRequestsSection />

                        </div>
                  </main>
            </>
      )
            
}

export default PublicFeed