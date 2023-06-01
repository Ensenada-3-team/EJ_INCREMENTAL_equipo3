import { useState, useEffect } from "react";

import QuerysService from "../../services/querys-services";
import authService from "../../services/auth.service";

import Layout from "../../components/Layout";
import InterestsSection from "../../components/InterestsSection/InterestsSection";
import { QandATable } from "../../components/AdminQandASection/QandATable";
import { ToAdminQueryForm } from "../../components/AdminQandASection/ToAdminQueryForm";

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
		<Layout>
			<InterestsSection />
			<div className="col-md-10 col-lg-10 fit">
				<div className="container-fluid">
					{userRole !== "admin" && (
						<div className="row">
							<ToAdminQueryForm userId={user.user_id} updateData={setData} />
						</div>
					)}
					<div className="row">
						<QandATable data={data} user={user} updateData={setData} />
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default AdminQuerys;
