import type { BlogTypeItem, DataType } from "../../../@types";
import useLoader from "../../../generic/loader";
import useSearchParam from "../../../generic/searchParams";
import { useQueryHendler } from "../../../hooks/useQuery";
import BlogCard from "../blog-card";

function BlogTexts() {
  const { paramValue } = useSearchParam();
  const search: string = paramValue("search") ?? "";
  const { data, isError, isLoading }: DataType<BlogTypeItem[]> = useQueryHendler({
    url: "user/blog",
    pathname: `/blog?search=${search}`,
    params: { search },
  });

  const { blog_card_loader } = useLoader();

  return (
    <div className="my-12 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {isError || isLoading
          ? blog_card_loader()
          : data?.map((value) => (
              <div key={value._id} className="h-full">
                <BlogCard {...value} />
              </div>
            ))}
      </div>
    </div>
  );
}

export default BlogTexts;
