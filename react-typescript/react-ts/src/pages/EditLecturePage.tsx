import { Formik, ErrorMessage } from "formik";
import { Form } from "react-bootstrap";
import { Button, FormControl, Input, InputLabel } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import { AiFillDelete } from "react-icons/ai";
import { successToast } from "../services/toastify.service";

const EditLecturePage = () => {
  const [lecture, setLecture] = useState<any>({});
  const [removeVideo, setRemoveVideo] = useState(false);

  const navigate = useNavigate();
  const token = localStorage.getItem("jwt");
  const { lectureId } = useParams();

  const getLectureById = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_LOCAL_SERVER_URL}/lectures/${lectureId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setLecture(response.data);
  };

  const handleEdit = async (values: any) => {
    const formData: any = new FormData();
    formData.append("content", values.content);
    formData.append("title", values.title);
    formData.append("duration", values.duration);
    if (values.file) {
      formData.append("video", values.file);
      formData.append("isVideoEdited", true);
    } else {
      formData.append("isVideoEdited", false);
    }
    const response = await axios.patch(
      `${import.meta.env.VITE_LOCAL_SERVER_URL}/lectures/${lectureId}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.data.status) {
      successToast(response.data.message);
      navigate("/lectures");
    }
  };

  useEffect(() => {
    getLectureById();
  }, []);

  // http://localhost:8085/lectures/64c3b02930878eff5cf90111

  return (
    <div className="container mb-5 mx-auto w-50">
      <h2 className="text-center font-bold">Edit Lecture Form</h2>
      {lecture.status ? (
        <Formik
          initialValues={{
            title: lecture.data.title,
            content: lecture.data.content,
            file: null,
            duration: lecture.data.duration,
            isVideoEdited: false,
          }}
          // validationSchema={}
          onSubmit={handleEdit}
        >
          {({ values, handleChange, handleSubmit, setFieldValue }) => (
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
                    value={values.title}
                  />
                  <div className="text-danger">
                    <ErrorMessage name="title" />
                  </div>
                </FormControl>
              </div>
              <div>
                <FormControl className="mt-4">
                  <InputLabel htmlFor="content">Lecture Content</InputLabel>
                  <Input
                    type="textarea"
                    id="content"
                    name="content"
                    className="w-full border border-rounded"
                    onChange={handleChange}
                    value={values.content}
                  />
                  <ErrorMessage name="content" clasName="text-danger" />
                </FormControl>
              </div>
              <div>
                <FormControl className="mt-4">
                  <InputLabel htmlFor="duration">Lecture Duration</InputLabel>
                  <Input
                    type="number"
                    id="duration"
                    name="duration"
                    value={values.duration}
                    className="w-full border border-rounded"
                    onChange={handleChange}
                  />
                  <ErrorMessage name="duration" clasName="text-danger" />
                </FormControl>
              </div>
              <div>
                {removeVideo ? (
                  <FormControl className="mt-4 mb-4">
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
                ) : (
                  <div className="mb-4">
                    <label htmlFor="file" className="mb-2">
                      Current Video
                    </label>
                    <br />
                    <video id="file" width={200} height={150} controls>
                      <source src={lecture.data.lectureUrl}></source>
                    </video>
                    <button
                      className="btn btn-danger mb-4"
                      onClick={(e: any) => {
                        e.preventDefault();
                        setRemoveVideo(true);
                      }}
                    >
                      <AiFillDelete />
                    </button>
                  </div>
                )}
              </div>
              <Button
                type="submit"
                // disabled={isButtonDisabled}
                variant="outlined"
              >
                Edit lecture
              </Button>
            </Form>
          )}
        </Formik>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default EditLecturePage;
