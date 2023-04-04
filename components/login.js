import React from "react";
import { useEffect, useState } from "react";

import { Row, Col } from "antd";
import { Form, Input, Button, Select, Space } from "antd";
import {EyeOutlined,EyeInvisibleOutlined,} from "@ant-design/icons";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";

import loginStyle from "../styles/Login.module.css";
import styles from "../components/login.module.css";

import Loginpage from "../public/DigiLogin.png";
import digiLogo from "../public/DigiLogo.png";


const { Option } = Select;

const LoginForm = () => {
    const [passwordShown, setPasswordShown] = useState("");
    const positions = [
      { id: 1, short: "Manager" },
      { id: 2, short: "Employee" },
      { id: 3, short: "Payroll Manager" },
      { id: 4, short: "SBU" },
      { id: 5, short: "IT Team" },
      { id: 6, short: "HR Head" },
    ];
    
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  function onChange(value) {
    console.log(`Selected ${value}`);
  }
    // useEffect(() => {
    //     async function getData() {
            
    //     }
    //     getData()
    // }, [1]);
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();

  const onSubmit = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Row
      style={{
        backgroundColor: "#95a0e2",
        height: "100vh",
        paddingTop: "7%",
      }}
    >
      <Col span={6}></Col>
      <Col span={12}>
        <Row>
          <Col span={12} className={styles.logincard}>
            <Form onSubmit={onSubmit}>
              <Image src={digiLogo} alt="digiLogo" width={250} />
              <Form.Item>
                <Select className="form-select">
                  <Option value="">Select Company</Option>
                  <Option value="Company 1">Company 1</Option>
                </Select>
              </Form.Item>
              <Form.Item>
                <Select onChange={onChange} className="form-select mt-2">
                  <Option value="">Select Position</Option>
                  {positions.map((position) => {
                    return (
                      <Option key={position.id} value={position.id}>{position.short}</Option>
                    )
                    })}
                  {/* <Option value="1">Manager</Option>
                  <Option value="2">Employee</Option>
                  <Option value="3">Payroll Manager</Option>
                  <Option value="4">SBU</Option>
                  <Option value="5">IT Team</Option>
                  <Option value="6">HR Head</Option> */}
                </Select>
              </Form.Item>
              <Form.Item>
                <Input type="text" placeholder="Enter your Username" />
              </Form.Item>
              <Form.Item>
                <Input.Password
                  placeholder="Enter your Password"
                  iconRender={(visible) => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)}
                />
                {/* <Button
                  onClick={togglePassword}
                  className={loginStyle.img}
                  icon={<EyeOutlined />}
                /> */}
              </Form.Item>
              <Row>
              <Col sapn={8} className="mt-2">
                  <Link style={{textDecoration: 'none',
    fontWeight: '30px'}} href="/">
                    Forgot password?
                  </Link>
         </Col>
         <Col span={8}></Col>
              <Col sapn={8}>
                  <Button
                    className="btn btn-primary btn-sm text-right "
                  >
                    Login with 365
                  </Button>
                </Col>
              </Row>
            </Form>
            <br />
            <p>
              <b> Copyright &#169; 2022 AMAZE ONE. All Rights Reserved </b>
            </p>
          </Col>
          <Col
            span={12}
            className={styles.divNegate}
            // style={{ position: "relative" }}
          >
            <Image
              src={Loginpage}
              alt="DigiLogin"
              style={{ width: "408px", height: "auto" }}
            />
            <div className={styles.content}>
              <h1>Secured and Easy to Use</h1>
              <p>Smart all-in-one software for HR operations</p>
            </div>
          </Col>
        </Row>
      </Col>
      <Col span={6}></Col>
    </Row>
  );
};

export default LoginForm;
