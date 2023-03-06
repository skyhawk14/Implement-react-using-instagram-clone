import { useState } from "react";
import Button from "@mui/material/Button";
export default function UploadFile() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const resetError = () => {
    setTimeout(() => setError(""), 2000);
  };
  const uploadFile = async (file) => {
    if (file == null) {
      setError("Please upload a file");
      resetError();
      return;
    }
    if (file.size / (1024 * 1024) > 100) {
      setError("Exceeds maximum file size limit(100Mb)");
      resetError();
      return;
    }
  };
  return (
    <div>
      {error != "" ? (
        <span style={{ background: "red", color: "white", display: "block" }}>
          {error}
        </span>
      ) : (
        <div>
          <label htmlFor="input-file">
            <Button
              variant="outlined"
              size="small"
              color="secondary"
              margin="dense"
              component="span"
              disabled={loading}
            >
              Upload file
            </Button>
            <input
              type="file"
              accept="video/*"
              id="input-file"
              hidden
              disabled={loading}
              onChange={(e) => uploadFile(e.target.files[0])}
            />
          </label>
        </div>
      )}
    </div>
  );
}
