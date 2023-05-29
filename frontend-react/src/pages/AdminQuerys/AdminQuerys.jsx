import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Navbar } from "../../components/Navbar/Navbar";
import { AdminQueryForm } from "../../components/AdminQuery/AdminQueryForm";
import InterestsSection from "../../components/InterestsSection/InterestsSection";
import { QandATable } from "../../components/AdminQuery/QandATable";
import QuerysService from "../../services/querys-services";
import authService from "../../services/auth.service";

function AdminQuerys() {
	const [data, setData] = useState([]);
	const userRole = useSelector((state) => state.userRole);
	const user = authService.getCurrentUser();

	useEffect(() => {
		async function fecthDAta() {
			try {
				const querysService = new QuerysService();
				if (userRole === 'admin'){
					const allQuerys = await querysService.getQuerys();
					console.log(data)
					setData(allQuerys);
					

				} else {
					const userQuerys = await querysService.getQuerys(user.user_id);
					setData(userQuerys);
				}
				
				
			} catch (error) {
				console.error(error);
			}
		}

		fecthDAta();
	}, [user.user_id]);

	return (
		<>
			<Navbar />
			<main className="container">
				<div className="row justify-content-around p-0">
					<InterestsSection />
					<div className="col-md-10 col-lg-10 fit">
						<div className="container-fluid">
							{userRole !== 'admin' && (<div className="row">
								<AdminQueryForm userRole={userRole} user={user}/>
							</div>)}
							<div className="row">
								<QandATable data={data} />
							</div>
						</div>
					</div>
					{/* {userRole !== 'admin' && (<FeedRequestsSection />)} */}
				</div>
			</main>
		</>
	);
}

export default AdminQuerys;
