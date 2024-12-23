import { Blog } from "@/models/Blog";
import BlogCard from "./BlogCard";
import ConnectDB from "@/config/database";
import { convertToPlainObj } from "@/utils/Utils";
import { User } from "@/models/User";
import { getSessionUser } from "@/utils/getSessionUser";

const HomeBlogs = async() => {
    const session = await getSessionUser();
    await ConnectDB();
    await User.findOne({ email: session?.user?.email }).lean();
    const blogs: IBlog[] = await Blog.find({}).sort({ createdAt: -1 }).populate("owner").limit(3).lean().then((blogs) => convertToPlainObj(blogs));  
    return ( 
        <section>
            { blogs.length > 0 ? (
                <>
                    <h1 className="text-3xl font-bold text-center mt-10"> Recently posted </h1>
                    <div className="grid grid-cols-1 gap-5 justify-items-center md:grid-cols-2 xl:grid-cols-3 my-5">
                        {blogs.map((blog: IBlog, index) => (
                            <BlogCard key={index} blog={blog} />
                        ))}
                    </div>

                </>
            ) : (
                <h2 className="text-3xl font-semibold text-center mt-10"> No blog found </h2>
            )}
        </section>
     );
}
 
export default HomeBlogs;