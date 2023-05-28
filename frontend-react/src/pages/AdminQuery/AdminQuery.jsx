import { useSelector } from "react-redux";
import { Navbar } from "../../components/Navbar/Navbar";
import { AdminQueryForm } from "../../components/AdminQueryForm/AdminQueryForm";
import InterestsSection from "../../components/InterestsSection/InterestsSection";
import FeedRequestsSection from "../../components/FeedRequestsSection/FeedRequestsSection";

function AdminQuery() {
      const userRole = useSelector((state) => state.userRole);
      
	return (
		<>
			<Navbar />
			<main className="container">
				<div className="row justify-content-around p-0">
					<InterestsSection />
					<AdminQueryForm />
					<FeedRequestsSection />
				</div>
			</main>
		</>
	);
}

export default AdminQuery;
