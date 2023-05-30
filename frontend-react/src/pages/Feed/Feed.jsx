import { Navbar } from "../../components/Navbar/Navbar";
import InterestsSection  from "../../components/InterestsSection/InterestsSection";
import FeedPostsSection from "../../components/FeedPostsSection/FeedPostsSection";
import FeedRequestsSection from "../../components/FeedRequestsSection/FeedRequestsSection";

function Feed() {
	return (
            <>
                  <Navbar />
                  <main className="container-fluid">
                        <div className="row justify-content-around">
                              < InterestsSection />
                              < FeedPostsSection />
                              < FeedRequestsSection />
                        </div>
                  </main>
            
            </>
	);
}

export default Feed;
