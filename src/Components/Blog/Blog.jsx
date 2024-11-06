const Blog = ({ blog }) => {
    console.log(blog);
    const { cover, title, author, author_img, posted_date, reading_time, hashtags } = blog;
    return (
        <div>
            <div>
                <div className="w-2/3 my-10">
                    <img className="w-full h-[400px]" src={cover} alt="" />
                    <div className="flex gap-4 items-center justify-between my-5">
                        <div className="flex items-center gap-4">
                        <img className="w-10 h-10 rounded-full" src={author_img} alt="" />
                        <div>
                            <h4 className="font-bold">{author}</h4>
                            <data value="">{posted_date}</data>
                        </div>
                        </div>
                        <div className="flex gap-2">
                        <small>{reading_time} <span>min read</span></small>
                        <button><img className="w-4 h-6" src="https://static-00.iconduck.com/assets.00/bookmark-icon-304x512-0bkjdorn.png" alt="" />
                        </button>
                    </div>
                    </div>

                </div>
                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default Blog;