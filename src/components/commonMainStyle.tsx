import { I18nManager, StyleSheet } from "react-native";



const { isRTL } = I18nManager;


export const commonMainStyles = StyleSheet.create({

    rowBox: {
        flexDirection: "row",
        alignItems: "center",
    },
   

});


export const dir = isRTL ? "left" : "right";
