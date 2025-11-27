import { EyeOutlined, HeartOutlined, MessageOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import type { FC } from "react";
import type { BlogTypeItem } from "../../../@types";

const BlogCard: FC<BlogTypeItem> = (props) => {
  return (
    <Card
      
      className="h-full flex flex-col justify-between  rounded-lg"
      actions={[
        <div className="flex justify-center items-center gap-1" key="views">
          <EyeOutlined />
          <span>{props.views}</span>
        </div>,
        <div className="flex justify-center items-center gap-1" key="comments">
          <MessageOutlined />
          <span>0</span>
        </div>,
        <div className="flex justify-center items-center gap-1" key="likes">
          <HeartOutlined />
          <span>0</span>
        </div>,
      ]}
    >
      <Meta
        title={
          <h2 className="cursor-pointer hover:underline text-lg font-semibold">
            {props.title}
          </h2>
        }
        description={
          <p className="text-gray-700 mt-2 line-clamp-3">
            {props.short_description}
          </p>
        }
      />
    </Card>
  );
};

export default BlogCard;
