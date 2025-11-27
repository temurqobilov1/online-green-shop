import { useMutation } from "@tanstack/react-query";
import { useAxios } from "../../useAxios";
import Cookies from "js-cookie";
import { useReduxDispatch } from "../../userRedux";
import { authorizationModalVisibltiyConf } from "../../../redux/modal-slice";
import { signInWithGoogle } from "../../../config";
import { removeShopData } from "../../../redux/product-slice";
import { setUser } from "../../../redux/user-slice";

export const useLoginMutate = () => {
  const axios = useAxios();
  const dispatch = useReduxDispatch();
  return useMutation({
    mutationKey: ["login"],
    mutationFn: (data: object) =>
      axios({ url: "user/sign-in", body: data, method: "POST" }).then(
        (res) => res.data.data
      ),
    onSuccess: (data: { token: string; user: object }) => {
      const { token, user } = data;

      Cookies.set("user", JSON.stringify(user), { expires: 0.0833 });
      Cookies.set("token", token, { expires: 0.0833 });

      dispatch(setUser(user));

      dispatch(authorizationModalVisibltiyConf());
    },
  });
};

export const useRegisterMutate = () => {
  const axios = useAxios();
  const dispatch = useReduxDispatch();
  return useMutation({
    mutationKey: ["login"],
    mutationFn: (data: object) =>
      axios({ url: "user/sign-up", body: data, method: "POST" }).then(
        (res) => res.data.data
      ),
    onSuccess: (data: { token: string; user: object }) => {
      const { token, user } = data;

      Cookies.set("user", JSON.stringify(user), { expires: 0.0833 });
      Cookies.set("token", token, { expires: 0.0833 });
      dispatch(authorizationModalVisibltiyConf());
    },
  });
};
export const useSignWithGoogle = () => {
  const axios = useAxios();
  const dispatch = useReduxDispatch();

  return useMutation({
    mutationKey: ["login-google"],

    mutationFn: async () => {
      const res = await signInWithGoogle();
      return axios({
        url: "user/sign-in/google",
        body: { email: res.user.email },
        method: "POST",
      }).then((res) => res.data.data);
    },

    onSuccess: (data: { token: string; user: object }) => {
      const { token, user } = data;

      Cookies.set("user", JSON.stringify(user), { expires: 0.0833 });
      Cookies.set("token", token, { expires: 0.0833 });
      dispatch(authorizationModalVisibltiyConf());
    },
  });
};

export const useRegisterWithGoogle = () => {
  const axios = useAxios();
  const dispatch = useReduxDispatch();

  return useMutation({
    mutationKey: ["register-google"],

    mutationFn: async () => {
      const res = await signInWithGoogle();
      return axios({
        url: "user/sign-up/google",
        body: { email: res.user.email },
        method: "POST",
      }).then((res) => res.data.data);
    },

    onSuccess: (data: { token: string; user: object }) => {
      const { token, user } = data;

      Cookies.set("user", JSON.stringify(user), { expires: 0.0833 });
      Cookies.set("token", token, { expires: 0.0833 });
      dispatch(authorizationModalVisibltiyConf());
    },
  });
};

export const useCheckoutMutation = () => {
  const axios = useAxios();
  const dispatch = useReduxDispatch();
  return useMutation({
    mutationKey: ["checkout"],
    mutationFn: (data: object) =>
      axios({
        url: "order/make-order",
        body: data,
        method: "POST",
      }).then((res) => res.data.data),
    onSuccess(data) {
      console.log(data);
      dispatch(removeShopData());
    },
  });
};
