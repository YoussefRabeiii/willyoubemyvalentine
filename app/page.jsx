"use client";

import Image from "next/image";
import { useState } from "react";

import styles from "./page.module.css";

import { begging, happy, sad } from "@assets";

export default function Home() {
	const [state, setState] = useState(undefined);

	const moveNo = () => {
		const button = document.querySelector("#no");

		button.style.transform = `translateX(${Math.random() * 50 - 50}vw)`;
		button.style.transform += `translateY(${Math.random() * 50 - 50}vh)`;
	};

	return (
		<main className={styles.main}>
			<div className={styles.container}>
				<div className={styles.gif}>
					{state === undefined && (
						<Image priority={true} src={begging} alt="Begging" />
					)}

					{state && <Image src={happy} alt="Happy" />}

					{state === false && <Image src={sad} alt="Sad" />}
				</div>

				<h1 className={styles.title}>Will You Be My Valentine ?</h1>

				<div className={styles.buttons}>
					<h3
						onClick={() => setState(true)}
						className={`${styles.button} ${styles.yes}`}
					>
						Yes
					</h3>
					<h3
						onClick={() => {
							setState(false);
							moveNo();
						}}
						className={`${styles.button} ${styles.no}`}
						id="no"
					>
						No
					</h3>
				</div>

				<div className={styles.answerBox}>
					{state !== undefined && (
						<p className={styles.answer}>
							{state ? "Yaaaaaay I love you too" : "What About Now ?"}
						</p>
					)}
				</div>
			</div>
		</main>
	);
}
