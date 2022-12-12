gcloud builds submit --tag gcr.io/cse477-spring-2022-337906/homework


gcloud run deploy --image gcr.io/cse477-spring-2022-337906/homework --platform managed
