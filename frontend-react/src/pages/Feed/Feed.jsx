import { Navbar } from "../../components/Navbar/Navbar";
import FeedPostsSection from "../../components/FeedPostsSection/FeedPostsSection";
import InterestSection  from "../../components/InterestsSection/InterestSection";
import FeedRequestsSection from "../../components/FeedRequestsSection/FeedRequestsSection";

function Feed() {
	return (
            <>
                  <Navbar />
                  <main className="container">
                        <div className="row justify-content-around p-0">
                              < InterestSection />
                              < FeedPostsSection />
                              < FeedRequestsSection />
                        </div>
                  </main>
            
            </>
	);
}

export default Feed;
