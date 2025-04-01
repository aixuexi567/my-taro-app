import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'

export default function About() {
  useLoad(() => {
    console.log('About page loaded.')
  })

  return (
    <View className='about'>
      <Text className='title'>About Us</Text>
      <Text className='content'>This is the About page of our Taro application.</Text>
    </View>
  )
} 