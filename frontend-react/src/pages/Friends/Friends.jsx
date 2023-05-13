import { Navbar } from "../../components/Navbar/Navbar";
import { InterestSection } from "../../components/InterestsSection/InterestSection";
import { FriendsSection } from "../../components/FriendsSection/FriendsSection";

function Friends () {
      return (
            <>
                  <Navbar />
                  <main class="container">
                        <div class="row justify-content-around p-0">
                              < InterestSection />
                              < FriendsSection />
                        </div>
                  </main>
            </>
      );
}

export default Friends;