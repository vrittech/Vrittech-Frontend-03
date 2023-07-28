import { useEffect, useState } from "react";
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

const LecturePage = () => {
  const [lectures, setLectures] = useState([]);

  const getLectures = async () => {
    const response = await getData("lectures");
    if (response.status) {
      setLectures(response.data);
    }
  };
  useEffect(() => {
    getLectures();
  }, []);

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
  return (
    <div className="container mx-auto px-4 py-2">
      <h2>Lectures</h2>
      <Button variant="outlined">Add Lecture</Button>
      <div className="d-flex flex-wrap gap-5">
        {lectures.map((lecture: LectureInterface) => {
          return (
            <Card key={lecture._id} className="lecture-card">
              <CardContent className="h-75">
                <video controls className="h-100 w-100" height={"240"}>
                  <source src={lecture.lectureUrl}></source>
                </video>
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
                  <IconButton color="primary">
                    <AiFillEdit />
                  </IconButton>
                  <IconButton color="error">
                    <AiFillDelete
                      onClick={(e: any) => handleDeleteLecture(e, lecture._id)}
                    />
                  </IconButton>
                </CardActions>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default LecturePage;
