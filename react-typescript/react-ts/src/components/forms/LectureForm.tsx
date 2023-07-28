import { string, number, mixed, object } from "yup";
import { Formik, ErrorMessage } from "formik";
import { Form } from "react-bootstrap";
import {
  Button,
  FormControl,
  FormGroup,
  FormLabel,
  Input,
  InputLabel,
} from "@mui/material";
import { useState } from "react";
import { postData, postDataWithHeaders } from "../../services/axios.service";
import { successToast } from "../../services/toastify.service";
import { useNavigate } from "react-router-dom";

const LectureForm = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [file, setFile] = useState(null);
  const initialValues = {
    title: "",
    content: "",
    duration: "",
    file: null,
  };

  const lectureValidationSchema = object({
    title: string()
      .required("Title is required")
      .min(5, "Minimum title length should be 5 characters")
      .max(20, "Maximum title length should be 20 characters"),
    content: string()
      .required("Content is required")
      .min(5, "Minimum content length should be 5 characters")
      .max(50, "Maximum title length should be 50 characters"),
    duration: number().required("Duration is required"),
    file: mixed().required("File is required field"),
  });

  const navigate = useNavigate();

  const handleSubmit = async (values: any) => {
    setIsButtonDisabled(true);
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("content", values.content);
    formData.append("duration", values.duration);
    formData.append("video", values.file);

    const response = await postDataWithHeaders("lectures", formData);

    if (response.status) {
      successToast(response.message);
      navigate("/lectures");
      setIsButtonDisabled(false);
    }
  };
  return (
    <div className="container mb-5 mx-auto w-50">
      <h2 className="text-center font-bold">Create Lecture Form</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={lectureValidationSchema}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue,
        }) => (
          <Form onSubmit={handleSubmit}>
            <div className="w-">
              <FormControl>
                <InputLabel htmlFor="title">Lecture Title</InputLabel>
                <Input
                  type="text"
                  id="title"
                  name="title"
                  className="w-full border border-rounded"
                  onChange={handleChange}
                />
                <div className="text-danger">
                  <ErrorMessage name="title" />
                </div>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <InputLabel htmlFor="content">Lecture Content</InputLabel>
                <Input
                  type="textarea"
                  id="content"
                  name="content"
                  className="w-full border border-rounded"
                  onChange={handleChange}
                />
                <ErrorMessage name="content" clasName="text-danger" />
              </FormControl>
            </div>
            <div>
              <FormControl>
                <InputLabel htmlFor="duration">Lecture Duration</InputLabel>
                <Input
                  type="number"
                  id="duration"
                  name="duration"
                  className="w-full border border-rounded"
                  onChange={handleChange}
                />
                <ErrorMessage name="duration" clasName="text-danger" />
              </FormControl>
            </div>
            <div>
              <FormControl>
                <Input
                  type="file"
                  id="file"
                  name="file"
                  className="w-full border border-rounded"
                  onChange={(e: any) => {
                    setFieldValue("file", e.currentTarget.files[0]);
                  }}
                />
                <ErrorMessage name="file" clasName="text-danger" />
              </FormControl>
            </div>
            <Button
              type="submit"
              disabled={isButtonDisabled}
              variant="outlined"
            >
              Add lecture
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LectureForm;
