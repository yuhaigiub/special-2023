"use client";
import {experimental_useFormStatus as useFormStatus} from "react-dom";

type Props = {
	className?: string;
} & React.ComponentProps<"button">;

const SubmitButton: React.FC<Props> = ({className, ...props}) => {
	const {pending} = useFormStatus();
	return (
		<button
			{...props}
			type="submit"
			className={`btn_primary px-5 py-1.5 disabled:bg-slate-200 disabled:border-slate-200 disabled:text-slate-500 disabled:cursor-wait ${className}`}
			disabled={pending}
		>
			{pending ? "Sending..." : "Send"}
		</button>
	);
};
export default SubmitButton;
