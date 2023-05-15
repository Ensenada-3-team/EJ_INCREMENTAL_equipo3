import { Navbar } from "../../components/Navbar/Navbar";
import InterestsSection  from "../../components/InterestsSection/InterestSection";
import ProfileSection from "../../components/ProfileSection/ProfileSection";

function Profile() {
      return (
            <>
                  <Navbar />
                  <main className="container">
                        <div className="row justify-content-around p-0">
                              <InterestsSection />
                        
                              <div class="col-md-10 col-lg-10">
                                    <div class="container ">
                                          <ProfileSection />
                                    </div>
                              </div>
                        </div>
                  </main>
            </>
      );
}

export default Profile;
