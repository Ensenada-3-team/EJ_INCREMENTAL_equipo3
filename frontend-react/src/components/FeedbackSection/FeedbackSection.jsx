import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import FeedbackService from "../../services/feedback.service";
import authService from "../../services/auth.service";

import { Responsive, WidthProvider } from "react-grid-layout";
import FeedbackCard from "./FeedbackCard";
import Swal from "sweetalert2";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const FeedbackSection = ({ friendId }) => {
      const [feedbacks, setFeedbacks] = useState([]);

	const loggedUser = authService.getCurrentUser().user_id;
      const userId = friendId || loggedUser;
	const newFeedback = useSelector((state) => state.feedback);
	

	const breakpoints = { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 };
	const cols = { lg: 5, md: 4, sm: 2, xs: 2, xxs: 1 };
	const rowHeight = 100;
	const margin = [0, 0];

	useEffect(() => {
		async function fetchFeedbacks() {
			try {
				const feedbackService = new FeedbackService();
				const feedbacks = await feedbackService.getFeedbacks(userId);
                        setFeedbacks(feedbacks);
			} catch (error) {
				Swal.fire("Error", error.message, "error");
			}
		}

		fetchFeedbacks();
	}, [userId, newFeedback]);

	return (
		
		<div className="container-fluid">
			<ResponsiveReactGridLayout
				className="layout"
				breakpoints={breakpoints}
				cols={cols}
				rowHeight={rowHeight}
				margin={margin}
				autoSize={true}
			>
				{feedbacks.map((feedbackItem, index) => (
					<div key={index} data-grid={{ x: index, y: 0, w: 1, h: 1 }}>
						<FeedbackCard {...feedbackItem} />
					</div>
				))}
			</ResponsiveReactGridLayout>
		</div>
	
	);
};

export default FeedbackSection;
