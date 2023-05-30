import { useState, useEffect } from "react";

import QuerysService from "../../services/querys-services";
import authService from "../../services/auth.service";

import { Navbar } from "../../components/Navbar/Navbar";
import InterestsSection from "../../components/InterestsSection/InterestsSection";
import { QandATable } from "../../components/AdminQandASection/QandATable";
import { AdminQueryForm } from "../../components/AdminQandASection/AdminQueryForm";

function AdminQuerys() {
	const [data, setData] = useState([]);
	const user = authService.getCurrentUser();
	const userRole = user.role;

	useEffect(() => {
		async function fecthData() {
			try {
				const querysService = new QuerysService();
				if (userRole === "admin") {
					const allQuerys = await querysService.getQuerys();
					setData(allQuerys);
				} else {
					const userQuerys = await querysService.getQuerys(user.user_id);
					setData(userQuerys);
				}
			} catch (error) {
				console.error(error);
			}
		}

		fecthData();
	}, [user.user_id, userRole]);

	return (
		<>
			<Navbar />
			<main className="container">
				<div className="row justify-content-around p-0">
					<InterestsSection />
					<div className="col-md-10 col-lg-10 fit">
						<div className="container-fluid">
							{userRole !== "admin" && (
								<div className="row">
									<AdminQueryForm
										userId={user.user_id}
										updateData={setData}
									/>
								</div>
							)}
							<div className="row">
								<QandATable data={data} user={user} updateData={setData} />
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}

export default AdminQuerys;
