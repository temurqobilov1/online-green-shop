import { Form, Input, Radio } from "antd";
import { cookiesInfo } from "../../../generic/cookies";
import type { ChechOutFormType, UserType } from "../../../@types";
import { useReduxSelector } from "../../../hooks/userRedux";
import { useCheckoutMutation } from "../../../hooks/useQuery/useQueryActions";
import { LoadingOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const ProductCheckoutInfo = () => {
  const navigate = useNavigate();
  const radio_style: string =
    "!bordant-radio-wrapper !ant-radio-wrapper-checked !ant-radio-wrapper-in-form-item !border !border-[#46A358] !w-full !h-[40px] !flex !items-center !pl-[10px] !rounded-lg !css-k7429zer !mb-4";

  const { getCookies } = cookiesInfo();
  const { data } = useReduxSelector((state) => state.product_slice);
  const totalPrice = data?.reduce((previousValue, currentValue) => {
    return currentValue.price * Number(currentValue.count) + previousValue;
  }, 16);

  const { mutate, isPending } = useCheckoutMutation();
  const authUser: UserType = getCookies("user");
  const checkout = (e: ChechOutFormType) => {
    mutate({
      shop_list: data,
      billing_address: {
        name: e.first_name,
        surname: e.last_name,
      },
      extra_shop_info: {
        total: totalPrice,
        method: e.payment_method,
      },
    });
    navigate("/profile/track-order")
  };

  return (
    <div>
      <Form
        onFinish={checkout}
        layout="vertical"
        fields={[
          { name: ["first_name"], value: authUser?.name },
          { name: ["last_name"], value: authUser?.surname },
          { name: ["country"], value: authUser?.billing_address.country },
          { name: ["town"], value: authUser?.billing_address.town },
          {
            name: ["street_address"],
            value: authUser?.billing_address.street_address,
          },
          {
            name: ["additional_street_address"],
            value: authUser?.billing_address.additional_street_address,
          },
          { name: ["state"], value: authUser?.billing_address.state },
          { name: ["zip"], value: authUser?.billing_address.zip },
          { name: ["email"], value: authUser?.email },
          { name: ["phone_number"], value: authUser?.phone_number },
        ]}
      >
        <div className="grid grid-cols-2 gap-x-5">
          <Form.Item
            name={"first_name"}
            label={"First name"}
            rules={[{ required: true, message: "Plase enter your name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"last_name"}
            label={"Last name"}
            rules={[{ required: true, message: "Plase enter your surname" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"country"}
            label={"Country / Region"}
            rules={[{ required: true, message: "Plase enter your country " }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"town"}
            label={"Town / City"}
            rules={[{ required: true, message: "Plase enter your town " }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"street_address"}
            label={"Street Adress"}
            rules={[{ required: true, message: "Plase enter your adress " }]}
          >
            <Input />
          </Form.Item>
          <Form.Item className="!mt-[30px]" name={"additional_street_address"}>
            <Input />
          </Form.Item>
          <Form.Item
            name={"state"}
            label={"State"}
            rules={[{ required: true, message: "Plase enter your state " }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"zip"}
            label={"Zip"}
            rules={[{ required: true, message: "Plase enter your zip " }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"email"}
            label={"Email address"}
            rules={[{ required: true, message: "Plase enter your email" }]}
          >
            <Input type="email" />
          </Form.Item>
          <Form.Item
            name={"phone_number"}
            label={"Phone number"}
            rules={[
              { required: true, message: "Plase enter your phome number" },
            ]}
          >
            <Input addonBefore={"+998"} />
          </Form.Item>
        </div>
        <Form.Item
          name="payment_method"
          label="Payment Method"
          rules={[
            {
              required: true,
              message: "Please enter Payment Method",
            },
          ]}
        >
          <Radio.Group className="flex flex-col gap-3">
            <Radio className={`${radio_style}`} value={"other-payment-methods"}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fpayment_collected_methods.png?alt=media&token=c4bfd991-8bd8-4e6b-97dc-83381db193f7"
                alt=""
              />
            </Radio>
            <Radio className={`${radio_style}`} value={"dorect-bank-transfer"}>
              Dorect bank transfer
            </Radio>
            <Radio className={`${radio_style}`} value={"cash-on-delivery"}>
              Cash on delivery
            </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item name="order_notes" label="Order notes (optional)">
          <Input.TextArea
            rows={10}
            placeholder="Your order notes, thoughts, feedback, etc..."
          />
        </Form.Item>
        <button
          disabled={isPending}
          className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white mt-[40px] w-full h-[40px] cursor-pointer"
        >
          {isPending ? <LoadingOutlined /> : "Plase order"}
        </button>
      </Form>
    </div>
  );
};

export default ProductCheckoutInfo;
