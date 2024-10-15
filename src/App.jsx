import React from "react";
import DrawingCanvas from "./components/DrawingComponent";

export default function App() {
	return (
		<div className="flex flex-row mt-4">
			<nav className="flex flex-col sticky p-6 gap-6">
				<a
					href=""
					class="inline-flex items-center justify-center w-8 h-8 bg-slate-500 rounded-full text-white"
				>
					NB
				</a>
				<a href="">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-hammer"
					>
						<path d="m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9" />
						<path d="m18 15 4-4" />
						<path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5" />
					</svg>
				</a>
				<a href="">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-image"
					>
						<rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
						<circle cx="9" cy="9" r="2" />
						<path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
					</svg>
				</a>
				<a href="">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-grid-3x3"
					>
						<rect width="18" height="18" x="3" y="3" rx="2" />
						<path d="M3 9h18" />
						<path d="M3 15h18" />
						<path d="M9 3v18" />
						<path d="M15 3v18" />
					</svg>
				</a>
				<a href="">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-folder"
					>
						<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
					</svg>
				</a>
			</nav>

			<section>
				<div class="flex flex-col gap-2">
					<img src="./assets/proj1.webp" alt="" class="w-[350px] h-[350px]" />
					<img src="./assets/proj2.webp" alt="" class="w-[350px] h-[350px]" />
					<img src="./assets/proj3.jpg" alt="" class="w-[350px] h-[350px]" />
				</div>
			</section>

			<section class="ml-6">
				<form>
					<div class="border rounded-md p-2 flex flex-row justify-between">
						<button>Text</button>

						<button class="bg-slate-300 p-4 rounded-md">Sketch</button>
					</div>
					<div class="flex flex-col gap-4 mt-4">
						<legend class="text-lg font-bold">Image Type Output</legend>
						<div class="flex flex-row gap-4">
							<input type="radio" id="floor-plan" />
							<label for="floor-plan">Floor Plan</label>
						</div>
						<div class="flex flex-row gap-4">
							<input type="radio" id="interior" />
							<label for="interior">Interior Pesrpective</label>
						</div>
						<div class="flex flex-row gap-4">
							<input type="radio" id="exterior" />
							<label for="exterior">Exteriot Pesrpective</label>
						</div>
					</div>
					<div class="flex flex-col gap-4 mt-4">
						<legend class="text-lg font-bold">Convergnce Level</legend>
						<div class="flex flex-row gap-4">
							<input type="radio" id="render" />
							<label for="render">Render</label>
						</div>
						<div class="flex flex-row gap-4">
							<input type="radio" id="inspire" />
							<label for="inspire">Inspire </label>
						</div>
					</div>
					<button
						class="p-3 bg-slate-700 mt-4 text-white rounded-md"
						type="submit"
					>
						Generate
					</button>
				</form>
			</section>

			<section>
				<DrawingCanvas />
			</section>
		</div>
	);
}
