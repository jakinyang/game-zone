import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontFamily: 'firacode-bold',
    fontSize: 18,
    color: 'lightslategray',
  },
  paragraph: {
    fontFamily: 'firacode-regular',
    color: 'lightslategray',
    marginVertical: 8,
    lineHeight: 20,
  },
  header: {
    backgroundColor: 'coral',
    // fontFamily: 'firacode-bold',
    // color: 'slategray',
    // padding: 5,
  },
})