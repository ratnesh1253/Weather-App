import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

export default function DemoButton() {
  let handleClick = () => {
    console.log("button was clicked");
  };

  return (
    <>
      <h2>Buttons in material UI</h2>
      <Button variant="text" onClick={handleClick}>
        Text
      </Button>
      &nbsp;
      <Button variant="contained" color="error">
        Contained
      </Button>
      &nbsp;
      <Button variant="outlined" color="success">
        Outlined
      </Button>
      &nbsp;
      <Button disabled>Disabled</Button>
      <hr />
      <Button variant="contained" size="small">
        Small
      </Button>
      &nbsp;
      <Button variant="contained" size="medium">
        Medium
      </Button>
      &nbsp;
      <Button variant="contained" size="large">
        Large
      </Button>
      &nbsp;
      <hr />
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      &nbsp;
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </>
  );
}
