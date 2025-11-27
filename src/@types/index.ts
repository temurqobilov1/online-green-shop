import type { ReactNode } from "react";

export interface PropTypes {
  children: ReactNode;
}

export interface LoginType {
  email: string;
  password: string;
}

export interface RegisterType {
  email: string;
  name: string;
  password: string;
  second_password: string;
  surname: string;
}

export interface ShowcaseCarouselType {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  buttonText: string;
  big_img_url: string;
  small_img_url: string;
}

export interface DataType<T> {
  isLoading: boolean;
  isError: boolean;
  data?: T;
}

export interface CategoryType {
  count: number;
  created_at: string;
  created_by: string;
  route_path: string;
  title: string;
  _id: string;
}

export interface DiscountType {
  id: number;
  title: string;
  discoount_up_to: number;
  poster_image_url: string;
}

export interface ProductType {
  category: string;
  comments: string[];
  created_at: string;
  created_by: string;
  description: string;
  detailed_images: string[];
  discount: boolean;
  discount_price: string;
  main_image: string;
  price: number;
  rate: number;
  short_description: string;
  sold_times: number;
  tags: string[];
  title: string;
  views: number;
  _id: string;
  count?: number;
  userPrice?: number;
}

export interface PlantsType {
  id: number;
  title: string;
  path: string;
}

export interface BlogTypeItem {
  _id: string;
  _v: number;
  views: number;
  title: string;
  short_description: string;
  reaction_length: number;
  created_by: string;
  created_at: string;
  content: string;
}

export interface ShopProductType {
  isError?: boolean;
  isLoading?: boolean;
  data?: ProductType;
}

export interface WishListItemType {
  flower_id: string;
  route_path: string;
}

export interface AuthUser {
  _id?: string;
  email?: string;
  name?: string;
  surname?: string;
  profile_photo?: string;
  create_account_limit?: number;
  phone_number?: string;
  wishlist?: WishListItemType[];
  username?: string;
  country?: string;
  town?: string;
  street_address?: string;
  additional_street_address?: string;
  state?: string;
  zip?: string;
  followers?: string[];
  permission?: {
    create: boolean;
    update: boolean;
    delete: boolean;
    read: boolean;
  };
}

export interface UserType {
  billing_address: {
    country?: string;
    town?: string;
    street_address?: string;
    additional_street_address?: string;
    state?: string;
    zip?: string;
  };
  create_account_limit: number;
  create_plant_limit: number;
  create_post_limit: number;
  created_at: string;
  created_by: string;
  email: string;
  followers: string[];
  hashtags: string[];
  name: string;
  order_list: string[];
  password: string;
  permission: {
    create: boolean;
    update: boolean;
    delete: boolean;
    read: boolean;
  };
  phone_number: string;
  profile_photo: string;
  surname: string;
  user_type: string;
  username: string;
  wishlist: string[];
  _id: string;
}

export interface ChechOutFormType {
  first_name: string;
  last_name: string;
  country: string;
  town: string;
  state: string;
  zip: string;
  payment_method: string;
  phone_number: string;
  street_address: string;
  order_notes?: string;
  additional_street_address: string;
}

export type UploadType = {
  file: {
    lastModified: number;
    lastModifiedDate: Date;
    name: string;
    originalFileObj: typeof File;
    response: {
      message: string;
      image_url: {
        api_key: string;
        asset_id: string;
        bytes: number;
        created_at: string;
        etag: string;
        folder: string;
        format:
          | "jpg"
          | "svg"
          | "jpag"
          | "jpeg"
          | "gif"
          | "png"
          | "eps"
          | "raw"
          | "cr2"
          | "nef"
          | "orf"
          | "sr2";
        height: number;
        width: number;
        original_extension: string;
        original_filename: string;
        placeholder: boolean;
        public_id: string;
        resource_type: "image" | "video" | "images" | "videos";
        secure_url: string;
        signature: string;
        tags: string[];
        type: "upload" | "pre-upload";
        url: string;
        version: number;
        version_id: string;
      };
    };
    size: number;
    percent: number;
    status: "done" | "failed";
    thumbUrl: string;
    type: string;
    uid: string;
    xhr: typeof XMLHttpRequest;
  };
};

export interface CheckoutModalType {
  created_by: string;
  shop_list: ProductType[];
  extra_shop_info: object[];
  billing_address: string[];
  _id: string;
  created_at: string;
  __v: number;
}