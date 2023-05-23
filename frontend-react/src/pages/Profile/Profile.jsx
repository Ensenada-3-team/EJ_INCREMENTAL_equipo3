import { useLocation } from "react-router-dom";

import { Navbar } from "../../components/Navbar/Navbar";
import InterestsSection  from "../../components/InterestsSection/InterestsSection";
import ProfileSection from "../../components/ProfileSection/ProfileSection";

function Profile() {
      const location = useLocation();
      const params = new URLSearchParams(location.search);
      const friendId = parseInt(params.get("user_id")) || null;

      // window.scrollTo(0, 0);       
      return (
            <>
                  <Navbar />
                  <main className="container">
                        <div className="row justify-content-around p-0">
                              <InterestsSection />
                        
                              <div class="col-md-10 col-lg-10">
                                    <div className="container">
                                          <ProfileSection friendId={friendId}/>
                                    </div>
                              </div>
                        </div>
                  </main>
            </>
      );
}

export default Profile;
