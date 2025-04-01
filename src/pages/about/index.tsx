import { View, Text, Button } from "@tarojs/components";
import Taro, { useLoad } from "@tarojs/taro";
import "./index.scss";

export default function About() {
  useLoad(() => {
    console.log("About page loaded.");
  });

  return (
    <View className="about">
      <Text className="title">About Us</Text>
      <Text className="content">
        This is the About page of our Taro application.
      </Text>
      {/* add a button to back the index */}
      <Button className="back" onClick={() => Taro.navigateBack()}>
        Back to Home
      </Button>
    </View>
  );
}
