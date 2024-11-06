import { Button, Col, Row } from "antd";
import { FieldValues } from "react-hook-form";

import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../../components/Form/BSForm";
import PHInput from "../../components/Form/BSInput";
import Navbar from "../shared/Navbar/Navbar";

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
      {/* <Navbar /> */}
      <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
        <Col xs={22} sm={16} md={12} lg={10} xl={8}>
          <PHForm
            onSubmit={onSubmit}
            className="p-4 bg-white rounded-lg shadow-lg"
          >
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
              </Col>
              <Col span={24} className="text-center">
                <Button type="primary" htmlType="submit">
                  Register
                </Button>
              </Col>
            </Row>
          </PHForm>
        </Col>
      </Row>
    </>
  );
};

export default SignUp;
