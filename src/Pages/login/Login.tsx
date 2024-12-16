import { Button, Col, Row } from "antd";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { verifyToken } from "../../utils/verifyToken";
import { setUser, TUser } from "../../redux/features/auth/authSlice";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useAppDispatch } from "../../redux/hook";

type LoginFormValues = {
  email: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();

  const { register, handleSubmit, setValue } = useForm<LoginFormValues>();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = async (data: LoginFormValues) => {
    const toastId = toast.loading("Logging in...");
    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };

      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.token) as TUser;

      dispatch(setUser({ user, token: res.token }));

      toast.success("Logged in", { id: toastId, duration: 2000 });

      // Redirect to the user's intended page or their dashboard if none specified
      const redirectTo = from || `/${user.role}`;
      navigate(redirectTo, { replace: true });
    } catch (err: any) {
      toast.error(`${err?.data?.message}`, { id: toastId, duration: 2000 });
    }
  };

  const setAdminCredentials = () => {
    setValue("email", "zarif@example1.com");
    setValue("password", "zarif123");
  };

  const setUserCredentials = () => {
    setValue("email", "js.rashed18@gmail.com");
    setValue("password", "rashed123");
  };

  return (
    <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
      <Col xs={22} sm={16} md={12} lg={10} xl={8}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto"
        >
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <label className="block text-gray-700 font-medium mb-1">
                Email:
              </label>
              <input
                type="text"
                {...register("email")}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
              />
            </Col>
            <Col span={24}>
              <label className="block text-gray-700 font-medium mb-1">
                Password:
              </label>
              <input
                type="password"
                {...register("password")}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
              />
              <p className="mt-2 text-sm text-gray-500">
                Don’t have an account?{" "}
                <Link
                  to="/signup"
                  className="text-blue-600 hover:underline font-semibold"
                >
                  Sign Up
                </Link>
              </p>
            </Col>
            <Col span={12} className="text-center mt-4">
              <Button
                type="default"
                onClick={setAdminCredentials}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold px-6 py-2 rounded-md transition duration-200"
              >
                Admin Credentials
              </Button>
            </Col>
            <Col span={12} className="text-center mt-4">
              <Button
                type="default"
                onClick={setUserCredentials}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold px-6 py-2 rounded-md transition duration-200"
              >
                User Credentials
              </Button>
            </Col>
            <Col span={24} className="text-center mt-4">
              <Button
                type="primary"
                htmlType="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md transition duration-200"
              >
                Login
              </Button>
            </Col>
          </Row>
        </form>
      </Col>
    </Row>
  );
};

export default Login;
