pipeline {
    agent any
   
    tools {
        nodejs 'node-js' // Matches the name you configured in Global Tools
    }
   stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/drvasavib/Nodejs.git'
            }
        }
    stages {
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
       
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
       
        stage('Build') {
            steps {
                sh 'node server.js' // If you have a build script
            }
        }
    }
}
