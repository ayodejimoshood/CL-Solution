import React from "react";
import { View, StyleSheet, ActivityIndicator, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Card, Image, Text } from "react-native-elements";
import { DEFAULT_IMAGE } from "../utils/constants";
import { image } from "../images/adidas-nft-voguebus-adidas-nft-dec-21-story.jpg";
import colors from "../utils/colors";
import AppButton from "./AppButton";

const NewsCard = ({ data }) => {
  const dispatch = useDispatch();

  const navigation = useNavigation();
  const navigate = () => {
    navigation.navigate("news", { id: data.id });
  };

  const deleteNews = () => {
    dispatch.news.deleteNewsAsync(data.id);
  };

  return (
    <Pressable onPress={navigate}>
      <Card containerStyle={styles.card}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              // source={{
              //   uri: data?.images ? data?.images[0].uri : DEFAULT_IMAGE,
              // }}
              source={require('../images/adidas-nft-voguebus-adidas-nft-dec-21-story.jpg')}
              resizeMode="cover"
              PlaceholderContent={<ActivityIndicator />}
            />
          </View>
          <View style={styles.cardPreview}>
            <Text
              // numberOfLines={1}
              h4
              h4Style={{ fontSize: 13, fontWeight: '500', color: colors.red }}
            >
              {data.title}
            </Text>
            <View style={styles.authorView}>
              <Text
                h4
                // numberOfLines={1}
                h4Style={{ fontSize: 13, fontWeight: '500' }}>
                Author: <Text> {data.author} </Text>
              </Text>
            </View>
            <View>
              <Text numberOfLines={3} style={{fontSize: 12}}>{data.body}</Text>
            </View>
            <View style={styles.btnView}>
              
              <AppButton
                title="Edit"
                buttonStyle={styles.btnEdit}
                textStyle={{ color: colors.primary, fontSize: 12, fontWeight: '500' }}
                onPress={() =>
                  navigation.navigate("newNews", {
                    data,
                    headerTitle: "Edit News",
                  })
                }
              />
              <AppButton
                title="Delete"
                buttonStyle={styles.btnDelete}
                textStyle={{ color: colors.red, fontSize: 12, fontWeight: '500' }}
                onPress={deleteNews}
              />
            </View>
          </View>
        </View>
      </Card>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 0,
    borderRadius: 10,
    borderWidth: 0,
    borderColor: 'white'
  },
  container: {
    flex: 1,
    width: "100%",
    borderWidth: 0,
    flexDirection: "row",
    // backgroundColor: colors.white,
    // paddingHorizontal: 20,
    // justifyContent: "space-between",
    // paddingVertical: 10,
    // marginBottom: 20,
    // elevation: 5,
  },
  imageContainer: {
    width: "35%",
  },
  image: {
    height: 128,
    width: 90,
    borderRadius: 10
  },
  authorView: {
    marginVertical: 4,
  },
  cardPreview: {
    flex: 1,
    marginLeft: -3,
  },
  btnView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    // justifyContent: "space-between",
  },
  btnDelete: {
    flex: 1,
    minWidth: 100,
    backgroundColor: "#ffa6a6",
    borderRadius: 50,
    // marginRight: 5,
  },
  btnEdit: {
    flex: 1,
    minWidth: 100,
    backgroundColor: "#a6cee8",
    borderRadius: 50,
    marginRight: 5,
  },
});
export default NewsCard;
