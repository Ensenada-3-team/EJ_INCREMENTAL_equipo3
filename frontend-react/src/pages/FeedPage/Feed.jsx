import FeedPostsSection from "../../components/FeedPostsSection/FeedPostsSection";
import { InterestSection } from "../../components/InterestsSection/InterestSection";
import { Navbar } from "../../components/Navbar/Navbar";
import PosibleFriendsSection from "../../components/PosibleFriendsSection/PosibleFriendsSection";

function Feed() {
	return (
            <>
                  <Navbar />
                  <main class="container">
                        <div class="row justify-content-around p-0">
                              < InterestSection />
                              < FeedPostsSection />
                              < PosibleFriendsSection />
                        </div>
                  </main>
            
            </>
	);
}

export default Feed;
