import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CourseHeader from "../../components/Course/CourseHeader";
import CourseAbout from "../../components/Course/CourseAbout";

import { courses } from "../../assets/tempData/courses";
let course = courses[0];

export default function Course() {
	return (
		<div>
			<Header />
			<CourseHeader code="CS 246" name={course["name"]} />
			<div className="px-8 lg:px-32 py-20">
				<div className="md:flex gap-5">
					<div className="w-full md:w-72 mb-10">
						<CourseAbout />
					</div>
					<div className="mb-10 flex-1">
						<div className="border">
							<div className="h-16 bg-base-200 border-b">
								<h2 className="text-xl p-5">Course Description</h2>
							</div>
							<div className="p-5">
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex voluptatibus, natus tempora rem quis laboriosam inventore aut nihil doloribus sed ullam numquam, voluptatem voluptas minus delectus non aliquid debitis blanditiis?</p><br />
								<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex voluptatibus, natus tempora rem quis laboriosam inventore aut nihil doloribus sed ullam numquam, voluptatem voluptas minus delectus non aliquid debitis blanditiis?</p><br />
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, nihil. Cumque autem quas ipsum quasi, doloribus accusamus hic, corrupti deserunt soluta sunt, ex ad ipsam. Distinctio, earum nobis! Ut, explicabo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, earum reprehenderit quis eum molestiae animi corrupti beatae dicta! Labore porro ipsa tempore iure nulla nostrum provident cum dignissimos reprehenderit minima!</p>
							</div>
						</div>
						<div className="collapse collapse-arrow bg-base-200 border mt-2 rounded-none">
							<input type="checkbox" className="peer" /> 
							<h2 className="collapse-title text-xl">
								Course Learning Outcomes
							</h2>
							<div className="collapse-content bg-white border-t"> 
								<div className="my-4">
									<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum rem ea ipsum, accusamus molestiae tempora libero expedita saepe dolorem aliquid quisquam doloremque ab reiciendis? Vitae minus nam natus. Blanditiis, provident.</p><br />
									<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum rem ea ipsum, accusamus molestiae tempora libero expedita saepe dolorem aliquid quisquam doloremque ab reiciendis? Vitae minus nam natus. Blanditiis, provident.</p>
								</div>
							</div>
						</div>
						<div className="collapse collapse-arrow bg-base-200 border mt-2 rounded-none">
							<input type="checkbox" className="peer" /> 
							<h2 className="collapse-title text-xl">
								Assessment Information
							</h2>
							<div className="collapse-content bg-white border-t"> 
								<div className="my-4">
									<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum rem ea ipsum, accusamus molestiae tempora libero expedita saepe dolorem aliquid quisquam doloremque ab reiciendis? Vitae minus nam natus. Blanditiis, provident.</p><br />
									<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum rem ea ipsum, accusamus molestiae tempora libero expedita saepe dolorem aliquid quisquam doloremque ab reiciendis? Vitae minus nam natus. Blanditiis, provident.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
