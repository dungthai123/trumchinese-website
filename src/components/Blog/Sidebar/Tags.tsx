"use client";

import Link from "next/link";

const Tags = () => {
	return (
		<>
			<div>
				<h2 className="text-[22px] font-semibold text-black mb-[25px] pb-[10px] border-b border-[#E1E1E1]">
					Tags
				</h2>

				<div>
					<Link
						href="#"
						className="text-15px bg-white inline-block px-[15px] py-[5px] rounded-[4px] mb-[10px] mr-[10px] hover:bg-[#EF4335] hover:text-[#fff] transition delay-100 duration-300 ease-in-out"
					>
						Affiliate
					</Link>

					<Link
						href="#"
						className="text-15px bg-white inline-block px-[15px] py-[5px] rounded-[4px] mb-[10px] mr-[10px] hover:bg-[#EF4335] hover:text-[#fff] transition delay-100 duration-300 ease-in-out"
					>
						Motions Graphics
					</Link>

					<Link
						href="#"
						className="text-15px bg-white inline-block px-[15px] py-[5px] rounded-[4px] mb-[10px] mr-[10px] hover:bg-[#EF4335] hover:text-[#fff] transition delay-100 duration-300 ease-in-out"
					>
						Digital Marketing
					</Link>

					<Link
						href="#"
						className="text-15px bg-white inline-block px-[15px] py-[5px] rounded-[4px] mb-[10px] mr-[10px] hover:bg-[#EF4335] hover:text-[#fff] transition delay-100 duration-300 ease-in-out"
					>
						Product Landing
					</Link>

					<Link
						href="#"
						className="text-15px bg-white inline-block px-[15px] py-[5px] rounded-[4px] mb-[10px] mr-[10px] hover:bg-[#EF4335] hover:text-[#fff] transition delay-100 duration-300 ease-in-out"
					>
						Company Branding
					</Link>
				</div>
			</div>
		</>
	);
};

export default Tags;
