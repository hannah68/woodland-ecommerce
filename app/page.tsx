import { fetchProducts } from "@/lib/products";
import Image from "next/image";
import { ProductItem } from "./components/ProductItem";

export default async function Home() {
	const products = await fetchProducts();
	const featuredProducts = products.filter((product) => product.feature);

	return (
		<div>
			<section className="flex h-40rem w-full">
				<div className="w-1/2 bg-gray-200 flex items-center justify-center">
					<div className="w-[40rem] flex flex-col gap-6">
						<h1 className="text-5xl font-bold">
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

			<section className="h-[40vh] flex flex-col mt-20">
				<h2 className="text-2xl text-center mb-16">Best selling furniture</h2>
				<div className="w-[114rem] grid grid-cols-4 grid-rows-1 justify-center items-center gap-[15rem] mx-auto">
					{featuredProducts.map((item, idx) => {
						return <ProductItem key={idx} item={item} />;
					})}
				</div>
			</section>
		</div>
	);
}
