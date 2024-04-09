import React from 'react';
import Card from '../Cards';
import blog from '../../../public/imgs/blog_card_img.png'
import post1 from "../../../public/imgs/post1.jpg";
import post2 from "../../../public/imgs/post2.jpg";
import post3 from "../../../public/imgs/post3.jpg";
import post4 from "../../../public/imgs/post4.jpg";
import post5 from "../../../public/imgs/post5.jpg";
import { Link } from "react-router-dom";

const Blog_Hero: React.FC = () => {
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center flex-wrap px-6">
            <div className='flex flex-col justify-center items-center text-center w-full'>
                <h1 className="text-lgheading max-md:text-mdheading font-bold mt-9 text-white">Discover our Latest Blogs</h1>
                <p className="text-gray-400 text-mdsubheading mb-14 mt-3">Stay updated about the cultures of endangered languages</p>
            </div>

            <div className="">
                <div className="md:grid grid-cols-3 gap-6"> {/* Grid with three columns */}
                    <div className=''>
                        <Card
                            title="Why do Mangaloreans love Pabba's?"
                            subtitle="What began as a humble venture in 1975 evolved into a beloved institution"
                            category="Language"
                            author="Mohammed Rayaan"
                            date="31 March 2024"
                            readTime="7 min read"
                            imageUrl={post1}
                            index={1}
                            altText="Why do Mangaloreans love Pabba's?"
                            linkUrl="https://langlore.substack.com/p/why-do-mangaloreans-love-pabbas?utm_source=profile&utm_medium=reader2"
                        />

                    </div>
                    <div className=''>
                        <Card
                            title="What we saw in our first 'Bhoota Kola'"
                            subtitle="Bhoota Kola is proof of the tenacity of Mangalore's cultural legacy"
                            category="Language"
                            author="Zahanat Khan"
                            date="24 March 2024"
                            readTime="7 min read"
                            imageUrl={post2}
                            index={2}
                            altText="What we saw in our first 'Bhoota Kola'"
                            linkUrl="https://langlore.substack.com/p/what-we-saw-in-our-first-bhoota-kola?utm_source=profile&utm_medium=reader2"
                        />

                    </div>
                    <div className=''>
                        <Card
                            title="How non-English language cinema is altering the Oscars landscape"
                            subtitle="Film history scholar says its recent rise in recognition is attributed to industry demographic shifts"
                            category="Language"
                            author="Unknown"
                            date="17 March 2024"
                            readTime="7 min read"
                            imageUrl={post3}
                            index={3}
                            altText="How non-English language cinema is altering the Oscars landscape"
                            linkUrl="https://langlore.substack.com/p/post-6"
                        />

                    </div>
                </div>
                <div className="md:grid grid-cols-3 gap-6"> {/* Grid with three columns */}
                    <div className=''>

                        <Card
                            title="Digital Preservation: Can Tech Save Indigenous Languages?"
                            subtitle="Taking Indigenous languages online: can they be seen, heard and saved?"
                            category="Language"
                            author="Unknown"
                            date="25 Feb 2024"
                            readTime="7 min read"
                            imageUrl={post4}
                            index={4}
                            altText="Digital Preservation: Can Tech Save Indigenous Languages?"
                            linkUrl="https://langlore.substack.com/p/post-3?utm_source=profile&utm_medium=reader2"
                        />
                    </div>
                    <div className=''>

                        <Card
                            title="Dune's Language Dynamics: The Power of Signs"
                            subtitle="Sign language can be both a hiding place and a tool - for survival, and for empowerment"
                            category="Language"
                            author="Unknown"
                            date="10 March 2024"
                            readTime="7 min read"
                            imageUrl={post5}
                            index={5}
                            altText="Dune's Language Dynamics: The Power of Signs"
                            linkUrl="https://langlore.substack.com/p/dunes-language-dynamics-the-power?utm_source=profile&utm_medium=reader2"
                        />

                    </div>
                    <div className=''>

                        <Card
                            title="How to improve multilingual reading instruction"
                            subtitle=
                            "Learning to read in another language is tough: how Namibian teachers can help kids"

                            category="Language"
                            author="Unknown"
                            date="05 March 2024"
                            readTime="7 min read"
                            imageUrl={blog}
                            index={6}
                            altText="How to improve multilingual reading instruction"

                            linkUrl="/https://langlore.substack.com/p/post-4?utm_source=profile&utm_medium=reader2" />

                    </div>
                </div>
            </div>
            <Link to="https://substack.com/profile/202583695-langlore" target="_blank" rel="noopener noreferrer">
                <button className="custom-button mt-5 md:text-[18px] text-[13px]" data-aos="fade-up">
                    View All
                </button>
            </Link>

        </div>
    );
}

export default Blog_Hero;
