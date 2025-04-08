import { Box, Container, Image, Tag, Username, Location, List, Item, Text, Number } from "./Profile.styled";

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Container>
      <Box>
        <Image src={avatar} alt={username} />
        <Username>{username}</Username>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Box>

      <List>
        <Item>
          <Text>Followers</Text>
          <Number>{stats.followers}</Number>
        </Item>
        <Item>
          <Text>Views</Text>
          <Number>{stats.views}</Number>
        </Item>
        <Item>
          <Text>Likes</Text>
          <Number>{stats.likes}</Number>
        </Item>
      </List>
    </Container>
  );
};
