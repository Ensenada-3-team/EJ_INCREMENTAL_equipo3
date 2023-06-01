import authService from "../../services/auth.service";

import Layout from "../../components/Layout";
import InterestsSection from "../../components/InterestsSection/InterestsSection";
import FeedRequestsSection from "../../components/FeedRequestsSection/FeedRequestsSection";
import { AllPostsList } from "../../components/AllPostsList/AllPostsList";

function PublicFeed() {
	const token = authService.getCurrentToken();

	return (
		<Layout>
			{token && <InterestsSection />}
			<AllPostsList />
			{token && <FeedRequestsSection />}
		</Layout>
	);
}

export default PublicFeed;
