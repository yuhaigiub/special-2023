import { formatDate } from "@/lib/format";
import {Prisma} from "@prisma/client";
import Image from "next/image";

type MessageWithUser = Prisma.MessageGetPayload<{include: {user: true}}>;
interface Props {
	message: MessageWithUser;
}

const Card: React.FC<Props> = ({message}) => {
	return (
		<div className="card flex flex-col">
			<div className="flex gap-2 items-center mb-1">
				<Image
					src={message.user?.image || "/profile-pic-placeholder.png"}
					alt="avatar"
					width={27}
					height={27}
					className="rounded-full"
				/>
				<div className="text-md font-bold">{message.user?.name || "Anonymous"}</div>
			</div>
			<div className="text-xs text-slate-400">Sent at: {formatDate(message.createdAt)}</div>
			<div className="w-full h-[1px] bg-slate-200 my-3"/>
			<p>{message.content}</p>
		</div>
	);
};
export default Card;
