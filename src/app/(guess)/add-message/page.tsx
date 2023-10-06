import SubmitButton from "@/components/SubmitButton";
import prisma from "@/lib/db/prisma";
import {getServerSession} from "next-auth";
import {redirect} from "next/navigation";
import {nextAuthOptions} from "../../api/auth/[...nextauth]/route";
import {revalidatePath} from "next/cache";

const addMessage = async (formData: FormData) => {
	"use server";
	const session = await getServerSession(nextAuthOptions);
	if (!session) return redirect("/api/auth/signin?callbackUrl=/add-message");

	const message = formData.get("message")?.toString();

	if (!message) throw new Error("Cannot add Message");

	await prisma.message.create({
		data: {content: message, userId: session.user.id},
	});
	revalidatePath("/");
	return redirect("/");
};

const AddMessage = async () => {
	const session = await getServerSession(nextAuthOptions);
	if (!session) return redirect("/api/auth/signin?callbackUrl=/add-message");

	return (
		<div className="self-start w-full">
			<h1 className="head_text mb-6">Add Message</h1>
			<form action={addMessage} className="flex flex-col gap-2 w-full glassmorphism">
				<label>
					<span className="desc">Message:</span>
					<textarea
						name="message"
						placeholder="Write your message here..."
						required
						className="form_textarea"
					/>
				</label>
				<SubmitButton className="self-end" />
			</form>
		</div>
	);
};
export default AddMessage;
