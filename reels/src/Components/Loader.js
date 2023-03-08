import { useState } from "react";
import CircularProgressWithLabel from "@mui/material/CircularProgressWithLabel";

export default function Loader() {
  const [percentage, setPercentage] = useState(0);
  return <CircularProgressWithLabel value={percentage} />;
}
