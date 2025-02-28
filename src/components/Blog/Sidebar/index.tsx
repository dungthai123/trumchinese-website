"use client";

import Search from "./Search";
import LatestPost from "./LatestPost";
import Categories from "./Categories";
import Tags from "./Tags";

const Sidebar = () => {
	return (
		<>
			<div className="space-y-[30px] md:space-y-[40px] 2xl:pl-[45px]">
				<Search />

				<LatestPost />

				<Categories />

				<Tags />
			</div>
		</>
	);
};

export default Sidebar;
