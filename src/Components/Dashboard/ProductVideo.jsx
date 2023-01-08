import Image1 from "../../Assets/Images/ODowwJqk.png";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";

// product componet
export const ProductVideo = () => {
  return (
    <>
      <div className="bg-white rounded p-3">
        <div className="d-flex justify-content-between">
          <p>Product Video</p>
          <MoreVertRoundedIcon style={{ color: "#A3A6B4" }} />
        </div>
        <img style={{ width: "100%" }} src={Image1} alt="video thumbnail" />
      </div>
    </>
  );
};
