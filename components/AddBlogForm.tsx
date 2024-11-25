const AddBlogForm = () => {
    return ( 
        <form action="">
            <h1 className="text-3xl font-bold text-center"> Add your own blog </h1>
            <label className="form-control mt-5">
                <div className="label">
                    <span className="label-text font-semibold">Title</span>
                </div>
                <input type="text" placeholder="Title" className="input input-bordered" required />
            </label>
            <label className="form-control mt-5">
                <div className="label">
                    <span className="label-text font-semibold">Content</span>
                </div>
                <textarea className="textarea textarea-bordered h-24" placeholder="Add your story " required></textarea>
            </label>
            <label className="form-control mt-5">
                <div className="label">
                    <span className="label-text font-semibold">Add an image</span>
                </div>
                <input type="file" className="file-input file-input-bordered" required />
            </label>
            <div className="mt-10">
                <button
                    className="btn btn-outline btn-success font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Add Blog
                </button>
            </div>
        </form>
     );
}
 
export default AddBlogForm;