import { Button, Col, Row } from "antd";
import { FieldValues } from "react-hook-form";

import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../../components/Form/BSForm";
import PHInput from "../../components/Form/BSInput";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer";

const SignUp = () => {
  // const navigate = useNavigate();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    // const toastId = toast.loading("Logging in");
    // try {
    //   const userInfo = {
    //     id: data.userId,
    //     password: data.password,
    //   };

    //   const res = await login(userInfo).unwrap();
    //   console.log(res);
    //   const user = verifyToken(res.data.accessToken) as TUser;

    //   dispatch(setUser({ user: user, token: res.data.accessToken }));

    //   toast.success("Logged in", { id: toastId, duration: 2000 });

    //   navigate(`/${user.role}/dashboard`);
    // } catch (err) {
    //   toast.error("Something went wrong", { id: toastId, duration: 2000 });
    // }
  };

  return (
    <>
      <Navbar />
      <Row
        justify="center"
        align="middle"
        style={{ minHeight: "100vh", marginTop: "20px", marginBottom: "20px" }}
      >
        <Col xs={22} sm={16} md={12} lg={10} xl={8}>
          <PHForm
            onSubmit={onSubmit}
            className="p-6 bg-white rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
              Register
            </h3>

            <Row gutter={[16, 16]}>
              <Col span={24}>
                <PHInput type="text" name="name" label="Name:" />
              </Col>
              <Col span={24}>
                <PHInput type="text" name="email" label="Email:" />
              </Col>
              <Col span={24}>
                <PHInput type="password" name="password" label="Password:" />
              </Col>
              <Col span={24}>
                <PHInput type="text" name="phone" label="Phone:" />
              </Col>
              <Col span={24}>
                <PHInput type="text" name="address" label="Address:" />
                <p className="mt-2 text-sm text-gray-500">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-blue-600 hover:underline font-semibold"
                  >
                    Login
                  </Link>
                </p>
              </Col>
              <Col span={24} className="text-center">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md transition duration-200"
                >
                  Register
                </Button>
              </Col>
            </Row>
          </PHForm>
        </Col>
      </Row>
      <Footer />
    </>
  );
};

export default SignUp;
