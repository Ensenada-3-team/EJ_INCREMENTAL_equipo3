import Layout from "../../components/Layout";
import InterestsSection from "../../components/InterestsSection/InterestsSection";
import FriendsSection from "../../components/FriendsSection/FriendsSection";
import FeedRequestsSection from "../../components/FeedRequestsSection/FeedRequestsSection";

function Friends() {
	return (
		<Layout>
			<InterestsSection />
			<FriendsSection />
			<FeedRequestsSection />
		</Layout>
	);
}

export default Friends;
