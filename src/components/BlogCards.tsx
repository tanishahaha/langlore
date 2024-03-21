import React from 'react';
import Card from './Cards';

const BlogCards: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <h1 className="md:text-4xl text-2xl font-bold text-white p-1 mt-8">Discover our Latest Blogs</h1>
            <p className="text-gray-400 mb-20 mt-6">Stay updated about the cultures of endangered languages</p>
            <div className="">
                <div className="md:grid grid-cols-2 "> {/* Grid with two columns */}
                    <div className='mt-[-3rem]'>
                        <Card

                            title="The Beauty of Language Diversity"
                            subtitle="Exploring the richness of linguistic diversity around the world"
                            category="Language"
                            author="Jane Smith"
                            date="11 Jan 2022"
                            readTime="7 min read"
                            imageUrl="../../public/imgs/blog_card_img.png"
                            altText="Mobile phone displaying LangLore app with text 'Unlocking Languages | Exploring Cultures'"
                        />
                    </div>
                    <div className=''>
                        <Card
                            title="The Beauty of Language Diversity"
                            subtitle="Exploring the richness of linguistic diversity around the world"
                            category="Language"
                            author="Jane Smith"
                            date="11 Jan 2022"
                            readTime="7 min read"
                            imageUrl="../../public/imgs/blog_card_img.png"
                            altText="Mobile phone displaying LangLore app with text 'Unlocking Languages | Exploring Cultures'"
                        />
                    </div>
                </div>
                <div className="md:grid grid-cols-2 "> {/* Grid with two columns */}
                <div className='md:mt-[-3rem]'>
                    <Card
                        title="The Beauty of Language Diversity"
                        subtitle="Exploring the richness of linguistic diversity around the world"
                        category="Language"
                        author="Jane Smith"
                        date="11 Jan 2022"
                        readTime="7 min read"
                        imageUrl="../../public/imgs/blog_card_img.png"
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
                        imageUrl="../../public/imgs/blog_card_img.png"
                        altText="Mobile phone displaying LangLore app with text 'Unlocking Languages | Exploring Cultures'"
                    />
                </div>
            </div>
           
        </div>
    );
}

export default BlogCards;
