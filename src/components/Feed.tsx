import prisma from "@/lib/db/prisma";
import Card from "./Card";

const Feed = async () => {
	const messages = await prisma.message.findMany({
		orderBy: {id: "desc"},
		include: {user: true},
	});

	return (
		<div className="space-y-6 py-8 sm:columns-2 sm:gap-6 xl:columns-3">
			{messages.map((message) => (
				<div key={message.id}>
					<Card message={message} />
				</div>
			))}
		</div>
	);
};
export default Feed;
