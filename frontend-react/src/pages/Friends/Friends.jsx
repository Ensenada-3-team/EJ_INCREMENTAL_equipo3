import { Navbar } from "../../components/Navbar/Navbar";
import InterestsSection from "../../components/InterestsSection/InterestsSection";
import FriendsSection  from "../../components/FriendsSection/FriendsSection";
import FeedRequestsSection from "../../components/FeedRequestsSection/FeedRequestsSection";


function Friends () {
      return (
            <>
                  <Navbar />
                  <main className="container-fluid">
                        <div className="row justify-content-around p-0">
                              < InterestsSection />
                              < FriendsSection />
                              <FeedRequestsSection />
                        </div>
                  </main>
            </>
      );
}

export default Friends;