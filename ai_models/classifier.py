from sklearn.cluster import KMeans
import pandas as pd
import joblib

# Sample data: [video_time, audio_time, reading_time]
data = pd.DataFrame([
    [30, 10, 5],
    [5, 40, 10],
    [10, 5, 45]
])

kmeans = KMeans(n_clusters=3)
kmeans.fit(data)

# Save model
joblib.dump(kmeans, 'learning_style_model.pkl')

# Predict new student
def predict_style(video, audio, reading):
    model = joblib.load('learning_style_model.pkl')
    prediction = model.predict([[video, audio, reading]])
    styles = ['video', 'audio', 'reading']
    return styles[prediction[0]]