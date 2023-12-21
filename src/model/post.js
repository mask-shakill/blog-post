import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title:String,
    date:String,
    content:String,
    url:String,
},{
    timestamps:true,
}

)

const Post = mongoose.models.Post || mongoose.model("Post",postSchema);

export default Post;