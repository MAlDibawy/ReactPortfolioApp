import React from "react";
import "./Contact.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

export default function Contact() {
  const [success, setSuccess] = useState(false);

  const validateSchema = Yup.object().shape({
    name: Yup.string().min(3).required("This field is required"),
    email: Yup.string()
      .email("please enter a valid email")
      .required("This field is required"),
    phone: Yup.string()
      .matches(/^01[0125][0-9]{8}$/, "Phone number is not valid")
      .required("This field is required"),
    message: Yup.string().required("Please Enter Your Message"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: validateSchema,
    onSubmit: (values, { resetForm }) => {
      setSuccess(true);
      setTimeout(() => {
        resetForm();
      }, 2000);
    },
  });

  return (
    <div className="Contact container-fluid w-100 h-100 p-4">
      <div className="container h-100">
        <h2 className="text-uppercase section-header text-center fw-bolder">
          Contact Me
        </h2>
        <div className="d-flex justify-content-center align-items-center">
          <div className="line"></div>
          <i className="fa-solid fa-star fa-2x p-star"></i>
          <div className="line"></div>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="inputs p-5">
            <div className="inputWrap">
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                placeholder="Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="alert alert-danger text-center">
                  {formik.errors.name}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="inputWrap">
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="Email Address"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="alert alert-danger text-center">
                  {formik.errors.email}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="inputWrap">
              <input
                type="phone"
                name="phone"
                id="phone"
                className="form-control"
                placeholder="Phone Number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <div className="alert alert-danger text-center">
                  {formik.errors.phone}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="inputWrap">
              <textarea
                name="message"
                id="message"
                className="form-control"
                placeholder="Message"
                rows="3"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
              ></textarea>
              {formik.touched.message && formik.errors.message ? (
                <div className="alert alert-danger text-center">
                  {formik.errors.message}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <button
            type="submit"
            disabled={!formik.isValid || !formik.dirty}
            className="btn btn-primary m-auto d-block"
          >
            Send
          </button>
          {success ? (
            <div className="alert alert-success m-auto w-50 mt-3 text-center">
              Your message is sent successfully
            </div>
          ) : (
            ""
          )}
        </form>
      </div>
    </div>
  );
}
