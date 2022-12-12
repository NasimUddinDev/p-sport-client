import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const about = () => {
    const peoples = [
        {
            id: 1,
            image: "https://source.unsplash.com/100x100/?portrait?0",
            name: "Leroy Jenkins",
            title: "Visual Designer",
        },
        {
            id: 2,
            image: "https://source.unsplash.com/100x100/?portrait?1",
            name: "Leroy Jenkins",
            title: "Visual Designer",
        },
        {
            id: 3,
            image: "https://source.unsplash.com/100x100/?portrait?2",
            name: "Leroy Jenkins",
            title: "Visual Designer",
        },
        {
            id: 4,
            image: "https://source.unsplash.com/100x100/?portrait?3",
            name: "Leroy Jenkins",
            title: "Visual Designer",
        },
        {
            id: 5,
            image: "https://source.unsplash.com/100x100/?portrait?4",
            name: "Leroy Jenkins",
            title: "Visual Designer",
        },
        {
            id: 6,
            image: "https://source.unsplash.com/100x100/?portrait?5",
            name: "Leroy Jenkins",
            title: "Visual Designer",
        },
    ];

    return (
        <div data-theme="mytheme" className="w-full">
            <div className="max-w-[1440px] mx-auto">
                <Header />
                <section>
                    <div className="bg-gradient-to-br from-secondary to-[#a91ec5]">
                        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32">
                            <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-white">
                                Wellcome to P-Sport
                                <br />
                                About Page
                            </h1>
                            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-white opacity-70">
                                P-Sport was co-founded by friends MD Nasim and
                                MD Anik in 2022. The single blog from which the
                                network formed was launched by MD Nasim as
                                Athletics Nation in November 2021, and covered
                                only the Oakland Athletics baseball team.[3]
                                Athletics Nation quickly became Blogads's second
                                largest website, following Daily Kos, where
                                Moulitsas served as an editor.[5] Following the
                                blog network's creation, six additional writers
                                were hired to join Bleszinski in creating
                                content, and Daily Kos' platform was implemented
                                to encourage online community growth.
                            </p>
                            <div className="flex flex-wrap justify-center">
                                <button
                                    type="button"
                                    className="px-8 py-3 m-2 text-lg font-semibold rounded text-white"
                                >
                                    Get started
                                </button>
                                <button
                                    type="button"
                                    className="px-8 py-3 m-2 text-lg border rounded text-white"
                                >
                                    Learn more
                                </button>
                            </div>
                        </div>
                    </div>
                    <img
                        src="https://i.ibb.co/tLW1S9p/p-sports.jpg"
                        alt=""
                        className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40"
                    />
                </section>

                <section className="py-6">
                    <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
                        <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
                            Development team
                        </p>
                        <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl text-secondary">
                            The talented people behind the scenes
                        </h1>
                        <div className="grid grid-cols-1 lg:grid-cols-3 justify-center mt-8 gap-x-6">
                            {peoples.map((people) => (
                                <div
                                    key={people.id}
                                    className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-full xl:w-64 bg-gradient-to-r from-secondary to-[#a91ec5] bg-opacity-60 text-white"
                                >
                                    <img
                                        alt=""
                                        className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full"
                                        src={people.image}
                                    />
                                    <div className="flex-1 my-4">
                                        <p className="text-xl font-semibold leading-snug">
                                            {people.name}
                                        </p>
                                        <p>{people.title}</p>
                                    </div>
                                    <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                                        <a
                                            rel="noopener noreferrer"
                                            href="#"
                                            title="Email"
                                            className="text-xl"
                                        >
                                            <FaEnvelope />
                                        </a>
                                        <a
                                            rel="noopener noreferrer"
                                            href="#"
                                            title="Twitter"
                                            className="text-xl"
                                        >
                                            <FaTwitter />
                                        </a>
                                        <a
                                            rel="noopener noreferrer"
                                            href="#"
                                            title="LinkedIn"
                                            className="text-xl"
                                        >
                                            <FaLinkedin />
                                        </a>
                                        <a
                                            rel="noopener noreferrer"
                                            href="#"
                                            title="GitHub"
                                            className="text-xl"
                                        >
                                            <FaGithub />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </div>
    );
};

export default about;
