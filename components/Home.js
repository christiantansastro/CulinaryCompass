import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import React from "react";
import Category from "../components/Category";
import size from "../config/size";

const { height, width } = Dimensions.get("window");

const Home = () => {
  return (
    <View>
      <ScrollView scrollEventThrottle={16}>
        <View style={{ flex: 1, backgroundColor: "white", paddingTop: 20 }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "700",
              paddingHorizontal: 20,
            }}
          >
            Hello username!
          </Text>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "700",
              paddingHorizontal: 20,
            }}
          >
            Looking for new recipes?
          </Text>

          <View style={{ height: 180, marginTop: 20 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <TouchableOpacity>
                <Category
                  imageUri={require("../images/vegan_burrito.jpg")}
                  name="Vegan Burrito"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Category
                  imageUri={require("../images/salad.jpg")}
                  name="Kale & Quinoa Salad"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Category
                  imageUri={require("../images/cajun.jpg")}
                  name="Cajun Chicken Pasta"
                />
              </TouchableOpacity>
            </ScrollView>
          </View>
          <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: "700" }}>
              Trending Recipe
            </Text>
            <Text style={{ fontWeight: "400", marginTop: 10 }}>
              Try out a new recipe recommended by the community
            </Text>
            <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
              <TouchableOpacity style={{ height: "85%" }}>
                <Image
                  style={{
                    flex: 1,
                    height: null,
                    width: null,
                    resizeMode: "cover",
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: "#dddddd",
                  }}
                  source={require("../images/noodles.jpg")}
                />
              </TouchableOpacity>
              <Text
                style={{
                  fontWeight: "700",
                  fontSize: size.medium_1,
                  marginTop: 5,
                }}
              >
                Garlic Chilli Oil Noodles{" "}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
