import React from "react";
import { Image, Keyboard, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ClicketyBoo } from "../../components/reusable-components/ClicketyBoo";
import { FormFieldText } from "../../components/reusable-components/FormFieldText";
import { useState } from "react";
import { router } from "expo-router";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const Welcome = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView className="bg-[#B56DE4] h-full">
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View className="w-full h-1/4 justify-center items-center mt-14">
          <Image
            source={require("../../assets/images/icon.png")}
            resizeMode="center"
          />
        </View>
        <View className="mt-16 p-2">
          <FormFieldText
            label="Email"
            setText={setEmail}
            isRequired={true}
            autoComplete="email"
            enterKeyHint="next"
          />

          <FormFieldText
            label="Password"
            setText={setPassword}
            isRequired={true}
            autoComplete="current-password"
            enterKeyHint="go"
          />
        </View>
      </TouchableWithoutFeedback>
      <View className="m-auto mt-4">
        <ClicketyBoo
          onPressFunction={() => router.replace("/(public)/music")}
          text="log in"
        />
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
