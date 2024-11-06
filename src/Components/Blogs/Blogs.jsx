import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    const [readingTime,setNewReadingTime] = useState(0);

    const handleReadingTime = () =>{
        const previousTime = document.getElementById('reading_time');
        const readingTime  =  previousTime.innerText;
        console.log(readingTime);
    }

    useEffect(() => {
        fetch('/public/blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className=" flex">


            <div className=" w-full">
                {
                    blogs.map(blog => <Blog handleReadingTime={handleReadingTime} key={blog.id} blog={blog} ></Blog>)
                }
            </div>

            <div className="w-1/3">
                <h4 className="text-lg font-bold">Spent Time On Reading:{readingTime} </h4>
            </div>



        </div>
    );
};

export default Blogs;