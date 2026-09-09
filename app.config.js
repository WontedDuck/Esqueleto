export default {
  expo: {
    name: process.env.EXPO_PUBLIC_APP_NAME || "Esqueleto Hackathon",
    slug: "esqueleto",
    scheme: "esqueleto",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/logo.png",
    userInterfaceStyle: "automatic",
    splash: {
      image: "./assets/logo.png",
      resizeMode: "contain",
      backgroundColor: "#12140A"
    },
    ios: {
      supportsTablet: true
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/logo.png",
        backgroundColor: "#12140A"
      }
    },
    web: {
      favicon: "./assets/logo.png"
    },
    plugins: [
      "expo-router",
      "expo-secure-store"
    ]
  }
};