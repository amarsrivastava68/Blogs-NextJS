import PostsGrid from '../posts/posts-grid';

function FeaturedPosts(props) {
    return (
        <section className="mx-auto p-2 ">
            <h2 className="text-4xl text-white-800 text-center mb-8">Featured Posts</h2>
            <PostsGrid posts={props.posts} />
        </section>
    );
}

export default FeaturedPosts;
