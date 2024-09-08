import Image from "next/image";

export default function Home() {
	return (
		<div>
			<section className="flex h-40rem w-full">
				<div className="w-1/2 bg-gray-200 ">
					<div className="w-40rem flex flex-col gap-6 justify-center my-12 mx-auto pl-12">
						<h1 className="text-5xl">
							The unique furniture for your special house
						</h1>
						<p>Shop Now</p>
						{/* bg-white w-17rem text-black text-2xl self-start rounded-lg cursor-pointer py-4 text-center no-underline */}
						{/* <Link to={PAGE_LINK.SHOP} className="hero-section__text--btn">
							Shop Now
						</Link> */}
					</div>
				</div>
				<div className="w-1/2">
					<Image
						src="/assets/images/chair1.jpg"
						alt="chair"
						width={800}
						height={300}
					/>
				</div>
			</section>

			{/* <FeatureSection featuredItems={featuredItems} /> */}
		</div>
	);
}
