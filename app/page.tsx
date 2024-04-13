import Image from 'next/image';
import buildGass from '@/public/build.jpg';
export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center  p-24">
            <h1 className="text-center font-nunito text-7xl font-extralight ">
                ZIMMER-GLASS
            </h1>
            <p className="max-w-[800px] text-gray-400 text-center mt-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                architecto maxime repudiandae necessitatibus atque vel corporis
                illo doloremque inventore nesciunt omnis tempore quis
                consequatur itaque temporibus eum quia, cum explicabo.
            </p>
            <section>
                <Image
                    className="grayscale-[40%] rounded-sm mt-8"
                    src={buildGass}
                    alt="Picture of the author"
                    width={500}
                    height={500}
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                />
            </section>
        </main>
    );
}
