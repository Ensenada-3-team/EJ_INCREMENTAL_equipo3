import { Navbar } from "../../components/Navbar/Navbar";
import InterestsSection from "../../components/InterestsSection/InterestsSection";
import ConfigContainer from "../../components/SettingsSection/ConfigContainer";

function AccountSettings() {
	return (
		<>
			<Navbar />
			<main className="container">
				<div className="row justify-content-between">
					<InterestsSection />
					<div className="col-lg-10 col-md-10">
						<ConfigContainer />
					</div>
				</div>
			</main>
		</>
	);
}

export default AccountSettings;
