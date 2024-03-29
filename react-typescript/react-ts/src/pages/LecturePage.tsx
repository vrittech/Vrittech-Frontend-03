import { useContext, useEffect, useState } from "react";
import { deleteData, getData } from "../services/axios.service";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { LectureInterface } from "../interface/lecture.interface";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";

import Typography from "@mui/material/Typography";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { successToast } from "../services/toastify.service";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import GlobalContext from "../context/GlobalContext";
import EditLectureFormModal from "../components/forms/EditLectureModalForm";

const LecturePage = () => {
  const [lectures, setLectures] = useState([]);
  const [editingLecture, setEditingLecture] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  const isLoggedInContext: any = useContext(GlobalContext);

  const getLectures = async () => {
    setIsLoading(true);

    const response = await getData("lectures");

    if (response.status) {
      setLectures(response.data);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getLectures();
  }, []);

  const handleEditLecture = (e: any, lecture: any) => {
    setShow(true);
    setEditingLecture(lecture);
    // navigate(`/lectures/${id}`);
  };

  const handleEditSubmit = (e: any) => {
    e.preventDefault();
    console.log(editingLecture);
    const formData = new FormData();
    formData.append("duration", editingLecture.duration);
  };

  const handleDeleteLecture = async (e: any, id: string) => {
    const response = await deleteData(`lectures/${id}`);

    if (response.status) {
      const filteredLecture = lectures.filter((lecture: LectureInterface) => {
        return lecture._id !== id;
      });
      setLectures(filteredLecture);
      successToast(response.message);
    }
  };

  const addLecture = (event: any) => {
    event.preventDefault();
    navigate("/lectures/add");
  };
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="container mx-auto px-4 py-2">
            <h2>Lectures</h2>
            <Button variant="outlined" onClick={(e: any) => addLecture(e)}>
              Add Lecture
            </Button>
            <div className="d-flex flex-wrap gap-5">
              {lectures.map((lecture: LectureInterface) => {
                return (
                  <Card key={lecture._id} className="lecture-card">
                    <CardContent className="h-75">
                      <div className="video-container">
                        <video controls className="h-100 w-100">
                          <source src={lecture.lectureUrl}></source>
                        </video>
                      </div>
                    </CardContent>
                    <div className="d-flex justify-content-between ms-3">
                      <div>
                        <Typography variant="h5">{lecture.title}</Typography>
                        <Typography variant="body1">
                          {lecture.content.length > 20
                            ? lecture.content.slice(0, 20)
                            : lecture.content}
                        </Typography>
                        <Typography variant="subtitle1">
                          Duration:{lecture.duration} hours
                        </Typography>
                      </div>
                      <CardActions className="d-flex flex-column">
                        <IconButton
                          color="primary"
                          onClick={(e: any) => handleEditLecture(e, lecture)}
                        >
                          <AiFillEdit />
                        </IconButton>
                        <IconButton
                          color="error"
                          onClick={(e: any) =>
                            handleDeleteLecture(e, lecture._id)
                          }
                        >
                          <AiFillDelete />
                        </IconButton>
                      </CardActions>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </>
      )}
      <EditLectureFormModal
        show={show}
        handleClose={handleClose}
        editingLecture={editingLecture}
        handleEditSubmit={handleEditSubmit}
        setEditingLecture={setEditingLecture}
      />
    </>
  );
};

export default LecturePage;
