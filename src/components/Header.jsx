import { Link } from "react-router-dom";

import NavBar from "./NavBar";

export default function Header() {
	return (
		<div>
			<div className="navbar flex gap-2 h-20 border-b">
				<div className="basis-2/12 md:basis-3/12">
					<Link to="/" className="btn btn-ghost text-xl hidden md:flex">Course Flow</Link>
					<Link to="/" className="btn btn-ghost text-xl md:hidden">CF</Link>
				</div>
				<div className="flex-1">
					<div className="w-full flex border rounded-full border-neutral-300">
						<input type="text" placeholder="Search for courses" className="w-full rounded-l-full h-12 px-5 bg-base-100 focus:outline-none"/>
						<button className="btn w-16 lg:w-24 rounded-r-full "><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg></button>
					</div>
				</div>
				<div className="dropdown dropdown-end basis-2/12 md:basis-3/12 flex">
					<div className="ml-auto">
						<button tabIndex={0} className="btn btn-square btn-ghost">
							<svg fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
						</button>
						<ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-40">
							<li><Link to="/course" className="h-10 p-3">Course</Link></li>
							<li><Link to="/program" className="h-10 p-3">Program</Link></li>
							<li><Link to="/enrolment" className="h-10 p-3">My Enrolment</Link></li>
							<li><Link to="/login" className="h-10 p-3">Login</Link></li>
						</ul>
					</div>
				</div>
			</div>
			<NavBar />
		</div>
	);
}
