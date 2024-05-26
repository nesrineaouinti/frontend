import * as React from "react";
import Button from "@mui/joy/Button";
import {
  Card,
  Box,
  Container,
  Stack,
  Chip,
  Divider,
  CardActions,
  Typography,
} from "@mui/joy";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import { CssVarsProvider } from "@mui/joy";
import Textarea from "@mui/joy/Textarea";
import FileUpload from "./FileUpload";
import axiosInstance from "../axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ModalButton({ job }) {
  const navigate = useNavigate();

  const [variant, setVariant] = React.useState(undefined);
  const [cv, setCv] = React.useState(null);
  const [cover_letter, setCover_letter] = React.useState("");

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("cover_letter", cover_letter);
    if (cv) {
      formData.append("cv", cv);
    }

    axiosInstance
      .post(`applications/create/${job}/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        toast.success("Application submitted successfully!");
        navigate(-1);
      })
      .catch((error) => {
        console.error("Creation failed:", error);
        toast.error("Error, you have probably already applied for this job");
      });
  };

  return (
    <CssVarsProvider>
      <React.Fragment>
        <ToastContainer />
        <Button
          variant="outlined"
          size="lg"
          onClick={() => {
            setVariant("soft");
          }}
        >
          APPLY NOW
        </Button>

        <Modal open={!!variant} onClose={() => setVariant(undefined)}>
          <ModalDialog variant={variant} sx={{ width: "600px" }}>
            <ModalClose />
            <DialogTitle>Job Application</DialogTitle>
            <DialogContent>
              <Divider />
              <Typography sx={{ fontSize: 20 }}>Cover letter:</Typography>
              <Textarea
                color="primary"
                sx={{ height: 450 , width:'100%'}}
                name="Soft"
                placeholder="Write your cover letter here…"
                variant="plain"
                onChange={(ev) => {
                  setCover_letter(ev.target.value);
                }}
                value={cover_letter}
              />

              <Typography sx={{ fontSize: 20 }}>CV:</Typography>

              {cv ? (
                <Typography sx={{ fontSize: 16, color: "#4caf50" }}>
                  {cv.name}
                </Typography>
              ) : (
                <FileUpload onFileSelect={setCv} />
              )}

              <Divider />
              <Button onClick={handleSubmit}>
                Confirm and send my application
              </Button>
            </DialogContent>
          </ModalDialog>
        </Modal>
      </React.Fragment>
    </CssVarsProvider>
  );
}
