import React from "react";
import { MainLayouts } from "../components/layouts/main-layouts";
import {
	Paper,
	Tab,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";
import { FollowButton } from "../components/pages/rating/folow-button/follow-button";
import { Tabs } from "../components/pages/components/tabs/tabs";
import { OptionsTabsRating } from "../components/constant/constant";
const Rating = () => {
	const [tabRating, setTabRating] = React.useState(0);
	return (
		<MainLayouts contentFullWidth={false} hideComments>
			<Paper
				sx={{ padding: "20px 20px 0", marginBottom: "20px" }}
				elevation={0}
			>
				<Typography
					variant="h5"
					sx={{ fontWeight: "bold", fontSize: 30, marginBottom: "10px" }}
				>
					Рейтинг сообществ и блогов
				</Typography>
				<Typography sx={{ marginBottom: "5px" }}>
					Десять лучших авторов и комментаторов, а также администраторы первых
					десяти сообществ из рейтинга по итогам месяца бесплатно получают
					Plus-аккаунт на месяц.
				</Typography>
				<Tabs
					setValue={setTabRating}
					value={tabRating}
					options={OptionsTabsRating}
				/>
			</Paper>
			<Paper sx={{ padding: "20px" }} elevation={0}>
				<Table aria-label="simple table">
					<TableHead>
						<TableRow sx={{ width: "100%" }}>
							<TableCell sx={{ fontWeight: 600 }}>Имя пользователя</TableCell>
							<TableCell sx={{ color: "rgb(0,0,0,0.7)" }} align="right">
								Рейтинг
							</TableCell>
							<TableCell align="right" />
						</TableRow>
					</TableHead>
					<TableBody>
						<TableRow>
							<TableCell component="th" scope="row">
								<Typography component="span" sx={{ margin: "15px" }}>
									1
								</Typography>
								Timofey Ragnarok
							</TableCell>
							<TableCell align="right">2313</TableCell>
							<TableCell align="right">
								<FollowButton />
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell component="th" scope="row">
								<Typography component="span" sx={{ margin: "15px" }}>
									2
								</Typography>
								Kia Bekelle
							</TableCell>
							<TableCell align="right">600</TableCell>
							<TableCell align="right">
								<FollowButton />
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</Paper>
		</MainLayouts>
	);
};

export default Rating;
