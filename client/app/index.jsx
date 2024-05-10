
import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context'; // no overlap with status bar/bottom bar

import { images } from '../constants';
import CustomButton from '../components/CustomButton';
import { Redirect, router } from 'expo-router';

export default function App() {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className='w-full justify-center items-center px-4 min-h-[85vh]'> 
        {/* h-full causes view to go to the center of the screen */}
          <Image 
            source={ images.logo }
            className="w-[130px] h-[84px]"
            resizeMode='contain'
          />

          <Image 
            source={ images.cards }
            className="max-w-[380px] w-full h-[300px]"
            resizeMode='contain'
          />

          <View className='relative mt-5 '>
            <Text className='text-3xl text-white font-bold text-center'>
              Discover Endless Possibilities with {''}
              <Text className='text-secondary-200'>Aora</Text>
            </Text>

            <Image 
              source={ images.path }
              className='w-[136px] h-[15px] absolute -bottom-2 -right-8'
              resizeMode='contain'
            />
          </View>
          <Text className='text-sm font-pregular text-gray-100 mt-7 text-center'>Where creativity meets innovation:
            embark on a journey of limitless exploration with Aora
          </Text>

          <CustomButton 
            title="Continue with Email"
            handlePress={ () => {
              console.log("pressed")
              router.push('/sign-in')} }
            containerStyles='w-full mt-7'
          />
        </View>
      </ScrollView>

      <StatusBar
        backgroundColor='#161622'
        style='light'
      />
    </SafeAreaView>
    // <View className='flex-1 items-center justify-center bg-white'>
    //   <Text className='text-3xl font-pblack'>Aora!</Text>
    //   <StatusBar style="auto" />
    //   <Link href="/home" style={{ color: "blue" }}>Go To Home</Link>
    // </View>
  );
}
