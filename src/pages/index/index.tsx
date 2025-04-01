import { View, Text, Button } from '@tarojs/components'
import { useLoad, useReady } from '@tarojs/taro'
import Taro from '@tarojs/taro'
import './index.scss'

export default function Index () {
  useLoad(() => {
    console.log('Page loaded.')
  })
  useReady(() => {
    console.log(">> use Ready!!")
  })
  return (
    <View className='index'>
      <Text>Hello world! what you name Alice !!</Text>
      <Button className='button' onClick={() => Taro.navigateTo({ url: '/pages/about/index' })}>Go to About</Button>
    </View>
  )
}
