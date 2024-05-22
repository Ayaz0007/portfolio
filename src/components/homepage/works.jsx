import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						
						<div className="work">
							<img
								src="./twitter.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">WebPro Technologies Pvt Ltd</div>
							<div className="work-subtitle">
								Internship
							</div>
							<div className="work-duration">Aug 2023 - Nov 2023</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
