pipeline {
    agent any
    stages {
        stage('Clone repository') {
            steps {
                git 'https://github.com/Koshiz/PUSL3120-frontend.git'
            }
        }
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Start server') {
            steps {
                sh 'npm start'
            }
        }
    }
}
