"use client";
import {motion} from "framer-motion";
import {useState} from "react";
import Confetti from "react-confetti";

const PASSWORD = "iloveupacpac";

const SlidesPage = () => {
	const [value, setValue] = useState("");
	const [isError, setIsError] = useState(false);
	const [slide, setSlide] = useState(1);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (value === PASSWORD) setSlide(1);
		else setIsError(true);
	};

	return (
		<>
			{slide === 0 && (
				<div className="bg-[#232323] min-h-screen flex justify-center items-center flex-col">
					<motion.h1
						className="text-5xl font-extrabold text-white mb-1"
						initial={{opacity: 0, scale: 0}}
						animate={{opacity: 1, scale: 1}}
					>
						Hi There!
					</motion.h1>
					<motion.form
						onSubmit={handleSubmit}
						initial={{y: -50, opacity: 0}}
						animate={{y: 0, opacity: 1}}
						transition={{delay: 0.5}}
						className="flex flex-col gap-2"
					>
						<motion.p className="text-white/50 text-xl">Please Enter password to Enter:</motion.p>
						<motion.input
							className="w-full sm:w-[500px] h-10 p-3 rounded-[8px] focus:outline-2 focus:outline-pink-500 focus:outline"
							type="password"
							autoComplete="off"
							value={value}
							onChange={(e) => setValue(e.target.value)}
						/>
						{isError && (
							<p className="text-red-500 font-bold">
								Incorrect password! Are you my <span className="pink_gradient">smol</span> or an
								impostor?
							</p>
						)}
						<motion.button
							className="bg-pink-500 text-white px-6 py-2 self-center rounded-full mt-4"
							whileHover={{scale: 1.2, transition: {}}}
							whileTap={{scale: 1.1, transition: {stiffness: 300, damping: 200}}}
							type="submit"
						>
							See what&apos;s inside
						</motion.button>
					</motion.form>
				</div>
			)}
			{slide === 1 && (
				<div className="pink_gradient_bg min-h-screen flex flex-col items-center justify-center text-white relative">
					<Confetti width={window.innerWidth} height={window.innerHeight} />
					<motion.h1
						className="text-5xl text-white font-extrabold mb-4"
						initial={{opacity: 0, y: -50}}
						animate={{opacity: 1, y: 0}}
					>
						Congratulation!!!
					</motion.h1>
					<motion.p
						initial={{opacity: 0, scale: 0}}
						animate={{opacity: 1, scale: 1}}
						transition={{delay: 0.3}}
					>
						You have entered the correct password :&gt;&gt;
					</motion.p>
					<motion.button
						className="bg-pink-500 text-white px-6 py-2 self-center rounded-full mt-4 hover:bg-pink-500/70"
						whileHover={{scale: 1.15}}
						whileTap={{scale: 1.1}}
            transition={{ stiffness: 300, damping: 50 }}
            onClick={() => {
              window.location.href="https://www.messenger.com"
            }}
					>
						Go back to messenger with cute Meow Meow!!!
					</motion.button>
				</div>
			)}
		</>
	);
};
export default SlidesPage;
