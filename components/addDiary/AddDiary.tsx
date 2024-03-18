import {
  Alert,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import Colors from "@/constants/Colors";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

export default function AddDiary() {
  const [imageResult, setImageResult] =
    useState<ImagePicker.ImagePickerResult | null>(null);

  const { width } = Dimensions.get("window");

  async function getImage() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.8,
      base64: true,
    });

    if (!result.canceled) {
      setImageResult(result);
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          {
            width: width - 40,
            height: width - 40,
          },
          styles.imageBox,
        ]}
        onPress={getImage}
      >
        {!imageResult ? (
          <View style={styles.noImage}>
            <FontAwesome name="plus" color={Colors.white} size={36} />
          </View>
        ) : (
          <View style={styles.image}>
            <Image
              source={{ uri: imageResult.assets![0].uri }}
              width={width - 40}
              height={width - 40}
              style={{ objectFit: "cover" }}
            />
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBox: {
    borderRadius: 20,
    overflow: "hidden",
  },
  noImage: {
    flex: 1,
    backgroundColor: Colors.gray,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "pink",
  },
});
