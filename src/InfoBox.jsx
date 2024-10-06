import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://plus.unsplash.com/premium_photo-1680981142116-1166871fe581?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI3fHx8ZW58MHx8fHx8";

  const HOT_URL =
    "https://www.howitworksdaily.com/wp-content/uploads/2015/07/heatwave-scaled.jpg";
  const COLD_URL =
    "https://www.nephrocare.com/fileadmin/_processed_/7/5/csm_The_beautiful_side_of_winter_4f2c5dc278.jpg";
  const RAIN_URL =
    "https://static.vecteezy.com/system/resources/previews/042/146/565/non_2x/ai-generated-beautiful-rain-day-view-photo.jpg";

  return (
    <div className="InfoBox">
      <div className="cardConatiner">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 20
                ? HOT_URL
                : COLD_URL
            }
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}&nbsp;
              {info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : info.temp > 20 ? (
                <WbSunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
              &nbsp;
              {info.temp}&deg;C
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>
                Feels Like: <b>{info.feelsLike}&deg;C</b> with{" "}
                <i>
                  <b>{info.weather}</b>
                </i>
              </p>
              <p>
                Time: <b>{new Date().toString().slice(0, 21)}</b>
              </p>
              <p>
                Humidity: <b>{info.humidity}</b>
              </p>
              <p>
                Min Temperature: <b>{info.tempMin}&deg;C</b>
              </p>
              <p>
                Max Temperature: <b>{info.tempMax}&deg;C</b>
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
