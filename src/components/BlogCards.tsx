import React from 'react';
import Card from './Cards';
import blog from '../../public/imgs/blog_card_img.png'


const BlogCards: React.FC = () => {
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center flex-wrap px-6" data-aos="fade-up">
            <div className='flex flex-col justify-center items-center text-center w-full'>
            <h1 className="text-lgheading max-md:text-mdheading font-bold text-white">Discover our Latest Blogs</h1>
            <p className="text-gray-400 text-mdsubheading mb-20 mt-6">Stay updated about the cultures of endangered languages</p>
            </div>
            
            <div className="">
                <div className="md:grid grid-cols-2 "> 
                    <div className='mt-[-3rem]'>
                        <Card
                            title="The Beauty of Language Diversity"
                            subtitle="Exploring the richness of linguistic diversity around the world"
                            category="Language"
                            author="Jane Smith"
                            date="11 Jan 2022"
                            readTime="7 min read"
                            imageUrl={blog}
                            index={1}

                            altText="Mobile phone displaying LangLore app with text 'Unlocking Languages | Exploring Cultures'"
                        />
                    </div>
                    <div className='' >
                        <Card
                            title="The Beauty of Language Diversity"
                            subtitle="Exploring the richness of linguistic diversity around the world"
                            category="Language"
                            author="Jane Smith"
                            date="11 Jan 2022"
                            readTime="7 min read"
                            imageUrl={blog}
                            index={2}
                            altText="Mobile phone displaying LangLore app with text 'Unlocking Languages | Exploring Cultures'"
                        />
                    </div>
                </div>
                <div className="md:grid grid-cols-2 "> {/* Grid with two columns */}
                <div className='md:mt-[-3rem]' >
                    <Card
                        title="The Beauty of Language Diversity"
                        subtitle="Exploring the richness of linguistic diversity around the world"
                        category="Language"
                        author="Jane Smith"
                        date="11 Jan 2022"
                        readTime="7 min read"
                        imageUrl={blog}
                        index={3}
                        altText="Mobile phone displaying LangLore app with text 'Unlocking Languages | Exploring Cultures'"
                    />
                    </div>
                    <Card
                        title="The Beauty of Language Diversity"
                        subtitle="Exploring the richness of linguistic diversity around the world"
                        category="Language"
                        author="Jane Smith"
                        date="11 Jan 2022"
                        readTime="7 min read"
                        imageUrl={blog}
                        index={4}
                        altText="Mobile phone displaying LangLore app with text 'Unlocking Languages | Exploring Cultures'"
                    />
                </div>
            </div>
           
        </div>
    );
}

export default BlogCards;
