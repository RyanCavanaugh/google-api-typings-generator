// Type definitions for Google Prediction API v1.4
// Project: https://developers.google.com/prediction/docs/developer-guide
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.prediction.v1_4 {
    
    interface Input {
        // Input to the model for a prediction
        input?: {        
            // A list of input features, these can be strings or doubles.
            csvInstance?: any[],            
        },        
    }
    
    interface Output {
        // The unique name for the predictive model.
        id?: string,
        // What kind of resource this is.
        kind?: string,
        // The most likely class label [Categorical models only].
        outputLabel?: string,
        // A list of class labels with their estimated probabilities [Categorical models only].
        outputMulti?: {        
            // The class label.
            label?: string,
            // The probability of the class label.
            score?: number,
        }[],        
        // The estimated regression value [Regression models only].
        outputValue?: number,
        // A URL to re-request this resource.
        selfLink?: string,
    }
    
    interface Training {
        // Data Analysis.
        dataAnalysis?: {        
            // 
            warnings?: string[],            
        },        
        // The unique name for the predictive model.
        id?: string,
        // What kind of resource this is.
        kind?: string,
        // Model metadata.
        modelInfo?: {        
            // Estimated accuracy of model taking utility weights into account [Categorical models only].
            classWeightedAccuracy?: number,
            // A number between 0.0 and 1.0, where 1.0 is 100% accurate. This is an estimate, based on the amount and quality of the training data, of the estimated prediction accuracy. You can use this is a guide to decide whether the results are accurate enough for your needs. This estimate will be more reliable if your real input data is similar to your training data [Categorical models only].
            classificationAccuracy?: number,
            // An output confusion matrix. This shows an estimate for how this model will do in predictions. This is first indexed by the true class label. For each true class label, this provides a pair {predicted_label, count}, where count is the estimated number of times the model will predict the predicted label given the true label. Will not output if more then 100 classes [Categorical models only].
            confusionMatrix?: any,
            // A list of the confusion matrix row totals
            confusionMatrixRowTotals?: any,
            // An estimated mean squared error. The can be used to measure the quality of the predicted model [Regression models only].
            meanSquaredError?: number,
            // Type of predictive model (CLASSIFICATION or REGRESSION)
            modelType?: string,
            // Number of valid data instances used in the trained model.
            numberInstances?: string,
            // Number of class labels in the trained model [Categorical models only].
            numberLabels?: string,
        },        
        // A URL to re-request this resource.
        selfLink?: string,
        // Google storage location of the training data file.
        storageDataLocation?: string,
        // Google storage location of the preprocessing pmml file.
        storagePMMLLocation?: string,
        // Google storage location of the pmml model file.
        storagePMMLModelLocation?: string,
        // The current status of the training job. This can be one of following: RUNNING; DONE; ERROR; ERROR: TRAINING JOB NOT FOUND
        trainingStatus?: string,
        // A class weighting function, which allows the importance weights for class labels to be specified [Categorical models only].
        utility?: any[],        
    }
    
    interface Update {
        // The input features for this instance
        csvInstance?: any[],        
        // The class label of this instance
        label?: string,
        // The generic output value - could be regression value or class label
        output?: string,
    }
    
    interface HostedmodelsResource {
        // Submit input and request an output against a hosted model.
        predict (request: {        
            // The name of a hosted model.
            hostedModelName: string,
        }) : gapi.client.Request<Output>;        
        
    }
    
    
    interface TrainedmodelsResource {
        // Delete a trained model.
        delete (request: {        
            // The unique name for the predictive model.
            id: string,
        }) : gapi.client.Request<void>;        
        
        // Check training status of your model.
        get (request: {        
            // The unique name for the predictive model.
            id: string,
        }) : gapi.client.Request<Training>;        
        
        // Begin training your model.
        insert (request: {        
        }) : gapi.client.Request<Training>;        
        
        // Submit model id and request a prediction
        predict (request: {        
            // The unique name for the predictive model.
            id: string,
        }) : gapi.client.Request<Output>;        
        
        // Add new data to a trained model.
        update (request: {        
            // The unique name for the predictive model.
            id: string,
        }) : gapi.client.Request<Training>;        
        
    }
    
}

declare module gapi.client.prediction {
    var hostedmodels: gapi.client.prediction.v1_4.HostedmodelsResource; 
    
    var trainedmodels: gapi.client.prediction.v1_4.TrainedmodelsResource; 
    
}