import type { FC } from "react";
import { useParams } from "react-router-dom";
import { useQueryHendler } from "../../hooks/useQuery";
import { BreadcrumbItem } from "../../generic/bredcrumb";
import Description from "../../components/flower_info/description";
import Swiper from "../../components/flower_info/swiper";
import Info from "../../components/flower_info/info";

const FlowerINfo: FC = () => {
  const { category, flower_id } = useParams();

  const { data, isError, isLoading } = useQueryHendler({
    pathname: "flower-info",
    url: `flower/category/${category}/${flower_id}`,
  });

  console.log(data);

  return (
    <section className="maw-w-[90%] mx-auto">
      <BreadcrumbItem pathTitle="Shop" />
      <div className="grid grid-cols-2 gap-2 mt-[30px] mb-[40px] max-lg:grid-cols-1">
        <Swiper data={data} isError={isError} isLoading={isLoading} />
        <Info data={data} isError={isError} isLoading={isLoading} />
      </div>
      <Description data={data} isError={isError} isLoading={isLoading} />
    </section>
  );
};

export default FlowerINfo;
