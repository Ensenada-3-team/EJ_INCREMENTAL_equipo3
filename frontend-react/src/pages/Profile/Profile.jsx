import { useLocation } from "react-router-dom";

import { Navbar } from "../../components/Navbar/Navbar";
import InterestsSection  from "../../components/InterestsSection/InterestSection";
import ProfileSection from "../../components/ProfileSection/ProfileSection";

function Profile() {
      const location = useLocation();
      const params = new URLSearchParams(location.search);
      const friendId = parseInt(params.get("user_id")) || null;
    
      console.log(friendId);
      return (
            <>
                  <Navbar />
                  <main className="container">
                        <div className="row justify-content-around p-0">
                              <InterestsSection />
                        
                              <div class="col-md-10 col-lg-10">
                                    <div class="container ">
                                          <ProfileSection friendId={friendId}/>
                                    </div>
                              </div>
                        </div>
                  </main>
            </>
      );
}

export default Profile;
