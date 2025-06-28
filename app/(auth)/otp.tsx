import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import classNames from "classnames";

const OTP = () => {
  const [otp, setOtp] = useState<string[]>(Array(4).fill("")); // ["","","",""]
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);

  const inputs = useRef<(TextInput | null)[]>([]);

  const handleChangeOTP = (text: any, index: any) => {
    if (!/^\d?$/g.test(text)) {
      return;
    }
    const otpValue = [...otp];
    otpValue[index] = text;
    setOtp(otpValue);
    if (text && index < inputs.current.length - 1) {
      inputs.current[index + 1]?.focus();
    } else if (text === "" && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };
  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace" && otp[index] === "" && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };
  const handleFocus = (index: number) => {
    setFocusedIndex(index);
  };
  return (
    <SafeAreaView edges={["top"]}>
      <View className="pt-20 px-4">
        <Image
          source={require("../../assets/Logo.svg")}
          contentFit="contain"
          style={{
            width: 64,
            height: 64,
            alignSelf: "center",
          }}
        />
        <View className="flex flex-col gap-3 px-10">
          <Text className="font-poppins-semibold text-[20px] text-[#19213D] text-center">
            Enter verification code
          </Text>
          <Text className="font-poppins-regular text-base text-[#5D6481] text-center">
            We’ve sent a code to Lois@gmail.com
          </Text>
        </View>

        <View className="flex flex-row items-center gap-3 justify-between mt-8">
          {otp.map((item, index) => (
            <View
              key={index}
              className={classNames(
                "border min-h-max h-[75px] max-h-fit resize-none aspect-square grow rounded-[14px] bg-[#F8F9FA] border-[#EAEAEA]",
                focusedIndex === index && "!border-blue-400"
              )}
            >
              <TextInput
                ref={(ref: any) => (inputs.current[index] = ref)}
                inputMode="numeric"
                maxLength={1}
                value={item}
                onKeyPress={(e) => handleKeyPress(e, index)}
                // onFocus={()}
                onFocus={() => handleFocus(index)}
                onBlur={() => setFocusedIndex(-1)}
                onChangeText={(text) => handleChangeOTP(text, index)}
                className="h-full w-full font-poppins-medium text-center text-[32px]"
              />
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OTP;

const styles = StyleSheet.create({});
