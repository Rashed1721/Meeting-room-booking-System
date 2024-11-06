import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

type THSelectProps = {
  label: string;
  name: string;
  options: { value: string; label: string; disabled?: boolean }[] | undefined;
  disabled?: boolean;
};

const BSSelect = ({ label, name, options, disabled }: THSelectProps) => {
  return (
    <Controller
      name={name}
      render={({ field: { onChange }, fieldState: { error } }) => (
        <Form.Item label={label}>
          <Select
            style={{ width: "100%" }}
            onChange={onChange}
            options={options}
            size="large"
            disabled={disabled}
          />
          {error && <small style={{ color: "red" }}>{error.message}</small>}
        </Form.Item>
      )}
    />
  );
};

export default BSSelect;
