import Head from "next/head";
import Link from "next/link";
import Footer from "./Footer";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";

export default function Home() {
  function navFunc() {
    document.querySelector("html").classList.toggle("open");
  }
  return (
    <>
      <Head>
        <title>imanoc,inc.</title>
      </Head>
      <div className="body">
        <div className="hero min-h-screen">
          <div className="hero-placeholder"></div>
          <div
            className="hero-main"
            style={{ backgroundImage: `url(/masthead.png)` }}
          ></div>

          <div className="contents container">
            <div className="text">
              <h1>
                <span className="title01">
                  <h1>imanoc</h1>
                </span>
                <span className="title02">
                  <span>I&apos;m a NOC</span>
                </span>
              </h1>
              <span className="title02">
                <span>Ima knock another liberty.</span>
              </span>
            </div>
          </div>
        </div>
        <div className="bridge">
          <p>imanocは</p>
          <p>思考力、行動力、技術力を兼ね備えた</p>
          <p>NOC(スパイ)組織です。</p>
        </div>
        <div className="cat news container">
          <h2>news</h2>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: 'wrap',
              p: 1,
              m: 1,
              borderRadius: 1,
            }}
          >
            <Card sx={{ maxWidth: 200, m: 1 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://placehold.jp/92c7e2/ffffff/480x300.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  HP更新！
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  HPを更新しました。
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            <Card sx={{ maxWidth: 200 ,m: 1 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://placehold.jp/92c7e2/ffffff/480x300.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  HP更新！
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  HPを更新しました。
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            <Card sx={{ maxWidth: 200, m: 1 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://placehold.jp/92c7e2/ffffff/480x300.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  HP更新！
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  HPを更新しました。
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            <Card sx={{ maxWidth: 200, m: 1 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://placehold.jp/92c7e2/ffffff/480x300.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  HP更新！
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  HPを更新しました。
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Box>
        </div>
        <div className="cat blog container">
          <h2>blog</h2>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: 'wrap',
              p: 1,
              m: 1,
              borderRadius: 1,
            }}
          >
            <Card sx={{ maxWidth: 200, m: 1 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://placehold.jp/92c7e2/ffffff/480x300.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  HP更新！
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  HPを更新しました。
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            <Card sx={{ maxWidth: 200 ,m: 1 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://placehold.jp/92c7e2/ffffff/480x300.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  HP更新！
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  HPを更新しました。
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            <Card sx={{ maxWidth: 200, m: 1 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://placehold.jp/92c7e2/ffffff/480x300.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  HP更新！
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  HPを更新しました。
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            <Card sx={{ maxWidth: 200, m: 1 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://placehold.jp/92c7e2/ffffff/480x300.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  HP更新！
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  HPを更新しました。
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Box>
        </div>
        <div className="cat service container">
          <h2>service</h2>
          <div>consulting</div>
          <div>marketing</div>
          <div>engineering</div>
        </div>
        <div className="cat contact container">
          <h2>contact</h2>
          <div>お問い合わせフォーム</div>
        </div>
        <div className="cat overview container">
          <h2>overview</h2>
          <div>会社概要</div>
        </div>
      </div>
    </>
  );
}
