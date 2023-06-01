import Layout from "../../components/Layout";
import InterestsSection from "../../components/InterestsSection/InterestsSection";
import FeedPostsSection from "../../components/FeedPostsSection/FeedPostsSection";
import FeedRequestsSection from "../../components/FeedRequestsSection/FeedRequestsSection";

function Feed() {
	return (
		<Layout>
			<InterestsSection />
			<FeedPostsSection />
			<FeedRequestsSection />
		</Layout>
	);
}

export default Feed;
