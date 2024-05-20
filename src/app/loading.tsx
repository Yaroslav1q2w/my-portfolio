"use client";
import { BallTriangle } from "react-loader-spinner";
import "./globals.scss";

export default function Loading() {
	return (
		<div className="loadingContainer">
			<BallTriangle
				height={100}
				width={100}
				radius={5}
				color="#333"
				ariaLabel="ball-triangle-loading"
				wrapperStyle={{}}
				wrapperClass=""
				visible={true}
			/>
		</div>
	);
}
