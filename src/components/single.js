import { Box, Divider, Typography } from "@mui/material";
import "../styles/single.css";
import SingleTable from "./singleTable";
import FeaturedPost from "./featuredPost";

export default function Single(props) {
  const { featuredposts } = props;
  return (
    <div className="single">
      <div className="singlePostWrapper">
        <h1 className="singlePostTitle">
          I Created a Developer Rap Video - Here's What I Learned.
        </h1>
        <img
          className="singlePostImg"
          src="https://source.unsplash.com/random?wallpapers"
        ></img>
        <Typography className="description">
          Did you come here for something in particular or just general
          Riker-bashing? And blowing into maximum warp speed, you apeared for an
          instant to be in two place at once. We have a saboteur aboard. We know
          you're dealing in stolen ore. But I wanna talk about the assassination
          attempt.
        </Typography>
        <SingleTable />
        <Typography className="description">
          Did you come here for something in particular or just general
          Riker-bashing? And blowing into maximum warp speed, you apeared for an
          instant to be in two place at once. We have a saboteur aboard.
        </Typography>
        <Box
          height={200}
          width={1000}
          my={4}
          display="flex"
          alignItems="center"
          borderRadius={2}
          gap={4}
          p={2}
          sx={{ border: "2px solid grey", backgroundColor: "skyblue" }}
        >
          Did you come here for something in particular or just general
          Riker-bashing? And blowing into maximum warp speed, you apeared for an
          instant to be in two place at once. We have a saboteur aboard. We know
          you're dealing in stolen ore. But I wanna talk about the assassination
          attempt on Lieutenant Worf.
        </Box>
        <Divider />
        <h2 style={{ alignSelf: "left" }}>See Related Posts</h2>
        
      </div>
      {featuredposts.slice(0,2).map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
    </div>
  );
}
