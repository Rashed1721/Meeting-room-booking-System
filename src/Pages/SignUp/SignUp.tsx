import { Button, Col, Row } from "antd";
import { FieldValues } from "react-hook-form";

import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../../components/Form/BSForm";
import PHInput from "../../components/Form/BSInput";

import { useSignupMutation } from "../../redux/features/auth/authApi";

const SignUp = () => {
  const navigate = useNavigate();

  const [signup] = useSignupMutation();
  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("signing up");
    try {
      const userInfo = {
        name: data.name,
        email: data.email,
        password: data.password,
        phone: data.phone,
        address: data.address,
        role: "user",
      };

      const res = await signup(userInfo).unwrap();
      console.log({ res });

      // dispatch(setUser({ user: user, token: res.data.accessToken }));

      toast.success("Signed up", { id: toastId, duration: 2000 });

      navigate(`/${res?.data?.role}`);
    } catch (err) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };

  return (
    <>
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
    </>
  );
};

export default SignUp;
