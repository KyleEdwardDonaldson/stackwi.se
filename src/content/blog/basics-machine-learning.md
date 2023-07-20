---
draft: false
title: "Demystifying Machine Learning: Exploring Key Concepts and the Role of Data and Algorithms"
snippet: "Machine Learning (ML) is the use and development of computer systems that are able to learn and adapt. They use algorithms and statistical models to analyse patterns in data and then draw inferences from that analysis."
image: {
    src: "./src/assets/blog/basics-machine-learning.png",
    alt: "neural networks"
}
publishDate: "2023-07-19 20:03"
category: "machine learning"
author: "Kyle Edward Donaldson"
tags: [machine learning, artificial intelligence, data analysis, predictive modeling, algorithms, data science, supervised learning, unsupervised learning, reinforcement learning, deep learning, neural networks, data mining, pattern recognition, model training, model evaluation, data preprocessing, feature engineering, data visualization, python, r programming, statistical modeling, big data, natural language processing]
---

Machine Learning (ML) is the use and development of computer systems that are able to learn and adapt. They use algorithms and statistical models to analyse patterns in data and then draw inferences from that analysis.

There are a variety of programming languages that you can use in machine learning such as Scala, R, JavaScript, Golang and more. However, the one most typically used by the giants in the software world, like Netflix, YouTube, Uber, Google, etc, is Python. Python is easy to learn, highly readable and it has an extensive collection of libraries and packages.

### Key Concepts in ML
- **Training**: ML models are trained by large amounts of data and results, allowing them to learn and recognise patterns within that data.
- **Generalisation**: The end-goal of machine learning is to create models that can generalise well to new, unseen data. Generalisation refers to the ability of a trained model to accurately predict or classify instances it has not encountered before. An example of this would be <a target="_blank" href="https://kedonaldson.com/blog/sleeping-giant/#predicting-solar-storms-with-ai">FDL’s DAGGER model</a>, which is trained to predict solar flares and storms.
- **Prediction and Inference**: Once a model is trained, they’re able to make predictions or inferences based on the patterns they have learned from the training data. As time goes on, the model can be trained on new data and improve in accuracy over time.
- **Model Evaluation**: Reviewing the performance and effectiveness of a model is highly important. One must consider a variety of metrics such as accuracy, precision, recall and F1 score (a combination of precision and recall scores) when evaluating a model’s predictive capabilities.
- **Overfitting and Underfitting**: Overfitting occurs when a model performs well on training data but fails to generalise to new data. Underfitting, however, is when a model is too simple and fails to capture the underlying patterns in a dataset.

### Data and Algorithms in Machine Learning
The two pillars of Machine Learning are data and algorithms. Data is the fuel that powers machine learning, hence why Statistical and Data Engineers are often involved in the development. It serves as the foundation for training and evaluating models. The quality, amount and diversity of datasets has a significant impact on the performance of ML models.

Algorithms provide the computational framework for learning patterns and making predictions. Often different algorithms are suited for different types of problems and data.

- **Data**: 
- - **Training Data**: ML algorithms learn from labelled or unlabeled training data. Labelled data contains samples of input paired with the matching output/target values, allowing the model to learn by comparing the preceding patterns to the actual results. Unlabeled data is used in unsupervised learning to discover patterns or structures within data.
- - **Feature Engineering**: This is the process of selecting, transforming and creating relevant features from raw data - to ensure greater performance and accuracy by your model when processing the data.
- - **Data Quality and Bias**: It is crucial that only quality data is selected for training models. Biased or unrepresentative data can lead to biased models, which can produce unfair or inaccurate predictions. Techniques to clean the data and minimise the possibility of bias are used to avoid such issues.
- **Algorithms**:
- - **Supervised Learning Algorithms**: These algorithms learn from labelled training data and make predictions based on the relationships learned during training. Some examples of this are decision trees, support vector machines and linear regression.
- - **Unsupervised Learning Algorithms**: These algorithms analyse unlabelled data to  discover patterns, structures, or groupings within the data. Clustering algorithms, dimensionality reduction techniques, and association rule learning are common examples.
- - **Reinforcement Learning Algorithms**: These algorithms learn by interacting with an environment and receiving feedback in the form of rewards or punishments. They aim to maximise long term rewards through trial and error. Q-learning and policy gradients are common reinforcement learning techniques.
- - **Deep Learning Algorithms**: Deep learning algorithms, based on neural networks, have gained significant popularity in recent years. They are capable of automatically learning hierarchical representations from complex data, enabling powerful pattern recognition and feature extraction. Convolutional Neural Networks (CNNs) and Recurrent Neural Networks (RNNs) are widely used deep learning architectures. An example of usage of this algorithm would be <a target="_blank" href="https://kedonaldson.com/blog/sleeping-giant/#predicting-solar-storms-with-ai">FDL’s DAGGER model</a>.