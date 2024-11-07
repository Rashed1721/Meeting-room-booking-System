import { Button, Col, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../../components/Form/BSForm";
import PHInput from "../../components/Form/BSInput";
import Navbar from "../shared/Navbar/Navbar";
import { verifyToken } from "../../utils/verifyToken";
import { setUser, TUser } from "../../redux/features/auth/authSlice";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useAppDispatch } from "../../redux/hook";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Logging in");
    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      console.log("token", res.token);
      console.log({ res });

      const user = verifyToken(res.token) as TUser;
      console.log("user:", user);
      dispatch(setUser({ user: user, token: res.token }));

      toast.success("Logged in", { id: toastId, duration: 2000 });

      navigate(`/${user.role}`);
    } catch (err) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };

  return (
    <>
      <Navbar />
      <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
        <Col xs={22} sm={16} md={12} lg={10} xl={8}>
          <PHForm
            onSubmit={onSubmit}
            className="p-4 bg-white rounded-lg shadow-lg"
          >
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <PHInput type="text" name="email" label="Email:" />
              </Col>
              <Col span={24}>
                <PHInput type="password" name="password" label="Password:" />
                <p>
                  Don't have any account?<span>signUp</span>
                </p>
              </Col>

              <Col span={24} className="text-center">
                <Button type="primary" htmlType="submit">
                  Login
                </Button>
              </Col>
            </Row>
          </PHForm>
        </Col>
      </Row>
    </>
  );
};

export default Login;
