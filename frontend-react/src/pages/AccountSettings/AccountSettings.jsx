import InterestsSection from "../../components/InterestsSection/InterestsSection";
import ConfigContainer from "../../components/SettingsSection/ConfigContainer";
import Layout from "../../components/Layout";

function AccountSettings() {
	return (
		<Layout>
			<InterestsSection />
			<div className="col-lg-10 col-md-10">
				<ConfigContainer />
			</div>
		</Layout>
	);
}

export default AccountSettings;
