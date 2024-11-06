import { ImBookmarks } from "react-icons/im";


const Blog = ({ blog, handleReadingTime }) => {
    // console.log(blog);
    const { cover, title, author, author_img, posted_date, reading_time, hashtags } = blog;

    

    return (
        <div>
            <div className="flex">
                <div className="w-full md:w-2/4 lg:w-2/3 p-4 my-10">
                    <img className="w-full h-[400px]" src={cover} alt="" />
                    <h3 className="text-2xl font-bold my-1">{title}</h3>
                    <div className="flex gap-4 items-center justify-between my-5">
                        <div className="flex items-center gap-4">
                            <img className="w-10 h-10 rounded-full" src={author_img} alt="" />
                            <div>
                                <h4 className="font-bold">{author}</h4>
                                <data value="">{posted_date}</data>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <small>{reading_time} </small><span>min read</span>
                            <ImBookmarks onClick={handleReadingTime} className="cursor-pointer"></ImBookmarks>
                        </div>
                    </div>
                    <button className="btn btn-outline btn-success">Mark As Read</button>
                </div>
            </div>
        </div>
    );
};

export default Blog;