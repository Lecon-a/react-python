import React, { useState, useEffect } from 'react'
import { Grid, Flex, Spinner, Text } from '@chakra-ui/react'
import FriendCard from './FriendCard'
import { BASE_URL } from '../App';

function UserGrid({ friends, setFriends }) {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => { 
    const getFriends = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${BASE_URL}/friends`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error)
        }
        
        setFriends(data.friends);   
      } catch (err) { 
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    getFriends();

  }, [setFriends]);

  return (
    <>
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={4}
      >
        {friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} setFriends={setFriends} />
        ))}
      </Grid>

      {isLoading && (
        <Flex justifyContent={"center"}>
          <Spinner size={"xl"} />
        </Flex>
      )}

      {!isLoading && friends.length === 0 && (
        <Flex justifyContent={"center"}>
          <Text as={"span"} fontSize={"2xl"} fontWeight={"bold"} mr={2}>No friends found.</Text>
        </Flex>
      )}
    </>
  );
}

export default UserGrid
