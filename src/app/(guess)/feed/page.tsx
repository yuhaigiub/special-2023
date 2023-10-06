import Image from "next/image";
import Link from "next/link";
import Feed from "../../../components/Feed";

export default function FeedPage() {
	return (
		<div className="flex flex-col items-center">
			<h1 className="head_text text-center mb-2">
				{/* A <span className="pink_gradient">SPECIAL</span> DAY IS COMING!!! */}
				TEST TEST TEST TEST TEST TEST TEST
			</h1>
			<p className="desc text-center mb-8">
				{/* Send you wishes to your beloved friend to celebrate her birthday */}
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, quisquam!
			</p>
			<p className="text-center text-slate-500 pb-3">
				{/* Incoming Messages is only accepted until 00:00 October 25th, 2023 */}
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, consequatur.
			</p>
			<Link href="/add-message" className="btn_primary mb-12 px-8 py-3">
				Write A Message
			</Link>
			<Feed />
		</div>
	);
}
