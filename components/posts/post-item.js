import Link from "next/link";

function PostItem(props) {
  const { title, image, excerpt, date, slug } = props.post;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <li className="shadow-md bg-gray-800 text-center p-2">
      <Link href={linkPath}>
        <div className="overflow-hidden">
          <img
            src={imagePath}
            alt="image title"
            className="w-full h-64 object-cover"
            layout="responsive"
          />
        </div>
        <div className="p-4">
          <h3 className="mb-2 text-xl">{title}</h3>
          <time className="italic text-gray-300 block mb-2">
            {formattedDate}
          </time>
          <p className="leading-6">{excerpt}</p>
        </div>
      </Link>
    </li>
  );
}

export default PostItem;
