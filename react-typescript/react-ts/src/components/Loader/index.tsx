import CircularProgress from "@mui/material/CircularProgress";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <CircularProgress />;
    </div>
  );
};

export default Loader;
