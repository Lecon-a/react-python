import React from 'react'
import { Grid } from '@chakra-ui/react'
import { friends } from '../dummy/dummy'
import FriendCard from './FriendCard'

function UserGrid() {
  return (
        <Grid
          templateColumns={{
              base: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
          }}
          gap={4}
        >
          {friends.map(friend => <FriendCard key={friend.id} friend={friend} />)}
        </Grid>
  )
}

export default UserGrid
