import { FC } from "react";
import Hero from "./components/hero/Hero";
import TechStack from "./components/techStack/TechStack";
import Experience from "./components/experience/Experience";
import MyWork from "./components/myWork/MyWork";
import FormSection from "./components/formSection/FormSection";

const Main: FC = () => {
	return (
		<>
			<Hero />
			<TechStack />
			<Experience />
			<MyWork />
			<FormSection />
		</>
	);
};

export default Main;
