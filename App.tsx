import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';

export default function App(): JSX.Element {

  // the function takes one argument named rating.
  const ratingCompleted = (rating) => {
    console.log("Rating is: " + rating);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Airbnb Rating</Text>
      <AirbnbRating />

      <Text style={styles.title}>Custom Rating</Text>
      <AirbnbRating
        count={11}
        reviews={["Terrible", "Bad", "Meh", "OK", "Good", "Hmm...", "Very Good", "Wow", "Amazing", "Unbelievable", "Jesus"]}
        defaultRating={11}
        size={20}
      />

      <Text style={styles.title}>Star Rating</Text>
      <Rating
        showRating
        onFinishRating={ratingCompleted}
        style={{ paddingVertical: 10 }}
      />

      <Text style={styles.title}>Heart Rating</Text>
      <Rating
        type='heart'
        ratingCount={3}
        imageSize={60}
        showRating
        onFinishRating={ratingCompleted}
      />

      <Text style={styles.title}>Custom Image Rating</Text>
      <Rating
        type='custom'
        ratingImage={require('./src/assets/images/water.png')}  // Make sure you have this image in your project
        ratingColor='#3498db'
        ratingBackgroundColor='#c8c7c8'
        ratingCount={10}
        imageSize={30}
        onFinishRating={ratingCompleted}
        style={{ paddingVertical: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  }
});