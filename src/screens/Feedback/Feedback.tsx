import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {useHeaderHeight} from '@react-navigation/elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './Styles'; // You can create a styles file for your components

const Feedback = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [starRating, setStarRating] = useState('');
  const [feedback, setFeedback] = useState('');
  const height = useHeaderHeight();

  const handleSubmit = async () => {
    try {
      // Perform form validation
      if (!name || !email || !starRating) {
        Alert.alert('Name, Email, and Star Rating are required fields.');
        return;
      }

      // Save feedback to local storage
      const feedbackData = {
        name,
        email,
        starRating,
        feedback,
      };

      await AsyncStorage.setItem('feedbackData', JSON.stringify(feedbackData));

      // Display success message using ToastAndroid
      ToastAndroid.showWithGravity(
        'Feedback submitted successfully!',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );

      // Navigate back to the previous screen
      navigation.goBack();
    } catch (error) {
      console.error('Error submitting feedback:', error);
      // Handle error if needed
    }
  };

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={Platform.OS === 'ios' ? height + 37 : 0}
      behavior={Platform.OS === 'ios' ? 'padding' : ''}
      enabled
      style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Name *</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={text => setName(text)}
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Email *</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={text => setEmail(text)}
              keyboardType="email-address"
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Star Rating *</Text>
            <TextInput
              style={styles.input}
              value={starRating}
              onChangeText={text => setStarRating(text)}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Feedback</Text>
            <TextInput
              style={styles.feedbackField}
              value={feedback}
              onChangeText={text => setFeedback(text)}
              multiline
            />
          </View>
        </View>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit Feedback</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Feedback;
