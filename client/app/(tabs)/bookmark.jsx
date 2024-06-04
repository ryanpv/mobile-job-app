import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import VideoCard from '../../components/VideoCard'

const Bookmark = () => {
  const testData = [
    { $id: 1, title: "item 1" },
    { $id: 2, title: "item 2" },
    { $id: 3, title: "item 3" },
  ]
  return (
    <SafeAreaView>
      <FlatList
        data={ testData }
        keyExtractor={ (item) => item.$id }
        renderItem={ ({ item }) => (
          <VideoCard video={ item } />
        ) }
        ListHeaderComponent={ () => (
          <View>
            <Text>
              Test Text here
            </Text>
          </View>
        ) }
      />
    </SafeAreaView>
  )
}

export default Bookmark